import { useState } from "react";
import { Menu, X, Maximize, Minimize } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import ThemeDropdown from "../ui/ThemeToggleButton";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-preview" },
  { label: "Projects", href: "/projects-preview" },
  { label: "Skills", href: "/skills-preview" },
  { label: "Blog", href: "/blog-preview" },
  { label: "Contact", href: "/contact-cta" },
];

export default function FuturisticNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  
  // Get theme from useTheme hook
  const { resolvedTheme } = useTheme();

  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/50 border-gray-700/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      controlBg: 'bg-gray-800/80 hover:bg-gray-700',
      controlBorder: 'border-gray-600',
      buttonBg: 'bg-gray-700 hover:bg-gray-600',
      dotInactive: 'bg-gray-600 hover:bg-gray-500',
      navbarBg: 'bg-gray-900/95 border-gray-700/50',
      mobileBg: 'bg-gray-900/98',
      activeButton: 'bg-gray-800/70 text-cyan-400 border-cyan-400/30',
      inactiveButton: 'text-gray-100 hover:bg-gray-800/50',
      logo: {
        first: 'text-yellow-400',
        second: 'text-orange-400', 
        third: 'text-pink-400'
      }
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/80 border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      controlBg: 'bg-white/80 hover:bg-white',
      controlBorder: 'border-gray-200',
      buttonBg: 'bg-gray-200 hover:bg-gray-300',
      dotInactive: 'bg-gray-300 hover:bg-gray-400',
      navbarBg: 'bg-white/95 border-gray-200/50',
      mobileBg: 'bg-white/98',
      activeButton: 'bg-blue-100 text-blue-600 border-blue-300',
      inactiveButton: 'text-gray-700 hover:bg-gray-100',
      logo: {
        first: 'text-orange-500',
        second: 'text-blue-500',
        third: 'text-purple-500'
      }
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/50 border-slate-600/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      controlBg: 'bg-slate-700/80 hover:bg-slate-600',
      controlBorder: 'border-slate-500',
      buttonBg: 'bg-slate-600 hover:bg-slate-500',
      dotInactive: 'bg-slate-500 hover:bg-slate-400',
      navbarBg: 'bg-slate-800/95 border-slate-600/50',
      mobileBg: 'bg-slate-800/98',
      activeButton: 'bg-slate-700/70 text-emerald-400 border-emerald-400/30',
      inactiveButton: 'text-slate-100 hover:bg-slate-700/50',
      logo: {
        first: 'text-emerald-400',
        second: 'text-cyan-400',
        third: 'text-violet-400'
      }
    }
  };

  // Get current theme colors
  const currentColors = themeColors[resolvedTheme] || themeColors.system;

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsOpen(false);
  };

  return (
    <div className={currentColors.bg}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${currentColors.navbarBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className={currentColors.logo.first}>Dev</span>
              <span className={currentColors.logo.second}>Port</span>
              <span className={currentColors.logo.third}>folio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link to={item.href} key={item.label}>
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.label)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors border ${
                    activeLink === item.label
                      ? currentColors.activeButton
                      : `${currentColors.inactiveButton} border-transparent`
                  }`}
                >
                  {item.label}
                  </button>
                  </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg transition-colors border ${currentColors.controlBg} ${currentColors.controlBorder}`}
              >
                {isFullscreen ? (
                  <Minimize className={`w-5 h-5 ${currentColors.logo.second}`} />
                ) : (
                  <Maximize className={`w-5 h-5 ${currentColors.logo.second}`} />
                )}
              </button>
                
              {/* Theme Dropdown */}
              <ThemeDropdown />
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-lg transition-colors border ${currentColors.controlBg} ${currentColors.controlBorder}`}
              >
                {isOpen ? (
                  <X className={`w-6 h-6 ${currentColors.logo.third}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${currentColors.logo.third}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden backdrop-blur-sm ${currentColors.mobileBg}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
                <Link to={item.href} key={item.label}>
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.label)}
                className={`text-2xl font-medium px-8 py-4 rounded-xl border transition-colors ${
                  activeLink === item.label
                    ? currentColors.activeButton
                    : `${currentColors.inactiveButton} border-transparent`
                }`}
              >
                {item.label}
                </button>
                </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}