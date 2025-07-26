import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MessageCircle, Calendar, MapPin, Send, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ContactCTA() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [theme, setTheme] = useState('dark');

  // Contact methods data
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "codeml862@gmail.com",
      action: "mailto:codeml862@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call",
      description: "Let's talk directly",
      value: "+91 7093221536",
      action: "tel:+91 7093221536",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions welcome",
      value: "Chat Now",
      action:"https://wa.me/917093221536?text=Hi%20Raja%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book a consultation",
      value: "Calendly",
      action: "https://calendly.com/raja",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const keyPoints = [
    "Free initial consultation",
    "Rapid prototyping & development", 
    "Ongoing support & maintenance",
    "Modern tech stack & best practices"
  ];

  const location = useLocation();
  const Negivate = useNavigate();
  const isContactCTAPage = location.pathname === "/contact"
  
  return (
    <div className="bg-gray-900">
      {/* Navigation */}
      {/* {!isContactCTAPage && (
            <div className="flex justify-end max-w-7xl mx-auto px-6 mt-4 mb-6">
              <button
                onClick={() => Negivate(-1)}
                className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-pink-500 text-pink-400 text-sm font-semibold transition duration-300 ease-in-out hover:text-white hover:shadow-[0_0_12px_3px_rgba(255,105,180,0.6)] hover:bg-pink-500"
              >
                <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 opacity-25 blur-sm group-hover:opacity-50 group-hover:blur-md transition-all duration-500"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="z-10">Go Back</span>
              </button>
            </div>
          )} */}

      <nav className="flex items-center justify-between p-4 lg:p-6 max-w-7xl mx-auto">
        {/* go back button  */}
       
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-400 text-sm font-medium">Available for Projects</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 lg:px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Create Something
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? Whether you need a modern website, a complex web application, 
              or technical consultation, I'm here to help turn your ideas into reality.
            </p>
          </section>

          {/* Main CTA Section */}
          <section className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 lg:p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                    I specialize in creating modern, scalable solutions that drive results. 
                    From concept to deployment, let's build something extraordinary.
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/projects">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Start a Project</span>
                  </button>
                  </Link>
                  
                  <button className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 font-semibold rounded-xl transition-all duration-300 group">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Call</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Content - Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="block bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-lg"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{method.description}</p>
                      <p className="text-sm font-medium text-slate-300">{method.value}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Additional Info Section */}
          <section className="text-center">
            <div className="inline-flex items-center gap-6 px-6 py-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">Available for freelance</span>
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">Remote & On-site</span>
              </div>
            </div>
          </section>

          {/* Theme Toggle (for demonstration) */}
         
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}