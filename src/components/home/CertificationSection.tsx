import React, { useState, useEffect, useCallback } from 'react';

interface Certificate {
  id: number;
  title: string;
  description: string;
  organization: string;
  date: string;
  link: string;
  image: string;
  color: string;
}

const CertificationSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Frontend Developer (React)",
      description: "A certification from HackerRank proving proficiency in React.js, focusing on frontend development skills like component-based architecture, state management, and JSX",
      organization: "HackerRank",
      date: "April 2024",
      link: "https://www.hackerrank.com/certificates/iframe/ca23b67f365c",
      image: "/certificate/React.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "JavaScript (Intermediate)",
      description: "A HackerRank certification that demonstrates intermediate-level understanding of JavaScript, including ES6 features, asynchronous programming, and DOM manipulation.",
      organization: "HackerRank",
      date: "March 2025",
      link: "https://www.hackerrank.com/certificates/iframe/213b85bf036d",
      image: "/certificate/Javascript.png",
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 3,
      title: "Problem Solving (Basic)",
      description: "Problem Solving certification covering basic algorithm and data structure concepts, helping to strengthen analytical thinking and coding problem-solving skills.",
      organization: "HackerRank",
      date: "March 2025",
      link: "https://www.hackerrank.com/certificates/iframe/3c156fb5a40b",
      image: "/certificate/ProblemSolving.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Python (Basic)",
      description: "A certificate from HackerRank validating fundamental Python programming skills such as syntax, data types, functions, and basic file handling",
      organization: "HackerRank",
      date: "March 2025",
      link: "https://www.hackerrank.com/certificates/iframe/25449949909c",
      image: "/certificate/Python.png",
      color: "from-red-500 to-rose-600"
    },
    {
      id: 6,
      title: "C++",
      description: "A certificate from Udemy covering the essentials of C++ programming, including object-oriented programming, memory management, and data structures",
      organization: "Udemy",
      date: "March 2025",
      link: "https://www.udemy.com/certificate/UC-82ca3cf6-9b2f-4a62-ad66-54301b2a2744/",
      image: "/certificate/c++.png",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 7,
      title: "HTML, Javascript",
      description: "A Udemy certification demonstrating proficiency in HTML5 and JavaScript, covering webpage structure, interactive elements, and client-side scripting",
      organization: "Udemy",
      date: "March 2024",
      link: "https://www.udemy.com/certificate/UC-778af9ca-4661-44f1-ba0d-4f0d4b6f9509/",
      image: "/certificate/HTML.png",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 8,
      title: "Java and Python",
      description: "A certificate from Udemy showcasing fundamental knowledge of both Java and Python programming languages, covering object-oriented programming and core language features",
      organization: "Udemy",
      date: "March 2025",
      link: "https://www.udemy.com/certificate/UC-e5168811-562b-41df-b3a9-e0cea633d7f7/",
      image: "/certificate/pythonJava.png",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 9,
      title: "Java and Spring Boot",
      description: "Udemy certification focusing on Java and the Spring Boot framework for building backend applications, covering core concepts like dependency injection, RESTful APIs, and database integration",
      organization: "Udemy",
      date: "September 2024",
      link: "https://www.udemy.com/certificate/UC-f739e0a2-d800-4b98-9f97-e7a6726f08d2/",
      image: "/certificate/SpringBoot.png",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 10,
      title: "Machine Learning",
      description: "A certificate from Udemy demonstrating knowledge of machine learning fundamentals, including supervised and unsupervised learning, data preprocessing, and popular machine learning algorithms",
      organization: "Udemy",
      date: "March 2025",
      link: "https://www.udemy.com/certificate/UC-7b2923c5-93b7-4f9e-b7e8-a5dde2e548df/",
      image: "/certificate/LinearRegression.png",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 11,
      title: "Software Architecture",
      description: "A certification from Udemy covering essential software architecture principles, including design patterns, scalability, and building maintainable software systems",
      organization: "Udemy",
      date: "March 2025",
      link: "https://www.udemy.com/certificate/UC-b0e4c14c-0b1d-46d3-b3d3-41dd2164a538/",
      image: "/certificate/Software.png",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % certificates.length);
  }, [certificates.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + certificates.length) % certificates.length);
  }, [certificates.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentCertificate = certificates[currentIndex];

  return (
    <section className=" bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-white font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
            Professional Certifications
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Certificate Content */}
          <div className="p-4 sm:p-6 md:p-12 lg:p-16">
            {/* Desktop View - Side by Side Layout */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                {/* Certificate Image - Desktop */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                      <img 
                        src={currentCertificate.image} 
                        alt={`${currentCertificate.title} Certificate`}
                        className="w-full h-80 object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iMTQwIiB5PSIxODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iMTYwIiB5PSIyMDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Details - Desktop */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentCertificate.color}`}></div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {currentCertificate.organization}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                      {currentCertificate.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 font-medium">
                      Issued: {currentCertificate.date}
                    </p>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {currentCertificate.description}
                  </p>

                  <button
                    onClick={() => window.open(currentCertificate.link, '_blank')}
                    className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentCertificate.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <span className="mr-3">View Certificate</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet View - Stacked Layout */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {/* Certificate Image - Mobile/Tablet */}
                <div className="flex justify-center">
                  <div className="relative group w-full max-w-sm">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                      <img 
                        src={currentCertificate.image} 
                        alt={`${currentCertificate.title} Certificate`}
                        className="w-full h-48 sm:h-56 object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iMTQwIiB5PSIxODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iMTYwIiB5PSIyMDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Details - Mobile/Tablet */}
                <div className="text-center sm:text-left space-y-6 px-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center sm:justify-start space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentCertificate.color}`}></div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {currentCertificate.organization}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                      {currentCertificate.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-600 font-medium">
                      Issued: {currentCertificate.date}
                    </p>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {currentCertificate.description}
                  </p>

                  <div className="flex justify-center sm:justify-start">
                    <button
                      onClick={() => window.open(currentCertificate.link, '_blank')}
                      className={`group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r ${currentCertificate.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                    >
                      <span className="mr-2 sm:mr-3 text-sm sm:text-base">View Certificate</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <div className="flex space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? `w-8 h-3 bg-gradient-to-r ${currentCertificate.color}`
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Pause</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Play</span>
              </>
            )}
          </button>

          <div className="text-gray-600 text-sm font-medium">
            {currentIndex + 1} / {certificates.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;