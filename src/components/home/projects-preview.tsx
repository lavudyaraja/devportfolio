import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and payment processing.",
    image: "/images/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "yellow"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and user authentication.",
    image: "/images/TaskManagement.jpg",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "orange"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy.",
    image: "/images/AIContentGenerator.jpg",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "pink"
  }
];

export function ProjectsPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects-preview";
  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      sectionBg: 'bg-gray-800/50',
      cardBg: 'bg-gray-800/70',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700/50',
      hover: 'hover:bg-gray-700/50',
      imageBg: 'bg-gray-700/50'
    },
    light: {
      bg: 'bg-gray-50',
      sectionBg: 'bg-white/50',
      cardBg: 'bg-white/70',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200/50',
      hover: 'hover:bg-gray-100/50',
      imageBg: 'bg-gray-100/50'
    },
    system: {
      bg: 'bg-slate-800',
      sectionBg: 'bg-slate-700/50',
      cardBg: 'bg-slate-700/70',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      border: 'border-slate-600/50',
      hover: 'hover:bg-slate-600/50',
      imageBg: 'bg-slate-600/50'
    }
  };

  // const currentTheme = themeColors[theme];

  const getProjectColors = (color) => {
    const colors = {
      yellow: {
        accent: 'text-yellow-400',
        border: 'border-yellow-400/30',
        bg: 'bg-yellow-400/10',
        shadow: 'shadow-yellow-400/10',
        dot: 'bg-yellow-400'
      },
      orange: {
        accent: 'text-orange-400',
        border: 'border-orange-400/30',
        bg: 'bg-orange-400/10',
        shadow: 'shadow-orange-400/10',
        dot: 'bg-orange-400'
      },
      pink: {
        accent: 'text-pink-400',
        border: 'border-pink-400/30',
        bg: 'bg-pink-400/10',
        shadow: 'shadow-pink-400/10',
        dot: 'bg-pink-400'
      },
      cyan: {
        accent: 'text-cyan-400',
        border: 'border-cyan-400/30',
        bg: 'bg-cyan-400/10',
        shadow: 'shadow-cyan-400/10',
        dot: 'bg-cyan-400'
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className={`py-20  transition-colors duration-300`}>

      {isProjectPage && (
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-pink-500 text-pink-400 text-sm font-semibold transition duration-300 ease-in-out hover:text-white hover:shadow-[0_0_12px_3px_rgba(255,105,180,0.6)] hover:bg-pink-500"
          >
            <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 opacity-25 blur-sm group-hover:opacity-50 group-hover:blur-md transition-all duration-500"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="z-10">Go Back</span>
          </button>
        </div>
      )}
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 `}>
            <span className="text-cyan-400">Featured</span>{" "}
            <span className="text-pink-400">Projects</span>
          </h2>
          <p className={`text-lg  max-w-2xl mx-auto`}>
            A selection of my recent development work and side projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const projectColors = getProjectColors(project.color);
            
            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-2xl border backdrop-blur-sm
                  
                  hover:${projectColors.border} hover:shadow-xl hover:${projectColors.shadow}
                  transition-all duration-500 transform hover:-translate-y-2
                `}
              >
                {/* Project Image */}
                <div className={`
                  h-56  flex items-center justify-center overflow-hidden
                  relative group-hover:scale-105 transition-transform duration-500
                `}>
                  <div className={`absolute inset-0 ${projectColors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`text-6xl font-bold /20 relative z-10`}>
                    {project.title.split(' ')[0]}
                  </div>
                  <div className={`absolute top-4 right-4 w-3 h-3 ${projectColors.dot} rounded-full group-hover:animate-pulse`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`w-2 h-2 ${projectColors.dot} rounded-full mr-3`}></div>
                    <h3 className={`text-xl font-bold  group-hover:${projectColors.accent} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className={` text-sm leading-relaxed mb-6 line-clamp-3`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`
                          px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm
                          ${tagIndex % 2 === 0 ? 
                            `${projectColors.bg} ${projectColors.border} ${projectColors.accent}` :
                            ``
                          }
                          transition-all duration-300 hover:scale-105
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className={`flex justify-between items-center pt-4 border-t `}>
                    <div className="flex space-x-3">
                      <button
                        className={`
                          p-2 rounded-lg border backdrop-blur-sm transition-all duration-300
                          
                          hover:${projectColors.border} hover:${projectColors.accent} hover:shadow-lg hover:${projectColors.shadow}
                        `}
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                      <button
                        className={`
                          p-2 rounded-lg border backdrop-blur-sm transition-all duration-300
                         
                          hover:${projectColors.border} hover:${projectColors.accent} hover:shadow-lg hover:${projectColors.shadow}
                        `}
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      className={`
                        text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
                         
                        hover:${projectColors.accent}
                      `}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                  bg-gradient-to-br from-${project.color}-400/5 to-transparent
                `}></div>
              </div>
            );
          })}
        </div>
        
        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
        <Link to ="/projects">
          <button className={`
            inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg
            bg-gradient-to-r from-cyan-400/10 to-pink-400/10 
            border border-cyan-400/30 text-cyan-400
             transition-all duration-300
            hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10
            hover:scale-105 transform
          `}> 
            <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
          </button>
          </Link>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-20 delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-25 delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-30 delay-1500"></div>
      </div>
    </section>
  );
}