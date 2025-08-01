import { useState } from "react";
import { Search, Github, ExternalLink, Sun, Moon, Code, Database, Brain, Palette, Server, Smartphone } from "lucide-react";

const allProjects = [
  // Frontend Projects
  {
    title: "Real-time Collaborative IDE",
    description: "A web-based IDE with real-time collaboration, syntax highlighting, and integrated debugging. Features live cursor tracking, voice chat, and code execution in multiple languages.",
    tags: ["React", "WebRTC", "Monaco Editor", "Socket.io", "Docker"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Advanced",
    impact: "High"
  },
  {
    title: "3D Portfolio Experience",
    description: "An immersive 3D portfolio website built with Three.js featuring interactive scenes, physics simulations, and WebGL shaders for stunning visual effects.",
    tags: ["Three.js", "WebGL", "GLSL", "React", "Framer Motion"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Expert",
    impact: "Medium"
  },
  {
    title: "Component Library & Design System",
    description: "A comprehensive React component library with TypeScript, Storybook documentation, automated testing, and npm publishing pipeline.",
    tags: ["TypeScript", "Storybook", "Jest", "Rollup", "Chromatic"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "High"
  },

  // Fullstack Projects
  {
    title: "Distributed Video Streaming Platform",
    description: "A Netflix-like platform with microservices architecture, CDN integration, adaptive bitrate streaming, and ML-powered content recommendations.",
    tags: ["Node.js", "React", "AWS", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "Real-time Trading Dashboard",
    description: "A high-frequency trading dashboard with WebSocket connections, real-time charts, portfolio management, and algorithmic trading strategies.",
    tags: ["React", "Node.js", "WebSockets", "D3.js", "MongoDB", "Redis"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "Event-Driven E-commerce Platform",
    description: "Scalable e-commerce platform using event sourcing, CQRS pattern, payment processing, inventory management, and analytics dashboard.",
    tags: ["Next.js", "GraphQL", "Event Sourcing", "Stripe", "Elasticsearch"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "High"
  },

  // Machine Learning Projects
  {
    title: "Computer Vision Defect Detection",
    description: "An AI system for manufacturing quality control using deep learning to detect product defects with 99.7% accuracy in real-time production lines.",
    tags: ["PyTorch", "OpenCV", "FastAPI", "Docker", "ONNX", "React"],
    category: "ml",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "NLP Document Intelligence",
    description: "Advanced document processing system using transformers for entity extraction, document classification, and automated insights generation.",
    tags: ["Transformers", "spaCy", "FastAPI", "PostgreSQL", "Celery"],
    category: "ml",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering and content-based approaches with real-time model updates and A/B testing.",
    tags: ["TensorFlow", "Apache Spark", "Kafka", "Redis", "MLflow"],
    category: "ml",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "Medium"
  },

  // UI/UX Projects
  {
    title: "Design System & Figma Plugin",
    description: "Complete design system with automated code generation, accessibility testing, and Figma plugin for seamless designer-developer workflow.",
    tags: ["Figma API", "Design Tokens", "Storybook", "React", "TypeScript"],
    category: "ui",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "Medium"
  },
  {
    title: "Interactive Data Visualization Suite",
    description: "Advanced data visualization library with custom charts, real-time updates, and interactive dashboards for complex data analysis.",
    tags: ["D3.js", "WebGL", "Canvas", "React", "Observable"],
    category: "ui",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "Medium"
  },

  // Backend/DevOps Projects
  {
    title: "Serverless Auto-scaling Architecture",
    description: "Cloud-native microservices platform with auto-scaling, monitoring, logging, and CI/CD pipelines handling 1M+ requests per day.",
    tags: ["AWS Lambda", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
    category: "backend",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "GraphQL Federation Gateway",
    description: "Unified GraphQL API gateway implementing schema federation, caching, rate limiting, and real-time subscriptions across microservices.",
    tags: ["GraphQL", "Apollo Federation", "Redis", "Node.js", "Docker"],
    category: "backend",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "High"
  },

  // Mobile Projects
  {
    title: "AR Shopping Experience",
    description: "Augmented reality mobile app allowing users to visualize furniture and products in their space before purchasing, with 3D model integration.",
    tags: ["React Native", "ARKit", "ARCore", "Three.js", "Firebase"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    featured: true,
    difficulty: "Expert",
    impact: "High"
  },
  {
    title: "Offline-First Social Platform",
    description: "Social media app with offline synchronization, end-to-end encryption, real-time messaging, and content sharing across devices.",
    tags: ["React Native", "SQLite", "WebRTC", "Redux Persist", "Expo"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
    featured: false,
    difficulty: "Advanced",
    impact: "Medium"
  }
];

export default function ProfessionalPortfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isDark, setIsDark] = useState(false);
  
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "all", label: "All Projects", icon: Code },
    { value: "frontend", label: "Frontend", icon: Palette },
    { value: "fullstack", label: "Full Stack", icon: Server },
    { value: "ml", label: "Machine Learning", icon: Brain },
    { value: "ui", label: "UI/UX", icon: Palette },
    { value: "backend", label: "Backend/DevOps", icon: Database },
    { value: "mobile", label: "Mobile", icon: Smartphone }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        isDark 
          ? 'bg-slate-900/80 border-slate-700/50 shadow-lg shadow-slate-900/20' 
          : 'bg-white/80 border-slate-200/50 shadow-lg shadow-slate-900/5'
      }`}>
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-lg ${
              isDark 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25' 
                : 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-600/25'
            } flex items-center justify-center`}>
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className={`text-2xl font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-slate-100 to-slate-300' 
                : 'from-slate-900 to-slate-700'
            } bg-clip-text text-transparent`}>
              Professional Portfolio
            </h1>
          </div>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isDark
                ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200 hover:shadow-lg hover:shadow-slate-800/50'
                : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-900/10'
            }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h2 className={`text-6xl font-bold mb-8 bg-gradient-to-r ${
              isDark 
                ? 'from-slate-100 via-blue-100 to-indigo-200' 
                : 'from-slate-900 via-blue-900 to-indigo-900'
            } bg-clip-text text-transparent`}>
              Featured Projects
            </h2>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A collection of high-impact software solutions showcasing expertise in modern technologies and scalable architectures
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className={`absolute left-4 top-4 h-5 w-5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects, technologies, or categories..."
                className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:bg-slate-800/80 shadow-xl shadow-slate-900/20'
                    : 'bg-white/70 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:bg-white shadow-xl shadow-slate-900/5'
                } focus:outline-none focus:ring-4 focus:ring-blue-500/20 backdrop-blur-sm`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.value}
                  onClick={() => setCurrentCategory(category.value)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentCategory === category.value
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                      : isDark
                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-slate-100 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/20'
                        : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/10'
                  } backdrop-blur-sm`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={filteredProjects} isDark={isDark} />
        </div>
      </main>
    </div>
  );
}

function ProjectGrid({ projects, isDark }) {
  return projects.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`group rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/70 hover:shadow-slate-900/30 backdrop-blur-sm' 
              : 'bg-white/70 border-slate-200/50 hover:border-slate-300/70 hover:shadow-slate-900/10 backdrop-blur-sm'
          }`}
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // e.target.style.display = 'none';
                // e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback for broken images */}
            <div className={`hidden w-full h-48 items-center justify-center ${
              isDark ? 'bg-slate-700' : 'bg-slate-100'
            }`}>
              <div className={`text-4xl ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                📱
              </div>
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay with badges */}
            <div className="absolute top-4 left-4 flex space-x-2">
              {project.featured && (
                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg backdrop-blur-sm">
                  Featured
                </span>
              )}
              <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${
                project.difficulty === 'Expert' 
                  ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white' 
                  : project.difficulty === 'Advanced'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                    : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
              }`}>
                {project.difficulty}
              </span>
            </div>
            
            {/* Impact badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${
                project.impact === 'High' 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
              }`}>
                {project.impact} Impact
              </span>
            </div>
          </div>

          {/* Header */}
          <div className={`p-6 border-b ${
            isDark ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {project.title}
            </h3>
            
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors duration-200 ${
                    isDark 
                      ? 'bg-slate-700/70 text-slate-300 hover:bg-slate-600/70 hover:text-slate-200' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'border-slate-600/50 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-700/50'
                      : 'border-slate-300/50 text-slate-600 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'border-slate-600/50 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-700/50'
                      : 'border-slate-300/50 text-slate-600 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-24">
      <div className={`text-8xl mb-8 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
        🔍
      </div>
      <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
        No Projects Found
      </h3>
      <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg max-w-md mx-auto`}>
        Try adjusting your search criteria or browse different categories to discover amazing projects
      </p>
    </div>
  );
}