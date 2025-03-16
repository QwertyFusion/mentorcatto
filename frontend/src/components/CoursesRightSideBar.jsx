import { useState, useEffect } from "react";
import IconStore from "./IconStore";
import { useAuthStore } from "../store/authStore";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Loader2, OctagonAlert } from "lucide-react";

const CoursesRightSideBar = ({ onLessonSelect, refreshSidebar }) => {
  const { user } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedAssessments, setCompletedAssessments] = useState([]);

  const fetchData = async () => {
    try {
      // Fetch modules
      const modulesResponse = await fetch(
        import.meta.env.MODE === "development"
          ? "http://localhost:3000/api/modules"
          : "/api/modules"
      );
      if (!modulesResponse.ok) {
        throw new Error("Failed to fetch modules");
      }
      const modulesData = await modulesResponse.json();
      setModules(modulesData);
      console.log("Fetched modules:", modulesData);

      // Fetch completed lessons
      if (user._id) {
        const lessonsResponse = await fetch(
          `http://localhost:3000/api/lessons/completed/${user._id}`
        );
        if (!lessonsResponse.ok) {
          throw new Error("Failed to fetch completed lessons");
        }
        const lessonsData = await lessonsResponse.json();
        setCompletedLessons(lessonsData);
        console.log("Fetched completed lessons:", lessonsData);

        // Fetch completed assessments
        const assessmentsResponse = await fetch(
          `http://localhost:3000/api/assessments/completed/${user._id}`,
          {
            credentials: "include",
          }
        );
        if (!assessmentsResponse.ok) {
          throw new Error("Failed to fetch completed assessments");
        }
        const assessmentsData = await assessmentsResponse.json();
        setCompletedAssessments(assessmentsData);
        console.log("Fetched completed assessments:", assessmentsData);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user._id, refreshSidebar]);

  // Add a refresh effect when location changes (for assessment completion)
  useEffect(() => {
    if (location.pathname === "/courses") {
      console.log("Location changed to courses, refreshing data");
      fetchData();
    }
  }, [location.pathname]);

  const isLessonCompleted = (lessonId) => {
    const completed = completedLessons.some((cl) => cl.lesson._id === lessonId);
    console.log(`Checking lesson completion for ${lessonId}:`, completed);
    return completed;
  };

  const isModuleCompleted = (module) => {
    const completed = module.lessons.every((lesson) =>
      isLessonCompleted(lesson._id)
    );
    console.log(`Checking module completion for ${module._id}:`, completed);
    return completed;
  };

  const isAssessmentCompleted = (moduleId) => {
    const completed = completedAssessments.some((ca) => {
      console.log("Comparing assessment:", ca.module, moduleId);
      return ca.module === moduleId;
    });
    console.log(`Checking assessment completion for ${moduleId}:`, completed);
    return completed;
  };

  const isModuleAccessible = (moduleIndex) => {
    if (moduleIndex === 0) return true;
    const previousModule = modules[moduleIndex - 1];
    const isAccessible =
      previousModule &&
      isModuleCompleted(previousModule) &&
      isAssessmentCompleted(previousModule._id);
    console.log(
      `Checking module accessibility for index ${moduleIndex}:`,
      isAccessible
    );
    return isAccessible;
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
            const isCompleted = isModuleCompleted(module);
            const isAccessible = isModuleAccessible(index);
            const assessmentCompleted = isAssessmentCompleted(module._id);

            let iconState;
            if (isCompleted && assessmentCompleted) {
              iconState = "completed";
            } else if (isAccessible) {
              iconState = "unlocked";
            } else {
              iconState = "locked";
            }

            return (
              <AccordionItem key={module._id} value={`module-${index}`}>
                <AccordionTrigger
                  iconState={iconState}
                  moduleNumber={`Module ${index + 1}`}
                  moduleDescription={module.name}
                />
                <AccordionContent>
                  <ul className="pl-5">
                    {module.lessons.map((lesson) => {
                      const isNotComplete = !isLessonCompleted(lesson._id);

                      return (
                        <li
                          key={lesson._id}
                          onClick={(e) => {
                            if (!isAccessible) return;
                            e.preventDefault();
                            e.stopPropagation();
                            onLessonSelect(
                              module,
                              lesson,
                              index,
                              !isNotComplete
                            );
                          }}
                          className={`cursor-pointer text-white hover:text-primary mt-4 flex items-center transition-all duration-200 ease-in-out ${
                            !isAccessible ? "pointer-events-none" : ""
                          }`}
                        >
                          <div
                            className={`h-4.5 w-4.5 rounded-full border-2 me-3 drop-shadow-custom flex items-center justify-center ${
                              isNotComplete
                                ? "border-white"
                                : "text-primary bg-primary animate-pulse"
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

                    {/* Module Assessment Button */}
                    <motion.button
                      onClick={() => {
                        if (
                          isCompleted &&
                          !assessmentCompleted &&
                          isAccessible
                        ) {
                          navigate("/assessments", {
                            state: {
                              selectedModule: module,
                              directAssessment: true,
                            },
                          });
                        }
                      }}
                      className={`mt-6 mb-2 w-full cursor-pointer text-white hover:text-primary flex items-center transition-all duration-200 ease-in-out ${
                        !isCompleted || !isAccessible || assessmentCompleted
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="h-4.5 w-4.5 rounded-full border-2 border-primary me-3 drop-shadow-custom flex items-center justify-center">
                        <IconStore
                          className="w-3 h-3"
                          name={assessmentCompleted ? "tick" : "star"}
                          color="primary"
                        />
                      </div>
                      <span className="font-semibold text-primary">
                        {assessmentCompleted
                          ? "Assessment Completed"
                          : "Take Assessment"}
                      </span>
                      {!isCompleted && (
                        <span className="ml-2 text-xs text-gray-400">
                          (Complete all lessons first)
                        </span>
                      )}
                    </motion.button>

                    {!isAccessible && index > 0 && (
                      <div className="mt-2 text-xs text-gray-400 text-center">
                        Complete previous module and its assessment to unlock
                      </div>
                    )}
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
