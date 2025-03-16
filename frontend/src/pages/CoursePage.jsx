import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import StarterPage from "../components/StarterPage";
import CourseContent from "../components/CourseContent";
import { useAuthStore } from "../store/authStore";
import funnyLoadingTexts from "../store/funnyLoadingTexts";

const CoursePage = () => {
    const { user } = useAuthStore();
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isCompleted, setIsCompleted] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refreshSidebar, setRefreshSidebar] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

    const loadingText =
        funnyLoadingTexts[Math.floor(Math.random() * funnyLoadingTexts.length)];

    const handleLessonSelect = async (module, lesson, index, isCompleted) => {
        try {
            setLoading(true);
            setSelectedModule(module);
            setSelectedLesson(lesson);
            setSelectedIndex(index + 1);
            setIsCompleted(isCompleted);

            // Fetch the content from the database
            const response = await fetch(
                `http://localhost:3000/api/lessons/content/${user._id}/${lesson._id}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch lesson content");
            }

            const data = await response.json();
            // Check if content is blank or null
            if (!data.content) {
                // Send a request to create content
                const createContentResponse = await fetch(
                    `http://localhost:3000/api/lessons/create-content`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userId: user._id,
                            lessonId: lesson._id,
                            preferredLanguage: user.preferredLanguage,
                            additionalInstructions:
                                "Please provide detailed content.",
                        }),
                    }
                );

                if (!createContentResponse.ok) {
                    throw new Error("Failed to create lesson content");
                }

                const generatedData = await createContentResponse.json();
                setSelectedContent(generatedData.content);
            } else {
                setSelectedContent(data.content);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLessonComplete = () => {
        setRefreshSidebar((prev) => !prev);
    };

    return (
        <div className="h-screen w-full flex">
            {/* Left Navbar */}
            <div className="w-fit">
                <LeftNavbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col overflow-auto">
                {loading ? (
                    <div className="text-primary text-center mt-20 h-screen flex flex-col items-center justify-center gap-3">
                        <Loader2 className="animate-spin h-10 w-10" />
                        <p className="text-sm text-gray-400">{loadingText}</p>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center mt-20">
                        {error}. Please reload the window and try again.
                    </div>
                ) : selectedModule && selectedLesson ? (
                    <CourseContent
                        index={selectedIndex}
                        module={selectedModule}
                        lesson={selectedLesson}
                        content={selectedContent}
                        completed={isCompleted}
                        onLessonComplete={handleLessonComplete}
                    />
                ) : (
                    <StarterPage />
                )}
            </div>

            {/* Collapsible Right Sidebar */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: isSidebarOpen ? 350 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative overflow-hidden"
            >
                <CoursesRightSideBar
                    onLessonSelect={handleLessonSelect}
                    refreshSidebar={refreshSidebar}
                />
            </motion.div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="absolute cursor-pointer top-7 right-0 bg-primary hover:bg-primary/90 p-1 rounded-l-ten text-black drop-shadow-custom group"
            >
                {isSidebarOpen ? (
                    <ChevronRight size={24} className="animate-pulse" />
                ) : (
                    <ChevronLeft size={24} className="animate-pulse" />
                )}
            </button>
        </div>
    );
};

export default CoursePage;
