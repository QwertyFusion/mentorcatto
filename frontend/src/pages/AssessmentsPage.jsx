import LeftNavbar from "../components/LeftNavbar";
import { motion } from "framer-motion";

const AssessmentsPage = () => {
    return (
        <div className="h-screen w-full flex">
          <div className="min-w-[250px]">
            <LeftNavbar />
          </div>
    
          <div className="flex-1 bg-accent-2">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full mx-auto mt-10 p-8 bg-accent-4 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-6 text-center bg-primary text-transparent bg-clip-text">
                Assessments
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="p-4 bg-accent-3 bg-opacity-50 rounded-seven border-2 border-tertiary drop-shadow-custom"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white text-center">Implement needed logic in this page</p>
                </motion.div>
              </div>
              </motion.div>
          </div>
        </div>
      );
    };

export default AssessmentsPage
