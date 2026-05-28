import { SectionHeader } from "./SectionHeader";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { k: "CGPA", to: 8.7, decimals: 1, suffix: "" },
  { k: "Projects", to: 12, decimals: 0, suffix: "+" },
  { k: "Certifications", to: 9, decimals: 0, suffix: "" },
  { k: "Years Coding", to: 5, decimals: 0, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="border-t border-foreground/15 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              An engineer who treats <span className="font-serif-display italic font-normal">code & circuits</span> as a single craft.
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-3 md:col-start-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Manifesto
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 space-y-6 text-lg leading-relaxed">
            <>
              <p>
                I'm a third-year ECE student fascinated by the layer where physical signals
                become digital intent — antennas, microcontrollers, embedded systems, and the
                software that gives them purpose.
              </p>
              <p className="text-muted-foreground">
                I build with discipline: open-source tools, clean documentation, accessible
                interfaces, and an obsession with how things actually feel when used. I take
                ethics in engineering seriously — privacy, sustainability, and honest work.
              </p>
            </>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/15">
          {stats.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 0.08}
              className={`py-8 px-4 ${i !== 0 ? "md:border-l border-foreground/15" : ""} ${i % 2 === 1 ? "border-l border-foreground/15 md:border-l" : ""}`}
            >
              <div className="font-display text-5xl md:text-6xl font-semibold tracking-tighter">
                <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.k}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}