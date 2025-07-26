import { ArrowRight, Download, Code, Globe, Zap } from "lucide-react";

export default function FuturisticHero() {
  const currentColors = {
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
    gridPattern:
      'bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)]',
    primaryButton:
      'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10',
    secondaryButton:
      'bg-gray-800/50 border-orange-400/30 text-orange-400 hover:bg-orange-500/10',
    statCard: 'bg-gray-800/30 border-gray-700/50',
    techCard: 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-400/30',
    borderDivider: 'border-gray-700/50',
    nameGradient: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400',
    avatarOuter: 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50',
    avatarInner: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30',
    avatarText: 'bg-gradient-to-r from-cyan-400 to-blue-400',
  };

  return (
    <section className={`bg-slate-900 relative overflow-hidden`}>
      {/* Grid Background */}
      <div className={`absolute inset-0 ${currentColors.gridPattern} bg-[size:50px_50px]`}></div>
      <div className={`absolute inset-0 ${currentColors.gradientOverlay}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border-cyan-400/30">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-400">Available for Work</span>
            </div>

            <div className="space-y-6">
              <h1 className={`text-5xl md:text-6xl font-bold ${currentColors.text} leading-tight`}>
                <span className={`${currentColors.nameGradient} bg-clip-text text-transparent`}>
                  Lavudya Raja
                </span>
              </h1>
              <h2 className={`text-2xl md:text-3xl font-medium ${currentColors.textSecondary}`}>
                Software Engineer & Machine Learning
              </h2>
              <p className={`text-lg ${currentColors.textMuted} max-w-xl leading-relaxed`}>
                I build exceptional and accessible digital experiences for the web. 
                Focused on creating modern, responsive applications with cutting-edge technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className={`group px-8 py-4 border rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${currentColors.primaryButton}`}
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Resume June.pdf"
                download
                className={`px-8 py-4 border rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${currentColors.secondaryButton}`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[
                {
                  icon: <Zap className="w-5 h-5 text-yellow-400" />,
                  bg: "bg-yellow-400/20",
                  label: "Years Experience",
                  value: "1",
                },
                {
                  icon: <Code className="w-5 h-5 text-pink-400" />,
                  bg: "bg-pink-400/20",
                  label: "Projects Completed",
                  value: "10+",
                },
                {
                  icon: <Globe className="w-5 h-5 text-cyan-400" />,
                  bg: "bg-cyan-400/20",
                  label: "Technologies",
                  value: "10+",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg backdrop-blur-sm ${currentColors.statCard}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${stat.bg}`}>{stat.icon}</div>
                    <div>
                      <div className={`text-2xl font-bold ${currentColors.text}`}>{stat.value}</div>
                      <div className={`text-sm ${currentColors.textMuted}`}>{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full backdrop-blur-sm border flex items-center justify-center ${currentColors.avatarOuter}`}>
                <div className={`w-64 h-64 rounded-full border flex items-center justify-center ${currentColors.avatarInner}`}>
                  <div className={`text-6xl font-bold ${currentColors.avatarText} bg-clip-text text-transparent`}>
                    RJ
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

              <div className={`absolute inset-0 rounded-full border border-dashed animate-spin border-cyan-400/20`} style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
