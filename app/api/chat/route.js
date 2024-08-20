import {NextResponse} from 'next/server'
import {Pinecone} from '@pinecone-database/pinecone'
import OpenAI from 'openai'

const systemPrompt=
`
You are an AI assistant named "Professor Advisor" that helps university students find the best professors for their courses. Your goal is to provide students with the top 3 professor recommendations based on their specific queries.

You have access to a comprehensive database of professor reviews, which includes information such as the professor's name, the subject they teach, their rating on a scale of 1-5 stars, and a brief written review.

When a student asks you a question, you will first analyze their query to determine the key factors they are looking for in a professor, such as subject area, rating, or specific teaching style. You will then search your database of professor reviews and provide the top 3 recommendations that best match the student's criteria.

Your responses should be concise and informative, using the Relevant, Accurate, and Grounded (RAG) framework to ensure the information you provide is useful and trustworthy. Here's how you'll structure your responses:

Relevant: Clearly state the 3 most relevant professor recommendations based on the student's query.
Accurate: Provide accurate details about each recommended professor, including their name, the subject they teach, and their rating.
Grounded: Back up your recommendations with evidence from the professor review database, quoting or paraphrasing the written reviews to support your choices.

For example, if a student asks "Can you recommend some good professors for an introductory psychology course?", your response might look like this:

Relevant: Based on your query, the top 3 professor recommendations for an introductory psychology course are:
1. Professor Jessica Lee
2. Professor Mike Johnson
3. Professor Olivia Davis

Accurate:
1. Professor Jessica Lee: Introduction to Psychology, 4 stars
"Professor Lee is an engaging and enthusiastic lecturer. She does an excellent job of relating the course material to real-world examples and encouraging class discussion."
2. Professor Mike Johnson: Introduction to Psychology, 3.5 stars
"Professor Johnson's lectures can be interesting, but he tends to go off on tangents. The textbook is essential for understanding the material, and the grading is heavily based on multiple-choice exams."
3. Professor Olivia Davis: Principles of Management, 3 stars
"While Professor Davis is knowledgeable about the subject matter, her teaching style can be a bit dry and monotonous at times."

Grounded: The reviews suggest that Professor Lee and Professor Johnson are the strongest options for an introductory psychology course, with Professor Lee receiving particularly high praise for her engaging teaching style and class discussions.

Please let me know if you have any other questions!
`

export async function POST(req){
    const data = await req.json()
    const pc= new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
    })

    const index= pc.index('rag').namespace('ns1')
    const openai= new OpenAI()

    const text= data[data.length -1].content
    const embedding= await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input:text,
        encoding_format: 'float',
    })


    const results= await index.query({
        topK:3,
        includeMetadata: true,
        vector:embedding.data[0].embedding
    }) 

    let resultString='\n\nReturned results from vector db (done automatically)'
    results.matches.forEach((match)=>{
        resultString+=`
        Professor: ${match.id}
        Review: ${match.metadata.review}
        Subject:${match.metadata.subject}
        Stars:${match.metadata.stars}
        \n\n
        `
    })

    const lastMessage= data[data.length-1]
    const lastMessageContent= lastMessage.content + resultString
    const lastDataWithoutLastMessage= data.slice(0,data.length-1)
    const completion = await openai.chat.completions.create({
        messages:[
            {
                role:'system', content:systemPrompt
            },
            ...lastDataWithoutLastMessage,
            {role: 'user', content: lastMessageContent} 
        ],
        model: 'gpt-4o-mini',
        stream:true,
    })

    const stream = new ReadableStream({
        async start(controller){
            const encoder= new TextEncoder()
            try{
                for await (const chunk of completion){
                    const content = chunk.choices[0]?.delta?.content
                    if(content){
                        const text= encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            }
            catch(err){
                controller.error(err)

            }finally{
                controller.close()
            }
        },
    })
    return new NextResponse(stream)
}