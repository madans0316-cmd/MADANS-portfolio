import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Career } from "@/components/portfolio/Career";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { LoaderShell } from "@/components/portfolio/Loader";

export function App() {
  return (
    <LoaderShell>
      <main className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Career />
        <Education />
        <Projects />
        <Contact />
      </main>
    </LoaderShell>
  );
}
