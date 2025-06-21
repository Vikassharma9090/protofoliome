import React from 'react';
import { Helmet } from 'react-helmet';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react.png';
import GITHUB from '../assets/github.png';
import NODE from '../assets/node.png';
import MONGODB from '../assets/mongo.png';
import AWS from '../assets/aws.png';
import PYTHON from '../assets/Python.png';
import DJANGO from '../assets/django.png'; 
import POSTGRESQL from '../assets/postgresql.png'; 

const techStack = [
  { src: JAVASCRIPT, label: 'JavaScript', alt: 'JavaScript Icon' },
  { src: REACT, label: 'React', alt: 'React Icon' },
  { src: NODE, label: 'Node.js', alt: 'Node.js Icon' },
  { src: MONGODB, label: 'MongoDB', alt: 'MongoDB Icon' },
  { src: HTML, label: 'HTML', alt: 'HTML Icon' },
  { src: CSS, label: 'CSS', alt: 'CSS Icon' },
  { src: PYTHON, label: 'Python', alt: 'Python Icon' },
  { src: DJANGO, label: 'Django', alt: 'Django Icon' },
  { src: POSTGRESQL, label: 'PostgreSQL', alt: 'PostgreSQL Icon' },
  { src: AWS, label: 'AWS', alt: 'AWS Icon' },
  { src: GITHUB, label: 'GitHub', alt: 'GitHub Icon' },
];

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Vikas Sharma</title>
        <meta
          name="description"
          content="Technologies Vikas Sharma has worked with, including JavaScript, Python, React, Node.js, MongoDB, Django, GitHub, and AWS."
        />
        <meta
          name="keywords"
          content="JavaScript, React, Python, Django, Node.js, MongoDB, AWS, GitHub, PostgreSQL, HTML, CSS, Vikas Sharma, Full Stack Developer"
        />
      </Helmet>

      <div name="skills" className="w-full min-h-screen px-4 md:px-12 py-12 bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
          <div className="mb-10">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
            <p className="py-4 text-lg text-gray-400">Technologies I've worked with across my development journey.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="shadow-lg shadow-[#040c16] hover:scale-105 hover:shadow-pink-500 transition-all duration-300 transform rounded-xl bg-[#112240] py-6"
              >
                <img className="w-16 h-16 mx-auto" src={tech.src} alt={tech.alt} />
                <p className="mt-4 text-md font-semibold text-white">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
