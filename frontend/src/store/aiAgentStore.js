import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./authStore";

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
        const { user } = useAuthStore.getState(); // Accessing user from useAuthStore
        set({ isLoading: true, error: null });
        try {
            const res = await axios.post(`${API_URL}/ai-agent`, {
                message: userMessage,
                userEmail: user?.email, // Assuming user has an id property
            });
            set({ response: res.data, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));
