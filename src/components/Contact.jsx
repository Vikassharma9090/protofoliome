// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import ThankYou from '../components/ThankYou';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
// const navigate = useNavigate();

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission success
    toast.success('Thank you for reaching out! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Vikas Sharma</title>
        <meta name="description" content="Get in touch with Vikas Sharma, a Full Stack Developer specializing in modern web and cloud technologies." />
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full min-h-screen bg-gradient-to-br from-[#0a192f] to-[#1e293b] text-gray-300 flex justify-center items-center px-4 py-24">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] backdrop-blur-md bg-white/5 border border-pink-500/20 shadow-lg p-10 rounded-xl animate-fade-in-up transition-transform duration-700"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white border-b-4 border-pink-600 inline-block pb-2">
              Contact Me
            </h2>
            <p className="mt-4 text-pink-300 text-sm sm:text-base">
              Let's collaborate — drop your message below or connect via social platforms.
            </p>
          </div>

          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-6 bg-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            🚀 Send Message
          </button>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 text-pink-400">
            <a
              href="mailto:vikaskumarasharma06470@gmail.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://github.com/vikascodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vikas-sharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
