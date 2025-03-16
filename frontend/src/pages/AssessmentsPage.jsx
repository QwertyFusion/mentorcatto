import { useEffect, useState } from "react";
import LeftNavbar from "../components/LeftNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Lock, CheckCircle } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import ModuleAssessment from "../components/ModuleAssessment";
import { useLocation } from "react-router-dom";

const AssessmentsPage = () => {
  const { user } = useAuthStore();
  const location = useLocation();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    // Check if we have a direct assessment to show
    if (location.state?.selectedModule && location.state?.directAssessment) {
      setSelectedModule(location.state.selectedModule);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/modules");
        if (!response.ok) {
          throw new Error("Failed to fetch modules");
        }
        const data = await response.json();
        setModules(data);
      } catch (err) {
        setError(err.message);
      }
    };

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
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
    if (user._id) {
      fetchCompletedLessons();
    }
  }, [user._id]);

  const isLessonCompleted = (lessonId) => {
    return completedLessons.some((cl) => cl.lesson._id === lessonId);
  };

  const isModuleCompleted = (module) => {
    return module.lessons.every((lesson) => isLessonCompleted(lesson._id));
  };

  return (
    <div className="h-screen w-full flex">
      <div className="min-w-[250px]">
        <LeftNavbar />
      </div>

      <div className="flex-1 bg-accent-2 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {loading ? (
            <div className="flex items-center justify-center h-[80vh]">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center mt-10">{error}</div>
          ) : (
            <AnimatePresence mode="wait">
              {selectedModule ? (
                <ModuleAssessment
                  key="assessment"
                  module={selectedModule}
                  onClose={() => setSelectedModule(null)}
                />
              ) : (
                <motion.div
                  key="modules"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
                    Module Assessments
                  </h2>

                  <div className="grid grid-cols-1 gap-6">
                    {modules.map((module, index) => {
                      const isCompleted = isModuleCompleted(module);

                      return (
                        <motion.div
                          key={module._id}
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`bg-accent-4 rounded-ten p-6 border drop-shadow-custom ${
                            isCompleted
                              ? "border-accent-4"
                              : "opacity-70 border-tertiary"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-white">
                              Module {index + 1}: {module.name}
                            </h3>
                            {!isCompleted ? (
                              <Lock className="text-tertiary" />
                            ) : (
                              <CheckCircle className="text-primary" />
                            )}
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm text-tertiary">
                              <span>Completion Status:</span>
                              <span
                                className={
                                  isCompleted ? "text-primary" : "text-white"
                                }
                              >
                                {isCompleted
                                  ? "Ready for Assessment"
                                  : "Complete all lessons first"}
                              </span>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() =>
                                isCompleted && setSelectedModule(module)
                              }
                              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                                isCompleted
                                  ? "bg-primary text-black hover:bg-primary/90"
                                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
                              }`}
                              disabled={!isCompleted}
                            >
                              {isCompleted
                                ? "Start Assessment"
                                : "Complete All Lessons First"}
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentsPage;
