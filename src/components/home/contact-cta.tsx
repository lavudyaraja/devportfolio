import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, Calendar, MapPin, Send, ExternalLink } from 'lucide-react';
import ThemeDropdown from '../ui/ThemeToggleButton';
import { useTheme } from "@/hooks/use-theme";
import { useNavigate,useLocation } from 'react-router-dom';
export default function ContactCTA({ theme = "dark" }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { resolvedTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-cta";

  // Theme configurations
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
      statsBorder: 'border-gray-700/50',
      sectionBg: 'bg-gray-800/20',
      buttonPrimary: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10',
      buttonSecondary: 'bg-gray-800/50 border-orange-400/30 text-orange-400 hover:bg-orange-500/10'
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
      statsBorder: 'border-gray-200/60',
      sectionBg: 'bg-white/40'
      // buttonPrimary: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10',
      // buttonSecondary: 'bg-gray-800/50 border-orange-400/30 text-orange-400 hover:bg-orange-500/10'
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
      statsBorder: 'border-slate-700/50',
      sectionBg: 'bg-slate-800/20'
      // buttonPrimary: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10',
      // buttonSecondary: 'bg-gray-800/50 border-orange-400/30 text-orange-400 hover:bg-orange-500/10'
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "contact@example.com",
      action: "mailto:contact@example.com",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call",
      description: "Let's talk directly",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Quick questions welcome",
      value: "WhatsApp",
      action: "https://wa.me/15551234567",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book a consultation",
      value: "Calendly",
      action: "https://calendly.com/yourname",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentColors.bg}`}>
       {isContactPage && (
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
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 text-sm font-medium">Available for Projects</span>
            </div>
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${currentColors.text}`}>
              Let's Create Something
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${currentColors.textSecondary}`}>
              Have a project in mind? Whether you need a modern website, a complex web application, 
              or technical consultation, I'm here to help turn your ideas into reality.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className={`${currentColors.sectionBg} backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-500/20 shadow-2xl mb-16`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${currentColors.text}`}>
                    Ready to Start Your Project?
                  </h3>
                  <p className={`text-lg leading-relaxed ${currentColors.textMuted}`}>
                    I specialize in creating modern, scalable solutions that drive results. 
                    From concept to deployment, let's build something extraordinary.
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    "Free initial consultation",
                    "Rapid prototyping & development",
                    "Ongoing support & maintenance",
                    "Modern tech stack & best practices"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <span className={currentColors.textSecondary}>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl  flex items-center justify-center space-x-2 group`}>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Start a Project</span>
                  </button>
                  
                  <button className={`px-8 py-4 rounded-xl font-semibold border backdrop-blur-sm transition-all duration-300  shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group`}>
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Call</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Content - Contact Methods */}
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`${currentColors.cardBg} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer group hover:scale-105`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className={`font-semibold mb-2 ${currentColors.text}`}>{method.title}</h4>
                      <p className={`text-sm mb-3 ${currentColors.textMuted}`}>{method.description}</p>
                      <p className={`text-sm font-medium ${currentColors.textSecondary}`}>{method.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <div className={`inline-flex items-center space-x-6 px-8 py-4 rounded-2xl border backdrop-blur-sm ${currentColors.cardBg}`}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-sm ${currentColors.textSecondary}`}>Available for freelance</span>
              </div>
              <div className={`w-px h-6 ${theme === 'dark' ? 'bg-gray-600' : theme === 'light' ? 'bg-gray-300' : 'bg-slate-500'}`}></div>
              <div className="flex items-center space-x-2">
                <MapPin className={`w-4 h-4 ${currentColors.textMuted}`} />
                <span className={`text-sm ${currentColors.textSecondary}`}>Remote & On-site</span>
              </div>
            </div>
          </div>

          {/* Theme Indicator */}
          <div className="flex justify-center mt-8">
            <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-lg border backdrop-blur-sm ${currentColors.cardBg}`}>
              <span className={`text-xs ${currentColors.textMuted}`}>Theme:</span>
              <span className="text-cyan-400 text-xs font-medium capitalize">{theme}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
