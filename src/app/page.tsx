import Header from "@/components/Header";
import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import YouTubeSection from "@/components/YouTubeSection";
import Footer from "@/components/Footer"; // Importando o Footer

export default function Page() {
  return (
    <>
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section className="snap-start">
          <HomeSection />
        </section>
        <section className="snap-start">
          <AboutSection />
        </section>
        <section className="snap-start">
          <SkillsSection />
        </section>
        <section className="snap-start">
          <ProjectsSection />
        </section>
        <section className="snap-start">
          <YouTubeSection />
          <Footer /> 
        </section>
       
      </main>
      
      
    </>
  );
}