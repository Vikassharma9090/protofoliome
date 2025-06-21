import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vikas Sharma | Full Stack Developer</title>
        <meta
          name="description"
          content="Vikas Sharma is a Full Stack Developer focused on building modern, responsive web applications using React, Node.js, Django, and more."
        />
        <meta name="keywords" content="Vikas Sharma, Full Stack Developer, React, Node.js, Django, Portfolio" />
      </Helmet>

      <div name="home" className="w-full h-screen bg-[#0a192f] px-4 md:px-12">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, my name is</p>

          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Vikas Sharma
          </h1>

          <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
            I’m a Full Stack Developer
          </h2>

          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on developing responsive full-stack web applications using modern technologies.
          </p>

          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
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
