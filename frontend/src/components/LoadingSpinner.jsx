import { motion } from "framer-motion";
import funnyLoadingTexts from "../store/funnyLoadingTexts";

const LoadingSpinner = () => {
    const loadingText =
        funnyLoadingTexts[Math.floor(Math.random() * funnyLoadingTexts.length)];
    return (
        <div className="min-h-screen bg-accent-3 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Simple Loading Spinner */}
            <motion.div
                className="w-16 h-16 border-4 border-t-4 border-t-primary border-black rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg text-gray-400 mt-2">{loadingText}</p>
        </div>
    );
};

export default LoadingSpinner;
