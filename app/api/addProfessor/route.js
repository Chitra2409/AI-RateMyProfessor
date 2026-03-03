import { Pinecone } from '@pinecone-database/pinecone';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai'
import { currentUser } from '@clerk/nextjs/server';
import { rateLimit } from '../../lib/rateLimit';

const professorLimiter = rateLimit({ limit: 10, windowMs: 60000 }); // 10 requests per minute

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("rag")
const client = new OpenAI();

export async function POST(req) {

    try {
        // Check if user is authenticated and is an admin
        const user = await currentUser();

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized: User not authenticated' },
                { status: 401 }
            );
        }

        if (professorLimiter(user.id)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Get admin emails from environment variable
        const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || [];
        const userEmail = user.emailAddresses[0]?.emailAddress;

        if (!userEmail || !adminEmails.includes(userEmail)) {
            return NextResponse.json(
                { error: 'Forbidden: Admin access required' },
                { status: 403 }
            );
        }

        // Parse incoming data
        const record = await req.json()

        // Validate required field
        if (!record.name || typeof record.name !== 'string' || !record.name.trim()) {
            return NextResponse.json(
                { error: 'Missing required field: name' },
                { status: 400 }
            );
        }

        // Allowlist: only pick known fields, ignore anything else
        const allowedFields = {
            name: record.name || '',
            designation: record.designation || '',
            profile_image: record.profile_image || '',
            department: record.department || '',
            profile_summary: record.profile_summary || '',
            work_experience: record.work_experience || '',
            research_interests: record.research_interests || '',
            teaching_philosophy: record.teaching_philosophy || '',
            courses_taught: record.courses_taught || '',
            awards_and_grants: record.awards_and_grants || '',
            scholarly_activities: record.scholarly_activities || '',
            contact: record.contact || '',
        };

        // Construct rich searchable text combining key information
        const searchableText = [
            allowedFields.name,
            allowedFields.department,
            allowedFields.profile_summary,
            allowedFields.research_interests,
            allowedFields.courses_taught
        ]
            .filter(Boolean) // Remove empty strings
            .join(' '); // Combine with spaces

        const response = await client.embeddings.create({
            input: searchableText,
            model: "text-embedding-3-small",
        });

        const embedding = response.data[0].embedding;
        const records = [
            {
                id: allowedFields.name,
                values: embedding,
                metadata: allowedFields
            }]
        const res = await index.upsert(records)

        return new NextResponse(res)

    } catch (error) {
        console.error('Error adding record:', error);
        return new Response('An error occurred', { status: 500 });
    }
}
