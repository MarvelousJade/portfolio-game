"use client";

import { useEffect, useCallback, useMemo, useState } from "react";

export default function Navigation({ currentSection, setCurrentSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const navItems = useMemo(() => [
    { id: "hero", label: "HOME", icon: "🏠" },
    { id: "projects", label: "PROJECTS", icon: "🎮" },
    { id: "about", label: "ABOUT", icon: "👤" },
    { id: "skills", label: "SKILLS", icon: "⚡" },
    { id: "contact", label: "CONTACT", icon: "📡" }
  ], []);

  const handleNavClick = useCallback((sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, [setCurrentSection]);

  // Auto-hide menu after inactivity
  useEffect(() => {
    let timeout;
    if (isMenuOpen && !isHovered) {
      timeout = setTimeout(() => {
        setIsMenuOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isMenuOpen, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      const currentIndex = navItems.findIndex(item => item.id === currentSection);
      
      switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
          handleNavClick(navItems[prevIndex].id);
          break;
          
        case 'arrowdown':
        case 's':
          e.preventDefault();
          const nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
          handleNavClick(navItems[nextIndex].id);
          break;
          
        case 'escape':
          e.preventDefault();
          setIsMenuOpen(!isMenuOpen);
          break;
          
        case ' ':
        case 'enter':
          e.preventDefault();
          // Trigger action for current section
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSection, handleNavClick, navItems, isMenuOpen]);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
        offset: 0
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setCurrentSection, navItems]);

  return (
    <>
      {/* Compact Desktop Navigation - Collapsible */}
      <nav className="fixed top-4 left-4 z-40 hidden md:block">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="pixel-border w-10 h-10 flex items-center justify-center bg-muted/90 backdrop-blur-sm pixel-shadow hover:bg-accent/20 transition-all duration-200"
            title="Navigation Menu (ESC)"
          >
            <span className="text-lg">
              {isMenuOpen ? '✖️' : '☰'}
            </span>
          </button>

          {/* Expandable Menu */}
          {(isMenuOpen || isHovered) && (
            <div className="absolute top-full left-0 mt-2 pixel-border bg-muted/95 backdrop-blur-sm pixel-shadow min-w-48 animate-pixel-bounce">
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 pixel-border ${
                      currentSection === item.id
                        ? 'bg-accent text-background pixel-shadow'
                        : 'bg-transparent text-foreground hover:bg-accent/20'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation - Simplified */}
      <nav className="fixed bottom-4 left-4 right-4 z-40 block md:hidden">
        <div className="pixel-border bg-muted/90 backdrop-blur-sm p-1 pixel-shadow">
          <div className="flex justify-between">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex flex-col items-center gap-1 px-1 py-2 text-xs transition-all duration-200 flex-1 ${
                  currentSection === item.id
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="font-bold text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Minimal Progress Indicator - Repositioned */}
      <div className="fixed top-20 right-4 z-40 hidden xl:block">
        <div className="pixel-border bg-muted/90 backdrop-blur-sm p-2 pixel-shadow">
          <div className="flex space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className={`w-2 h-2 pixel-border transition-all duration-300 ${
                  navItems.findIndex(nav => nav.id === currentSection) >= index
                    ? 'bg-accent'
                    : 'bg-muted'
                }`}
                title={item.label}
              />
            ))}
          </div>
          <div className="text-xs text-center text-muted mt-1">
            {navItems.findIndex(item => item.id === currentSection) + 1}/{navItems.length}
          </div>
        </div>
      </div>

      {/* Keyboard Hints - Toggle */}
      <button
        onClick={() => setShowHints(!showHints)}
        className="fixed bottom-4 right-4 z-40 pixel-border w-10 h-10 flex items-center justify-center bg-muted/90 backdrop-blur-sm pixel-shadow hover:bg-accent/20 transition-all duration-200 hidden lg:block"
        title="Keyboard Shortcuts"
      >
        <span className="text-sm">⌨️</span>
      </button>

      {showHints && (
        <div className="fixed bottom-16 right-4 z-40 pixel-border bg-background/95 backdrop-blur-sm p-3 pixel-shadow animate-pixel-bounce">
          <div className="text-xs text-accent font-bold mb-2">KEYBOARD SHORTCUTS</div>
          <div className="space-y-1 text-xs text-foreground">
            <div>W/S or ↑/↓ - Navigate sections</div>
            <div>ESC - Toggle menu</div>
            <div>Space - Interact</div>
          </div>
        </div>
      )}
    </>
  );
}