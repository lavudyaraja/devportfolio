import { Github, Linkedin, Twitter, Instagram, Send, MapPin, Sun, Moon, ChevronDown, CheckCircle, Mail, Phone, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, FC, FormEvent } from "react";
import { useTheme } from "@/hooks/use-theme";

interface Tech {
  name: string;
  icon: string;
}

const techStack: Tech[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "API Development",
  "DevOps & Cloud",
];

export const Footer: FC = () => {
  const [language, setLanguage] = useState<string>("EN");
  const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Get theme from useTheme hook
  const { resolvedTheme } = useTheme();

  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/50',
      cardBorder: 'border-gray-700',
      cardHover: 'hover:border-orange-500/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      inputBg: 'bg-gray-700/50',
      inputBorder: 'border-gray-600',
      inputText: 'text-gray-100',
      inputPlaceholder: 'placeholder-gray-400',
      borderColor: 'border-gray-700',
      glowColors: {
        orange: 'bg-orange-500',
        red: 'bg-red-500',
        pink: 'bg-pink-500',
        yellow: 'bg-yellow-400',
        blue: 'bg-blue-500'
      },
      neonColors: {
        orange: 'text-orange-400',
        red: 'text-red-400',
        pink: 'text-pink-400',
        yellow: 'text-yellow-400',
        blue: 'text-blue-400',
        green: 'text-green-400'
      },
      gradientButton: 'bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500',
      shadowHover: 'hover:shadow-orange-500/25'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/80',
      cardBorder: 'border-gray-200',
      cardHover: 'hover:border-orange-400/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      inputBg: 'bg-white/80',
      inputBorder: 'border-gray-300',
      inputText: 'text-gray-900',
      inputPlaceholder: 'placeholder-gray-500',
      borderColor: 'border-gray-200',
      glowColors: {
        orange: 'bg-orange-400',
        red: 'bg-red-400',
        pink: 'bg-pink-400',
        yellow: 'bg-yellow-300',
        blue: 'bg-blue-400'
      },
      neonColors: {
        orange: 'text-orange-500',
        red: 'text-red-500',
        pink: 'text-pink-500',
        yellow: 'text-yellow-500',
        blue: 'text-blue-500',
        green: 'text-green-500'
      },
      gradientButton: 'bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400',
      shadowHover: 'hover:shadow-orange-400/25'
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/50',
      cardBorder: 'border-slate-600',
      cardHover: 'hover:border-emerald-400/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      textMuted: 'text-slate-400',
      inputBg: 'bg-slate-600/50',
      inputBorder: 'border-slate-500',
      inputText: 'text-slate-100',
      inputPlaceholder: 'placeholder-slate-400',
      borderColor: 'border-slate-600',
      glowColors: {
        orange: 'bg-emerald-500',
        red: 'bg-cyan-500',
        pink: 'bg-violet-500',
        yellow: 'bg-amber-400',
        blue: 'bg-indigo-500'
      },
      neonColors: {
        orange: 'text-emerald-400',
        red: 'text-cyan-400',
        pink: 'text-violet-400',
        yellow: 'text-amber-400',
        blue: 'text-indigo-400',
        green: 'text-emerald-400'
      },
      gradientButton: 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500',
      shadowHover: 'hover:shadow-emerald-500/25'
    }
  };

  // Get current theme colors
  const currentColors = themeColors[resolvedTheme] || themeColors.system;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000); 
  };

  return (
    <footer className={`relative overflow-hidden ${currentColors.bg} border-t ${currentColors.borderColor} transition-all duration-500`}>
      {/* Neon Glow Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className={`absolute top-10 left-10 w-32 h-32 ${currentColors.glowColors.orange} rounded-full filter blur-3xl animate-pulse`}></div>
        <div className={`absolute top-20 right-20 w-24 h-24 ${currentColors.glowColors.red} rounded-full filter blur-2xl animate-pulse`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute bottom-20 left-1/3 w-28 h-28 ${currentColors.glowColors.pink} rounded-full filter blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute bottom-10 right-1/3 w-20 h-20 ${currentColors.glowColors.yellow} rounded-full filter blur-2xl animate-pulse`} style={{animationDelay: '3s'}}></div>
        <div className={`absolute top-1/2 left-1/2 w-24 h-24 ${currentColors.glowColors.blue} rounded-full filter blur-2xl animate-pulse`} style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About Section */}
          <div className="lg:col-span-1">
            <div className={`${currentColors.cardBg} backdrop-blur-sm border ${currentColors.cardBorder} rounded-2xl p-8 h-full ${currentColors.cardHover} transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl ${currentColors.gradientButton} p-0.5 mr-4`}>
                  <img 
                    src="https://i.pravatar.cc/150?u=devportfolio" 
                    alt="Alex Doe" 
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${currentColors.text} mb-1`}>Alex Doe</h3>
                  <p className={`text-sm ${currentColors.neonColors.orange} font-medium`}>Senior Full-Stack Developer</p>
                </div>
              </div>
              
              <p className={`${currentColors.textSecondary} text-sm leading-relaxed mb-6`}>
                Passionate about creating exceptional digital experiences with modern technologies. 
                Specializing in React, Node.js, and cloud architecture.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Mail className={`h-4 w-4 ${currentColors.neonColors.pink} mr-2`} />
                  <span className={`text-sm ${currentColors.textSecondary}`}>alex@example.com</span>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className={`h-4 w-4 ${currentColors.neonColors.blue} mr-2`} />
                <span className={`text-sm ${currentColors.textSecondary}`}>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-1">
            <div className={`${currentColors.cardBg} backdrop-blur-sm border ${currentColors.cardBorder} rounded-2xl p-8 h-full hover:border-pink-500/50 transition-all duration-300`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 h-full">
                
                {/* Quick Links */}
                <div>
                  <h4 className={`text-lg font-semibold ${currentColors.text} mb-4`}>Quick Links</h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.path} 
                          className={`${currentColors.textSecondary} hover:${currentColors.neonColors.orange.replace('text-', 'text-')} transition-colors duration-300 text-sm flex items-center group`}
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                          <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${currentColors.textSecondary} hover:${currentColors.neonColors.yellow.replace('text-', 'text-')} transition-colors duration-300 text-sm font-medium flex items-center group`}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">Download Resume</span>
                        <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className={`text-lg font-semibold ${currentColors.text} mb-4`}>Services</h4>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={service} className={`${currentColors.textSecondary} text-sm flex items-center`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          index % 5 === 0 ? currentColors.neonColors.orange.replace('text-', 'bg-') :
                          index % 5 === 1 ? currentColors.neonColors.red.replace('text-', 'bg-') :
                          index % 5 === 2 ? currentColors.neonColors.pink.replace('text-', 'bg-') :
                          index % 5 === 3 ? currentColors.neonColors.yellow.replace('text-', 'bg-') : 
                          currentColors.neonColors.blue.replace('text-', 'bg-')
                        }`}></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className={`${currentColors.cardBg} backdrop-blur-sm border ${currentColors.cardBorder} rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300`}>
              <h4 className={`text-lg font-semibold ${currentColors.text} mb-6`}>Let's Work Together</h4>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className={`w-full px-4 py-3 ${currentColors.inputBg} border ${currentColors.inputBorder} ${currentColors.inputText} ${currentColors.inputPlaceholder} rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all duration-300`} 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className={`w-full px-4 py-3 ${currentColors.inputBg} border ${currentColors.inputBorder} ${currentColors.inputText} ${currentColors.inputPlaceholder} rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300`} 
                />
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows={4} 
                  required 
                  className={`w-full px-4 py-3 ${currentColors.inputBg} border ${currentColors.inputBorder} ${currentColors.inputText} ${currentColors.inputPlaceholder} rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-300`}
                ></textarea>
                <button 
                  type="submit" 
                  className={`w-full py-3 px-6 rounded-xl ${currentColors.gradientButton} text-white font-semibold hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center shadow-lg ${currentColors.shadowHover}`}
                >
                  {formSubmitted ? (
                    <CheckCircle className={`animate-bounce h-5 w-5 ${currentColors.neonColors.green}`} />
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={`${currentColors.cardBg} backdrop-blur-sm border ${currentColors.cardBorder} rounded-2xl p-8 mb-8 hover:border-yellow-500/50 transition-all duration-300`}>
          <div className="text-center mb-8">
            <h4 className={`text-xl font-semibold ${currentColors.text} mb-2`}>Technologies I Work With</h4>
            <p className={`${currentColors.textSecondary} text-sm`}>Building modern solutions with cutting-edge tools</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techStack.map((tech, index) => (
              <div key={tech.name} className="relative group">
                <div className={`p-3 rounded-2xl ${currentColors.inputBg} border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                  index % 6 === 0 ? `${currentColors.cardBorder} group-hover:border-orange-400 group-hover:shadow-orange-500/25` :
                  index % 6 === 1 ? `${currentColors.cardBorder} group-hover:border-red-400 group-hover:shadow-red-500/25` :
                  index % 6 === 2 ? `${currentColors.cardBorder} group-hover:border-pink-400 group-hover:shadow-pink-500/25` :
                  index % 6 === 3 ? `${currentColors.cardBorder} group-hover:border-yellow-400 group-hover:shadow-yellow-500/25` :
                  index % 6 === 4 ? `${currentColors.cardBorder} group-hover:border-blue-400 group-hover:shadow-blue-500/25` :
                  `${currentColors.cardBorder} group-hover:border-indigo-400`
                }`}>
                  <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                </div>
                <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs ${currentColors.textSecondary} opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className={`border-t ${currentColors.borderColor} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" aria-label="GitHub" className={`${currentColors.textMuted} hover:${currentColors.neonColors.orange.replace('text-', 'text-')} hover:scale-125 transform transition-all duration-300`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className={`${currentColors.textMuted} hover:${currentColors.neonColors.blue.replace('text-', 'text-')} hover:scale-125 transform transition-all duration-300`}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className={`${currentColors.textMuted} hover:${currentColors.neonColors.pink.replace('text-', 'text-')} hover:scale-125 transform transition-all duration-300`}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className={`${currentColors.textMuted} hover:${currentColors.neonColors.red.replace('text-', 'text-')} hover:scale-125 transform transition-all duration-300`}>
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <p className={`text-sm ${currentColors.textMuted}`}>
                © {new Date().getFullYear()} Alex Doe. Made with
              </p>
              <Heart className={`h-4 w-4 ${currentColors.neonColors.red} animate-pulse`} />
              <p className={`text-sm ${currentColors.textMuted}`}>in San Francisco</p>
            </div>

            {/* Language Controls */}
            <div className="relative">
              <button 
                onClick={() => setShowLangDropdown(!showLangDropdown)} 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${currentColors.inputBg} border ${currentColors.inputBorder} ${currentColors.textSecondary} hover:border-yellow-400/50 hover:scale-105 transform transition-all duration-300`}
              >
                <span className="text-sm font-medium">{language}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showLangDropdown && (
                <div className={`absolute bottom-full mb-2 right-0 w-20 ${currentColors.cardBg} border ${currentColors.cardBorder} rounded-lg overflow-hidden shadow-lg backdrop-blur-sm`}>
                  {['EN', 'FR', 'IN'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setShowLangDropdown(false); }}
                      className={`block w-full px-3 py-2 text-sm ${currentColors.textSecondary} hover:${currentColors.inputBg} hover:${currentColors.neonColors.yellow.replace('text-', 'text-')} transition-colors text-center`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};