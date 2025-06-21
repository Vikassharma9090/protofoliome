import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : true;
  });

  const handleClick = () => setNav(!nav);
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 sm:px-12 backdrop-blur-md bg-white/70 dark:bg-[#0a192f]/70 text-black dark:text-white transition-all duration-500 ease-in-out z-50 shadow-xl">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-[50px] drop-shadow-md" />
      </div>

      {/* Desktop Menu */}
      <div className="flex-1 flex justify-end">
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li
              key={item}
              className="hover:text-pink-500 cursor-pointer transition-colors duration-300"
            >
              <Link to={item} smooth={true} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:block text-2xl ml-4">
          <button
            onClick={toggleTheme}
            className="focus:outline-none hover:scale-110 transition-transform duration-300"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-50 cursor-pointer text-3xl hover:scale-110 transition-transform duration-300"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center transition-all duration-500 ease-in-out bg-white dark:bg-[#0a192f] text-black dark:text-white z-40 ${
          nav ? "flex" : "hidden"
        }`}
      >
        <ul className="space-y-10 text-3xl font-bold">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li
              key={item}
              onClick={handleClick}
              className="hover:text-pink-500"
            >
              <Link to={item} smooth={true} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition-transform duration-300"
            >
              {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[200%] left-0">
        <ul>
          {[
            {
              label: "LinkedIn",
              icon: <FaLinkedin size={30} />,
              bg: "bg-blue-600",
              href: "#",
            },
            {
              label: "GitHub",
              icon: <FaGithub size={30} />,
              bg: "bg-gray-800",
              href: "#",
            },
            {
              label: "Mail",
              icon: <HiOutlineMail size={30} />,
              bg: "bg-teal-500",
              href: "#",
            },
            {
              label: "Resume",
              icon: <BsFillPersonLinesFill size={30} />,
              bg: "bg-gray-600",
              href: "#",
            },
          ].map(({ label, icon, bg, href }) => (
            <li
              key={label}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg} rounded-r-md shadow-md`}
            >
              <a
                className="flex justify-between items-center w-full px-4"
                href={href}
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
