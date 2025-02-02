const axios = require("axios");

const GEMINI_API_KEY = "YOUR_API_KEY";

// Mock Data
const userPerformance = {
    userId: "123",
    quizScores: [
        { topic: "Recursion", score: 40 },
        { topic: "Sorting Algorithms", score: 75 },
        { topic: "Dynamic Programming", score: 30 },
    ],
    codeReviews: [
        { topic: "Sorting", complexity: "O(n^2)", feedback: "Consider using Merge Sort instead of Bubble Sort." },
        { topic: "Recursion", error: "Off-by-one mistake in base case." },
    ],
    
};

// System Prompt
const system_prompt = `
You are an AI tutor providing structured feedback on Data Structures & Algorithms (DSA) performance.
Analyze the given user data and generate detailed, constructive feedback.
Use this format:
- Strengths: Identify topics the user performed well in.
- Weak Areas: On the basis of the score that they achieved suggest the areas of improvement that they should work on and the score threshold for all the topics will be less then 50 also if they score just above the threshold value then also say that they still need to improve these topics even further.
- Code Optimization: Identify inefficient code and suggest better approaches.
- Next Steps: Recommend study plans or resources for improvement.
Keep the tone positive and encouraging.
`;

// Feedback Tool function
async function feedbacktool(userPerformance) {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    { role: "user", parts: [{ text: system_prompt }] },
                    { role: "user", parts: [{ text: `Here is the user performance data: ${JSON.stringify(userPerformance)}` }] }
                ]
            }
        );

        console.log("AI Feedback: ", response.data.candidates[0].content.parts[0].text);
    } catch (error) {
        console.error("Error generating feedback: ", error.response ? error.response.data : error.message);
    }
}

feedbacktool(userPerformance);
