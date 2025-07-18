# 8-Bit Game Developer Portfolio

An interactive retro-themed portfolio website showcasing game development projects with an authentic 8-bit aesthetic. Built with Next.js 15 and featuring pixel-perfect animations, chiptune sound effects, and responsive design.

## ✨ Features

- **🎮 Retro 8-bit aesthetic** with pixelated fonts, borders, and animations
- **🚀 Landing page** with animated avatar and typewriter effect
- **📂 Projects showcase** with interactive game project cards
- **📊 Character stats screen** styled about section
- **⚡ Skills progression bars** like classic RPG games
- **📡 Retro contact form** styled as game dialog box
- **🎵 Chiptune audio controls** with sound effects on interactions
- **📱 Fully responsive** design maintaining 8-bit aesthetic
- **⌨️ Keyboard navigation** (WASD/Arrow keys)
- **🔍 SEO optimized** for game developer job searches

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd game-portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 Customization

### Personal Information
Update the following files with your information:

1. **`app/layout.js`** - Update metadata, titles, and descriptions
2. **`components/sections/HeroSection.js`** - Change name, title, and avatar
3. **`components/sections/ProjectsSection.js`** - Add your actual projects
4. **`components/sections/AboutSection.js`** - Update bio and achievements
5. **`components/sections/SkillsSection.js`** - Modify skills and levels
6. **`components/sections/ContactSection.js`** - Update contact information
7. **`public/resume.pdf`** - Replace with your actual resume

### Color Scheme
Modify the CSS variables in `app/globals.css`:

```css
:root {
  --background: #0f0f23;    /* Background color */
  --foreground: #00ff00;    /* Primary text color */
  --accent: #ff0080;        /* Accent color */
  --secondary: #00ffff;     /* Secondary color */
  --warning: #ffff00;       /* Warning/highlight color */
  /* ... more variables */
}
```

### Project Data
Update the `projects` array in `components/sections/ProjectsSection.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Game Title",
    description: "Game description...",
    tech: ["Unity", "C#", "Your Tech Stack"],
    image: "🎮", // Emoji or replace with actual images
    playLink: "https://your-game-link.com",
    codeLink: "https://github.com/your-repo",
    status: "Released", // Released, In Development, Beta, Prototype
    players: "Single Player"
  },
  // ... more projects
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### Traditional Hosting

1. **Build for static export** (add to `next.config.mjs`):
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   };
   
   export default nextConfig;
   ```

2. **Build and export**
   ```bash
   npm run build
   ```

3. **Upload the `out` folder** to your web host

## 🎨 Assets

### Required Assets (Replace placeholders)
- `public/favicon.ico` - Your favicon
- `public/icon.svg` - SVG icon for modern browsers
- `public/apple-touch-icon.png` - Apple touch icon
- `public/og-image.png` - Open Graph image (1200x630px)
- `public/resume.pdf` - Your actual resume

### Font Requirements
The portfolio uses:
- **Press Start 2P** - For retro 8-bit text (loaded from Google Fonts)
- **Geist Sans/Mono** - For fallback modern text

## 🔧 Technical Details

### Built With
- **Next.js 15** - React framework with App Router
- **React 19** - User interface library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Web Audio API** - For chiptune sound effects
- **CSS Animations** - Smooth transitions and pixel-perfect effects

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

### Performance
- Static site generation for fast loading
- Optimized assets and images
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (simplified navigation, stacked layout)
- **Tablet**: 768px - 1024px (adapted grid layout)
- **Desktop**: > 1024px (full experience with all features)

## ⌨️ Keyboard Controls

- **W/↑ or S/↓** - Navigate between sections
- **Space/Enter** - Interact with current section
- **Esc** - Close modals/overlays

## 🎵 Audio Features

- **Chiptune music toggle** - Background music control
- **Sound effects** - Button interactions and navigation
- **Volume control** - Adjustable audio levels
- **Web Audio API** - Generated retro sound effects

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data for search engines
- Fast loading and performance optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Support

If you have questions or need help customizing the portfolio:
- Create an issue in the GitHub repository
- Check the documentation in the code comments
- Review the customization examples above

---

**Happy coding and good luck with your game development career!** 🎮✨
