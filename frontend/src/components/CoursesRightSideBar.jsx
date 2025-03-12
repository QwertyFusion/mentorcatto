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

    const handleLessonClick = (lesson, isLocked) => {
        if (isLocked) return;
        console.log(`Clicked on: ${lesson}`);
    };

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
                    {courseData.map((module, index) => {
                        const moduleNum = parseInt(
                            module.moduleNumber.replace("Module ", "")
                        );
                        let iconState;
                        if (moduleNum < moduleOngoing) {
                            iconState = "completed";
                        } else if (moduleNum === moduleOngoing) {
                            iconState = "unlocked";
                        } else {
                            iconState = "locked";
                        }

                        return (
                            <AccordionItem
                                key={index}
                                value={`module-${index}`}
                            >
                                <AccordionTrigger
                                    iconState={iconState} // Dynamic icon state
                                    moduleNumber={module.moduleNumber}
                                    moduleDescription={module.moduleName}
                                ></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="pl-5">
                                        {module.lessons.map(
                                            (lesson, lessonIndex) => {
                                                const isLocked =
                                                    moduleNum > moduleOngoing ||
                                                    (moduleNum ===
                                                        moduleOngoing &&
                                                        lessonIndex >=
                                                            lessonCompleted);
                                                return (
                                                    <li
                                                        key={lessonIndex}
                                                        onClick={() =>
                                                            handleLessonClick(
                                                                lesson,
                                                                isLocked
                                                            )
                                                        }
                                                        className={`cursor-pointer hover:underline underline-offset-2 mt-4 flex items-center`}
                                                    >
                                                        <div
                                                            className={`h-4.5 w-4.5 rounded-full border-2 me-3 drop-shadow-custom flex items-end justify-center ${
                                                                isLocked
                                                                    ? "text-white"
                                                                    : "text-primary bg-primary"
                                                            }`}
                                                        >
                                                            <IconStore
                                                                className={`w-3 h-3 ${
                                                                    isLocked
                                                                        ? "hidden"
                                                                        : "block"
                                                                }`}
                                                                name="tick"
                                                                color="black"
                                                            />
                                                        </div>
                                                        {lesson}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default CoursesRightSideBar;
