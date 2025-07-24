import { ArrowRight, Download, Code, Globe, Zap } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import ThemeDropdown from "../ui/ThemeToggleButton";

export default function FuturisticHero() {
  // Get theme from useTheme hook
  const { resolvedTheme } = useTheme();

  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/50 border-gray-700/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      textExtraMuted: 'text-gray-500',
      controlBg: 'bg-gray-800/80 hover:bg-gray-700',
      controlBorder: 'border-gray-600',
      buttonBg: 'bg-gray-700 hover:bg-gray-600',
      dotInactive: 'bg-gray-600 hover:bg-gray-500',
      gradientOverlay: 'bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800/90',
      gridPattern: 'bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)]',
      primaryButton: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10',
      secondaryButton: 'bg-gray-800/50 border-orange-400/30 text-orange-400 hover:bg-orange-500/10',
      statCard: 'bg-gray-800/30 border-gray-700/50',
      techCard: 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-400/30',
      borderDivider: 'border-gray-700/50',
      nameGradient: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400',
      avatarOuter: 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50',
      avatarInner: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30',
      avatarText: 'bg-gradient-to-r from-cyan-400 to-blue-400'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/80 border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      textExtraMuted: 'text-gray-500',
      controlBg: 'bg-white/80 hover:bg-white',
      controlBorder: 'border-gray-200',
      buttonBg: 'bg-gray-200 hover:bg-gray-300',
      dotInactive: 'bg-gray-300 hover:bg-gray-400',
      gradientOverlay: 'bg-gradient-to-br from-gray-50 via-gray-100/95 to-gray-200/90',
      gridPattern: 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]',
      primaryButton: 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-600 hover:bg-blue-500/10',
      secondaryButton: 'bg-white/50 border-orange-400/30 text-orange-600 hover:bg-orange-500/10',
      statCard: 'bg-white/50 border-gray-200/50',
      techCard: 'bg-white/50 border-gray-200/50 hover:border-blue-400/30',
      borderDivider: 'border-gray-200/50',
      nameGradient: 'bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500',
      avatarOuter: 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-300/50',
      avatarInner: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-400/30',
      avatarText: 'bg-gradient-to-r from-blue-600 to-indigo-600'
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/50 border-slate-600/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-200',
      textMuted: 'text-slate-300',
      textExtraMuted: 'text-slate-400',
      controlBg: 'bg-slate-700/80 hover:bg-slate-600',
      controlBorder: 'border-slate-500',
      buttonBg: 'bg-slate-600 hover:bg-slate-500',
      dotInactive: 'bg-slate-500 hover:bg-slate-400',
      gradientOverlay: 'bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-700/90',
      gridPattern: 'bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)]',
      primaryButton: 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/10',
      secondaryButton: 'bg-slate-700/50 border-violet-400/30 text-violet-400 hover:bg-violet-500/10',
      statCard: 'bg-slate-700/30 border-slate-600/50',
      techCard: 'bg-slate-700/30 border-slate-600/50 hover:border-emerald-400/30',
      borderDivider: 'border-slate-600/50',
      nameGradient: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400',
      avatarOuter: 'bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600/50',
      avatarInner: 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-400/30',
      avatarText: 'bg-gradient-to-r from-emerald-400 to-cyan-400'
    }
  };

  // Get current theme colors
  const currentColors = themeColors[resolvedTheme] || themeColors.system;

  return (
    <section className={`min-h-screen ${currentColors.bg} relative overflow-hidden`}>
      {/* Background Grid Pattern */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeDropdown />
      </div>
      <div className={`absolute inset-0 ${currentColors.gridPattern} bg-[size:50px_50px]`}></div>
      <div className={`absolute inset-0 ${currentColors.gradientOverlay}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">

          {/* Content Section */}
          <div className="space-y-8">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${
              resolvedTheme === 'dark' ? 'bg-cyan-400/10 border-cyan-400/30' :
              resolvedTheme === 'light' ? 'bg-blue-400/10 border-blue-400/30' :
              'bg-emerald-400/10 border-emerald-400/30'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                resolvedTheme === 'dark' ? 'bg-cyan-400' :
                resolvedTheme === 'light' ? 'bg-blue-400' :
                'bg-emerald-400'
              }`}></div>
              <span className={`text-sm font-medium ${
                resolvedTheme === 'dark' ? 'text-cyan-400' :
                resolvedTheme === 'light' ? 'text-blue-600' :
                'text-emerald-400'
              }`}>Available for Work</span>
            </div>

            <div className="space-y-6">
              <h1 className={`text-5xl md:text-6xl font-bold ${currentColors.text} leading-tight`}>
                Hey, I'm{" "}
                <span className={`${currentColors.nameGradient} bg-clip-text text-transparent`}>
                  John Doe
                </span>
              </h1>
              <h2 className={`text-2xl md:text-3xl font-medium ${currentColors.textSecondary}`}>
                Software Engineer & Web Developer
              </h2>
              <p className={`text-lg ${currentColors.textMuted} max-w-xl leading-relaxed`}>
                I build exceptional and accessible digital experiences for the web. 
                Focused on creating modern, responsive applications with cutting-edge technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`group px-8 py-4 border rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${currentColors.primaryButton}`}
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/John_Doe_CV.pdf"
                download
                className={`px-8 py-4 border rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${currentColors.secondaryButton}`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[{
                icon: <Zap className="w-5 h-5 text-yellow-400" />,
                bg: "bg-yellow-400/20",
                label: "Years Experience",
                value: "5+"
              }, {
                icon: <Code className="w-5 h-5 text-pink-400" />,
                bg: "bg-pink-400/20",
                label: "Projects Completed",
                value: "50+"
              }, {
                icon: <Globe className={`w-5 h-5 ${
                  resolvedTheme === 'dark' ? 'text-cyan-400' :
                  resolvedTheme === 'light' ? 'text-blue-400' :
                  'text-emerald-400'
                }`} />,
                bg: resolvedTheme === 'dark' ? 'bg-cyan-400/20' :
                    resolvedTheme === 'light' ? 'bg-blue-400/20' :
                    'bg-emerald-400/20',
                label: "Technologies",
                value: "10+"
              }].map((stat, i) => (
                <div key={i} className={`p-4 rounded-lg backdrop-blur-sm ${currentColors.statCard}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${currentColors.text}`}>{stat.value}</div>
                      <div className={`text-sm ${currentColors.textMuted}`}>{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full backdrop-blur-sm border flex items-center justify-center ${currentColors.avatarOuter}`}>
                <div className={`w-64 h-64 rounded-full border flex items-center justify-center ${currentColors.avatarInner}`}>
                  <div className={`text-6xl font-bold ${currentColors.avatarText} bg-clip-text text-transparent`}>
                    JD
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-yellow-400/20 border border-yellow-400/30 backdrop-blur-sm flex items-center justify-center">
                <Code className="w-8 h-8 text-yellow-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-pink-400/20 border border-pink-400/30 backdrop-blur-sm flex items-center justify-center">
                <Globe className="w-8 h-8 text-pink-400" />
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-lg bg-orange-400/20 border border-orange-400/30 backdrop-blur-sm flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>

              <div className={`absolute inset-0 rounded-full border border-dashed animate-spin ${
                resolvedTheme === 'dark' ? 'border-cyan-400/20' :
                resolvedTheme === 'light' ? 'border-blue-400/20' :
                'border-emerald-400/20'
              }`} style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`mt-20 pt-12 border-t ${currentColors.borderDivider}`}>
          <div className="text-center mb-8">
            <h3 className={`text-xl font-semibold ${currentColors.textSecondary} mb-2`}>Tech Stack</h3>
            <p className={currentColors.textExtraMuted}>Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className={`p-4 rounded-lg backdrop-blur-sm text-center transition-colors ${currentColors.techCard}`}
              >
                <div className={`w-8 h-8 rounded-lg mx-auto mb-2 ${
                  ['bg-cyan-400/20', 'bg-blue-400/20', 'bg-yellow-400/20', 'bg-orange-400/20', 'bg-pink-400/20', 'bg-purple-400/20'][index % 6]
                }`}></div>
                <span className={`text-sm ${currentColors.textSecondary} font-medium`}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}