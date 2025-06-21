import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
// import Profile from '../assets/profile.png'; 
import Resume from '../assets/Vikas_Sharma_Resume.pdf'; 

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Vikas Sharma</title>
        <meta
          name="description"
          content="Vikas Sharma is a Full Stack Developer skilled in React, Node.js, Django, and cloud technologies, passionate about building scalable web applications."
        />
        <meta name="keywords" content="Vikas Sharma, Full Stack Developer, React, Node.js, Django, Portfolio, Resume" />
      </Helmet>

      <section
        name="about"
        className="w-full min-h-screen bg-[#0a192f] text-gray-300 px-4 md:px-12 py-20 flex items-center justify-center"
      >
        <motion.div
          className="max-w-[1200px] w-full grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left - Profile Image */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
            //   src={Profile}
              alt="Vikas Sharma"
              className="rounded-full w-52 h-52 object-cover shadow-lg border-4 border-pink-600"
            />
            <a
              href={Resume}
              download
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 transition-all text-white font-semibold px-5 py-2 rounded-md shadow-md"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="text-base leading-relaxed text-[#8892b0]"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-4 text-white">
              About
            </h2>
            <p className="text-3xl font-semibold text-[#ccd6f6] mb-4">
              Hi, I'm Vikas. I build experiences, not just websites.
            </p>
            <p className="mb-4">
              I'm a Full Stack Developer with experience in MERN, MEAN, and Django-Python stacks. I work on scalable, secure, and responsive solutions using modern technologies like AWS, Docker, and Kubernetes.
            </p>
            <p className="italic text-pink-500 border-l-4 border-pink-600 pl-4 mt-4">
              “I believe software should solve real problems and create lasting value.”
            </p>

            {/* Optional: Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {['React', 'Node.js', 'Django', 'TypeScript', 'Docker', 'AWS'].map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#112240] text-pink-400 border border-pink-600 px-3 py-1 rounded-full hover:bg-pink-600 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
