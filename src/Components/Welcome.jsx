import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-white bg-gray-700"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 text-blue-400"
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 50 }}
      >
        Welcome to Our Website
      </motion.h1>
      <motion.p
        className="text-lg mb-8 text-gray-300"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 50 }}
      >
        Get ready to explore something amazing!
      </motion.p>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
          <Link to="/body"> Get Started</Link>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;
