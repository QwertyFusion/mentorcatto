import LeftNavbar from "../components/LeftNavbar";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";

const ChatPage = () => {
  const { user } = useAuthStore();
  const [messages, setMessages] = useState([
    { text: `Hello ${user.name}! How can I help you today?`, sender: "agent" },
  ]);
  const [input, setInput] = useState("");

  const chatContainerRef = useRef(null); // Reference for the chat container

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput(""); // Clear input
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
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
          <h2 className="text-3xl font-bold mb-1 mt-4 text-center text-white">
            Talk to <span className="text-primary">MentorCatto</span>'s Personal <span className="text-primary">AI Agent</span>
          </h2>
          <p className="text-lg mb-6 font-semibold text-center text-tertiary">
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
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Chat input bar */}
          <div className="flex items-center mt-4 p-1 w-5xl bg-accent-1 rounded-ten border-2 border-tertiary drop-shadow-custom">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-transparent outline-none p-2 text-white placeholder-gray-400"
              placeholder="Type a message..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="ml-2 p-3 bg-primary text-white drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            >
              <img className="w-5 h-5" alt="Send button" src="sent.svg" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;
