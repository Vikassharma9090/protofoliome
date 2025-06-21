import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-6 text-center backdrop-blur-md bg-white/70 dark:bg-[#0a192f]/70 text-gray-700 dark:text-gray-300 transition-all duration-500 font-medium shadow-inner">
      <p className="text-sm md:text-base">
        © {year} <span className="font-semibold text-pink-500">Vikas Sharma</span>. All Rights Reserved.
      </p>
      <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
        Terms & Conditions | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
