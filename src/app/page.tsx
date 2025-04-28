import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";

export default function Page() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section className="snap-start">
        <HomeSection />
      </section>
      <section className="snap-start">
        <AboutSection />
      </section>
    </main>
  );
}