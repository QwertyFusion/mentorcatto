import { invokeAgent } from "../util/ai_agent.js";

export const aiagent = async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const response = await invokeAgent(userMessage);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while processing your request.",
        });
    }
};
