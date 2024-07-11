import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import resumePdf from '../assets/CV-RIMSHA-SAJID.pdf'; // Path to your resume PDF file
import aboutMeImage from '../assets/aboutme.png'; // Path to your about me image

const AboutMe = ({ bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger animation when 50% of the About Me section is in view
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="flex flex-wrap items-center">
          <div
            ref={ref}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0"
          >
            {/* Image section */}
            <motion.img
              src={aboutMeImage}
              alt="About Me"
              className="mb-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              style={{ width: '70%', height: 'auto' }} // Adjust the size here
            />

            {/* Download Resume button */}
            <a
              href={resumePdf}
              download="Rimsha_Sajid_Resume.pdf"
              className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300"
              style={{ visibility: inView ? 'visible' : 'hidden' }}
            >
              Download Resume
            </a>
          </div>
          <motion.div
            className="w-full lg:w-1/2"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : {}}
          >
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              Hello! I am Rimsha Sajid, a passionate and dedicated front-end developer with a strong background in Software Engineering. Currently, I am pursuing my degree at COMSATS University Islamabad.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              Over the course of my studies, I have engaged in numerous projects using languages such as C/C++, Java, HTML, CSS, and JavaScript. My work is driven by a keen interest in creating interactive and user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              In addition to coding, I have honed my skills in UI/UX design using Figma. This has enabled me to develop comprehensive and interactive designs for mobile applications, ensuring a seamless user experience.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              I am always eager to learn new technologies and methodologies, and I am excited to bring my skills and enthusiasm to new projects and collaborations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



