import IconStore from "./IconStore";

const CoursesRightSideBar = () => {
  return (
    <div className="bg-accent-1 text-white h-screen flex flex-col justify-between">
      <div className="bg-accent-4 h-23 inner-shadow">
        <div className="flex item-center justify-center px-8 pt-8 mb-10">
          <IconStore
            name="courses"
            className="w-10 h-10 drop-shadow-custom"
            color={`${location.pathname === "/courses" ? "primary" : "white"}`}
          ></IconStore>
          <h1 className="ml-3 text-white text-2xl drop-shadow-custome">
            Course Overview
          </h1>
        </div>
        <div className="bg-accent-1 p-3">
          <div className="bg-accent-1 p-4 border-1 border-tertiary rounded-seven">
            <p className="text-white text-sm font-thin">Module 1</p>
            <p className="text-white text-1xl font-bold">Lorem Ipsum</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary rounded-seven mt-4">
            <p className="text-white text-sm font-thin">Module 2</p>
            <p className="text-white text-1xl font-bold">Lorem Ipsum</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary rounded-seven mt-4">
            <p className="text-white text-sm font-thin">Module 3</p>
            <p className="text-white text-1xl font-bold">Lorem Ipsum</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary rounded-seven mt-4">
            <p className="text-white text-sm font-thin">Module 4</p>
            <p className="text-white text-1xl font-bold">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesRightSideBar;
