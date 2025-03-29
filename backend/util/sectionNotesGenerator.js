import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateSectionNotes = async (
    referenceNote,
    topic,
    additionalInstructions
) => {
    if (!topic) {
        throw new Error("Topic is required to generate notes.");
    }

    // Use reference note only if it's relevant to the topic
    let useReference =
        referenceNote && referenceNote.includes(topic) ? referenceNote : null;

    // Extract word limit if mentioned in additional instructions
    const wordLimitMatch = additionalInstructions?.match(/\b(\d+)\s*words?\b/i);
    const wordLimit = wordLimitMatch ? parseInt(wordLimitMatch[1]) : null;

    // Prepare AI prompt
    const prompt = `You are a professional educator creating **highly concise, exam-focused revision notes** for a DSA learning platform.  
    Generate **only the key points** on **"${topic}"** in a **flashcard/revision style**.  

    ${
        useReference
            ? `Here is an existing reference note that may help (only use this if it is directly relevant):  
    """  
    ${useReference}  
    """  
    If this reference is unrelated or outdated, ignore it and generate fresh content.`
            : `No reference note available. Generate fresh content.`
    }

    ### **Guidelines:**
    - **Only include necessary information** (no long explanations).  
    - **Strictly follow user instructions** (only generate what is asked for).  
    - Use **short, direct, and high-impact points** (ideal for last-minute revision).  
    - **Markdown formatting** should enhance readability (bullet points, bold, italics, code blocks).  
    - Avoid redundant introductions or conclusions.  

    ${
        wordLimit
            ? `### **Word Limit:**  
    - The note should be approximately **${wordLimit} words** (stay within ±10% of this limit).`
            : ``
    }

    **Additional User Instructions:** ${additionalInstructions || "None"}  

    **Generate content directly without unnecessary explanations.**  
    `;

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate content using the model
    const result = await model.generateContent(prompt);

    // Extract and return the generated content
    return result.response.text();
};
