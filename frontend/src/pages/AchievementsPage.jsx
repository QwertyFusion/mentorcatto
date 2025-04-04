import React, { useState } from "react";
import Badge from "../components/badge";
import LeftNavbar from "../components/LeftNavbar";
import { motion } from "framer-motion";
import achievements from "../store/AchievementsDataStore";
import IconStore from "../components/IconStore";
import { TriangleAlert } from "lucide-react";

const AchievementsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter achievements based on title OR description
    const filteredAchievements = achievements.filter(
        (achievement) =>
            achievement.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            achievement.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-screen w-full flex item-center">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="w-full h-full flex-1 bg-accent-2 relative">
                <div className="mt-10 mx-32 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary no-select">
                            Achievements
                        </h2>
                        <p className="text-secondary font-bold no-select">
                            Can you get them all?
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center mt-4 p-1 w-md bg-accent-4 rounded-ten border-2 border-tertiary inner-shadow focus-within:border-primary transition duration-300 group">
                        <IconStore
                            name="search"
                            className="w-5 h-5 mr-1 ml-2 group-focus-within:stroke-primary transition duration-300"
                            color="gray"
                        />
                        <input
                            type="text"
                            placeholder="Can't find the one you're looking for?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 bg-transparent outline-none p-2 text-white placeholder-gray-400 no-select"
                        />
                    </div>
                </div>

                {/* Coming Soon Popup */}
                <div className="absolute left-1/2 top-1/2 z-40 w-64 border-1 border-yellow-400 bg-accent-4 p-2 rounded-seven drop-shadow-custom opacity-100 hover:opacity-50 transition-opacity duration-300 -translate-x-1/2 flex flex-col items-center justify-center">
                    <TriangleAlert className="h-5 w-5 text-yellow-400 animate-pulse" />
                    <p className="text-white text-sm">
                        Achiements section will be{" "}
                        <span className="text-yellow-400 text-sm">
                            coming soon.
                        </span>{" "}
                        Stay tuned!
                    </p>
                </div>

                {/* Achievements List */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="mx-32 mt-4 p-8 bg-accent-4 rounded-ten inner-shadow max-h-[calc(100vh-160px)] overflow-y-auto"
                >
                    {filteredAchievements.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-5 gap-x-20">
                            {filteredAchievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.05,
                                        duration: 0.3,
                                    }}
                                >
                                    <Badge
                                        icon={achievement.icon}
                                        title={achievement.title}
                                        description={achievement.description}
                                        locked={!achievement.unlocked}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-tertiary font-semibold no-select">
                            No achievements found.
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default AchievementsPage;
