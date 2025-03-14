import { useState } from "react";
import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import StarterPage from "../components/StarterPage";
import CourseContent from "../components/CourseContent";
import { Loader2 } from "lucide-react";

const CoursePage = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Dummy data for testing
    const dummyContent = {
        introduction: "This is an introduction to DSA concepts...",
        content: `# Data Structures and Algorithms

## Introduction
In this lesson, we'll learn about fundamental DSA concepts.

### Key Points:
1. Time Complexity
2. Space Complexity
3. Basic Data Structures

### Example Code:
\`\`\`python
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

### Practice Problems:
1. Implement bubble sort
2. Create a linked list
3. Solve array rotation
`,
        summary:
            "Today we learned about basic DSA concepts and implementation...",
    };

    const handleLessonSelect = async (module, lesson, index) => {
        try {
            setLoading(true);
            setSelectedModule(module);
            setSelectedLesson(lesson);
            setSelectedIndex(index + 1);

            // Add console logs to debug
            console.log("Selected Module:", module);
            console.log("Selected Lesson:", lesson);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Use dummy data instead of API call
            setSelectedContent(dummyContent);
            console.log("Content set:", dummyContent); // Debug log
        } catch (error) {
            setError(error.message);
            console.error("Error fetching lesson content:", error);
        } finally {
            setLoading(false);
        }
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
                    <div className="text-white">
                        <CourseContent
                            index={selectedIndex}
                            module={selectedModule}
                            lesson={selectedLesson}
                            content={selectedContent}
                        />
                        {!selectedContent && (
                            <div className="text-center mt-20">
                                No content available for this lesson
                            </div>
                        )}
                    </div>
                ) : (
                    <StarterPage />
                )}
            </div>

            <div className="w-[350px]">
                <CoursesRightSideBar onLessonSelect={handleLessonSelect} />
            </div>
        </div>
    );
};

export default CoursePage;
