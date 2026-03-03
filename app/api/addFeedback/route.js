import { Pinecone } from '@pinecone-database/pinecone';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { auth } from '@clerk/nextjs/server';
import { rateLimit } from '../../lib/rateLimit';

const feedbackLimiter = rateLimit({ limit: 5, windowMs: 60000 }); // 5 requests per minute

// Initialize Pinecone client
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("feedback"); // Connect to your feedback index

// Initialize OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
    try {
        // Verify user is authenticated
          const { userId } = await auth();
          if (!userId) {
              return new NextResponse(
                  JSON.stringify({ error: "Unauthorized: Please log into submit feedback" }),
                  { status: 401, headers: { 'Content-Type':'application/json' } }
              );
          }
        if (feedbackLimiter(userId)) {
            return new NextResponse(
                JSON.stringify({ error: "Too many requests. Please try again later." }),
                { status: 429, headers: { 'Content-Type': 'application/json' } }
            );
        }
        // Parse incoming data (assuming it's in JSON format)
        const feedbackData = await req.json();

        // Extract fields from the incoming request
        const { school, professor, feedback, rating } = feedbackData;

        // Validate required fields
        if (!school || !professor || !feedback || rating == null || rating === '') {
            return new NextResponse(
                JSON.stringify({ error: "Missing required fields: school, professor, feedback, or rating" }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Generate an embedding for the feedback using OpenAI
        const response = await client.embeddings.create({
            input: feedback,
            model: "text-embedding-3-small", // Adjust to the correct embedding model
        });

        // Extract the embedding from the OpenAI response
        const embedding = response.data[0].embedding;

        // Prepare the record to be upserted into Pinecone

        
        const records = [
            {
                id: `${professor}-${Date.now()}`, // Unique ID for feedback record
                values: embedding, // Embedding vector
                metadata: {
                    school,
                    professor,
                    feedback,
                    rating,
                    userId, // Server-verified user ID from Clerk session
                    timestamp: new Date().toISOString(), // Add a timestamp for tracking
                },
            },
        ];

        // Upsert the record into the Pinecone index
        const res = await index.upsert(records);

        // Return a success response
        return new NextResponse(JSON.stringify({ message: "Feedback added successfully", data: res }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error adding feedback:', error);
        return new Response('An error occurred while adding feedback', { status: 500 });
    }
}
