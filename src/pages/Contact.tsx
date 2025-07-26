import React, { useState } from "react";
import { 
  AlertCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  Loader2
} from "lucide-react";
import { useNavigate,useLocation } from "react-router-dom";



export default function ContactPage({ theme = "dark" }) {

  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-cta";

  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  // Theme configurations
  const themeColors = {
    dark: {
      bg: 'bg-gray-900',
      cardBg: 'bg-gray-800/60 border-gray-700/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      inputBg: 'bg-gray-700/50 border-gray-600 focus:border-cyan-400',
      buttonPrimary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
      buttonSecondary: 'bg-gray-700/50 hover:bg-gray-700 border-gray-600',
      alertSuccess: 'bg-green-500/10 border-green-500/30 text-green-400',
      alertError: 'bg-red-500/10 border-red-500/30 text-red-400',
      iconBg: 'bg-gray-700/50',
      socialHover: 'hover:bg-cyan-500/20 hover:text-cyan-400'
    },
    light: {
      bg: 'bg-gray-50',
      cardBg: 'bg-white/80 border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      inputBg: 'bg-white border-gray-300 focus:border-blue-500',
      buttonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
      buttonSecondary: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
      alertSuccess: 'bg-green-50 border-green-200 text-green-700',
      alertError: 'bg-red-50 border-red-200 text-red-700',
      iconBg: 'bg-gray-100',
      socialHover: 'hover:bg-blue-500/20 hover:text-blue-600'
    },
    system: {
      bg: 'bg-slate-800',
      cardBg: 'bg-slate-700/60 border-slate-600/50',
      text: 'text-slate-100',
      textSecondary: 'text-slate-200',
      textMuted: 'text-slate-400',
      inputBg: 'bg-slate-600/50 border-slate-500 focus:border-pink-400',
      buttonPrimary: 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600',
      buttonSecondary: 'bg-slate-600/50 hover:bg-slate-600 border-slate-500',
      alertSuccess: 'bg-green-500/10 border-green-500/30 text-green-400',
      alertError: 'bg-red-500/10 border-red-500/30 text-red-400',
      iconBg: 'bg-slate-600/50',
      socialHover: 'hover:bg-pink-500/20 hover:text-pink-400'
    }
  };

  const currentTheme = themeColors[theme];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
      description: "Drop me a message anytime",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
      description: "Available Mon-Fri, 9AM-6PM",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, California",
      link: "#",
      description: "Remote & On-site available",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Schedule",
      value: "Book a Meeting",
      link: "https://calendly.com/yourname",
      description: "Free 30min consultation",
      color: "from-orange-400 to-yellow-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <div className={`transition-all duration-500 ${currentTheme.bg}`}>
      {/* Background Effects */}
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

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      
      <main className="relative z-10 pt-24 pb-20 px-4">
      
        {/* Header Section */}
        <div className="container mx-auto max-w-6xl mb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${currentTheme.text}`}>
              Get In
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${currentTheme.textSecondary}`}>
              Have a project in mind? I'd love to discuss how I can help bring your ideas to life. 
              Let's create something amazing together.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`${currentTheme.cardBg} backdrop-blur-md rounded-3xl p-8 lg:p-12 border shadow-2xl`}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-bold ${currentTheme.text}`}>Send Me a Message</h2>
                    <p className={`${currentTheme.textMuted}`}>I'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                {/* Success Alert */}
                {formStatus.isSubmitted && (
                  <div className={`flex items-center p-4 rounded-xl border mb-6 ${currentTheme.alertSuccess}`}>
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-90">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                {/* Error Alert */}
                {formStatus.isError && (
                  <div className={`flex items-center p-4 rounded-xl border mb-6 ${currentTheme.alertError}`}>
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Error sending message</p>
                      <p className="text-sm opacity-90">Please try again or contact me directly.</p>
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className={`text-sm font-medium ${currentTheme.textSecondary} flex items-center`}>
                        <User className="w-4 h-4 mr-2" />
                        Your Name
                      </label>
                      <input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        required 
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${currentTheme.inputBg} ${currentTheme.text} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={`text-sm font-medium ${currentTheme.textSecondary} flex items-center`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${currentTheme.inputBg} ${currentTheme.text} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className={`text-sm font-medium ${currentTheme.textSecondary} flex items-center`}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Subject
                    </label>
                    <input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      required 
                      value={formState.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${currentTheme.inputBg} ${currentTheme.text} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className={`text-sm font-medium ${currentTheme.textSecondary}`}>
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Write your message here..." 
                      rows={6} 
                      required 
                      value={formState.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 resize-none ${currentTheme.inputBg} ${currentTheme.text} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                    />
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={formStatus.isSubmitting}
                    className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${currentTheme.buttonPrimary} shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className={`${currentTheme.cardBg} backdrop-blur-md rounded-3xl p-8 border shadow-2xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${currentTheme.text}`}>Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${currentTheme.text} group-hover:text-cyan-400 transition-colors`}>
                            {info.title}
                          </p>
                          <p className={`${currentTheme.textSecondary} group-hover:text-cyan-300 transition-colors`}>
                            {info.value}
                          </p>
                          <p className={`text-sm ${currentTheme.textMuted}`}>
                            {info.description}
                          </p>
                        </div>
                        <ExternalLink className={`w-4 h-4 ${currentTheme.textMuted} group-hover:text-cyan-400 transition-colors`} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className={`${currentTheme.cardBg} backdrop-blur-md rounded-3xl p-8 border shadow-2xl`}>
                <h4 className={`font-semibold mb-6 ${currentTheme.text}`}>Follow Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`${currentTheme.iconBg} p-4 rounded-xl transition-all duration-300 ${currentTheme.socialHover} border border-transparent hover:border-cyan-400/30 group flex items-center space-x-3`}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className={`text-sm font-medium ${currentTheme.textSecondary}`}>
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
             {/* <div className={`${currentTheme.cardBg} backdrop-blur-md rounded-3xl p-8 border shadow-2xl`}>
                 <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className={`font-semibold ${currentTheme.text}`}>Available for Projects</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className={`flex items-center space-x-3 ${currentTheme.textSecondary}`}>
                    <Clock className="w-4 h-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${currentTheme.textSecondary}`}>
                    <Calendar className="w-4 h-4" />
                    <span>Free consultation available</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Theme Indicator */}
        {/* <div className="flex justify-center mt-12">
          <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-lg border backdrop-blur-sm ${currentTheme.cardBg}`}>
            <span className={`text-xs ${currentTheme.textMuted}`}>Current Theme:</span>
            <span className="text-cyan-400 text-xs font-medium capitalize">{theme}</span>
          </div>
        </div> */}
      </main>
    </div>
  );
}