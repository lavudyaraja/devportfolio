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
    <div className={`min-h-screen transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-sm ${
        isDark 
          ? 'bg-gray-900/90 border-gray-700' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Professional Portfolio
            </h1>
          </div>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'hover:bg-gray-800 text-gray-300 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
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

      <main className="py-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A collection of high-impact software solutions showcasing expertise in modern technologies and scalable architectures
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className={`absolute left-4 top-4 h-5 w-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects, technologies, or categories..."
                className={`w-full pl-12 pr-4 py-4 rounded-lg border transition-colors duration-200 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.value}
                  onClick={() => setCurrentCategory(category.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentCategory === category.value
                      ? 'bg-blue-600 text-white shadow-md'
                      : isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`group rounded-xl border transition-all duration-300 hover:shadow-xl ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200'
          }`}
        >
          {/* Header */}
          <div className={`p-6 border-b ${
            isDark ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex space-x-2">
                {project.featured && (
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                    Featured
                  </span>
                )}
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  project.difficulty === 'Expert' 
                    ? 'bg-red-100 text-red-700' 
                    : project.difficulty === 'Advanced'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                }`}>
                  {project.difficulty}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  project.impact === 'High' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {project.impact} Impact
                </span>
              </div>
            </div>
            
            <h3 className={`text-xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
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
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
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
                  className={`p-2 rounded-lg border transition-colors duration-200 ${
                    isDark
                      ? 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border transition-colors duration-200 ${
                    isDark
                      ? 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-20">
      <div className={`text-6xl mb-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        🔍
      </div>
      <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        No Projects Found
      </h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
        Try adjusting your search criteria or browse different categories
      </p>
    </div>
  );
}