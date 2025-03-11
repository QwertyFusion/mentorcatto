import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IconStore from "./IconStore";

const RightSideBar = () => {
    const { user } = useAuthStore();
    return (
        <div className="bg-accent-1 p-6 text-white h-screen flex flex-col justify-between">
            <div className="flex flex-col">
                <h1 className="text-4xl font-inter mt-2 mb-7">
                    print("
                    <span className="font-bold font-inter text-white">
                        <em>Statistics</em>
                    </span>
                    ")
                </h1>

                {/* Preferred Language */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="bg-accent-1 font-inter p-4 border-1 border-tertiary mt-4 group hover:bg-accent-2"
                >
                    <p className="text-primary text-4xl font-thin">
                        {user.preferredLanguage || "Not Set"}
                    </p>
                    <p className="text-white text-md font-light flex justify-between items-center">
                        Preferred DSA Language
                        <Link to="/settings#preferredlanguage">
                            <IconStore
                                name="settings"
                                className="hidden group-hover:block w-4 h-4 hover:outline-2 outline-offset-3 outline-primary rounded-ten"
                                color="primary"
                            />
                        </Link>
                    </p>
                </motion.div>

                {/* Grid view */}
                <div className="grid grid-cols-2 gap-4 mt-4 font-inter">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-accent-1 p-4 border-1 border-tertiary hover:bg-accent-2"
                    >
                        <p className="text-primary text-4xl font-thin">
                            {user.modulesLearnt || "None"}
                        </p>
                        <p className="text-white text-md font-light">
                            Modules Learnt
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-accent-1 p-4 border-1 border-tertiary hover:bg-accent-2"
                    >
                        <p className="text-primary text-4xl font-thin">
                            {user.averageScore || "None"}
                        </p>
                        <p className="text-white text-md font-light">
                            Average Score
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-accent-1 p-4 border-1 border-tertiary hover:bg-accent-2"
                    >
                        <p className="text-primary text-4xl font-thin">
                            {user.highestScore || "None"}
                        </p>
                        <p className="text-white text-md font-light">
                            Highest Score
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-accent-1 p-4 border-1 border-tertiary hover:bg-accent-2"
                    >
                        <p className="text-primary text-4xl font-thin">
                            {user.badgesEarned || "None"}
                        </p>
                        <p className="text-white text-md font-light">
                            Badges Earned
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom tips */}
            <Link to="/chat">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="bg-accent-1 border-1 border-primary p-3 text-center font-thin hover:bg-accent-4 drop-shadow-custom flex justify-center items-center group"
                >
                    <p className="text-md font-inter font-light no-select">
                        <span className="text-primary hover:underline underline-offset-2">
                            <em>#Tips</em>
                        </span>{" "}
                        from Mentor Catto{" "}
                    </p>
                    <ArrowRight className="inline h-4 w-4 ml-2 group-hover:text-primary group-hover:ml-4 transition-all duration-300 ease-in-out" />
                </motion.div>
            </Link>
        </div>
    );
};

export default RightSideBar;
