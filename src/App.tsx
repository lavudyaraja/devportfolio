import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects'
import BlogSection from './components/home/BlogSection';
import Skills from './pages/Skills'
import NotFound from './pages/NotFound';
import {AboutPreview} from "@/components/home/about-preview";
import ProjectsPreview from "@/components/home/projects-preview";
import SkillsPreview from "@/components/home/skills-preview";
import  ContactCTA  from "@/components/home/contact-cta";
import CertificationSection from './components/home/CertificationSection';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/projects-preview" element={<ProjectsPreview />} />
          <Route path="/skills-preview" element={<SkillsPreview />} />
          <Route path="/contact-cta" element={<ContactCTA />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-preview" element={<AboutPreview />} />
          <Route path="/certificate" element={<CertificationSection />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
