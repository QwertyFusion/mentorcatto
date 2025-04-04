import LeftNavbar from "../components/LeftNavbar";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useAiAgentStore } from "../store/aiAgentStore";
import IconStore from "../components/IconStore";
import { Loader2 } from "lucide-react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import funnyLoadingTexts from "../store/funnyLoadingTexts";

const ChatPage = () => {
    const { user } = useAuthStore();
    const { sendMessage, response, isLoading } = useAiAgentStore();
    const responseRef = useRef(null);

    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("chatMessages");
        if (savedMessages) {
            return JSON.parse(savedMessages);
        }
        return [
            {
                text: user.preferredLanguage
                    ? `Hello **${user.name}**! How can I help you today?`
                    : `Welcome to our platform, **${user.name}**! \n\nPlease set your \`preferred language\`. Once done, then you can access the platform!`,
                sender: "agent",
            },
        ];
    });

    const [input, setInput] = useState("");
    const [loadingText, setLoadingText] = useState(
        funnyLoadingTexts[Math.floor(Math.random() * funnyLoadingTexts.length)]
    );

    const chatContainerRef = useRef(null);

    // Handle AI responses
    useEffect(() => {
        if (response && response !== responseRef.current) {
            responseRef.current = response;
            try {
                const data = JSON.parse(response.response);
                const aiMessages = data.response.filter(
                    (item) => item.id[item.id.length - 1] === "AIMessage"
                );

                if (aiMessages.length > 0) {
                    const lastMessage = aiMessages[aiMessages.length - 1];
                    let messageText = "";

                    // Check if the content is an array
                    if (
                        lastMessage.kwargs.content &&
                        Array.isArray(lastMessage.kwargs.content)
                    ) {
                        // Extract text from the structured content
                        messageText = lastMessage.kwargs.content
                            .map((part) => part.text)
                            .join("");
                    } else if (
                        lastMessage.kwargs.content &&
                        typeof lastMessage.kwargs.content === "string"
                    ) {
                        // If it's a single string, use it directly
                        messageText = lastMessage.kwargs.content;
                    }

                    if (messageText) {
                        const newMessage = {
                            text: messageText,
                            sender: "agent",
                        };

                        setMessages((prev) => {
                            // Check if this exact message already exists
                            const isDuplicate = prev.some(
                                (msg) =>
                                    msg.text === newMessage.text &&
                                    msg.sender === newMessage.sender
                            );
                            return isDuplicate ? prev : [...prev, newMessage];
                        });
                    }
                }
            } catch (error) {
                console.error("Error processing AI response:", error);
            }
        }
    }, [response]);

    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        setLoadingText(
            funnyLoadingTexts[
                Math.floor(Math.random() * funnyLoadingTexts.length)
            ]
        );

        const userMessage = {
            text: input,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMessage]);

        let messageToSend = input;
        if (!user.preferredLanguage) {
            messageToSend = `I want you to set my preferred language. If the following text does not contain my preferred language, then please reply with an accurate reply. Only allow replies like setting preferred language. If I write one word with language name, set it, if I write incorrect, then don't and say it. However, I can ask stuff like what is a good preferred language and all. Tell me to reload the window after the language is set. The user cannot go to any other window before setting preferred language. If they have set preferred language and still they cannot go, then they should reload the window. Below is my reply: ${input}`;
        }

        setInput("");
        try {
            await sendMessage(messageToSend);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    // Save messages to localStorage
    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
    }, [messages]);

    // Clear messages on refresh
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem("chatMessages");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () =>
            window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 p-4 bg-accent-4 inner-shadow rounded-ten overflow-hidden flex flex-col items-center"
                >
                    <h2 className="text-3xl font-bold mb-1 mt-4 text-center text-white no-select">
                        Talk to{" "}
                        <span className="text-primary">MentorCatto</span>'s
                        Personal <span className="text-primary">AI Agent</span>
                    </h2>
                    <p className="text-lg mb-6 font-semibold text-center text-tertiary no-select">
                        Ask doubts, modifications, and much more from mentor
                    </p>

                    {/* Chat messages container */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto w-5xl p-4 space-y-3"
                    >
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`py-2 px-3 rounded-ten max-w-lg w-fit break-words drop-shadow-custom ${
                                    msg.sender === "user"
                                        ? "bg-accent-1 text-primary self-end ml-auto rounded-br-none"
                                        : "bg-accent-1 text-white self-start rounded-bl-none"
                                }`}
                            >
                                <MarkdownRenderer content={msg.text} />
                            </motion.div>
                        ))}
                    </div>

                    {/* AI thinking indicator */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="absolute bottom-25 left-1/2 bg-accent-3 w-fit p-2 rounded-ten flex flex-row items-center justify-center drop-shadow-custom"
                        >
                            <Loader2 className="animate-spin w-4 h-4 text-primary mr-2" />
                            <p className="text-sm text-gray-400">
                                {loadingText}
                            </p>
                        </motion.div>
                    )}

                    {/* Chat input bar */}
                    <div className="flex items-center mt-4 p-1 w-5xl bg-accent-1 rounded-ten border-2 border-tertiary drop-shadow-custom focus-within:border-primary transition duration-200">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" &&
                                !isLoading &&
                                handleSendMessage()
                            }
                            className="flex-1 bg-transparent outline-none p-2 text-white placeholder-gray-400 no-select"
                            placeholder="Type a message..."
                            disabled={isLoading} // Disable input when loading
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSendMessage}
                            className={`ml-2 p-3 bg-primary cursor-pointer text-white drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 ${
                                isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={isLoading} // Disable button when loading
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin w-5 h-5 text-accent-3" />
                            ) : (
                                <IconStore
                                    name="send"
                                    className="w-5 h-5"
                                    color="accent-3"
                                />
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ChatPage;
