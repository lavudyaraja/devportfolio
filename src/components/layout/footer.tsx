import {
  Github, Linkedin, Twitter, Instagram, Send, MapPin, Mail, Phone, Heart, ExternalLink, Code2, Palette, Cpu, Globe, Sparkles, Zap, Star
} from "lucide-react";
import { useState, FC } from "react";
import { Link } from "react-router-dom";

interface Tech {
  name: string;
  icon: string;
  color: string;
}

const techStack: Tech[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "white" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "cyan" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "green" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "yellow" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "blue" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "green" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "blue" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "blue" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "orange" },
];

const quickLinks = [
  { name: "Home", path: "/", icon: <Globe className="w-4 h-4" /> },
  { name: "About", path: "/about", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Projects", path: "/projects", icon: <Code2 className="w-4 h-4" /> },
  { name: "Blog", path: "/blog", icon: <Zap className="w-4 h-4" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
];

const services = [
  { name: "Web Development", icon: <Globe className="w-5 h-5" />, color: "neon-blue" },
  { name: "Mobile Apps", icon: <Phone className="w-5 h-5" />, color: "neon-pink" },
  { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, color: "neon-yellow" },
  { name: "API Development", icon: <Cpu className="w-5 h-5" />, color: "neon-orange" },
  { name: "DevOps & Cloud", icon: <Zap className="w-5 h-5" />, color: "neon-cyan" },
];

export const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuickContact = () => {
    setShowSuccess(true);
    setEmail("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const neonColors = {
    'neon-yellow': 'text-yellow-400 shadow-yellow-400/50',
    'neon-blue': 'text-blue-400 shadow-blue-400/50',
    'neon-red': 'text-red-400 shadow-red-400/50',
    'neon-orange': 'text-orange-400 shadow-orange-400/50',
    'neon-pink': 'text-pink-400 shadow-pink-400/50',
    'neon-cyan': 'text-cyan-400 shadow-cyan-400/50',
    'neon-green': 'text-green-400 shadow-green-400/50',
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-500 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-40 h-40 bg-pink-500 rounded-full filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full blur-lg opacity-75"></div>
              <img 
                src="/Rajaimage.jpg" 
                alt="Raja" 
                className="relative w-24 h-24 rounded-full border-4 border-white/20" />
            </div>
          </div>
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Lavudya Raja
          </h3>
          <p className="text-xl text-gray-300 mb-2">Software Engineer & Machine Learning Enthusiast</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="mailto:codeml862@gmail.com" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              codeml862@gmail.com
            </a>
            <span className="flex items-center gap-2 text-pink-400">
              <MapPin className="w-4 h-4" />
              Haryana, India
            </span>
          </div>
        </div>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Services Card */}
          <div className="lg:col-span-1">
            <div className=" backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-yellow-400/30 transition-all duration-300">
              <h4 className="text-lg font-bold mb-6 text-yellow-400">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name} className="flex items-center gap-3 group">
                    <div className={`${neonColors[service.color]} drop-shadow-lg`}>
                      {service.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Card - Spans 2 columns */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-blue-400/30 transition-all duration-300">
              <h4 className="text-lg font-bold mb-6 text-blue-400">Tech Stack</h4>
              <div className="grid grid-cols-5 gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="group relative">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 mx-auto" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Subscribe Card */}
          <div className="lg:col-span-1">
            <div className=" backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-pink-400/30 transition-all duration-300">
              <h4 className="text-lg font-bold mb-6 text-pink-400">Stay Connected</h4>
              <p className="text-sm text-gray-300 mb-4">Get updates on new projects and blog posts</p>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-all"
                />
                <button
                  onClick={handleQuickContact}
                  className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  {showSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 animate-spin" />
                      Success!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Subscribe
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className=" backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className={`${Object.values(neonColors)[index % 5].split(' ')[0]} drop-shadow-lg`}>
                  {link.icon}
                </span>
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
            <a
              href="/Resume June.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links with Tailwind CSS Icon */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/lavudyaraja" className="text-gray-400 hover:text-yellow-400 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lavudyaraja5228/" className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/LavudyaRaj22988" className="text-gray-400 hover:text-pink-400 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Sanskrit Text */}
            <div className="text-center">
              <p className="text-sm font-medium bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                ऊँ कृष्णाय वासुदेवाय हरये परमात्मने।
              </p>
              <p className="text-sm font-medium bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                प्रणतः क्लेशनाशाय गोविंदाय नमो नमः।।
              </p>
            </div>

            {/* Interactive CTA Section */}
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-xl blur opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="relative">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm animate-ping"></div>
                    </div>
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                    <Code2 className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                    <Heart className="w-6 h-6 text-pink-400 animate-bounce" style={{animationDuration: '2s'}} />
                  </div>
                  <blockquote className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 leading-relaxed">
                    "Code is Poetry, Logic is Art"
                  </blockquote>
                  <p className="text-sm text-gray-300 mb-2 italic">
                    Crafting digital experiences that inspire
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Where Innovation Meets Passion</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
