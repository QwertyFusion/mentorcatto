import IconStore from "./IconStore";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./Accordion";
import { useLocation } from "react-router-dom";

const CoursesRightSideBar = ({ onAccordionClick }) => {
    const location = useLocation();

    const courseData = [
        {
            moduleNumber: "Module 1",
            moduleName: "Introduction to React",
            lessons: [
                "What is React?",
                "Components and Props",
                "State and Lifecycle",
            ],
            iconState: "completed", // Example state
        },
        {
            moduleNumber: "Module 2",
            moduleName: "Advanced React",
            lessons: ["Context API", "Hooks", "Performance Optimization"],
            iconState: "unlocked", // Example state
        },
        {
            moduleNumber: "Module 3",
            moduleName: "WHAT THE CAT!",
            lessons: ["WHAT", "THE", "CAT!!!!!!!!!!"],
            iconState: "locked", // Example state
        },
        // Add more modules as needed
    ];

    const handleLessonClick = (lesson) => {
        // Handle lesson click (e.g., navigate to lesson details, show modal, etc.)
        console.log(`Clicked on: ${lesson}`);
        // You can call a prop function or navigate to a different route here
    };

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

                <div className="bg-accent-1 px-3 pb-3">
                    <Accordion type="single" collapsible>
                        {courseData.map((module, index) => (
                            <AccordionItem
                                key={index}
                                value={`module-${index}`}
                            >
                                <AccordionTrigger
                                    iconState={module.iconState} // Pass the icon state
                                    moduleNumber={module.moduleNumber} // Pass the module number
                                    moduleDescription={module.moduleName} // Pass the module name
                                >
                                    {/* You can remove this if you don't need additional content here */}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className=" pl-5">
                                        {module.lessons.map(
                                            (lesson, lessonIndex) => (
                                                <li
                                                    key={lessonIndex}
                                                    onClick={() =>
                                                        handleLessonClick(
                                                            lesson
                                                        )
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
        </div>
    );
};

export default CoursesRightSideBar;
