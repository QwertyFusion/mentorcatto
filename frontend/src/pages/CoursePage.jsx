import { useState } from "react";
import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import StarterPage from "../components/StarterPage";
import CourseContent from "../components/CourseContent";

const CoursePage = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const handleLessonSelect = (module, lesson) => {
        setSelectedModule(module);
        setSelectedLesson(lesson);
    };

    return (
        <div className="h-screen w-full flex">
            <div className="w-fit">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col">
                {selectedModule && selectedLesson ? (
                    <CourseContent
                        module={selectedModule}
                        lesson={selectedLesson}
                    />
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
