const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');
require('dotenv').config({ path: '.env.local' });

// Initialize clients
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('rag').namespace('ns1');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  console.log('Starting bulk upload process...');

  // 1. Read the JSON file
  let rawData;
  try {
    rawData = fs.readFileSync('reviews.json', 'utf-8');
  } catch (error) {
    console.error('Error reading reviews.json:', error.message);
    return;
  }

  const data = JSON.parse(rawData);
  const professors = data.reviews || data; 
  
  if (!Array.isArray(professors)) {
    console.error('Expected an array of professors in the JSON file.');
    return;
  }

  console.log(`Found ${professors.length} professors to process.`);

  // 2. Process in batches to avoid rate limits
  const BATCH_SIZE = 50; 
  let successCount = 0;

  for (let i = 0; i < professors.length; i += BATCH_SIZE) {
    const batch = professors.slice(i, i + BATCH_SIZE);
    console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1} of ${Math.ceil(professors.length / BATCH_SIZE)}...`);

    const records = [];

    // Process each professor in the current batch
    for (const professor of batch) {
      try {
        // Construct the rich searchable text (same logic as our fixed API route)
        const searchableText = [
          professor.name,
          professor.department,
          professor.profile_summary,
          professor.research_interests,
          professor.courses_taught
        ]
          .filter(Boolean)
          .join(' ');

        // Skip if there's no meaningful text to embed
        if (!searchableText.trim()) continue;

        // Generate embedding
        const response = await openai.embeddings.create({
          input: searchableText,
          model: 'text-embedding-3-small',
        });

        const embedding = response.data[0].embedding;

        // Prepare Pinecone record
        records.push({
          id: professor.name || `prof-${Date.now()}-${Math.random()}`,
          values: embedding,
          metadata: {
            name: professor.name || "",
            designation: professor.designation || "",
            profile_image: professor.profile_image || "",
            department: professor.department || "",
            profile_summary: professor.profile_summary || "",
            work_experience: professor.work_experience || "",
            research_interests: professor.research_interests || "",
            teaching_philosophy: professor.teaching_philosophy || "",
            courses_taught: professor.courses_taught || "",
            awards_and_grants: professor.awards_and_grants || "",
            scholarly_activities: professor.scholarly_activities || "",
            contact: professor.contact || ""
          }
        });

      } catch (error) {
        console.error(`Error processing professor ${professor.name}:`, error.message);
      }
    }

    // 3. Upsert the batch to Pinecone
    if (records.length > 0) {
      try {
        await index.upsert(records);
        successCount += records.length;
        console.log(`Successfully upserted ${records.length} records.`);
      } catch (error) {
        console.error('Error upserting batch to Pinecone:', error.message);
      }
    }

    // Add a small delay between batches to respect OpenAI rate limits
    if (i + BATCH_SIZE < professors.length) {
       await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`\nUpload complete! Successfully processed ${successCount} out of ${professors.length} professors.`);
}

main();
