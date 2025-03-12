import { useState } from "react";
import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import StarterPage from "../components/StarterPage";
import CourseContent from "../components/CourseContent";

const CoursePage = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="h-screen w-full flex">
            <div className="w-fit">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col justify-center">
                {showContent ? <CourseContent /> : <StarterPage />}
            </div>

            <div className="w-[350px]">
                <CoursesRightSideBar
                    onAccordionClick={() => setShowContent(true)}
                />
            </div>
        </div>
    );
};

export default CoursePage;
