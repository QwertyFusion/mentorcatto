import Badge from "../components/badge";
import LeftNavbar from "../components/LeftNavbar";
import { motion } from "framer-motion";

const AchievementsPage = () => {
    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="w-full h-full flex-1 bg-accent-2">
                <div className="mt-10 mx-32">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">
                            Achievements
                        </h2>
                        <p className="text-secondary font-bold">Can you get them all?</p>
                    </div>
                    
                
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="mx-32 mt-4 p-8 bg-accent-4 bg-opacity-80 rounded-ten"
                >
                    <div className="space-y-6">
                        <Badge   
                            
                            text="Medieval Knight"
                            subText="Complete five assessments"
                        />
                        
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AchievementsPage;
