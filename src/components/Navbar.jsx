import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center justify-center gap-8 text-xl text-white">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          About Me
        </Link>
        <Link to="technologies" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          Technologies
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
          Contact
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/rimsha-sajid-7981b3224/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/rimshaa2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-700" />
        </a>
        <a href="https://x.com/rimshaa__" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="hover:text-blue-400" />
        </a>
        <a href="https://www.facebook.com/rimsha.sajjid.9655/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


