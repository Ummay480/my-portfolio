"use client";
import React from "react";
import Image from "next/image";
import{Navigation, Autoplay}from "swiper/modules";

// Define the skill logos with their direct paths
const skills = [
  { title: "HTML", image: "/assets/html-logo.svg" },
  { title: "CSS", image: "/assets/css-logo.svg" },
  { title: "JavaScript", image: "/assets/js-logo.svg" },
  { title: "TypeScript", image: "/assets/ts-logo.svg" },
  { title: "Next.js", image: "/assets/nextjs-logo.svg" },
  { title: "Tailwind CSS", image: "/assets/tailwind-logo.svg" },
  { title: "Node.js", image: "/assets/nodejs-logo.svg" },
  { title: "React", image: "/assets/react-logo.svg" },
  { title: "API Development", image: "/assets/api-logo.svg" },
  { title: "Figma", image: "/assets/figma-logo.svg" },
  { title: "WordPress", image: "/assets/WordPress-logo.svg" },
  { title: "Wix", image: "/assets/wix-logo.svg" },
  { title: "Shopify", image: "/assets/shopify-logo.svg" },
  { title: "Elementor", image: "/assets/elementor-logo.svg" },
  { title: "WooCommerce", image: "/assets/woocommerce-logo.svg" },
];

const Skills = () => {
  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          <span  className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
            My Skills
          </span>
        </h2>

        {/* Container for skill logos */}
        <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{
                animation: `spin ${5 + index * 2}s linear infinite`,
              }}
            >
              <Image
                src={skill.image}
                alt={`${skill.title} logo`}
                className="skill-logo"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
