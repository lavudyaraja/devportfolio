import { ArrowRight, Code, Database, Server, Cloud, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    color: "cyan",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Styled Components", "HTML5"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    color: "purple",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Microservices"]
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "green",
    items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    icon: <Cloud className="w-5 h-5" />,
    color: "orange",
    items: ["Git", "Docker", "CI/CD", "Linux", "Monitoring"]
  },
  {
    category: "AI & Extras",
    icon: <Brain className="w-5 h-5" />,
    color: "yellow",
    items: ["Machine Learning", "Data Viz", "Testing", "Agile"]
  }
];

export default function SkillsPreview() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
              Skills & Tech
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            A snapshot of tools & frameworks I’m passionate about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-md border border-${skill.color}-400/30 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-transform duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-${skill.color}-500/10 border border-${skill.color}-400/30 text-${skill.color}-400 mr-3`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`text-sm px-3 py-1 border border-${skill.color}-400/20 bg-${skill.color}-400/10 text-${skill.color}-300 rounded-full hover:bg-${skill.color}-500/20 transition-all duration-200`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/skills")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-all"
          >
            View All Skills <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
