import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpeg';

const Projects = () => {
  const projectData = [
    {
      title: 'E-Commerce Web App',
      image: Project1,
      demoLink: 'https://your-live-demo.com',
      codeLink: 'https://github.com/your/ecommerce-app',
      stack: 'MERN Stack, Redux, Stripe, AWS',
    },
    {
      title: 'Portfolio Website',
      image: Project2,
      demoLink: 'https://your-portfolio.com',
      codeLink: 'https://github.com/your/portfolio',
      stack: 'React, Tailwind, Framer Motion',
    },
       {
      title: 'Learning Mangement System ',
      image: Project2,
      demoLink: 'https://your-portfolio.com',
      codeLink: 'https://github.com/your/portfolio',
      stack: 'Django, AngularJs , Tailwind, Framer Motion',
    },
  ];

  return (
    <section name="projects" className="w-full bg-[#0a192f] text-gray-300 py-20 px-4 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-12 text-white">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-lg shadow-md shadow-black/30 overflow-hidden hover:shadow-pink-600 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-400">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.stack}</p>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
