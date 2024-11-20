import { Pinecone } from '@pinecone-database/pinecone';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// Initialize Pinecone client
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("feedback"); // Connect to your feedback index

// Initialize OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
    try {
        // Parse incoming data (assuming it's in JSON format)
        const feedbackData = await req.json();

        // Extract fields from the incoming request
        const { school, professor, feedback, rating } = feedbackData;

        // Validate required fields
        if (!school || !professor || !feedback || !rating) {
            throw new Error("Missing required fields: school, professor, feedback, or rating");
        }

        // Generate an embedding for the feedback using OpenAI
        const response = await client.embeddings.create({
            input: feedback,
            model: "text-embedding-ada-002", // Adjust to the correct embedding model
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
