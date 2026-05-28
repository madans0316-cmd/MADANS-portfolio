import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Career } from "@/components/portfolio/Career";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { LoaderShell } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madan Kumar S. — Electronics & Communication Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Madan Kumar S., an Electronics & Communication engineering student building embedded systems, signal-processing tools, and honest software.",
      },
      { property: "og:title", content: "Madan Kumar S. — ECE Portfolio" },
      { property: "og:description", content: "Embedded systems, signal processing, and software — by an ECE student in Tamil Nadu, India." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
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
