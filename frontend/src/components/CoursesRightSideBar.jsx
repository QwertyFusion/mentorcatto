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
import PropTypes from "prop-types";
import { Loader2, OctagonAlert } from "lucide-react";

const CoursesRightSideBar = ({ onLessonSelect, refreshSidebar }) => {
    const { user } = useAuthStore();
    const location = useLocation();
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [completedLessons, setCompletedLessons] = useState([]);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const API_URL =
                    import.meta.env.MODE === "development"
                        ? "http://localhost:3000/api/modules"
                        : "/api/modules";
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch modules");
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

    useEffect(() => {
        const fetchCompletedLessons = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/lessons/completed/${user._id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch completed lessons");
                }
                const data = await response.json();
                setCompletedLessons(data);
            } catch (err) {
                console.error("Error fetching completed lessons:", err);
            }
        };

        if (user._id) {
            fetchCompletedLessons();
        }
    }, [user._id, refreshSidebar]); // Re-fetch when refreshSidebar changes

    const isLessonCompleted = (lessonId) => {
        return completedLessons.some((cl) => cl.lesson._id === lessonId);
    };

    const isModuleCompleted = (module) => {
        return module.lessons.every((lesson) => isLessonCompleted(lesson._id));
    };

    if (loading)
        return (
            <div className="p-4 text-white h-screen flex items-center justify-center animate-spin">
                <Loader2 />
            </div>
        );
    if (error)
        return (
            <div className="p-4 text-red-500 h-screen flex flex-col items-center justify-center">
                <OctagonAlert className="h-10 w-10 mb-2" />
                <strong>Error:</strong> {error}
            </div>
        );

    // 🔹 Find the last completed module index
    let lastCompletedIndex = -1;
    modules.forEach((mod, idx) => {
        if (isModuleCompleted(mod)) {
            lastCompletedIndex = idx;
        }
    });

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
                    {modules.map((module, index) => {
                        let iconState;

                        if (isModuleCompleted(module)) {
                            iconState = "completed";
                        } else if (index === lastCompletedIndex + 1) {
                            iconState = "unlocked";
                        } else {
                            iconState = "locked";
                        }

                        return (
                            <AccordionItem
                                key={module._id}
                                value={`module-${index}`}
                            >
                                <AccordionTrigger
                                    iconState={iconState}
                                    moduleNumber={`Module ${index + 1}`}
                                    moduleDescription={module.name}
                                />
                                <AccordionContent>
                                    <ul className="pl-5">
                                        {module.lessons.map((lesson) => {
                                            const isNotComplete =
                                                !isLessonCompleted(lesson._id);

                                            return (
                                                <li
                                                    key={lesson._id}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        onLessonSelect(
                                                            module,
                                                            lesson,
                                                            index
                                                        );
                                                    }}
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
    onLessonSelect: PropTypes.func.isRequired,
    refreshSidebar: PropTypes.bool.isRequired,
};

export default CoursesRightSideBar;
