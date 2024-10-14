import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "API's Simple Calculator",
    description: 'A simple calculator API that performs basic arithmetic operations.',
    imageSrc: '/images/calculator.png',
    link: '#',
  },
  {
    title: 'Word Counter',
    description: 'An API that counts the number of words in a given text.',
    imageSrc: '/images/word-counter.png',
    link: '#',
  },
  {
    title: 'CLI Number Guessing Game',
    description: 'A command-line interface game where users guess a number.',
    imageSrc: '/images/number-guessing.png',
    link: '#',
  },
  {
    title: 'Student Management System',
    description: 'A system for managing student records and information.',
    imageSrc: '/images/student-management.png',
    link: '#',
  },
];

const ProjectSection = () => {
  return (
    <div className="bg-black py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
