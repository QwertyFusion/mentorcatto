import LeftNavbar from "../components/LeftNavbar";
import CoursesRightSideBar from "../components/CoursesRightSideBar";
import CourseContent from "../components/CourseContent";

const CoursePage = () => {
    return (
        <div className="h-screen w-full flex">
            <div className="w-fit">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col justify-center">
                <CourseContent />
            </div>
            <div className="min-w-[350px]">
                <CoursesRightSideBar />
            </div>
        </div>
    );
};

export default CoursePage;
