import IconStore from "./IconStore";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./Accordion";
import { useLocation } from "react-router-dom";
import courseData from "../store/CourseDataStore";

const CoursesRightSideBar = ({ onAccordionClick }) => {
    const location = useLocation();

    const handleLessonClick = (lesson) => {
        // Handle lesson click (e.g., navigate to lesson details, show modal, etc.)
        console.log(`Clicked on: ${lesson}`);
        // You can call a prop function or navigate to a different route here
    };

    const moduleCompleted = 2; // Numeric value for module completion
    const moduleOngoing = 3; // Numeric value for ongoing module
    const lessonCompleted = 3; // Last completed lesson in module 3

    return (
        <div className="bg-accent-1 text-white h-screen flex flex-col justify-between">
            <div className="bg-accent-4 h-23 inner-shadow">
                <div className="flex items-center justify-center px-8 pt-8 mb-6">
                    <IconStore
                        name="courses"
                        className="w-10 h-10 drop-shadow-custom"
                        color={
                            location.pathname === "/courses"
                                ? "primary"
                                : "white"
                        }
                    />
                    <h1 className="ml-3 text-white text-2xl drop-shadow-custom no-select">
                        Course Overview
                    </h1>
                </div>
            </div>
            <div className="bg-accent-1 px-3 pb-3 h-full overflow-auto">
                <Accordion type="single" collapsible>
                    {courseData.map((module, index) => (
                        <AccordionItem key={index} value={`module-${index}`}>
                            <AccordionTrigger
                                iconState={""} // Pass the icon state
                                moduleNumber={module.moduleNumber} // Pass the module number
                                moduleDescription={module.moduleName} // Pass the module name
                            ></AccordionTrigger>
                            <AccordionContent>
                                <ul className=" pl-5">
                                    {module.lessons.map(
                                        (lesson, lessonIndex) => (
                                            <li
                                                key={lessonIndex}
                                                onClick={() =>
                                                    handleLessonClick(lesson)
                                                }
                                                className="cursor-pointer hover:underline mt-4"
                                            >
                                                {lesson}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default CoursesRightSideBar;
