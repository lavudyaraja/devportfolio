import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving abilities make him a valuable asset to any team.",
    author: "Sarah Johnson",
    position: "CTO, TechInnovate",
    color: "neon-blue"
  },
  {
    quote: "Working with John was a great experience. He not only delivered the project on time but also suggested improvements that we hadn't considered. Highly recommend!",
    author: "Michael Chen",
    position: "Product Manager, DataFlow",
    color: "neon-orange"
  },
  {
    quote: "John's technical expertise and communication skills are outstanding. He transformed our vision into a polished, user-friendly application that exceeded our expectations.",
    author: "Emily Rodriguez",
    position: "Founder, StartupLaunch",
    color: "neon-pink"
  },
  {
    quote: "His innovative approach to complex problems and ability to work under pressure makes John one of the best developers I've worked with.",
    author: "David Wilson",
    position: "Lead Engineer, CodeCraft",
    color: "neon-green"
  },
  {
    quote: "John's dedication to clean code and best practices significantly improved our development workflow. A true professional.",
    author: "Lisa Thompson",
    position: "Technical Director, WebSolutions",
    color: "neon-golden"
  }
];

export default function TestimonialsCarousel({ theme = "dark" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Theme configurations matching your navbar
  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/50 border-gray-700/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      controlBg: 'bg-gray-800/80 hover:bg-gray-700',
      controlBorder: 'border-gray-600',
      buttonBg: 'bg-gray-700 hover:bg-gray-600',
      dotInactive: 'bg-gray-600 hover:bg-gray-500'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/80 border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      controlBg: 'bg-white/80 hover:bg-white',
      controlBorder: 'border-gray-200',
      buttonBg: 'bg-gray-200 hover:bg-gray-300',
      dotInactive: 'bg-gray-300 hover:bg-gray-400'
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/50 border-slate-600/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      controlBg: 'bg-slate-700/80 hover:bg-slate-600',
      controlBorder: 'border-slate-500',
      buttonBg: 'bg-slate-600 hover:bg-slate-500',
      dotInactive: 'bg-slate-500 hover:bg-slate-400'
    }
  };

  // Neon color gradients
  const neonColors = {
    'neon-blue': 'from-cyan-400 to-blue-500',
    'neon-orange': 'from-orange-400 to-yellow-500',
    'neon-pink': 'from-pink-400 to-purple-500',
    'neon-green': 'from-green-400 to-emerald-500',
    'neon-golden': 'from-yellow-400 to-orange-500'
  };

  const currentTheme = themeColors[theme];
  const currentTestimonial = testimonials[currentIndex];
  const currentGradient = neonColors[currentTestimonial.color];

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentTheme.bg}`}>
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent`}>
              Client Testimonials
            </h2>
            <div className={`w-24 h-1 mx-auto bg-gradient-to-r ${currentGradient} rounded-full mb-6 shadow-lg`}></div>
            <p className={`text-lg ${currentTheme.textSecondary} max-w-2xl mx-auto`}>
              What clients and colleagues say about my work and collaboration
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className={`relative overflow-hidden rounded-2xl p-8 md:p-12 transition-all duration-500 ${currentTheme.cardBg} backdrop-blur-md shadow-2xl border`}>
              
              {/* Neon Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentGradient} opacity-5 rounded-2xl`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${currentGradient} opacity-10 rounded-2xl blur-xl`}></div>
              
              {/* Quote Icon */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${currentGradient} mb-6 shadow-lg`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote Text */}
                <blockquote className={`text-xl md:text-2xl leading-relaxed mb-8 font-light italic ${currentTheme.text}`}>
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentGradient} mr-4 flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">
                      {currentTestimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className={`font-semibold text-lg ${currentTheme.text}`}>{currentTestimonial.author}</p>
                    <p className={currentTheme.textSecondary}>
                      {currentTestimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${currentTheme.controlBg} ${currentTheme.text} shadow-lg hover:shadow-xl backdrop-blur-sm border ${currentTheme.controlBorder}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${currentTheme.controlBg} ${currentTheme.text} shadow-lg hover:shadow-xl backdrop-blur-sm border ${currentTheme.controlBorder}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${currentGradient} shadow-lg`
                    : `${currentTheme.dotInactive}`
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                isPlaying
                  ? `bg-gradient-to-r ${currentGradient} text-white shadow-lg border-transparent`
                  : `${currentTheme.buttonBg} ${currentTheme.text} ${currentTheme.controlBorder}`
              }`}
            >
              {isPlaying ? 'Pause' : 'Play'} Auto-scroll
            </button>
          </div>

          {/* Theme Integration Display */}
          <div className="flex justify-center mt-8">
            <div className={`inline-flex items-center space-x-4 px-6 py-3 rounded-lg border backdrop-blur-sm ${currentTheme.cardBg}`}>
              <span className={currentTheme.textSecondary}>Current Theme:</span>
              <span className="text-cyan-400 font-medium capitalize">{theme}</span>
              <span className={currentTheme.textSecondary}>|</span>
              <span className={currentTheme.textSecondary}>Active Color:</span>
              <div className={`w-4 h-4 bg-gradient-to-r ${currentGradient} rounded-full shadow-sm`}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}