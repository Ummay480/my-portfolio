// components/Project.tsx
"use client";
import React from 'react';
import Flashcard from './FlashCards';

const projects = [
  {
    title: 'Student Management System',
    description: 'Manage student data efficiently.',
    imageSrc: '/default-image.png', // Add your image path here
    link: '#', // Add your link here
  },
  {
    title: 'Word Count',
    description: 'A tool to count words in a text.',
    imageSrc: '/default-image.png',
    link: '#',
  },
  // Include other projects similarly...
];

const Project = () => {
  return (
    <section className="bg-[#121212] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <Flashcard
              key={index}
              title={project.title}
              content={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
