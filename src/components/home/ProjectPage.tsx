import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "yellow"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and user authentication.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "orange"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "pink"
  },
  {
    title: "Weather Dashboard",
    description: "A comprehensive weather tracking application with real-time data, forecasts, and interactive maps for multiple locations.",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "cyan"
  }
];

const getProjectColors = (color) => {
  const colors = {
    yellow: {
      accent: 'text-yellow-400',
      border: 'border-yellow-400/30',
      bg: 'bg-yellow-400/10',
      shadow: 'shadow-yellow-400/20',
      dot: 'bg-yellow-400',
      gradient: 'from-yellow-400/20 to-yellow-600/10'
    },
    orange: {
      accent: 'text-orange-400',
      border: 'border-orange-400/30',
      bg: 'bg-orange-400/10',
      shadow: 'shadow-orange-400/20',
      dot: 'bg-orange-400',
      gradient: 'from-orange-400/20 to-orange-600/10'
    },
    pink: {
      accent: 'text-pink-400',
      border: 'border-pink-400/30',
      bg: 'bg-pink-400/10',
      shadow: 'shadow-pink-400/20',
      dot: 'bg-pink-400',
      gradient: 'from-pink-400/20 to-pink-600/10'
    },
    cyan: {
      accent: 'text-cyan-400',
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-400/10',
      shadow: 'shadow-cyan-400/20',
      dot: 'bg-cyan-400',
      gradient: 'from-cyan-400/20 to-cyan-600/10'
    }
  };
  return colors[color] || colors.cyan;
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + featuredProjects.length) % featuredProjects.length;
    
    switch (diff) {
      case 0: // Center (active)
        return {
          transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
          opacity: 1,
          zIndex: 10
        };
      case 1: // Coming from right
        return {
          transform: 'translateX(300px) translateZ(-200px) rotateY(-45deg) scale(0.8)',
          opacity: 0.6,
          zIndex: 5
        };
      case 2: // Far right (hidden)
        return {
          transform: 'translateX(500px) translateZ(-400px) rotateY(-60deg) scale(0.6)',
          opacity: 0,
          zIndex: 1
        };
      case featuredProjects.length - 1: // Going to left
        return {
          transform: 'translateX(-300px) translateZ(-200px) rotateY(45deg) scale(0.8)',
          opacity: 0.6,
          zIndex: 5
        };
      default: // Far left (hidden)
        return {
          transform: 'translateX(-500px) translateZ(-400px) rotateY(60deg) scale(0.6)',
          opacity: 0,
          zIndex: 1
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Featured</span>{" "}
            <span className="text-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest development work through this immersive 3D showcase
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1000px' }}>
          {featuredProjects.map((project, index) => {
            const colors = getProjectColors(project.color);
            const isActive = index === currentIndex;
            
            return (
              <div
                key={index}
                className="absolute w-80 h-96 transition-all duration-1000 ease-in-out"
                style={getCardStyle(index)}
              >
                <div className={`
                  h-full rounded-2xl border backdrop-blur-sm bg-gray-800/50
                  ${isActive ? `${colors.border} shadow-2xl ${colors.shadow}` : 'border-gray-700/50'}
                  transition-all duration-1000
                `}>
                  {/* Card Header with Visual */}
                  <div className={`h-48 rounded-t-2xl relative overflow-hidden bg-gradient-to-br ${colors.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-4xl font-bold ${colors.accent} opacity-20`}>
                        {project.title.split(" ").map(word => word[0]).join("")}
                      </div>
                    </div>
                    <div className={`absolute top-4 right-4 w-3 h-3 ${colors.dot} rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
                    <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800/80 to-transparent`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></div>
                      <h3 className={`text-lg font-bold ${isActive ? colors.accent : 'text-white'} transition-colors duration-500`}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs font-medium rounded-full border backdrop-blur-sm
                            ${isActive && tagIndex < 2 ? `${colors.bg} ${colors.border} ${colors.accent}` : 'bg-gray-700/50 border-gray-600/50 text-gray-300'}
                            transition-all duration-500
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-3 border-t border-gray-700/50">
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border backdrop-blur-sm transition-all duration-300
                            ${isActive ? `hover:${colors.border} hover:${colors.accent}` : 'border-gray-600/50 hover:border-gray-500/50'}
                          `}
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-3 h-3" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border backdrop-blur-sm transition-all duration-300
                            ${isActive ? `hover:${colors.border} hover:${colors.accent}` : 'border-gray-600/50 hover:border-gray-500/50'}
                          `}
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <span className="text-xs text-gray-400">
                        {String(index + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Title Display */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-white mb-2">
            {featuredProjects[currentIndex].title}
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            {featuredProjects[currentIndex].description}
          </p>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-15 delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-25 delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-20 delay-1500"></div>
      </div>
    </div>
  );
}