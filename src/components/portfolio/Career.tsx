import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Cpu, Code2, Radio, Antenna, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    year: "2025 — Present",
    role: "Embedded Systems Intern",
    org: "Bharat Electronics Ltd. (BEL)",
    note: "Working on RF testbenches and signal-integrity firmware for ground-station equipment.",
    tags: ["STM32", "RF", "C"],
  },
  {
    year: "2024",
    role: "Hardware Lead",
    org: "IEEE Student Branch — Campus Chapter",
    note: "Led a team of 8 across two PCB-design workshops and an inter-college IoT contest.",
    tags: ["KiCad", "Leadership", "IoT"],
  },
  {
    year: "2024",
    role: "Web Developer (Freelance)",
    org: "Local Studios & NGOs",
    note: "Shipped four production sites with a focus on accessibility and Core Web Vitals.",
    tags: ["React", "TypeScript", "A11y"],
  },
  {
    year: "2023",
    role: "Research Assistant",
    org: "ECE Department — Signal Processing Lab",
    note: "Co-authored a paper on adaptive noise cancellation with low-cost MEMS microphones.",
    tags: ["DSP", "MATLAB", "Research"],
  },
];

const slides = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    body: "Bare-metal C and HAL on STM32 / ESP32. Interrupts, DMA, RTOS — I write firmware that respects power and time budgets.",
    accent: "01",
  },
  {
    icon: Antenna,
    title: "RF & Communication",
    body: "Antenna fundamentals, link budgets, modulation. Comfort with spectrum analyzers and the math behind a clean carrier.",
    accent: "02",
  },
  {
    icon: Radio,
    title: "Signal Processing",
    body: "Filter design, FFT, adaptive cancellation. Modeled in MATLAB / Simulink, deployed on microcontrollers.",
    accent: "03",
  },
  {
    icon: Layers,
    title: "PCB Design",
    body: "Schematic-to-fabrication in KiCad. 2 and 4-layer boards with attention to impedance, return paths, and DFM.",
    accent: "04",
  },
  {
    icon: Code2,
    title: "Software & Web",
    body: "TypeScript, React, Node. I treat interfaces like instruments — fast, legible, accessible.",
    accent: "05",
  },
  {
    icon: Sparkles,
    title: "Engineering Ethics",
    body: "Privacy by default, honest documentation, sustainable choices. The discipline behind the deliverable.",
    accent: "06",
  },
];

export function Career() {
  const [active, setActive] = useState(0);
  const visible = 3;
  const maxStart = Math.max(0, slides.length - visible);
  const start = Math.min(active, maxStart);

  return (
    <section id="career" className="border-t border-foreground/15 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeader
          index="03"
          label="Career"
          title={
            <>
              A short ledger of <span className="font-serif-display italic font-normal">where I've shipped.</span>
            </>
          }
        />

        <ol className="border-t border-foreground/15">
          {items.map((it, i) => (
            <Reveal as="li" key={i} delay={i * 0.06} className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-foreground/15 transition-colors hover:bg-muted/60">
              <div className="md:col-span-2 text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
                {it.year}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">{it.role}</h3>
                <div className="mt-1 text-muted-foreground">{it.org}</div>
              </div>
              <p className="md:col-span-4 text-base leading-relaxed text-foreground/80">{it.note}</p>
              <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end items-start">
                {it.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-[0.2em] border border-foreground/30 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        {/* About Career — attractive slides */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-mono mb-2">
                03 · About Career
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-semibold leading-[0.95] tracking-tight max-w-2xl">
                Six disciplines I keep <span className="font-serif-display italic font-normal">sharp.</span>
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={start === 0}
                aria-label="Previous slide"
                className="grid place-items-center h-10 w-10 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => setActive((a) => Math.min(maxStart, a + 1))}
                disabled={start === maxStart}
                aria-label="Next slide"
                className="grid place-items-center h-10 w-10 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${(-start * 100) / slides.length}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
              style={{ width: `${(slides.length / 3) * 100}%` }}
            >
              {slides.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="px-2 md:px-3"
                    style={{ width: `${100 / slides.length}%` }}
                  >
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative h-full min-h-[300px] bg-background border border-foreground/20 p-7 flex flex-col justify-between overflow-hidden"
                    >
                      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-foreground/5 transition-transform duration-700 group-hover:scale-150" />
                      <div className="relative">
                        <div className="flex items-start justify-between mb-8">
                          <div className="grid place-items-center h-12 w-12 border border-foreground/30 group-hover:bg-foreground group-hover:text-background transition-colors">
                            <Icon className="size-5" />
                          </div>
                          <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                            {s.accent}
                          </span>
                        </div>
                        <h4 className="font-display text-2xl font-semibold leading-tight tracking-tight">
                          {s.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                          {s.body}
                        </p>
                      </div>
                      <div className="relative mt-6 h-px w-full bg-foreground/15">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="absolute inset-0 bg-foreground origin-left"
                        />
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center gap-1.5">
            {Array.from({ length: maxStart + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide group ${i + 1}`}
                className={`h-1 rounded-full transition-all ${i === start ? "bg-foreground w-8" : "bg-foreground/25 w-4"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}