"use client";
import React from "react";
import Image from "next/image";

// Import your images or place them in the `public` folder
import htmlLogo from "/public/assets/html-logo.svg";
import cssLogo from "/public/assets/css-logo.svg";
import jsLogo from "/public/assets/js-logo.svg";
import tsLogo from "/public/assets/ts-logo.svg";
import nextjsLogo from "/public/assets/nextjs-logo.svg";
import tailwindLogo from "/public/assets/tailwind-logo.svg";
import nodejsLogo from "/public/assets/nodejs-logo.svg";
import reactLogo from "/public/assets/react-logo.svg";
import apiLogo from "/public/assets/api-logo.svg";

const skills = [
  { title: "HTML", image: htmlLogo },
  { title: "CSS", image: cssLogo },
  { title: "JavaScript", image: jsLogo },
  { title: "TypeScript", image: tsLogo },
  { title: "Next.js", image: nextjsLogo },
  { title: "Tailwind CSS", image: tailwindLogo },
  { title: "Node.js", image: nodejsLogo },
  { title: "React", image: reactLogo },
  { title: "API Development", image: apiLogo },
];

const Skills = () => {
  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </span>
        </h2>

        {/* Circular 3D rotation container */}
        <div className="relative flex justify-center items-center w-full h-64 mt-12">
          <div className="circular-globe-container relative w-56 h-56">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item absolute"
                style={{
                  transform: `rotateY(${index * (360 / skills.length)}deg) translateZ(180px)`,
                }}
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="skill-logo"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
