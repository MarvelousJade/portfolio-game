"use client";

import { useState, useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";
import Navigation from "../components/Navigation";
import AudioControls from "../components/AudioControls";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 animate-screen-flicker">
        <div className="scanlines w-full h-full"></div>
      </div>

      {/* Audio Controls */}
      <AudioControls />

      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />

      {/* Main Content */}
      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection isActive={currentSection === "hero"} />
        <ProjectsSection isActive={currentSection === "projects"} />
        <AboutSection isActive={currentSection === "about"} />
        <SkillsSection isActive={currentSection === "skills"} />
        <ContactSection isActive={currentSection === "contact"} />
      </main>
    </div>
  );
}
