"use client";

export default function AboutSection({ isActive }) {
  const characterStats = [
    { stat: "Level", value: "Junior Dev", max: 100 },
    { stat: "Experience", value: "2 Years", max: 100 },
    { stat: "Creativity", value: 95, max: 100 },
    { stat: "Problem Solving", value: 88, max: 100 },
    { stat: "Team Work", value: 92, max: 100 },
    { stat: "Learning Speed", value: 96, max: 100 },
    { stat: "Code Quality", value: 85, max: 100 },
    { stat: "Game Design", value: 90, max: 100 }
  ];

  const achievements = [
    "🏆 First Game Published",
    "🎯 100+ Hours of Unity",
    "🔥 Jam Winner 2023",
    "⚡ Performance Optimizer",
    "🎨 Pixel Art Creator",
    "🧠 AI Implementation",
    "🌐 Multiplayer Expert",
    "📱 Mobile Port Master"
  ];

  const equipment = [
    { name: "Primary IDE", item: "Visual Studio", rarity: "Epic" },
    { name: "Game Engine", item: "Unity 2023.3", rarity: "Legendary" },
    { name: "Graphics Tool", item: "Aseprite", rarity: "Rare" },
    { name: "Version Control", item: "Git & GitHub", rarity: "Common" },
    { name: "3D Modeling", item: "Blender", rarity: "Uncommon" },
    { name: "Audio Tool", item: "Audacity", rarity: "Common" }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Legendary": return "text-warning";
      case "Epic": return "text-accent";
      case "Rare": return "text-secondary";
      case "Uncommon": return "text-foreground";
      case "Common": return "text-muted";
      default: return "text-foreground";
    }
  };

  return (
    <section 
      id="about" 
      className={`min-h-screen py-20 px-4 transition-all duration-500 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 glow">
          <span className="text-accent">▸ </span>CHARACTER STATS
        </h2>
        
        <p className="text-center text-secondary mb-12 text-sm sm:text-base">
          View player information and current loadout
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Character Info Panel */}
          <div className="pixel-border bg-muted p-6 pixel-shadow">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              📊 PLAYER STATS
            </h3>
            
            <div className="space-y-3">
              {characterStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-foreground">{stat.stat}</span>
                    <span className="text-secondary">
                      {typeof stat.value === 'number' ? `${stat.value}/${stat.max}` : stat.value}
                    </span>
                  </div>
                  {typeof stat.value === 'number' && (
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(stat.value / stat.max) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bio Panel */}
          <div className="pixel-border bg-muted p-6 pixel-shadow">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              📖 PLAYER BIO
            </h3>
            
            <div className="space-y-4 text-sm">
              <p className="text-foreground leading-relaxed">
                Passionate junior game developer with a love for creating immersive experiences. 
                Started coding at age 16 and fell in love with game development after creating 
                my first platformer in Unity.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Specializes in 2D/3D game mechanics, performance optimization, and creating 
                engaging gameplay loops. Always eager to learn new technologies and collaborate 
                with fellow developers.
              </p>
              
              <p className="text-foreground leading-relaxed">
                When not coding, I enjoy playing indie games, creating pixel art, and 
                participating in game jams to challenge my creativity and technical skills.
              </p>
            </div>
          </div>

          {/* Achievements Panel */}
          <div className="pixel-border bg-muted p-6 pixel-shadow">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              🏅 ACHIEVEMENTS
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="pixel-border bg-background p-2 text-xs hover:bg-accent/10 transition-colors"
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Panel */}
          <div className="pixel-border bg-muted p-6 pixel-shadow">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              ⚔️ EQUIPMENT
            </h3>
            
            <div className="space-y-2">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pixel-border bg-background p-2 text-sm"
                >
                  <div>
                    <div className="text-foreground">{item.name}</div>
                    <div className={`text-xs ${getRarityColor(item.rarity)}`}>
                      {item.item}
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 pixel-border ${getRarityColor(item.rarity)} bg-background`}>
                    {item.rarity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quest Log */}
        <div className="mt-8 pixel-border bg-muted p-6 pixel-shadow">
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
            📜 CURRENT QUESTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="pixel-border bg-background p-4">
              <div className="text-warning mb-2">🎯 MAIN QUEST</div>
              <div className="text-sm text-foreground">
                Land First Junior Developer Role
              </div>
              <div className="text-xs text-muted mt-1">In Progress...</div>
            </div>
            
            <div className="pixel-border bg-background p-4">
              <div className="text-secondary mb-2">⭐ SIDE QUEST</div>
              <div className="text-sm text-foreground">
                Complete 3D Game Project
              </div>
              <div className="text-xs text-muted mt-1">75% Complete</div>
            </div>
            
            <div className="pixel-border bg-background p-4">
              <div className="text-accent mb-2">🔄 DAILY QUEST</div>
              <div className="text-sm text-foreground">
                Code for 2+ Hours
              </div>
              <div className="text-xs text-accent mt-1">Completed!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}