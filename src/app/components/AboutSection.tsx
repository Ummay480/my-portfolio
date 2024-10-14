"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Graduation</li>
        <li>Karachi University</li>
        <li>Web3.0</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DigiSkills</li>
        <li>Udemy</li>
        <li>Google Garage</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-[#121212] text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* About Image */}
        <Image
          src="/assets/aboutme.png"
          alt="profile-image"
          width={500}
          height={500}
        />

        {/* About Me Text */}
        <div className="text-center md:text-left">
          <TypeAnimation
            sequence={["About Me", 1000]}
            wrapper="h2"
            speed={50}
            className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text"  
              style={{
              lineHeight: "2",
              marginBottom: "1rem",
            }}
            repeat={Infinity}
          />
          <p className="text-base lg:text-lg">
            I'm a passionate web developer with experience in building modern
            and responsive websites using the latest technologies. I enjoy
            turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <Image
                src="/assets/education.png"
                alt="education-logo"
                height={100}
                width={100}
                className={`cursor-pointer ${tab === "education" ? "opacity-100" : "opacity-50"}`}
              />
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <Image
                src="/assets/skill.png"
                alt="skill-logo"
                height={150}
                width={150}
                className={`cursor-pointer ${tab === "skills" ? "opacity-100" : "opacity-50"}`}
              />
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <Image
                src="/assets/certificate.png"
                alt="certification-logo"
                height={150}
                width={150}
                className={`cursor-pointer ${tab === "certifications" ? "opacity-100" : "opacity-50"}`}
              />
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
