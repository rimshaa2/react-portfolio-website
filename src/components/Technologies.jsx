import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

import { SiOracle } from "react-icons/si";

const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies" ref={ref}>
      <div className="text-center">
        <h1 className="my-20 text-4xl">Technologies</h1>
      </div>
      <div className="flex justify-center items-center gap-8 mt-8">
        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-red-600 to-red-800 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaJava className="text-4xl text-white hover:text-red-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            Java
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-700 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaHtml5 className="text-4xl text-white hover:text-orange-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            HTML5
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaCss3Alt className="text-4xl text-white hover:text-blue-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            CSS3
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-purple-500 to-purple-700 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaBootstrap className="text-4xl text-white hover:text-purple-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            Bootstrap
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaJs className="text-4xl text-white hover:text-yellow-200" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            JavaScript
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaReact className="text-4xl text-white hover:text-cyan-200" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            ReactJS
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-sky-400 to-sky-600 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <SiTailwindcss className="text-4xl text-white hover:text-sky-200" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            Tailwind CSS
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <SiTypescript className="text-4xl text-white hover:text-blue-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            TypeScript
          </motion.p>
        </motion.div>


        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-blue-300 to-blue-500 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaPython className="text-4xl text-white hover:text-blue-100" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            Python
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-red-600 to-red-800 p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <SiOracle className="text-4xl text-white hover:text-red-300" />
          </motion.div>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            variants={textVariants}
          >
            Oracle
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;







