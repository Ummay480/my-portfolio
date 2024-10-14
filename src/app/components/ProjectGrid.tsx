import React from 'react';
import ProjectCard from './ProjectCard';  // Assuming ProjectCard is in the same directory

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      imageSrc: 'https://via.placeholder.com/100',  // Replace with actual image source
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      imageSrc: 'https://via.placeholder.com/100',  // Replace with actual image source
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      imageSrc: 'https://via.placeholder.com/100',  // Replace with actual image source
      link: '#'
    },
    // Add more project objects as needed
  ];

  return (
    <div className="bg-black py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default ProjectGrid;
