
# ProfSpector

ProfSpector is a web application designed to help students find and rate professors using AI-driven recommendations. The application leverages modern web technologies and integrates with various APIs to provide a seamless and intelligent user experience.

## Features

### Admin Panel
- **Add Professors:** Easily add new professor details to the system, which automatically updates the Pinecone vector database for accurate and up-to-date AI recommendations.

### User Features
- **Give Feedback:** Students can provide feedback and rate professors, contributing to a growing database of reviews that help other students.
- **Search Within Specific Schools:** Users can choose a specific school and search for professors within that school, ensuring tailored and relevant results.
- **AI-Powered Recommendations:** Receive personalized professor recommendations based on your preferences and academic goals.

### Authentication
- **Clerk Integration:** Secure and seamless authentication using Clerk, ensuring that user data is protected and interactions are personalized.

### Additional Features
- **RAG Integration:** The system uses Retrieval-Augmented Generation (RAG) to enhance the AI-driven recommendation process, ensuring that responses are both contextually relevant and informative.
- **Responsive Design:** Accessible on both desktop and mobile devices.
- **Integration with Pinecone & OpenAI:** Advanced vector search and AI-driven responses ensure relevant and accurate recommendations.

## Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/AI-RateMyProfessor.git
   \`\`\`
2. **Navigate to the project directory:**
   \`\`\`bash
   cd AI-RateMyProfessor
   \`\`\`
3. **Install the dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

## Usage

1. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
2. **Open your browser and navigate to:**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Technologies Used

- **Frontend:** React, Next.js, MUI, CSS
- **Backend:** Node.js, Express.js
- **Database:** Pinecone
- **Authentication:** Clerk
- **AI Integration:** OpenAI, Pinecone
- **Deployment:** Vercel, AWS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
