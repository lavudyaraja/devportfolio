import { useState } from "react";
import { Sun, Moon, Code, Database, Wrench, Palette, Brain, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Code,
    color: "neon-pink",
    skills: [
      { icon: "⚛️", name: "React", description: "Advanced component architecture, hooks, state management" },
      { icon: "🔷", name: "TypeScript", description: "Type systems, interfaces, generics, and utility types" },
      { icon: "🔼", name: "Next.js", description: "SSR, ISR, API routes, and app router" },
      { icon: "🎨", name: "CSS/SCSS", description: "Advanced layouts, animations, and responsive design" },
      { icon: "🌊", name: "Tailwind CSS", description: "Utility-first styling and custom theming" },
      { icon: "📜", name: "JavaScript", description: "ES6+, async/await, closures, and prototypes" },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Database,
    color: "neon-blue",
    skills: [
      { icon: "🟢", name: "Node.js", description: "RESTful APIs, middleware, and authentication" },
      { icon: "🚀", name: "Express", description: "Route handling, middleware integration, and MVC pattern" },
      { icon: "🍃", name: "MongoDB", description: "Schema design, queries, and aggregation" },
      { icon: "🐘", name: "PostgreSQL", description: "Relational database design and optimization" },
      { icon: "⚛️", name: "GraphQL", description: "Schema definition, resolvers, and queries/mutations" },
      { icon: "🔥", name: "Firebase", description: "Authentication, Firestore, and Cloud Functions" },
    ]
  },
  {
    id: "python",
    name: "Python & Machine Learning",
    icon: Brain,
    color: "neon-yellow",
    skills: [
      { icon: "🐍", name: "Python", description: "Advanced programming, OOP, and design patterns" },
      { icon: "🔢", name: "NumPy", description: "Numerical computing and array operations" },
      { icon: "🐼", name: "Pandas", description: "Data manipulation and analysis" },
      { icon: "📊", name: "Matplotlib", description: "Data visualization and plotting" },
      { icon: "📈", name: "Seaborn", description: "Statistical data visualization" },
      { icon: "📉", name: "Plotly", description: "Interactive visualizations and dashboards" },
      { icon: "🤖", name: "Scikit-learn", description: "Machine learning algorithms and preprocessing" },
      { icon: "🧠", name: "TensorFlow", description: "Deep learning and neural networks" },
      { icon: "🔥", name: "PyTorch", description: "Dynamic neural networks and research" },
      { icon: "🕷️", name: "BeautifulSoup", description: "Web scraping and HTML parsing" },
      { icon: "🔬", name: "SciPy", description: "Scientific computing and optimization" },
      { icon: "📡", name: "Requests", description: "HTTP library for API interactions" },
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: Wrench,
    color: "neon-orange",
    skills: [
      { icon: "🔄", name: "Git/GitHub", description: "Version control, branching strategies, and CI/CD" },
      { icon: "🐳", name: "Docker", description: "Containerization, multi-container applications" },
      { icon: "📦", name: "Webpack", description: "Module bundling and optimization" },
      { icon: "⚙️", name: "CI/CD", description: "GitHub Actions and automated deployments" },
    ]
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: Palette,
    color: "neon-green",
    skills: [
      { icon: "🎨", name: "Figma", description: "Wireframing, prototyping, and design systems" },
      { icon: "✨", name: "Adobe XD", description: "Interface design and interactive prototypes" },
      { icon: "📱", name: "Responsive Design", description: "Mobile-first approach and cross-browser compatibility" },
      { icon: "♿", name: "Accessibility", description: "WCAG guidelines and inclusive design principles" },
      { icon: "🎬", name: "UI Animation", description: "Motion design and interactive animations" },
      { icon: "🏗️", name: "Design Systems", description: "Component libraries and style guides" },
    ]
  }
];

const technologies = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "🔼", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Machine Learning" },
  { name: "NumPy", icon: "🔢", category: "Machine Learning" },
  { name: "Pandas", icon: "🐼", category: "Machine Learning" },
  { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
  { name: "PyTorch", icon: "🔥", category: "AI/ML" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Git", icon: "🔄", category: "Tools" },
  { name: "Figma", icon: "🎨", category: "Design" },
  { name: "Matplotlib", icon: "📊", category: "Machine Learning" },
  { name: "Plotly", icon: "📈", category: "Machine Learning" },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isDark, setIsDark] = useState(true);

  const neonColors = {
    "neon-pink": {
      primary: isDark ? "#ff0080" : "#e91e63",
      secondary: isDark ? "#ff40a0" : "#ad1457",
      bg: isDark ? "bg-pink-500/10" : "bg-pink-50",
      border: isDark ? "border-pink-500" : "border-pink-600",
      text: isDark ? "text-pink-400" : "text-pink-600"
    },
    "neon-blue": {
      primary: isDark ? "#00bfff" : "#2196f3",
      secondary: isDark ? "#40cfff" : "#1976d2",
      bg: isDark ? "bg-blue-500/10" : "bg-blue-50",
      border: isDark ? "border-blue-500" : "border-blue-600",
      text: isDark ? "text-blue-400" : "text-blue-600"
    },
    "neon-yellow": {
      primary: isDark ? "#ffff00" : "#ffc107",
      secondary: isDark ? "#ffff40" : "#f57f17",
      bg: isDark ? "bg-yellow-500/10" : "bg-yellow-50",
      border: isDark ? "border-yellow-500" : "border-yellow-600",
      text: isDark ? "text-yellow-400" : "text-yellow-600"
    },
    "neon-orange": {
      primary: isDark ? "#ff8000" : "#ff9800",
      secondary: isDark ? "#ffa040" : "#f57c00",
      bg: isDark ? "bg-orange-500/10" : "bg-orange-50",
      border: isDark ? "border-orange-500" : "border-orange-600",
      text: isDark ? "text-orange-400" : "text-orange-600"
    },
    "neon-green": {
      primary: isDark ? "#00ff80" : "#4caf50",
      secondary: isDark ? "#40ffa0" : "#2e7d32",
      bg: isDark ? "bg-green-500/10" : "bg-green-50",
      border: isDark ? "border-green-500" : "border-green-600",
      text: isDark ? "text-green-400" : "text-green-600"
    }
  };

  const themeClasses = isDark
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900";

  const getSkillColor = (level) => {
    if (level >= 90) return isDark ? "from-pink-500 to-purple-500" : "from-pink-600 to-purple-600";
    if (level >= 80) return isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-cyan-600";
    if (level >= 70) return isDark ? "from-yellow-500 to-orange-500" : "from-yellow-600 to-orange-600";
    return isDark ? "from-green-500 to-teal-500" : "from-green-600 to-teal-600";
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${themeClasses}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -inset-10 opacity-20 ${
          isDark 
            ? 'bg-gradient-to-r from-pink-600/20 via-blue-600/20 to-purple-600/20' 
            : 'bg-gradient-to-r from-pink-300/10 via-blue-300/10 to-purple-300/10'
        } animate-gradient-x`}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 backdrop-blur-xl border-b ${
        isDark ? 'border-gray-800/50' : 'border-gray-200/50'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg ${neonColors["neon-pink"].bg} ${neonColors["neon-pink"].border} border-2 flex items-center justify-center`}>
                <Code className={`w-6 h-6 ${neonColors["neon-pink"].text}`} />
              </div>
              <div>
                <h1 className={`text-3xl font-bold bg-gradient-to-r ${
                  isDark 
                    ? 'from-pink-400 via-purple-400 to-cyan-400' 
                    : 'from-pink-600 via-purple-600 to-cyan-600'
                } bg-clip-text text-transparent`}>
                  PROFESSIONAL SKILLS
                </h1>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Software Engineer & Machine Learning</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'border-cyan-500 text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 bg-cyan-500/10'
                  : 'border-blue-600 text-blue-600 hover:shadow-lg hover:shadow-blue-600/30 bg-blue-50'
              }`}
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r ${
              isDark
                ? 'from-pink-500 via-red-500 to-yellow-500'
                : 'from-pink-600 via-red-600 to-orange-600'
            } bg-clip-text text-transparent`}>
              Skills & Expertise
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive technical skills spanning frontend development, backend systems, 
              Machine Learning, and modern design practices
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className={`rounded-2xl p-6 backdrop-blur-xl border ${
                isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white/70 border-gray-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Categories</h3>
                <div className="space-y-3">
                  {skillCategories.map((category) => {
                    const color = neonColors[category.color];
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group ${
                          activeTab === category.id
                            ? `${color.bg} ${color.border} border-2 shadow-lg`
                            : `${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50'} border-2 border-transparent`
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${
                          activeTab === category.id ? color.text : (isDark ? 'text-gray-400' : 'text-gray-600')
                        }`} />
                        <span className={`font-medium ${
                          activeTab === category.id ? color.text : (isDark ? 'text-gray-300' : 'text-gray-700')
                        }`}>
                          {category.name}
                        </span>
                        <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                          activeTab === category.id ? 'rotate-90' : ''
                        } ${
                          activeTab === category.id ? color.text : (isDark ? 'text-gray-500' : 'text-gray-400')
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Skills Content */}
            <div className="lg:col-span-2">
              {skillCategories.map((category) => {
                const color = neonColors[category.color];
                return activeTab === category.id ? (
                  <div key={category.id} className={`rounded-2xl p-8 backdrop-blur-xl border-2 ${
                    isDark ? 'bg-gray-900/50' : 'bg-white/70'
                  } ${color.border} shadow-lg`}>
                    <div className="flex items-center space-x-4 mb-8">
                      <category.icon className={`w-8 h-8 ${color.text}`} />
                      <h3 className={`text-2xl font-bold ${color.text}`}>
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                            isDark 
                              ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                              : 'bg-white/50 border-gray-200 hover:border-gray-300'
                          } backdrop-blur-sm relative`}
                          title={skill.name}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            
                            <div className={`absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold px-2 py-1 rounded ${
                              isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                            } shadow-lg`}>
                              {skill.name}
                            </div>
                            
                            <p className={`text-sm leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* Technologies Cloud */}
          <div className={`rounded-2xl p-8 backdrop-blur-xl border mb-16 ${
            isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white/70 border-gray-200'
          }`}>
            <h3 className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${
              isDark 
                ? 'from-green-400 via-blue-400 to-purple-400' 
                : 'from-green-600 via-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, index) => {
                const colorKeys = Object.keys(neonColors);
                const color = neonColors[colorKeys[index % colorKeys.length]];
                return (
                  <div
                    key={tech.name}
                    className={`group flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-110 cursor-pointer ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                        : 'bg-white/50 border-gray-200 hover:border-gray-300'
                    } hover:shadow-lg backdrop-blur-sm`}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className={`text-xs font-semibold text-center ${
                      isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                    } transition-colors duration-300`}>
                      {tech.name}
                    </p>
                    <p className={`text-xs opacity-60 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {tech.category}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`rounded-2xl p-8 backdrop-blur-xl border ${
            isDark ? 'bg-gray-900/50 border-purple-500' : 'bg-white/70 border-purple-600'
          } shadow-lg max-w-4xl mx-auto`}>
            <h3 className={`text-2xl font-semibold mb-8 text-center ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Professional Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                  isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600'
                } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  1
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Years Experience
                </div>
              </div>
              <div className="group">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                  isDark ? 'from-pink-400 to-red-400' : 'from-pink-600 to-red-600'
                } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  10+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Technologies
                </div>
              </div>
              <div className="group">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                  isDark ? 'from-yellow-400 to-orange-400' : 'from-yellow-600 to-orange-600'
                } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  10+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Projects
                </div>
              </div>
              <div className="group">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                  isDark ? 'from-green-400 to-teal-400' : 'from-green-600 to-teal-600'
                } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  3+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Specializations
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t py-12 ${
        isDark ? 'border-gray-800/50 bg-gray-900/50' : 'border-gray-200/50 bg-white/70'
      } backdrop-blur-xl`}>
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              नासे रोग हरे सब पीरा जपत निरंतर हनुमत वीरा
            </p>
            <p className="text-2xl font-semibold text-pink-500">
              जय श्री राम 🙏
            </p>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              &copy; {new Date().getFullYear()} Professional Skills Dashboard
            </p>
          </div>
        </div>
      </footer>

      <style >{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}