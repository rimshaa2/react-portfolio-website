import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "Feb 2025 - April 2025",
      role: "Web Developer Intern",
      company: "Medical Imaging and Diagnostic Lab, NCAI",
      description: "Developed frontend for NCAI website using React, TypeScript and Tailwind CSS."
    },
    {
      year: "June 2024 - July 2024",
      role: "Javascript ans React Developer Intern",
      company: "KK Solutions",
      description: "Developed and maintained web applications using React, JavaScript, and CSS. Collaborated with the design team to create an interactive and responsive user interface."
    },
    {
      year: "July 2024 - Present",
      role: "Web Developer Intern",
      company: "Codic Solutions",
      description: "Worked on various web projects and Python."
    }
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {experiences.slice(0, -1).map((experience, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });
          
          return (
            <div
              key={index}
              className={`mb-8 flex flex-wrap lg:justify-center transition-opacity duration-700 ease-in-out ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              ref={ref}
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p>{experience.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

