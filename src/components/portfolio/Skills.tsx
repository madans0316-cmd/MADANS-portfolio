import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Embedded & Hardware",
    items: ["Arduino", "ESP32", "STM32", "Raspberry Pi", "PCB Design — KiCad", "LTspice", "MATLAB / Simulink", "Verilog / VHDL"],
  },
  {
    title: "Software & Languages",
    items: ["C / C++", "Python", "JavaScript / TypeScript", "React", "Node.js", "Git & GitHub", "Linux", "Docker"],
  },
  {
    title: "Signal & Systems",
    items: ["DSP", "Communication Systems", "RF Fundamentals", "Antenna Design", "Control Systems", "IoT Protocols (MQTT, BLE)"],
  },
  {
    title: "Tooling & Workflow",
    items: ["Figma", "Notion", "VS Code", "PlatformIO", "LaTeX", "Postman", "Vercel", "Supabase"],
  },
];

const marqueeWords = [
  "C++", "Python", "ESP32", "STM32", "KiCad", "Verilog", "MATLAB", "React", "TypeScript", "DSP", "RF", "IoT", "Linux", "PCB",
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-foreground/15 py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeader
          index="02"
          label="Skills"
          title={
            <>
              Tools, languages, and the <span className="font-serif-display italic font-normal">muscle memory</span> behind them.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {groups.map((g, gi) => (
            <div key={g.title} className="bg-background p-8 min-h-[280px]">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">0{gi + 1}</span>
              </div>
              <ul className="space-y-2 text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-foreground/80">
                    <span className="h-px w-3 bg-foreground/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-y border-foreground/15 py-6 overflow-hidden whitespace-nowrap">
        <div className="marquee-track inline-flex gap-12 font-display text-4xl md:text-6xl font-semibold tracking-tight">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              {w}
              <span className="text-foreground/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}