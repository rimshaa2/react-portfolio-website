import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import eCommerceImage from '../assets/e-commerce.jpg';
import foodtraceImage from '../assets/food-trace.png';
import portfolioImage from '../assets/portfolio-website.png';

const Projects = () => {
  const projects = [
    {
      image: eCommerceImage,
      title: "E-Commerce Project",
      description: "A fully functional e-commerce system created with Java for backend and JavaFX, Swing for interface. Contains all the main features of an e-commerce website.",
      technologies: ["Java", "JavaFX", "JavaSwing"],
    },
    {
      image: foodtraceImage,
      title: "Food Supply Chain with Smart Contract",
      description: "User-friendly, proper functioning food supply chain system created in figma for UI/UX. Some fully functional features in React.",
      technologies: ["React", "Figma"],
    },
    {
      image: portfolioImage,
      title: "Portfolio Website",
      description: "A personal portfolio website with user interactivity created in React.",
      technologies: ["React", "JavaScript"],
    }
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <CardGroup>
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="m-3 transition-transform transform hover:scale-105"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <Card.Img variant="top" src={project.image} />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="text-white">{project.title}</Card.Title>
                <Card.Text className="text-white">{project.description}</Card.Text>
              </div>
              <div className="mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="badge bg-nuutral-900 me-1 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:text-white transition-all"
                    style={{ cursor: 'pointer' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated just now</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Projects;

