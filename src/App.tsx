import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Components from './pages/Components';
import NotFound from './pages/NotFound';
import {AboutPreview} from "@/components/home/about-preview";
import {ProjectsPreview} from "@/components/home/projects-preview";
import SkillsPreview from "@/components/home/skills-preview";
import  ContactCTA  from "@/components/home/contact-cta";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects-preview" element={<ProjectsPreview />} />
          <Route path="/skills-preview" element={<SkillsPreview />} />
          <Route path="/contact-cta" element={<ContactCTA />} />
          <Route path="/components" element={<Components />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-preview" element={<AboutPreview />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
