import { NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone'
import OpenAI from 'openai'

const systemPrompt = `
You are an AI-driven professor recommendation assistant. Your job is to provide accurate and relevant information about professors based on user queries. Always ensure to:

1. **Provide Only Relevant Information:** Respond only with information directly related to the user's question. Avoid including irrelevant details.
   
2. **Accuracy and Relevance:** Use the information available in the database to provide the most accurate and relevant response. If the information requested by the user is not available, ask them to refine their query or provide more details.

3. **Comparison and Ranking:** If the user asks for the top professors or a comparison between professors, use the provided metadata fields such as teaching experience, research interests, awards, and scholarly activities to rank and compare the professors. Return the top-ranked professors based on these criteria.

4. **School Selection and Professor Validation:**
   - First, check which school has been selected by the user among the following options: 
     - School of Computer Science
     - School of Law
     - School of Liberal Studies
     - School of Design
     - School of Business
     - School of Advanced Engineering
     - School of Health Science
   - Then, search for the professor in that particular department only.
   - If the professor exists in the selected department, respond to the user's query with the relevant information.
   - If the professor does not belong to the selected school, inform the user that this professor does not belong to the selected school and provide the name of the correct school the professor belongs to, but **do not provide any other information**.
   - If the professor is not found in the selected school, ask the user for more information or suggest they select the correct school.

5. **Data Validation:** If the user's query doesn't match any data in the database, inform them politely and ask for more specific information.

6. **Handle Inappropriate Requests:** If the user's query is inappropriate or cannot be answered based on the available data, ask them to provide a valid query or more information.
`

export async function POST(req) {
    const data = await req.json()
    const pc = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
    })

    const index = pc.index('rag').namespace('ns1')
    const feedbackindex = pc.index('feedback').namespace('ns1')
    const openai = new OpenAI()

    const text = data[data.length - 1].content
    const embedding = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: text,
        encoding_format: 'float',
    })

    const results = await index.query({
        topK: 3,
        includeMetadata: true,
        vector: embedding.data[0].embedding
    })
    const result = await feedbackindex.query({
        topK: 3,
        includeMetadata: true,
        vector: embedding.data[0].embedding
    })

    let resultString = ''
    if (results.matches.length > 0) {
        resultString += '\n\nReturned results from vector db:'
        results.matches.forEach((match) => {
            resultString += `
            {
                "name": "${match.metadata.name}",
                "designation": "${match.metadata.designation}",
                "profile_image": "${match.metadata.profile_image}",
                "department": "${match.metadata.department}",
                "profile_summary": "${match.metadata.profile_summary}",
                "work_experience": "${match.metadata.work_experience}",
                "research_interests": "${match.metadata.research_interests}",
                "teaching_philosophy": "${match.metadata.teaching_philosophy}",
                "courses_taught": "${match.metadata.courses_taught}",
                "awards_and_grants": "${match.metadata.awards_and_grants}",
                "scholarly_activities": "${match.metadata.scholarly_activities}",
                "contact": "${match.metadata.contact}"
            }
            \n\n`
        })
    } else {
        resultString = '\n\nNo matching professors found. Please provide more specific information or check the query.'
    }

    // Append feedback data to the result string
    if (result.matches.length > 0) {
        resultString += '\n\nStudent Feedback:'
        result.matches.forEach((match) => {
            resultString += `
            {
                "professor_name": "${match.metadata.professor_name || 'N/A'}",
                "school": "${match.metadata.school || 'N/A'}",
                "rating": "${match.metadata.rating || 'N/A'}",
                "feedback": "${match.metadata.feedback || 'N/A'}"
            }
            \n\n`
        })
    }

    const lastMessage = data[data.length - 1]
    const lastMessageContent = lastMessage.content + resultString
    const lastDataWithoutLastMessage = data.slice(0, data.length - 1)
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system', content: systemPrompt
            },
            ...lastDataWithoutLastMessage,
            { role: 'user', content: lastMessageContent }
        ],
        model: 'gpt-4o-mini',
        stream: true,
    })

    const stream = new ReadableStream({
        async start(controller) {
            const encoder = new TextEncoder()
            try {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content
                    if (content) {
                        const text = encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            }
            catch (err) {
                controller.error(err)
            } finally {
                controller.close()
            }
        },
    })
    return new NextResponse(stream)
}
