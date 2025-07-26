import Header from "@/components/layout/FuturisticNavbar";
import Hero from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import  ProjectsPreview  from "@/components/home/projects-preview";
import SkillsPreview from "@/components/home/skills-preview";
import Testimonials from "@/components/home/testimonials";
import ContactCTA from "@/components/home/contact-cta";
import { Footer } from "@/components/layout/footer";
import CertificationSection from "@/components/home/CertificationSection";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {// get current theme

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <CertificationSection />
        <ProjectsPreview />
        <BlogSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
