import { useState, useEffect } from "react";
import IconStore from "./IconStore";
import { useAuthStore } from "../store/authStore";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./Accordion";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const CoursesRightSideBar = ({ onLessonSelect }) => {
    const { user } = useAuthStore();
    const location = useLocation();
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const moduleCompleted = user.moduleCompleted ? user.moduleCompleted : 0;
    const moduleOngoing = moduleCompleted + 1;
    const lessonCompleted = user.lessonCompleted ? user.lessonCompleted : 0;

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/modules');
                if (!response.ok) {
                    throw new Error('Failed to fetch modules');
                }
                const data = await response.json();
                setModules(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchModules();
    }, []);

    if (loading) return <div className="p-4 text-white">Loading courses...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-accent-1 text-white h-screen flex flex-col justify-between"
        >
            <div className="bg-accent-4 h-23 inner-shadow">
                <div className="flex items-center justify-center px-8 pt-6 mb-6">
                    <IconStore
                        name="courses"
                        className="w-10 h-10 drop-shadow-custom"
                        color={location.pathname === "/courses" ? "primary" : "white"}
                    />
                    <h1 className="ml-3 text-white text-2xl drop-shadow-custom no-select">
                        Course Overview
                    </h1>
                </div>
            </div>
            <div className="bg-accent-1 px-3 pb-3 h-full overflow-auto">
                <Accordion type="single" collapsible>
                    {modules.map((module, index) => {
                        const moduleNum = index + 1;
                        let iconState =
                            moduleNum < moduleOngoing
                                ? "completed"
                                : moduleNum === moduleOngoing
                                ? "unlocked"
                                : "locked";

                        return (
                            <AccordionItem
                                key={module._id}
                                value={`module-${index}`}
                            >
                                <AccordionTrigger
                                    iconState={iconState}
                                    moduleNumber={`Module ${moduleNum}`}
                                    moduleDescription={module.name}
                                />
                                <AccordionContent>
                                    <ul className="pl-5">
                                        {module.lessons.map((lesson) => {
                                            const isNotComplete =
                                                moduleNum > moduleOngoing ||
                                                (moduleNum === moduleOngoing &&
                                                    lesson.number > lessonCompleted);

                                            return (
                                                <li
                                                    key={lesson._id}
                                                    onClick={() => onLessonSelect(module, lesson)}
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
                                                                isNotComplete ? "hidden" : "block"
                                                            }`}
                                                            name="tick"
                                                            color={`${isNotComplete ? "" : "black"}`}
                                                        />
                                                    </div>
                                                    {lesson.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </motion.div>
    );
};

CoursesRightSideBar.propTypes = {
    onLessonSelect: PropTypes.func.isRequired
};

export default CoursesRightSideBar;
