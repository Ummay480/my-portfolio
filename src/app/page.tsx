// pages/index.tsx or pages/home.tsx
import React from "react";
import HeroSection from "./components/HeroSection"; 
import Navbar from "./components/Navbar"; 
import AboutMe from "./components/AboutSection"; 
import Project from './components/Project';
import Skills from './components/Skills';
import ContactUs from './components/ContactForm';
import Footer from "./components/Footer"; 

import ProjectSection from "./components/ProjectSection";

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="flex items-center justify-center bg-white">
        <AboutMe />
      </div>

      {/* Project Section */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-black">My Projects</h1>
        <ProjectSection />
      </div>
      
        {/* Skill Section */}
      <Skills/>

       {/* ContactUs Section */}
       <ContactUs/>

       {/* Footer Section */}
     
       <Footer/>

   </main>
  );
};

// Ensure this line is corrected:
export default HomePage;


