import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, ChevronLeft } from "lucide-react";
import PropTypes from "prop-types";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import IconStore from "./IconStore";

const ModuleAssessment = ({ module, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const { user } = useAuthStore();
  const navigate = useNavigate();

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

    fetchCompletedLessons();
  }, [user._id]);

  const handleMarkAssessmentComplete = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      console.log("Starting assessment completion for:", {
        userId: user._id,
        moduleId: module._id,
        moduleName: module.name,
      });

      const response = await fetch(
        "http://localhost:3000/api/assessments/complete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            moduleId: module._id,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();
      console.log("Server response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to mark assessment as complete"
        );
      }

      console.log("Assessment marked as complete successfully");

      // Force a reload of the page to ensure all states are updated
      window.location.href = "/courses";
    } catch (error) {
      console.error("Error marking assessment as complete:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="flex items-center mb-8">
        <button
          onClick={onClose}
          className="text-white hover:bg-accent-3 p-2 cursor-pointer rounded-seven hover:text-primary transition-colors duration-200 mr-4"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-bold text-primary">
          Module {module.moduleNumber} Assessment
        </h2>
      </div>

      {/* Instructions Section */}
      <div className="bg-accent-4 rounded-ten p-8 mb-6 inner-shadow">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Assessment Contents
        </h3>
        <div className="space-y-4">
          {module.lessons.map((lesson, index) => {
            return (
              <motion.button
                whileHover={{ scale: 1.02 }}
                key={lesson._id}
                className={`flex w-full items-center justify-between p-4 rounded-seven bg-accent-2 border border-primary/20 drop-shadow-custom`}
              >
                <div className="flex items-center">
                  <div
                    className={`h-4.5 w-4.5 rounded-full border-2 me-3 drop-shadow-custom flex items-center justify-center border-primary bg-primary`}
                  >
                    <IconStore className="w-3 h-3" name="tick" color="black" />
                  </div>
                  <span className="text-white">
                    Lesson {index + 1}: {lesson.name}
                  </span>
                </div>
              </motion.button>
            );
          })}
          <hr className="border-accent-1 border-2" />
          <h3 className="text-2xl font-semibold text-white mb-4">
            Assessment Instructions
          </h3>
          <div className="text-gray-300 space-y-4">
            <p>
              This assessment will test your knowledge of{" "}
              <span className="text-primary font-bold">{module.name}</span>.
            </p>
            <p>
              <strong>Time Limit:</strong> 30 minutes
            </p>
            <p>
              <strong>Assessment Format:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Multiple Choice Questions (MCQ)</li>
              <li>Multiple Select Questions (MSQ)</li>
              <li>Short Answer Questions</li>
              <li>Long Answer Questions</li>
              <li>Coding Questions</li>
            </ul>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
          {error}
        </div>
      )}

      <div className="flex justify-end items-center">
        <motion.button
          onClick={handleMarkAssessmentComplete}
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-8 py-3 bg-primary text-black rounded-lg font-semibold 
                        ${
                          isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:bg-primary/90 cursor-pointer"
                        } 
                        transition-all duration-200 flex items-center`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Submitting...
            </>
          ) : (
            "Mark Assessment as Complete"
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

ModuleAssessment.propTypes = {
  module: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    moduleNumber: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModuleAssessment;
