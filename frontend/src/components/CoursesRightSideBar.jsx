import IconStore from "./IconStore";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./Accordion";
import { useLocation } from "react-router-dom";
import courseData from "../store/CourseDataStore";

const CoursesRightSideBar = ({ onLessonSelect }) => {
    const location = useLocation();

    const moduleOngoing = 3; // Numeric value for ongoing module
    const lessonCompleted = 3; // Last completed lesson in module 3

    return (
        <div className="bg-accent-1 text-white h-screen flex flex-col justify-between">
            <div className="bg-accent-4 h-23 inner-shadow">
                <div className="flex items-center justify-center px-8 pt-6 mb-6">
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
                        let iconState =
                            moduleNum < moduleOngoing
                                ? "completed"
                                : moduleNum === moduleOngoing
                                ? "unlocked"
                                : "locked";

                        return (
                            <AccordionItem
                                key={index}
                                value={`module-${index}`}
                            >
                                <AccordionTrigger
                                    iconState={iconState}
                                    moduleNumber={module.moduleNumber}
                                    moduleDescription={module.moduleName}
                                />
                                <AccordionContent>
                                    <ul className="pl-5">
                                        {module.lessons.map(
                                            (lesson, lessonIndex) => {
                                                const isNotComplete =
                                                    moduleNum > moduleOngoing ||
                                                    (moduleNum ===
                                                        moduleOngoing &&
                                                        lessonIndex >=
                                                            lessonCompleted); // Lesson is not complete

                                                return (
                                                    <li
                                                        key={lessonIndex}
                                                        onClick={() =>
                                                            onLessonSelect(
                                                                module,
                                                                lesson
                                                            )
                                                        }
                                                        className={`cursor-pointer hover:text-primary mt-4 flex items-center transition-all duration-200 ease-in-out`}
                                                    >
                                                        <div
                                                            className={`h-4.5 w-4.5 rounded-full border-2 me-3 drop-shadow-custom flex items-center justify-center ${
                                                                isNotComplete
                                                                    ? "border-white"
                                                                    : "text-primary bg-primary"
                                                            }`}
                                                        >
                                                            <IconStore
                                                                className={`w-3 h-3 ${
                                                                    isNotComplete
                                                                        ? "hidden"
                                                                        : "block"
                                                                }`}
                                                                name="tick"
                                                                color={`${
                                                                    isNotComplete
                                                                        ? ""
                                                                        : "black"
                                                                }`}
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
