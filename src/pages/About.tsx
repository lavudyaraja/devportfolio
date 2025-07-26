import { useState } from "react";
import { 
  Download, 
  Mail, 
  Award, 
  Briefcase, 
  GraduationCap, 
  User, 
  Code, 
  Globe, 
  Zap, 
  ArrowRight, 
  Sun, 
  Moon, 
  Monitor,
  Menu,
  X
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


// Experience, Education, and Certifications data
const experiences = [
  {
    company: "Vision AI Research and Organization",
    position: "Machine Learning Intern",
    period: "June 2024 - July 2024",
    description: "Worked on developing a music recommendation system using machine learning techniques such as collaborative filtering and content-based filtering. Focused on analyzing user preferences to improve the personalization and accuracy of recommendations.",
    achievements: [
      "Achieved 87% accuracy in personalized music recommendations",
      "Implemented hybrid recommendation logic combining user behavior and song metadata",
      "Optimized data preprocessing pipeline, reducing model training time by 30%",
    ]
  },
  // {
  //   company: "DataFlow Systems",
  //   position: "Full Stack Developer",
  //   period: "2019 - 2021",
  //   description: "Developed full-stack applications with React, Express, and MongoDB. Designed RESTful APIs and implemented responsive UIs for web and mobile.",
  //   achievements: ["Built company's flagship product", "Optimized database queries", "Implemented real-time features"],
  // },
  // {
  //   company: "StartupLaunch",
  //   position: "Frontend Developer",
  //   period: "2017 - 2019",
  //   description: "Designed and implemented user interfaces for various client projects using React, Vue.js, and CSS frameworks.",
  //   achievements: ["Created reusable component library", "Improved accessibility compliance", "Collaborated with UX team"],
  // },
];

const education = [
  {
    degree: "BTech Computer Science and Engineering",
    institution: "Central University Of Haryana",
    period: "2022 - 2026",
    description: "Focused on advanced algorithms, Web development,software engineering, and Machine Learning.",
  },
  {
    degree: "Intermediate(MPC)",
    institution: "TTWREIS COE BOYS Narsapur",
    period: "2019 - 2021",
    description: "Completed my Intermediate with a focus on Mathematics, Physics, and Chemistry. These subjects strengthened my analytical thinking, problem-solving skills, and laid a strong foundation for my journey into technology and programming.",
  },
];

const certifications = [
  {
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'April 2024',
  },
  {
    name: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    date: 'March 2025',
  },
  {
    name: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'March 2025',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'March 2025',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: 'April 2024',
  },
  {
    name: 'C++',
    issuer: 'Udemy',
    date: 'March 2025',
  },
  {
    name: 'HTML, JavaScript',
    issuer: 'Udemy',
    date: 'March 2024',
  },
  {
    name: 'Java and Python',
    issuer: 'Udemy',
    date: 'March 2025',
  },
  {
    name: 'Java and Spring Boot',
    issuer: 'Udemy',
    date: 'September 2024',
  },
  {
    name: 'Machine Learning',
    issuer: 'Udemy',
    date: 'March 2025',
  },
  {
    name: 'Software Architecture',
    issuer: 'Udemy',
    date: 'March 2025',
  }
]
// Theme configuration
const themeColors = {
  dark: {
    bg: 'bg-gray-900',
    cardBg: 'bg-gray-800/40',
    border: 'border-gray-700/50',
    text: 'text-gray-100',
    textSecondary: 'text-gray-300',
    textMuted: 'text-gray-400',
    hover: 'hover:bg-gray-700/30'
  },
  light: {
    bg: 'bg-gray-50',
    cardBg: 'bg-white/80',
    border: 'border-gray-200/50',
    text: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-600',
    hover: 'hover:bg-gray-100/50'
  },
  system: {
    bg: 'bg-slate-800',
    cardBg: 'bg-slate-700/40',
    border: 'border-slate-600/50',
    text: 'text-slate-100',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    hover: 'hover:bg-slate-600/30'
  }
};

// Mobile Navigation Component
function MobileNav({ isOpen, onClose, activeTab, setActiveTab, tabs }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Menu */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-gray-100">Navigation</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                      : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [theme, setTheme] = useState("dark");
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  const isPage = location.pathname === "/home/hero";

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsThemeDropdownOpen(false);
  };

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const currentTheme = themeColors[theme];

  return (
    <div className={`min-h-screen ${currentTheme.bg} relative`}>
      {/* Background Grid Pattern */}
      { (
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Theme Toggle & Mobile Menu - Fixed Position */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-40 flex items-center space-x-2">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileNavOpen(true)}
          className={`lg:hidden p-2 sm:p-3 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-md ${currentTheme.textMuted} hover:${currentTheme.textSecondary} transition-colors`}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Theme Toggle */}
        <div className="relative">
          <button
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            className={`p-2 sm:p-3 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-md ${currentTheme.textMuted} hover:${currentTheme.textSecondary} transition-colors flex items-center space-x-2`}
          >
            {theme === 'light' && <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />}
            {theme === 'dark' && <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}
            {theme === 'system' && <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />}
            <span className={`text-xs sm:text-sm ${currentTheme.text} capitalize hidden sm:inline`}>{theme}</span>
          </button>
          
          {isThemeDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-28 sm:w-32 rounded-lg border backdrop-blur-md ${currentTheme.cardBg} ${currentTheme.border} shadow-lg`}>
              <button
                onClick={() => handleThemeChange("light")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left rounded-t-lg text-xs sm:text-sm ${
                  theme === "light" 
                    ? "bg-yellow-400/20 text-yellow-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Light</span>
              </button>
              <button
                onClick={() => handleThemeChange("dark")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-xs sm:text-sm ${
                  theme === "dark" 
                    ? "bg-blue-400/20 text-blue-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => handleThemeChange("system")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left rounded-b-lg text-xs sm:text-sm ${
                  theme === "system" 
                    ? "bg-pink-400/20 text-pink-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>System</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4`}>
              About <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className={`text-lg sm:text-xl ${currentTheme.textMuted} max-w-2xl mx-auto px-4`}>
              My journey, experience, and what drives me as a software engineer.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 sm:mb-20">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32">
                {/* Avatar */}
              {/* Avatar */}
                {/* <div className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border ${currentTheme.border} backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8`}> */}
                <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border border-cyan-400/30 overflow-hidden">
                <img
                  src="/Rajaimage.jpg" // your image path
                  alt="Avatar"
                  className="w-full h-full object-cover object-center"
                />
              </div>
                {/* </div> */}

                {/* Quick Stats */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className={`p-3 sm:p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-yellow-400/20">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className={`text-base sm:text-lg font-semibold ${currentTheme.text}`}>1 Year </div>
                        <div className={`text-xs sm:text-sm ${currentTheme.textMuted}`}>Experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-3 sm:p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-pink-400/20">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                      </div>
                      <div>
                        <div className={`text-base sm:text-lg font-semibold ${currentTheme.text}`}>10+</div>
                        <div className={`text-xs sm:text-sm ${currentTheme.textMuted}`}>Projects</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-3 sm:p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-400/20">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className={`text-base sm:text-lg font-semibold ${currentTheme.text}`}>10+</div>
                        <div className={`text-xs sm:text-sm ${currentTheme.textMuted}`}>Technologies</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:gap-4">
                <a
                    href="mailto:lavudyaraja12345@gmail.com" 
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Get In Touch</span>
                  </a>

                  <a
                    href="/Resume June.pdf" 
                    download
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800/50 border border-orange-400/30 rounded-lg text-orange-400 font-medium hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className={`p-6 sm:p-8 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm mb-6 sm:mb-8`}>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-yellow-400/20">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.text}`}>Hello, I'm Lavudya Raja</h2>
                </div>
                
                <div className={`space-y-3 sm:space-y-4 ${currentTheme.textSecondary} leading-relaxed text-sm sm:text-base`}>
                  <p>
                    I am passionate about building impactful, user-friendly web applications using modern frontend technologies like React.js,
                    Next.js, and Tailwind CSS. I enjoy designing clean, responsive interfaces that provide a seamless user experience, and
                    I love working with design systems like Shadcn UI and Material UI to create modern, accessible UIs.
                  </p>
                  
                  <p>
                    With a strong foundation in JavaScript and TypeScript, I focus on writing clean, maintainable code, and
                    I am comfortable using tools like Git, GitHub, Firebase, Vercel, and Netlify to develop and deploy real-world applications.
                    I also bring experience with databases like MySQL and a solid understanding of DBMS concepts, enabling me to contribute to
                    full-stack projects when needed..
                  </p>
                  
                  <p className="hidden sm:block">
                    I have a deep interest in machine learning and natural language processing.
                    I have worked with libraries such as NumPy, Pandas, Scikit-learn, SciPy, Seaborn, Matplotlib,
                    BeautifulSoup, and NLTK to explore data,
                    build intelligent models, and solve practical problems
                  </p>
                </div>
              </div>

              {/* Tab Navigation - Desktop Only */}
              <div className={`hidden lg:flex space-x-1 mb-6 sm:mb-8 p-1 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                          : `${currentTheme.textMuted} hover:${currentTheme.textSecondary} ${currentTheme.hover}`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Tab Indicator */}
              <div className={`lg:hidden mb-6 p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {(() => {
                      const activeTabData = tabs.find(tab => tab.id === activeTab);
                      const Icon = activeTabData?.icon;
                      return (
                        <>
                          <Icon className="w-5 h-5 text-cyan-400" />
                          <span className={`font-medium ${currentTheme.text}`}>{activeTabData?.label}</span>
                        </>
                      );
                    })()}
                  </div>
                  <span className={`text-sm ${currentTheme.textMuted}`}>Tap menu to switch</span>
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-4 sm:space-y-6">
                {activeTab === "experience" && (
                  <div className="space-y-4 sm:space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className={`p-4 sm:p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                          <div>
                            <h3 className={`text-lg sm:text-xl font-semibold ${currentTheme.text} mb-1`}>{exp.position}</h3>
                            <h4 className="text-base sm:text-lg text-orange-400 font-medium">{exp.company}</h4>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-xs sm:text-sm font-medium self-start">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className={`${currentTheme.textSecondary} mb-4 leading-relaxed text-sm sm:text-base`}>{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <span key={i} className="px-2 sm:px-3 py-1 rounded-full bg-pink-400/20 text-pink-400 text-xs sm:text-sm">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-4 sm:space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className={`p-4 sm:p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                          <div>
                            <h3 className={`text-lg sm:text-xl font-semibold ${currentTheme.text} mb-1`}>{edu.degree}</h3>
                            <h4 className="text-base sm:text-lg text-orange-400 font-medium">{edu.institution}</h4>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-xs sm:text-sm font-medium self-start">
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className={`${currentTheme.textSecondary} leading-relaxed text-sm sm:text-base`}>{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {certifications.map((cert, index) => (
                      <div key={index} className={`p-4 sm:p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex items-start space-x-3">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-yellow-400/20 flex-shrink-0">
                            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                          </div>
                          <div>
                            <h3 className={`font-semibold ${currentTheme.text} mb-1 text-sm sm:text-base`}>{cert.name}</h3>
                            <p className="text-orange-400 text-xs sm:text-sm mb-2">{cert.issuer}</p>
                            <span className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-400 text-xs font-medium">
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}