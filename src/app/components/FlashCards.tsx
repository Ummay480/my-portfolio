// components/ProjectCards.tsx
import React from "react";
import Image from "next/image";
import './styles/glossyEffect.css';

interface FlashCardProps {
  title: string;
  content: string;
  imageSrc: string;
  link: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ title, content, imageSrc, link }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden w-full max-w-sm border-4 border-teal-500 shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Circular Image */}
      <div className="relative rounded-full overflow-hidden w-32 h-32 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={128}
          height={128}
          layout="responsive"
        />
      </div>
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
      {/* Rating */}
      <div className="text-yellow-400 mb-2">★★★★★</div>
      {/* Content */}
      <p className="text-gray-300 text-center mb-4">{content}</p>
      {/* Link */}
      <a
        href={link}
        className="text-teal-500 hover:text-teal-300 transition duration-200 text-lg"
      >
        Click Here
      </a>
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border-4 border-transparent animated-border"></div>
    </div>
  );
};

export default FlashCard;
