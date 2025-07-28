import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Brain, 
  BookOpen, 
  Award, 
  Mail, 
  Maximize, 
  Minimize,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FolderKanban } from 'lucide-react';

interface NavItem {
  id: string;
  name: string;
  icon: React.ElementType;
  neonColor: string;
  link: string;
}
const FuturisticNavbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      name: 'Home', 
      icon: Home, 
      neonColor: 'text-pink-400',
      link: '/'
    },
    { 
      id: 'about', 
      name: 'About', 
      icon: User, 
      neonColor: 'text-yellow-400',
      link: '/about-preview'
    },
    { 
      id: 'skills', 
      name: 'Skills', 
      icon: Brain, 
      neonColor: 'text-cyan-300',
      link: '/skills-preview'
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: FolderKanban,
      neonColor: 'text-green-400',
      link: '/projects-preview'
    },    
    { 
      id: 'blog', 
      name: 'Blog', 
      icon: BookOpen, 
      neonColor: 'text-blue-400',
      link: '/blog'
    },
    { 
      id: 'certifications', 
      name: 'Certifications', 
      icon: Award, 
      neonColor: 'text-pink-400',
      link: '/certificate'
    },
    { 
      id: 'contacts', 
      name: 'Contacts', 
      icon: Mail, 
      neonColor: 'text-yellow-400',
      link: '/contact-cta'
    },
  ];
  

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen toggle failed:', error);
    }
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Desktop Navigation Bar */}
      <nav className="relative z-50 flex items-center justify-between p-4 lg:p-6 bg-gray-800/20 backdrop-blur-xl border-b-2 border-gray-700/50">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/50 rounded-xl flex items-center justify-center border-2 border-pink-400">
            <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-pink-400" />
          </div>
          <div className="text-xl lg:text-2xl font-bold">
            <span className="text-pink-400">Lavudya </span>
            <span className="text-yellow-400 ml-2">Raja</span>
          </div>
        </div>

        {/* Desktop Horizontal Navigation */}
        <div className="hidden lg:flex bg-gray-800/30 backdrop-blur-xl border-2 w-[500px] justify-center items-center border-gray-700/50 rounded-2xl p-4">
          <div className="flex items-center justify-center space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              const isHovered = hoveredItem === item.id;
              
              return (
                <div key={item.id} className="relative">
                  <Link to={`${item.link}`} key={item.id}>
                    <button
                    onClick={() => handleItemClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                      relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 border-2 transform hover:scale-105
                      ${isActive 
                        ? `bg-gray-800/70 ${item.neonColor.replace('text-', 'border-')}` 
                        : 'bg-gray-800/30 border-gray-600/50 hover:border-gray-500'
                      }
                    `}
                  >
                    <Icon 
                      className={`
                        w-5 h-5 transition-colors duration-300
                        ${isActive 
                          ? item.neonColor 
                          : 'text-gray-400 hover:text-gray-200'
                        }
                      `} 
                    />
                    </button>
                    </Link>

                  {/* Desktop Tooltip Below Icon */}
                  {isHovered && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50">
                      <div className={`
                        px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border-2 bg-gray-800/90 backdrop-blur-sm
                        ${item.neonColor} ${item.neonColor.replace('text-', 'border-')}
                        animate-in fade-in slide-in-from-bottom-2 duration-200
                      `}>
                        {item.name}
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${item.neonColor.replace('text-', 'bg-')} -mb-1`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button and Fullscreen Toggle */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Toggle */}
         
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-800/50 border-2 border-cyan-300 hover:border-cyan-200 transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-cyan-300" />
            ) : (
              <Menu className="w-5 h-5 text-cyan-300" />
            )}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gray-800/50 border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
            ) : (
              <Maximize className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden relative z-40 bg-gray-800/95 backdrop-blur-xl border-b-2 border-gray-700/50">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                
                return (
                  <Link to={`${item.link}`} key={item.id}>
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      relative p-4 rounded-xl transition-all duration-300 border-2 transform active:scale-95
                      ${isActive 
                        ? `bg-gray-800/70 ${item.neonColor.replace('text-', 'border-')}` 
                        : 'bg-gray-800/30 border-gray-600/50 hover:border-gray-500'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <Icon 
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${isActive 
                            ? item.neonColor 
                            : 'text-gray-400'
                          }
                        `} 
                      />
                      <span className={`
                        text-xs font-medium
                        ${isActive 
                          ? item.neonColor 
                          : 'text-gray-400'
                        }
                      `}>
                        {item.name}
                      </span>
                    </div>
                  </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Clean Neon Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => {
          const colors = ['bg-pink-400', 'bg-yellow-400', 'bg-cyan-300', 'bg-blue-400'];
          const colorIndex = i % 4;
          return (
            <div
              key={i}
              className={`absolute w-1 h-1 lg:w-1.5 lg:h-1.5 ${colors[colorIndex]} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FuturisticNavbar;