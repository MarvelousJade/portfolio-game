"use client";

import { useState, useEffect, useMemo } from "react";

export default function SkillsSection({ isActive }) {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = useMemo(() => [
    {
      category: "Game Engines",
      skills: [
        { name: "SDL2", level: 85, icon: "🎮" },
        { name: "Unreal Engine", level: 70, icon: "🔧" },
        { name: "Godot", level: 60, icon: "🚀" },
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: 85, icon: "⚙️" },
        { name: "JavaScript", level: 80, icon: "🌐" },
        { name: "Python", level: 70, icon: "🐍" }
      ]
    },
    {
      category: "Game Development",
      skills: [
        // { name: "2D Graphics", level: 85, icon: "🎨" },
        { name: "Physics Systems", level: 80, icon: "🔬" },
        { name: "AI Programming", level: 75, icon: "🤖" },
        { name: "Audio", level: 70, icon: "🎧" }
      ]
    },
    {
      category: "Tools & Software",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "📝" },
        // { name: "Blender", level: 65, icon: "🎭" },
        // { name: "Aseprite", level: 80, icon: "🖼️" },
        { name: "GDB", level: 70, icon: "💻" },
        { name: "Reaper", level: 70, icon: "💽" },
        // { name: "Photoshop", level: 70, icon: "🎨" }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95, icon: "🧩" },
        { name: "Team Collaboration", level: 88, icon: "👥" },
        { name: "Project Management", level: 75, icon: "📊" },
        { name: "Communication", level: 85, icon: "💬" }
      ]
    },
    {
      category: "Specializations",
      skills: [
        // { name: "Mobile Games", level: 80, icon: "📱" },
        // { name: "VR Development", level: 65, icon: "🥽" },
        { name: "Indie Game Dev", level: 80, icon: "⭐" },
        { name: "Game Optimization", level: 75, icon: "⚡" }
      ]
    }
  ], []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        const newAnimatedSkills = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newAnimatedSkills[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(newAnimatedSkills);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isActive, skillCategories]);

  const getSkillColor = (level) => {
    if (level >= 85) return "from-accent to-warning";
    if (level >= 70) return "from-secondary to-accent";
    if (level >= 50) return "from-muted to-secondary";
    return "from-background to-muted";
  };

  const getSkillRank = (level) => {
    if (level >= 90) return "MASTER";
    if (level >= 80) return "EXPERT";
    if (level >= 70) return "ADVANCED";
    if (level >= 60) return "INTERMEDIATE";
    return "NOVICE";
  };

  const getRankColor = (level) => {
    if (level >= 90) return "text-warning";
    if (level >= 80) return "text-accent";
    if (level >= 70) return "text-secondary";
    if (level >= 60) return "text-foreground";
    return "text-muted";
  };

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 glow">
          <span className="text-accent">▸ </span>SKILL TREE
        </h2>

        <p className="text-center text-secondary mb-12 text-sm sm:text-base">
          Current abilities and proficiency levels
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="pixel-border bg-muted p-6 pixel-shadow"
            >
              <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                🔰 {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <div className="text-xs flex items-center gap-2">
                        <span className={getRankColor(skill.level)}>
                          {getSkillRank(skill.level)}
                        </span>
                        <span className="text-secondary">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    <div className="progress-bar h-3">
                      <div
                        className={`progress-fill bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{
                          width: isActive && animatedSkills[skill.name]
                            ? `${animatedSkills[skill.name]}%`
                            : '0%'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Points Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pixel-border bg-accent/20 p-6 text-center">
            <div className="text-2xl font-bold text-accent mb-2">10+</div>
            <div className="text-sm text-foreground">Technologies Mastered</div>
          </div>

          <div className="pixel-border bg-secondary/20 p-6 text-center">
            <div className="text-2xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-foreground">Hours of Game Dev</div>
          </div>

          <div className="pixel-border bg-warning/20 p-6 text-center">
            <div className="text-2xl font-bold text-warning mb-2">3+</div>
            <div className="text-sm text-foreground">Completed Projects</div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-12 pixel-border bg-muted p-6 pixel-shadow">
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
            🎯 CURRENT LEARNING PATH
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-secondary">Next Level:</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>🔮 Shader Programming</span>
                  <span className="text-warning">Planned</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>🎵 Audio Programming</span>
                  <span className="text-warning">In Progress</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-secondary">Skill Goals:</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Unreal → Advanced Level</span>
                  <span className="text-accent">75% → 85%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>C++ → Advanced Level</span>
                  <span className="text-accent">75% → 85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
