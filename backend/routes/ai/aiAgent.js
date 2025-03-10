import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Test direct API connection
const testGemini = async () => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Test message");
    console.log("Direct API test:", result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Direct API error:", error);
    throw error;
  }
};

// Add this test to your existing route handler
router.post("/ai-agent", async (req, res) => {
  try {
    // First test direct Gemini API
    console.log("Testing direct Gemini API connection...");
    const testResult = await testGemini();
    console.log("Direct API test successful:", testResult);

    // Your existing AI agent code continues here...
    
  } catch (error) {
    console.error("Error in AI agent route:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router; 