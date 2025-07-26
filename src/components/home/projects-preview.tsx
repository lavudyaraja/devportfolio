import React, { useState, useEffect, useCallback } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/your/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: '2',
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing projects, blogs, and contact info. Built using Next.js and TailwindCSS with optimal performance and SEO.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/your/portfolio",
    demoUrl: "https://your-portfolio.com",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: '3',
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    tags: ["Vue.js", "Firebase", "Socket.io", "Vuetify"],
    githubUrl: "https://github.com/your/taskmanager",
    demoUrl: "https://taskmanager-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: '4',
    title: "Weather Dashboard",
    description: "An interactive weather dashboard providing real-time weather data, forecasts, and climate analytics with beautiful data visualizations.",
    tags: ["React", "D3.js", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/your/weather-dashboard",
    demoUrl: "https://weather-dashboard.com",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: '5',
    title: "Social Media Analytics",
    description: "A comprehensive social media analytics platform that tracks engagement, analyzes trends, and provides actionable insights for content creators.",
    tags: ["Angular", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/your/social-analytics",
    demoUrl: "https://social-analytics-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
  },
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FEATURED_PROJECTS.length);
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 4;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentProject = FEATURED_PROJECTS[currentIndex];

  return (
    <section
      className="w-full bg-gray-900 py-16 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Developer Projects</h2>
        </div>

        <div className="relative">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-video md:aspect-square">
                <img
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 font-semibold"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Progress Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {FEATURED_PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 rounded-full overflow-hidden ${
                index === currentIndex
                  ? 'w-8 h-3 bg-white/30'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to project ${index + 1}`}
            >
              {index === currentIndex && (
                <div
                  className="absolute inset-0 bg-blue-500 rounded-full transition-all duration-100 ease-linear"
                  style={{
                    width: `${progress}%`,
                    transformOrigin: 'left center',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-10">
          <a
            href="/projects"
            className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
