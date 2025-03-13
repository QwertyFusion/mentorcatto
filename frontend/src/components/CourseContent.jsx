import { motion } from "framer-motion";

const CourseContent = ({ module, lesson }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-accent-4 inner-shadow rounded-ten p-4 flex flex-col items-center"
        >
            <div className="w-[80%] flex flex-col items-center">
                <h2 className="text-2xl text-center text-white">
                    <span className="text-primary">{module.moduleNumber}:</span>{" "}
                    {module.moduleName}
                </h2>
                <h3 className="text-xl text-white mt-2">{lesson}</h3>
                <hr className="border-1 border-accent-5 w-full mb-6 mt-2" />
                <p className="text-white">
                    Available Icons Lucide contains icons with different
                    variants and states, allowing users to choose the most
                    suitable icon for their needs. And if a desired icon isn't
                    available yet, users can open a design request, and the
                    Lucide community contributors will help provide new icons.
                    With more icons to choose from, users have more options to
                    work with in their projects. Complete Set of Icons As new
                    applications with specific features arise, Lucide aims to
                    provide a complete set of icons for every project. The
                    community follows a set of design rules when designing new
                    icons. These rules maintain standards for the icons, such as
                    recognizability, consistency in style, and readability at
                    all sizes. While creativity is valued in new icons,
                    recognizable design conventions are important to ensure that
                    the icons are easily identifiable by users. Code
                    Optimization In addition to design, code is also important.
                    Assets like icons can significantly increase bandwidth usage
                    in web projects. With the growing internet, Lucide has a
                    responsibility to keep their assets as small as possible. To
                    achieve this, Lucide uses SVG compression and specific code
                    architecture for tree-shaking abilities. After tree-shaking,
                    you only ship the icons you used, which helps to keep
                    software distribution size to a minimum.
                </p>
            </div>
        </motion.div>
    );
};

export default CourseContent;
