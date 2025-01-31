import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500">
            <FaGithub size={30} />
          </a>
        </div>

        {/* Created By Text */}
        <div className="text-center text-base text-gray-400">
          <p>
            Created by{" "}
            <span className="font-semibold text-white">
              Bhawani Singh Shekhawat
            </span>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
