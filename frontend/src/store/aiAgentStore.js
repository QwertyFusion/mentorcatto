import { create } from "zustand";
import axios from "axios";

const API_URL =
    import.meta.env.MODE === "development"
        ? "http://localhost:3000/api/ai"
        : "/api/ai";

axios.defaults.withCredentials = true;

export const useAiAgentStore = create((set) => ({
    error: null,
    isLoading: false,
    message: null,
    response: null,
    sendMessage: async (userMessage) => {
        set({ isLoading: true, error: null });
        try {
            const res = await axios.post(`${API_URL}/ai-agent`, {
                message: userMessage,
            });
            console.log(`AI Agent Store: ${res.data}`);
            set({ response: res.data, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));
