import { ArrowRight, Code, Database, Server, Smartphone, Cloud, Brain } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useNavigate, useLocation } from "react-router-dom";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    neonColor: "neon-cyan",
    items: [
      "React / Next.js",
      "TypeScript",
      "CSS / Tailwind / Styled Components",
      "JavaScript (ES6+)",
      "HTML5 & Semantic Markup",
      "Responsive Design"
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    neonColor: "neon-purple",
    items: [
      "Node.js",
      "Express / NestJS",
      "GraphQL",
      "RESTful APIs",
      "Microservices Architecture",
      "Server-Side Rendering"
    ]
  },
  {
    category: "Database & Storage",
    icon: <Database className="w-6 h-6" />,
    neonColor: "neon-green",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "Database Design",
      "Query Optimization"
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <Cloud className="w-6 h-6" />,
    neonColor: "neon-orange",
    items: [
      "Git / GitHub",
      "Docker / Kubernetes",
      "AWS / Cloud Services",
      "CI/CD Pipelines",
      "Linux/Unix Systems",
      "Performance Monitoring"
    ]
  },
  {
    category: "Mobile & Cross-Platform",
    icon: <Smartphone className="w-6 h-6" />,
    neonColor: "neon-pink",
    items: [
      "React Native",
      "Progressive Web Apps",
      "Mobile-First Design",
      "App Store Deployment",
      "Cross-Browser Testing",
      "Mobile Performance"
    ]
  },
  {
    category: "Additional Expertise",
    icon: <Brain className="w-6 h-6" />,
    neonColor: "neon-golden",
    items: [
      "Machine Learning (Python)",
      "Data Visualization",
      "Testing (Jest, Cypress)",
      "Agile/Scrum Methodology",
      "Code Review & Mentoring",
      "Technical Documentation"
    ]
  }
];

