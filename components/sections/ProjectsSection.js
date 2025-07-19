"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectsSection({ isActive }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Hollow Knight Boss Fight ",
      description: "A 2D platformer game with challenging gameplay mechanics.",
      tech: ["SDL2", "C++"],
      image: "/hollow-knight.png",
      playLink: "#",
      codeLink: "https://github.com/MarvelousJade/hollow-zero",
      status: "Released",
      players: "Single Player"
    },
    {
      id: 2,
      title: "Chicken Defense",
      description: "A fast-paced arcade shooter where you defend your base from waves of invading chickens.",
      tech: ["SDL2", "C++"],
      image: "🐔",
      playLink: "https://marvelousjade.itch.io/chicken-defense",
      codeLink: "https://github.com/MarvelousJade/chicken-defense-game",
      status: "Released",
      players: "Single Player"
    },
    {
      id: 3,
      title: "Souls-like",
      description: "Dark Souls",
      tech: ["Unreal", "C++"],
      image: "⚔️",
      playLink: "#",
      codeLink: "#",
      status: "In Development",
      players: "Single Player"
    },
    // {
    //   id: 4,
    //   title: "Puzzle Mechanics Demo",
    //   description: "Collection of innovative puzzle mechanics and gameplay prototypes.",
    //   tech: ["Unity", "C#", "Shader Graph", "DOTween"],
    //   image: "🧩",
    //   playLink: "#",
    //   codeLink: "#",
    //   status: "Prototype",
    //   players: "Single Player"
    // },
    // {
    //   id: 5,
    //   title: "Mobile Racing Game",
    //   description: "High-speed mobile racing game with customizable vehicles and tracks.",
    //   tech: ["Unity", "C#", "Mobile SDK", "Firebase"],
    //   image: "🏎️",
    //   playLink: "#",
    //   codeLink: "#",
    //   status: "Released",
    //   players: "Single Player"
    // },
    // {
    //   id: 6,
    //   title: "AI Battle Arena",
    //   description: "Strategy game featuring AI opponents with machine learning behaviors.",
    //   tech: ["Unity", "ML-Agents", "Python", "TensorFlow"],
    //   image: "🤖",
    //   playLink: "#",
    //   codeLink: "#",
    //   status: "In Development",
    //   players: "Single Player"
    // }
  ];

  const techColors = {
    "Unity": "bg-accent",
    "C#": "bg-secondary",
    "Unreal Engine": "bg-warning",
    "C++": "bg-danger",
    "Python": "bg-accent",
    "Aseprite": "bg-muted",
    "Photon": "bg-secondary",
    "SteamVR": "bg-warning",
    "Blender": "bg-accent",
    "Netcode": "bg-danger",
    "MySQL": "bg-secondary",
    "Shader Graph": "bg-warning",
    "DOTween": "bg-accent",
    "Mobile SDK": "bg-muted",
    "Firebase": "bg-danger",
    "ML-Agents": "bg-secondary",
    "TensorFlow": "bg-warning"
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Released": return "text-accent";
      case "In Development": return "text-warning";
      case "Beta": return "text-secondary";
      case "Prototype": return "text-muted";
      default: return "text-foreground";
    }
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 px-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 glow">
          <span className="text-accent">▸ </span>GAME PROJECTS
        </h2>

        <p className="text-center text-secondary mb-12 text-sm sm:text-base">
          Select a project to view details • Use arrow keys to navigate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`pixel-border bg-muted hover:bg-accent/10 transition-all duration-300 cursor-pointer p-4 ${selectedProject?.id === project.id ? 'bg-accent/20 pixel-shadow' : ''
                }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4 text-center animate-pixel-bounce flex justify-center items-center h-16">
                {project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="pixel-perfect object-contain"
                  />
                ) : (
                  <span className="text-4xl">{project.image}</span>
                )}
              </div>

              <h3 className="text-lg font-bold mb-2 text-accent">
                {project.title}
              </h3>

              <p className="text-sm text-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2 py-1 pixel-border ${techColors[tech] || 'bg-muted'} text-background`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-1 pixel-border bg-muted text-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className={`${getStatusColor(project.status)}`}>
                  ● {project.status}
                </span>
                <span className="text-muted">
                  {project.players}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-12 pixel-border bg-background p-6 pixel-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <div className="text-6xl text-center mb-4 animate-pixel-bounce flex justify-center items-center h-24">
                  {selectedProject.image.startsWith('/') ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={96}
                      height={96}
                      className="pixel-perfect object-contain"
                    />
                  ) : (
                    <span className="text-6xl">{selectedProject.image}</span>
                  )}
                </div>
                <div className="text-center">
                  <div className={`text-sm ${getStatusColor(selectedProject.status)} mb-2`}>
                    ● {selectedProject.status}
                  </div>
                  <div className="text-sm text-muted">
                    {selectedProject.players}
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-secondary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-sm px-3 py-1 pixel-border ${techColors[tech] || 'bg-muted'} text-background`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.playLink}
                    className="pixel-border bg-accent text-background px-6 py-3 text-center hover:bg-secondary transition-colors pixel-shadow"
                  >
                    🎮 PLAY GAME
                  </a>
                  <a
                    href={selectedProject.codeLink}
                    className="pixel-border bg-transparent border-secondary text-secondary px-6 py-3 text-center hover:bg-secondary hover:text-background transition-colors pixel-shadow"
                  >
                    💻 VIEW CODE
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-muted hover:text-accent transition-colors"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
