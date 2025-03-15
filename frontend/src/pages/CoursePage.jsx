import { useState } from "react";
import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import StarterPage from "../components/StarterPage";
import CourseContent from "../components/CourseContent";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const CoursePage = () => {
    const { user } = useAuthStore();
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refreshSidebar, setRefreshSidebar] = useState(false);

    const dummyContent = {
        introduction: "This is an introduction to DSA concepts...",
        content: "Basic Data Structures and Algorithms...",
        summary: "Today we learned about DSA concepts...",
    };

    const handleLessonSelect = async (module, lesson, index) => {
        try {
            setLoading(true);
            setSelectedModule(module);
            setSelectedLesson(lesson);
            setSelectedIndex(index + 1);

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
                            preferredLanguage: user.preferredLanguage, // Assuming you have this in your user store
                            additionalInstructions:
                                "Please provide detailed content.", // You can customize this
                        }),
                    }
                );

                if (!createContentResponse.ok) {
                    throw new Error("Failed to create lesson content");
                }

                const generatedData = await createContentResponse.json();
                setSelectedContent(generatedData.content); // Set the generated content
            } else {
                setSelectedContent(data.content); // Set the fetched content
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
            <div className="w-fit">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col">
                {loading ? (
                    <div className="text-primary text-center mt-20 h-screen flex items-center justify-center">
                        <Loader2 className="animate-spin h-10 w-10" />
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center mt-20">
                        {error}
                    </div>
                ) : selectedModule && selectedLesson ? (
                    <CourseContent
                        index={selectedIndex}
                        module={selectedModule}
                        lesson={selectedLesson}
                        content={selectedContent}
                        onLessonComplete={handleLessonComplete}
                    />
                ) : (
                    <StarterPage />
                )}
            </div>

            <div className="w-[350px]">
                <CoursesRightSideBar
                    onLessonSelect={handleLessonSelect}
                    refreshSidebar={refreshSidebar}
                />
            </div>
        </div>
    );
};

export default CoursePage;
