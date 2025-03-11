import IconStore from "./IconStore";
import AccordionDemo from "./Accordion";

const CoursesRightSideBar = ({ onAccordionClick }) => {
    return (
        <div className="bg-accent-1 text-white h-screen flex flex-col justify-between">
            <div className="bg-accent-4 h-23 inner-shadow">
                <div className="flex item-center justify-center px-8 pt-8 mb-6">
                    <IconStore
                        name="courses"
                        className="w-10 h-10 drop-shadow-custom"
                        color={`${
                            location.pathname === "/courses"
                                ? "primary"
                                : "white"
                        }`}
                    ></IconStore>
                    <h1 className="ml-3 text-white text-2xl drop-shadow-custom no-select">
                        Course Overview
                    </h1>
                </div>

                <div className="bg-accent-1 p-3">
                    <div onClick={onAccordionClick} className="cursor-pointer">
                        <AccordionDemo />
                    </div>
                    <div
                        onClick={onAccordionClick}
                        className="cursor-pointer mt-4"
                    >
                        <AccordionDemo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesRightSideBar;
