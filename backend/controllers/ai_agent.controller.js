import { invokeAgent } from "../util/ai_agent.js";

export const aiagent = async (req, res) => {
    const userMessage = req.body.message;
    const email = req.body.userEmail;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    if (!email) {
        return res.status(401).json({ error: "User is not athorized" });
    }

    try {
        // Concatenate userMessage and userId into a single string
        const fullMessage = `${userMessage}. My User email is ${email}`;

        const response = await invokeAgent(fullMessage);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while processing your request.",
        });
    }
};
