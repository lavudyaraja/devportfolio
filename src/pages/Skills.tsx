import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React", description: "Advanced component architecture, hooks, state management", level: "Advanced" },
      { name: "TypeScript", description: "Type systems, interfaces, generics, and utility types", level: "Advanced" },
      { name: "Next.js", description: "SSR, ISR, API routes, and app router", level: "Intermediate" },
      { name: "CSS/SCSS", description: "Advanced layouts, animations, and responsive design", level: "Advanced" },
      { name: "Tailwind CSS", description: "Utility-first styling and custom theming", level: "Advanced" },
      { name: "JavaScript", description: "ES6+, async/await, closures, and prototypes", level: "Expert" },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "Node.js", description: "RESTful APIs, middleware, and authentication", level: "Intermediate" },
      { name: "Express", description: "Route handling, middleware integration, and MVC pattern", level: "Intermediate" },
      { name: "MongoDB", description: "Schema design, queries, and aggregation", level: "Intermediate" },
      { name: "PostgreSQL", description: "Relational database design and optimization", level: "Intermediate" },
      { name: "GraphQL", description: "Schema definition, resolvers, and queries/mutations", level: "Beginner" },
      { name: "Firebase", description: "Authentication, Firestore, and Cloud Functions", level: "Intermediate" },
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Git/GitHub", description: "Version control, branching strategies, and CI/CD", level: "Advanced" },
      { name: "Docker", description: "Containerization, multi-container applications", level: "Intermediate" },
      { name: "AWS", description: "S3, EC2, Lambda, and CloudFront", level: "Intermediate" },
      { name: "Jest", description: "Unit testing and mocking", level: "Intermediate" },
      { name: "Webpack", description: "Module bundling and optimization", level: "Intermediate" },
      { name: "CI/CD", description: "GitHub Actions and automated deployments", level: "Intermediate" },
    ]
  },
  {
    id: "design",
    name: "UI/UX Design",
    skills: [
      { name: "Figma", description: "Wireframing, prototyping, and design systems", level: "Intermediate" },
      { name: "Adobe XD", description: "Interface design and interactive prototypes", level: "Intermediate" },
      { name: "Responsive Design", description: "Mobile-first approach and cross-browser compatibility", level: "Advanced" },
      { name: "Accessibility", description: "WCAG guidelines and inclusive design principles", level: "Intermediate" },
      { name: "UI Animation", description: "Motion design and interactive animations", level: "Intermediate" },
      { name: "Design Systems", description: "Component libraries and style guides", level: "Intermediate" },
    ]
  }
];

const technologies = [
  { name: "React", icon: "📱" },
  { name: "Next.js", icon: "🔼" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "⚛️" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔄" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Jest", icon: "🃏" },
  { name: "Figma", icon: "🎨" },
  { name: "Redux", icon: "🔄" },
  { name: "Firebase", icon: "🔥" },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isDark, setIsDark] = useState(true);

  const neonColors = [
    { accent: isDark ? 'border-orange-500' : 'border-orange-600', text: isDark ? 'text-orange-400' : 'text-orange-600', bg: isDark ? 'bg-orange-500/10' : 'bg-orange-50' },
    { accent: isDark ? 'border-pink-500' : 'border-pink-600', text: isDark ? 'text-pink-400' : 'text-pink-600', bg: isDark ? 'bg-pink-500/10' : 'bg-pink-50' },
    { accent: isDark ? 'border-cyan-500' : 'border-cyan-600', text: isDark ? 'text-cyan-400' : 'text-cyan-600', bg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-50' },
    { accent: isDark ? 'border-yellow-500' : 'border-yellow-600', text: isDark ? 'text-yellow-400' : 'text-yellow-600', bg: isDark ? 'bg-yellow-500/10' : 'bg-yellow-50' }
  ];

  const themeClasses = isDark
    ? "bg-black text-white"
    : "bg-gray-50 text-gray-900";

  const getLevelColor = (level) => {
    if (level === "Expert") return isDark ? "bg-red-500 text-white" : "bg-red-600 text-white";
    if (level === "Advanced") return isDark ? "bg-cyan-500 text-black" : "bg-cyan-600 text-white";
    if (level === "Intermediate") return isDark ? "bg-yellow-500 text-black" : "bg-yellow-600 text-white";
    return isDark ? "bg-pink-500 text-white" : "bg-pink-600 text-white";
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Header */}
      <header className="border-b border-gray-200/20 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className={`text-2xl font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-cyan-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              PROFESSIONAL SKILLS
            </h1>
          </div>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
              isDark
                ? 'border-cyan-500 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10'
                : 'border-blue-600 text-blue-600 hover:border-blue-500 hover:bg-blue-500/10'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              isDark
                ? 'from-pink-500 via-red-500 to-yellow-500'
                : 'from-pink-600 via-red-600 to-orange-600'
            } bg-clip-text text-transparent`}>
              Skills & Expertise
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My technical skills, tools, and technologies I work with
            </p>
          </div>

          {/* Skills Tabs */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className={`flex space-x-2 p-2 rounded-lg ${
                isDark ? 'bg-gray-900/50' : 'bg-white'
              } backdrop-blur-md border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                {skillCategories.map((category, index) => {
                  const color = neonColors[index];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
                        activeTab === category.id
                          ? `border-2 ${color.accent} ${color.text} ${color.bg}`
                          : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:bg-white/10`
                      }`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            {skillCategories.map((category, categoryIndex) => {
              const color = neonColors[categoryIndex];
              return activeTab === category.id ? (
                <div key={category.id} className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg ${
                        isDark 
                          ? `bg-gray-900/50 ${color.accent} hover:shadow-${color.accent.split('-')[1]}-500/20` 
                          : `bg-white ${color.accent} hover:shadow-${color.accent.split('-')[1]}-600/20`
                      } backdrop-blur-sm`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`text-xl font-semibold ${color.text}`}>
                          {skill.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null;
            })}
          </div>

          {/* Technologies Section */}
          <div className="mt-16">
            <h3 className={`text-3xl font-bold text-center mb-8 ${
              isDark 
                ? 'bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'
            }`}>
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {technologies.map((tech, index) => {
                const color = neonColors[index % neonColors.length];
                return (
                  <div
                    key={tech.name}
                    className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isDark 
                        ? `bg-gray-900/50 ${color.accent} hover:shadow-lg hover:shadow-${color.accent.split('-')[1]}-500/20` 
                        : `bg-white ${color.accent} hover:shadow-lg hover:shadow-${color.accent.split('-')[1]}-600/20`
                    } backdrop-blur-sm`}
                  >
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <p className={`text-sm font-semibold text-center ${color.text}`}>
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Summary */}
          <div className={`mt-16 rounded-lg border-2 p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-gray-900/50 border-purple-500' 
              : 'bg-white border-purple-600'
          } backdrop-blur-sm max-w-4xl mx-auto`}>
            <h3 className={`text-2xl font-semibold mb-6 text-center ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Professional Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  5+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Years of Experience
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  20+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Technologies Mastered
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  50+
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t py-8 ${
        isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-white'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Professional Portfolio. Built with passion and modern technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}