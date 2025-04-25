import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import resumePdf from '../assets/Rimsha-Sajid-CV.pdf'; 
import aboutMeImage from '../assets/aboutme.png'; 

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
              Hi! I'm Rimsha Sajid, a frontend web developer with a strong passion for building clean, efficient, and responsive user interfaces using modern technologies. I'm currently pursuing a degree in Software Engineering at COMSATS University Islamabad.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              My primary focus lies in developing dynamic and accessible web applications using <strong>ReactJS</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. I enjoy transforming designs into functional components, maintaining code quality, and ensuring great user experience across all devices.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              Along with frontend frameworks, I have hands-on experience with JavaScript, HTML, and CSS. I also use design tools like Figma to prototype and translate UI/UX concepts into fully responsive interfaces.
            </p>
            <p className="text-lg leading-relaxed mb-4 hover:text-blue-500 transition-colors duration-300">
              I'm always eager to explore new tools and stay updated with the latest in web development. Whether it's optimizing performance, improving accessibility, or refining UI, I thrive on building intuitive and modern web experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;



