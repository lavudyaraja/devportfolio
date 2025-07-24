import { useState } from "react";
import { Search, Github, ExternalLink, Sun, Moon } from "lucide-react";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and user authentication.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and contact form.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for any location using OpenWeatherMap API.",
    tags: ["JavaScript", "React", "API Integration"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    description: "A React Native fitness tracking app with workout plans, progress tracking, and social sharing features.",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description: "A mobile app that helps users find recipes based on ingredients they have, dietary preferences, and cooking time.",
    tags: ["React Native", "Node.js", "MongoDB"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "ai",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Sentiment Analysis Tool",
    description: "A machine learning application that analyzes sentiment in customer reviews and social media mentions.",
    tags: ["Python", "Natural Language Processing", "Flask", "React"],
    category: "ai",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

export default function FuturisticProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isDark, setIsDark] = useState(true);
  
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    
    return matchesSearch && matchesCategory;
  });

  const themeClasses = isDark
    ? "bg-black text-white"
    : "bg-gray-100 text-gray-900";

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-cyan-400' : 'bg-blue-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20' 
            : 'bg-gradient-to-br from-blue-200/30 via-transparent to-purple-200/30'
        }`} />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className={`text-2xl font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-cyan-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              CYBER PORTFOLIO
            </h1>
          </div>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full border cursor-pointer ${
              isDark
                ? 'border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50'
                : 'border-blue-500/50 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/50'
            } transition-all duration-300`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-cyan-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </header>

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className={`text-6xl font-bold mb-4 bg-gradient-to-r ${
              isDark
                ? 'from-pink-500 via-red-500 to-yellow-500'
                : 'from-pink-600 via-red-600 to-orange-600'
            } bg-clip-text text-transparent animate-pulse`}>
              NEURAL PROJECTS
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore my portfolio of cybernetic applications and AI-powered innovations
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative group">
              <Search className={`absolute left-4 top-4 h-5 w-5 ${
                isDark ? 'text-cyan-400' : 'text-blue-500'
              } transition-colors duration-300`} />
              <input
                type="text"
                placeholder="Initialize search protocol..."
                className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${
                  isDark
                    ? 'bg-black/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50'
                    : 'bg-white/80 border-blue-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-400/50'
                } backdrop-blur-md transition-all duration-300 focus:outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className={`absolute inset-0 rounded-lg ${
                isDark ? 'bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0' : 'bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`flex space-x-2 p-2 rounded-lg ${
              isDark ? 'bg-black/30' : 'bg-white/50'
            } backdrop-blur-md border ${
              isDark ? 'border-cyan-500/30' : 'border-blue-300'
            }`}>
              {[
                { value: "all", label: "ALL SYSTEMS", color: "cyan" },
                { value: "web", label: "WEB MATRIX", color: "green" },
                { value: "mobile", label: "MOBILE CORE", color: "purple" },
                { value: "ai", label: "AI NEURAL", color: "red" }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setCurrentCategory(tab.value)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
                    currentCategory === tab.value
                      ? `${isDark ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} text-white shadow-lg ${
                          isDark ? 'shadow-cyan-400/50' : 'shadow-blue-400/50'
                        }`
                      : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:bg-white/10`
                  }`}
                  title={`Filter by ${tab.label}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={filteredProjects} isDark={isDark} />
        </div>
      </main>
    </div>
  );
}

function ProjectGrid({ projects, isDark }) {
  const neonColors = [
    { border: 'border-orange-500', shadow: 'shadow-orange-500/50', glow: 'from-orange-500', text: 'text-orange-400' },
    { border: 'border-pink-500', shadow: 'shadow-pink-500/50', glow: 'from-pink-500', text: 'text-pink-400' },
    { border: 'border-cyan-500', shadow: 'shadow-cyan-500/50', glow: 'from-cyan-500', text: 'text-cyan-400' },
    { border: 'border-yellow-500', shadow: 'shadow-yellow-500/50', glow: 'from-yellow-500', text: 'text-yellow-400' },
    { border: 'border-red-500', shadow: 'shadow-red-500/50', glow: 'from-red-500', text: 'text-red-400' },
    { border: 'border-blue-500', shadow: 'shadow-blue-500/50', glow: 'from-blue-500', text: 'text-blue-400' }
  ];

  return projects.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        const color = neonColors[index % neonColors.length];
        return (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg border-2 ${color.border} ${
              isDark ? 'bg-black/50' : 'bg-white/80'
            } backdrop-blur-md transition-all duration-500  hover:scale-105 hover:-translate-y-2`}
          >
            {/* Glow effect */}
            {/* <div className={`absolute inset-0 bg-gradient-to-r ${color.glow} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} /> */}
            
            {/* Featured badge */}
            {project.featured && (
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${
                isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
              } animate-pulse`}>
                FEATURED
              </div>
            )}

            {/* Project Image Area */}
            <div className={`h-48 flex items-center justify-center border-b ${color.border} ${
              isDark ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-200 to-gray-300'
            } relative overflow-hidden`}>
              <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
              <div className={`text-6xl font-bold ${color.text} animate-pulse`}>
                {project.category.toUpperCase()}
              </div>
              {/* Scanning line effect */}
              {/* <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color.glow} to-transparent animate-pulse`} /> */}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className={`text-xl font-bold ${color.text} transition-colors duration-300`}>
                {project.title.toUpperCase()}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              } transition-colors duration-300`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300' 
                        : 'bg-gray-100 border-gray-300 text-gray-700'
                    }transition-all duration-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full border ${color.border} ${color.text} hover:bg-white/10 hover:shadow-lg hover:${color.shadow} transition-all duration-300 group/btn cursor-pointer`}
                    title="View GitHub Repository"
                  >
                    <Github className="h-4 w-4 group-hover/btn:animate-spin" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full border ${color.border} ${color.text} hover:bg-white/10 hover:shadow-lg hover:${color.shadow} transition-all duration-300 group/btn cursor-pointer`}
                    title="View Live Demo"
                  >
                    <ExternalLink className="h-4 w-4 group-hover/btn:animate-pulse" />
                  </a>
                </div>
                
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className={`px-4 py-2 rounded-full bg-gradient-to-r ${color.glow} to-purple-500 text-white font-semibold hover:shadow-lg hover:${color.shadow} transition-all duration-300 hover:scale-105 cursor-pointer`}
                  title="Access Project"
                >
                  ACCESS
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center py-20">
      <div className={`text-8xl mb-6 ${isDark ? 'text-red-500' : 'text-red-600'} animate-pulse`}>
        404
      </div>
      <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        NO PROJECTS FOUND
      </h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
        Recalibrate search parameters and try again
      </p>
    </div>
  );
}