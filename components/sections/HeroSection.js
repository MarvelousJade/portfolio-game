"use client";

import { useState, useEffect } from "react";

export default function HeroSection({ isActive }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "GAME DEVELOPER";
  const subtitle = "Junior Developer | Unity & Unreal | Indie Game Creator";

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [currentIndex, isActive, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const pixelAvatar = (
    <div className="relative">
      <div className="w-32 h-32 sm:w-48 sm:h-48 pixel-perfect bg-gradient-to-b from-accent to-secondary pixel-border pixel-shadow animate-pixel-bounce">
        <div className="w-full h-full flex items-center justify-center text-4xl sm:text-6xl">
          🎮
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning pixel-border animate-blink">
        <div className="w-full h-full flex items-center justify-center text-xs">
          LV1
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-500 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          {pixelAvatar}
        </div>
        
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 glow">
          <span className="text-accent">▸ </span>
          {displayText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
        </h1>
        
        <p className="text-sm sm:text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="pixel-border bg-accent text-background px-6 py-3 hover:bg-secondary transition-colors pixel-shadow"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW PROJECTS
          </button>
          
          <button 
            className="pixel-border bg-transparent border-secondary text-secondary px-6 py-3 hover:bg-secondary hover:text-background transition-colors"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </button>
          
          <a 
            href="/resume.pdf" 
            download
            className="pixel-border bg-warning text-background px-6 py-3 hover:bg-danger transition-colors pixel-shadow flex items-center gap-2"
          >
            📄 DOWNLOAD RESUME
          </a>
        </div>
        
        <div className="mt-12 text-muted text-xs sm:text-sm">
          <p>▸ Use WASD or arrow keys to navigate</p>
          <p>▸ Press SPACE to interact</p>
        </div>
      </div>
    </section>
  );
}