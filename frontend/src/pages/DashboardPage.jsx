import LeftNavbar from "../components/LeftNavbar";
import RightSideBar from "../components/RightSideBar";
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="min-w-[250px]">
        <LeftNavbar />
      </div>

      <div class="flex-1">
        <div class="grid grid-cols-1">
          <div class="bg-secondary p-6 h-full">
            <em>
              <div class="mb-1">
                <h1 class="text-3xl font-thin mb-2 text-black">
                  print(
                  <span class="text-black font-bold">"Hello DSA!"</span>)
                </h1>
              </div>
            </em>
            <h2 class="text-xl font-semibold mb-4">Tutorials</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start">
                <i class="fas fa-book text-green-500 text-2xl mr-4"></i>
                <div>
                  <h3 class="font-bold">Courses</h3>
                  <p>
                    Learn topics at your pace with AI-generated lessons
                    personalized just for you.
                  </p>
                </div>
              </div>
              <div class="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start">
                <i class="fas fa-comments text-green-500 text-2xl mr-4"></i>
                <div>
                  <h3 class="font-bold">Doubt Chat</h3>
                  <p>
                    Ask away your doubts to your personal mentor and get
                    feedback instantly!
                  </p>
                </div>
              </div>
              <div class="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start">
                <i class="fas fa-clipboard-list text-green-500 text-2xl mr-4"></i>
                <div>
                  <h3 class="font-bold">Assessments</h3>
                  <p>
                    Take tests to assess your skills and get insights on what to
                    improve and how to improve.
                  </p>
                </div>
              </div>
              <div class="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start">
                <i class="fas fa-trophy text-green-500 text-2xl mr-4"></i>
                <div>
                  <h3 class="font-bold">Achievements</h3>
                  <p>
                    Get badges on test completion and showcase them to friends.
                    Happy learning!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-accent-2 p-6 h-screen">
            <h2 class="text-xl font-semibold mb-4 mt-4 text-white">
              Practice Your Skills
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-accent-4 p-4 drop-shadow-custom">
                <h3 class="text-primary font-semibold mb-1">
                  Short Answer Type
                </h3>
                <hr className="border-tertiary"></hr>
                <p className="text-white mt-1">
                  Test your knowledge by solving problems to short answer type
                  questions.
                </p>
              </div>
              <div class="bg-accent-4 p-4 drop-shadow-custom">
                <h3 class="text-primary font-semibold mb-1">
                  Long Answer Type
                </h3>
                <hr className="border-tertiary"></hr>
                <p className="text-white mt-1">
                  Test your knowledge by solving problems to long answer type
                  questions.
                </p>
              </div>
              <div class="bg-accent-4 p-4 drop-shadow-custom">
                <h3 class="text-primary font-semibold mb-1">MCQ & MSQ</h3>
                <hr className="border-tertiary"></hr>
                <p className="text-white mt-1">
                  Test your knowledge by solving problems to MCQ & MSQ answer
                  type questions.
                </p>
              </div>
              <div class="bg-accent-4 p-4 drop-shadow-custom">
                <h3 class="text-primary font-semibold mb-1">
                  Coding Questions
                </h3>
                <hr className="border-tertiary"></hr>
                <p className="text-white mt-1">
                  Solve real-world coding problems with what you have learnt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-screen flex flex-col mr-auto">
        <div className="min-w-[470px]">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
