import { Pinecone } from '@pinecone-database/pinecone';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai'

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("rag")
const client = new OpenAI();

export async function POST(req) {

    try {
        // Parse incoming data (assuming it's in JSON formt)
        const record= await req.json()

        // Construct rich searchable text combining key information
        const searchableText = [
            record.name,
            record.department,
            record.profile_summary,
            record.research_interests,
            record.courses_taught
        ]
            .filter(Boolean) // Remove undefined/null values
            .join(' '); // Combine with spaces

        const response = await client.embeddings.create({
            input: searchableText,
            model: "text-embedding-3-small",
        });

        const embedding = response.data[0].embedding;
        const records = [
            {
                id: record.name,
                values: embedding,
                metadata: {
                    ...record
                }
            }]
        const res = await index.upsert(records)

        return new NextResponse(res)

    } catch (error) {
        console.error('Error adding record:', error);
        return new Response('An error occurred', { status: 500 });
    }
}
