import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const test = async () => {
  try {
    console.log("API Key:", process.env.GEMINI_API_KEY?.substring(0, 10) + "...");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro"
    });
    
    const result = await model.generateContent("Hello World");
    const response = await result.response;
    console.log("Success:", response.text());
  } catch (error) {
    console.error("Error details:", error);
  }
};

test(); 