export default function SkillsPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSkillsPage = location.pathname === "/skills-preview";
  const { resolvedTheme } = useTheme();

  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/30',
      cardBorder: 'border-gray-700/30',
      cardHover: 'hover:bg-gray-800/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      overviewBg: 'bg-gray-800/20',
      overviewBorder: 'border-gray-700/50',
      statsBg: 'bg-gray-800/20',
      statsBorder: 'border-gray-700/50'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/60',
      cardBorder: 'border-gray-200/40',
      cardHover: 'hover:bg-white/80',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      overviewBg: 'bg-white/40',
      overviewBorder: 'border-gray-200/60',
      statsBg: 'bg-white/40',
      statsBorder: 'border-gray-200/60'
    },
    system: {
      bg: 'bg-slate-900',
      cardBg: 'bg-slate-800/30',
      cardBorder: 'border-slate-700/30',
      cardHover: 'hover:bg-slate-800/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-200',
      textMuted: 'text-slate-300',
      overviewBg: 'bg-slate-800/20',
      overviewBorder: 'border-slate-700/50',
      statsBg: 'bg-slate-800/20',
      statsBorder: 'border-slate-700/50'
    }
  };

  const neonColors = {
    'neon-cyan': {
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]',
      border: 'border-cyan-400/50',
      icon: 'text-cyan-400',
      dot: 'bg-cyan-400',
      text: 'text-cyan-300',
      badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30'
    },
    'neon-purple': {
      glow: 'shadow-[0_0_20px_rgba(147,51,234,0.3)]',
      border: 'border-purple-400/50',
      icon: 'text-purple-400',
      dot: 'bg-purple-400',
      text: 'text-purple-300',
      badge: 'bg-purple-400/10 text-purple-400 border-purple-400/30'
    },
    'neon-green': {
      glow: 'shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      border: 'border-green-400/50',
      icon: 'text-green-400',
      dot: 'bg-green-400',
      text: 'text-green-300',
      badge: 'bg-green-400/10 text-green-400 border-green-400/30'
    },
    'neon-orange': {
      glow: 'shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      border: 'border-orange-400/50',
      icon: 'text-orange-400',
      dot: 'bg-orange-400',
      text: 'text-orange-300',
      badge: 'bg-orange-400/10 text-orange-400 border-orange-400/30'
    },
    'neon-pink': {
      glow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)]',
      border: 'border-pink-400/50',
      icon: 'text-pink-400',
      dot: 'bg-pink-400',
      text: 'text-pink-300',
      badge: 'bg-pink-400/10 text-pink-400 border-pink-400/30'
    },
    'neon-golden': {
      glow: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]',
      border: 'border-yellow-400/50',
      icon: 'text-yellow-400',
      dot: 'bg-yellow-400',
      text: 'text-yellow-300',
      badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30'
    }
  };

  const currentColors = themeColors[resolvedTheme] || themeColors.system;

  return (
    <div className={`${currentColors.bg} transition-all duration-500`}>
      {isSkillsPage && (
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 ${currentColors.text}`}>
              Skills & 
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-3">
                Technologies
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${currentColors.textMuted} leading-relaxed`}>
              My technical expertise and the cutting-edge tools I use to build modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skills.map((skillGroup, index) => {
              const neonStyle = neonColors[skillGroup.neonColor];
              return (
                <div
                  key={index}
                  className={`
                    ${currentColors.cardBg} ${currentColors.cardBorder} ${currentColors.cardHover}
                    ${neonStyle.border} ${neonStyle.glow}
                    backdrop-blur-sm border rounded-xl p-6 transition-all duration-300
                    hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
                  `}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${neonStyle.badge} border mr-4`}>
                      <div className={neonStyle.icon}>
                        {skillGroup.icon}
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold ${currentColors.text}`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center group">
                        <div className={`
                          w-2 h-2 rounded-full mr-4 flex-shrink-0 transition-all duration-300
                          ${neonStyle.dot} group-hover:shadow-[0_0_8px_currentColor]
                        `}></div>
                        <span className={`text-sm font-medium ${currentColors.textSecondary} group-hover:${neonStyle.text} transition-colors duration-300`}>
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Technology Stack Overview */}
          <div className={`
            ${currentColors.overviewBg} ${currentColors.overviewBorder}
            rounded-2xl border-2 p-10 mb-16 backdrop-blur-sm
            shadow-[0_0_50px_rgba(6,182,212,0.1)]
          `}>
            <h3 className={`text-3xl font-bold mb-10 text-center ${currentColors.text}`}>
              Technology Stack 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2">
                Overview
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.slice(0, 4).map((skillGroup, index) => {
                const neonStyle = neonColors[skillGroup.neonColor];
                return (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex p-4 rounded-full ${neonStyle.badge} border mb-4 transition-all duration-300 group-hover:scale-110`}>
                      <div className={neonStyle.icon}>
                        {skillGroup.icon}
                      </div>
                    </div>
                    <h4 className={`text-lg font-bold mb-4 ${currentColors.text}`}>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skillGroup.items.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx}
                          className={`
                            px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300
                            ${neonStyle.badge} hover:scale-105 cursor-default
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <a
              href="/skills"
              className={`
                inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300
                bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30
                text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30
                hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105
              `}
            >
              View All Skills & Experience
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats Section */}
          <div className={`
            ${currentColors.statsBg} ${currentColors.statsBorder}
            rounded-2xl border-2 p-10 backdrop-blur-sm transition-all duration-300
            shadow-[0_0_50px_rgba(147,51,234,0.1)]
          `}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5+", label: "Years Experience", neon: "neon-cyan" },
                { number: "50+", label: "Projects Completed", neon: "neon-green" },
                { number: "20+", label: "Technologies Used", neon: "neon-orange" },
                { number: "15+", label: "Clients Served", neon: "neon-pink" }
              ].map((stat, index) => {
                const neonStyle = neonColors[stat.neon];
                return (
                  <div key={index} className="group">
                    <div className={`
                      text-5xl font-bold mb-3 transition-all duration-300
                      ${neonStyle.text} group-hover:drop-shadow-[0_0_10px_currentColor]
                    `}>
                      {stat.number}
                    </div>
                    <div className={`text-lg font-medium ${currentColors.textSecondary}`}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}