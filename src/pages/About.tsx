import { useState } from "react";
import { Download, Mail, Award, Briefcase, GraduationCap, User, Code, Globe, Zap, ArrowRight, Sun, Moon, Monitor } from "lucide-react";

// About Preview Component (for homepage)
export function AboutPreview() {
  return (
    <section className="py-20 bg-gray-800/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            About <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me as a software engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-400/20">
                  <User className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100">Hi, I'm John Doe</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate software engineer with over 5 years of experience developing 
                  modern web applications. I specialize in JavaScript/TypeScript, React, Node.js,
                  and cloud technologies.
                </p>
                <p>
                  My journey in software development started with a curiosity for creating digital 
                  experiences that solve real problems. Today, I'm focused on building high-performance, 
                  accessible applications that deliver exceptional user experiences.
                </p>
              </div>

              <button className="group mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2">
                <span>More About Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-400/20">
                  <Briefcase className="w-5 h-5 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-100">Experience</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>5+ Years Professional Experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>3 Years Team Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>Worked with 10+ Tech Startups</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-400/20">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-100">Education</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>MSc Computer Science</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>BSc Software Engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>Various Tech Certifications</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-pink-400/20">
                  <Code className="w-5 h-5 text-pink-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-100">Frontend</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span>React / Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-400/20">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-100">Backend</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>Express / NestJS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>SQL / NoSQL Databases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Full About Page Component
const experiences = [
  {
    company: "Tech Innovate",
    position: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Lead developer for web applications using React, TypeScript, and Node.js. Implemented CI/CD pipelines, improved performance, and mentored junior developers.",
    achievements: ["Reduced loading time by 40%", "Implemented new authentication system", "Managed team of 5 developers"],
  },
  {
    company: "DataFlow Systems",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Developed full-stack applications with React, Express, and MongoDB. Designed RESTful APIs and implemented responsive UIs for web and mobile.",
    achievements: ["Built company's flagship product", "Optimized database queries", "Implemented real-time features"],
  },
  {
    company: "StartupLaunch",
    position: "Frontend Developer",
    period: "2017 - 2019",
    description: "Designed and implemented user interfaces for various client projects using React, Vue.js, and CSS frameworks.",
    achievements: ["Created reusable component library", "Improved accessibility compliance", "Collaborated with UX team"],
  },
];

const education = [
  {
    degree: "MSc Computer Science",
    institution: "Tech University",
    period: "2015 - 2017",
    description: "Focused on advanced algorithms, software engineering, and artificial intelligence. Thesis on real-time web application optimization techniques.",
  },
  {
    degree: "BSc Software Engineering",
    institution: "Engineering College",
    period: "2011 - 2015",
    description: "Comprehensive software engineering program covering programming, design patterns, databases, and development methodologies.",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2021",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2020",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [theme, setTheme] = useState("dark");
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsThemeDropdownOpen(false);
  };

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/30',
      border: 'border-gray-700/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      hover: 'hover:bg-gray-700/30'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/30',
      border: 'border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      hover: 'hover:bg-gray-100/30'
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/30',
      border: 'border-slate-600/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      textMuted: 'text-slate-400',
      hover: 'hover:bg-slate-600/30'
    }
  };

  const currentTheme = themeColors[theme];

  return (
    <div className={`min-h-screen ${currentTheme.bg}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-20 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            className={`p-3 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-md ${currentTheme.textMuted} hover:${currentTheme.textSecondary} transition-colors flex items-center space-x-2`}
          >
            {theme === 'light' && <Sun className="w-5 h-5 text-yellow-400" />}
            {theme === 'dark' && <Moon className="w-5 h-5 text-blue-400" />}
            {theme === 'system' && <Monitor className="w-5 h-5 text-pink-400" />}
            <span className={`text-sm ${currentTheme.text} capitalize`}>{theme}</span>
          </button>
          
          {isThemeDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-32 rounded-lg border backdrop-blur-md ${currentTheme.cardBg} ${currentTheme.border} shadow-lg`}>
              <button
                onClick={() => handleThemeChange("light")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left rounded-t-lg ${
                  theme === "light" 
                    ? "bg-yellow-400/20 text-yellow-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="text-sm">Light</span>
              </button>
              <button
                onClick={() => handleThemeChange("dark")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left ${
                  theme === "dark" 
                    ? "bg-blue-400/20 text-blue-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="text-sm">Dark</span>
              </button>
              <button
                onClick={() => handleThemeChange("system")}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left rounded-b-lg ${
                  theme === "system" 
                    ? "bg-pink-400/20 text-pink-400" 
                    : `${currentTheme.text} ${currentTheme.hover}`
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span className="text-sm">System</span>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4`}>
              About <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className={`text-xl ${currentTheme.textMuted} max-w-2xl mx-auto`}>
              My journey, experience, and what drives me as a software engineer.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Avatar */}
                <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border ${currentTheme.border} backdrop-blur-sm flex items-center justify-center mb-8`}>
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      JD
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-yellow-400/20">
                        <Zap className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className={`text-lg font-semibold ${currentTheme.text}`}>5+ Years</div>
                        <div className={`text-sm ${currentTheme.textMuted}`}>Experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-pink-400/20">
                        <Code className="w-5 h-5 text-pink-400" />
                      </div>
                      <div>
                        <div className={`text-lg font-semibold ${currentTheme.text}`}>50+</div>
                        <div className={`text-sm ${currentTheme.textMuted}`}>Projects</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-cyan-400/20">
                        <Globe className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className={`text-lg font-semibold ${currentTheme.text}`}>10+</div>
                        <div className={`text-sm ${currentTheme.textMuted}`}>Technologies</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 mt-8">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </button>
                  
                  <button className="w-full px-6 py-3 bg-gray-800/50 border border-orange-400/30 rounded-lg text-orange-400 font-medium hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className={`p-8 rounded-xl ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm mb-8`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-yellow-400/20">
                    <User className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className={`text-3xl font-bold ${currentTheme.text}`}>Hello, I'm John Doe</h2>
                </div>
                
                <div className={`space-y-4 ${currentTheme.textSecondary} leading-relaxed`}>
                  <p>
                    I'm a passionate software engineer with 5+ years of professional experience in building modern web applications. 
                    My expertise lies in frontend development with React, TypeScript, and modern CSS frameworks, complemented by strong 
                    backend skills with Node.js and various database technologies.
                  </p>
                  
                  <p>
                    Throughout my career, I've worked with startups and established companies across various industries, 
                    including e-commerce, fintech, and SaaS. I enjoy solving complex problems and creating intuitive, 
                    performant user experiences that help businesses achieve their goals.
                  </p>
                  
                  <p>
                    When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and 
                    mentoring aspiring developers. I'm constantly learning new technologies and best practices to stay 
                    at the forefront of web development.
                  </p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className={`flex space-x-1 mb-8 p-1 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
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

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className={`p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-semibold ${currentTheme.text}`}>{exp.position}</h3>
                            <h4 className="text-lg text-orange-400 font-medium">{exp.company}</h4>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className={`${currentTheme.textSecondary} mb-4 leading-relaxed`}>{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-pink-400/20 text-pink-400 text-sm">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className={`p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-semibold ${currentTheme.text}`}>{edu.degree}</h3>
                            <h4 className="text-lg text-orange-400 font-medium">{edu.institution}</h4>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm font-medium">
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className={`${currentTheme.textSecondary} leading-relaxed`}>{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <div key={index} className={`p-6 rounded-lg ${currentTheme.cardBg} border ${currentTheme.border} backdrop-blur-sm`}>
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-lg bg-yellow-400/20 flex-shrink-0">
                            <Award className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div>
                            <h3 className={`font-semibold ${currentTheme.text} mb-1`}>{cert.name}</h3>
                            <p className="text-orange-400 text-sm mb-2">{cert.issuer}</p>
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