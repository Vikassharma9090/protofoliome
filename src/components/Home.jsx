import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div name="home" className="w-full h-screen bg-[#0a192f] px-12">
        {/* Conatiner */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
          <p className="text-pink-600">Hii, My name</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Vikas Sharma
          </h1>
          <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
            I am Full Stack devloper
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I am Full Stack devloper specializing in building (and Occasionally
            designing ) exceptional digital experiences Currently , I'm Focused
            on building responsive full-stack with web Applications.
          </p>

          <div>
            <button className="text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              view work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
