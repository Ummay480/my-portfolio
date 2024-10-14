import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <div className="relative group p-1 rounded-lg overflow-hidden">
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 p-1 rounded-lg border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-border"></div>

      {/* Main Card */}
      <div className="relative z-10 bg-black p-6 rounded-lg shadow-lg text-white">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Project Title */}
        <h2 className="text-2xl font-bold text-center mb-2 group-hover:text-pink-400 transition duration-500">
          {title}
        </h2>

        {/* Project Description */}
        <p className="text-center text-gray-400 mb-4">
          {description}
        </p>

        {/* Project Link */}
        <div className="text-center">
          <a
            href={link}
            className="text-blue-400 hover:underline font-semibold"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
