import { SectionHeader } from "./SectionHeader";

const education = [
  {
    period: "2023 — 2027",
    title: "B.E. Electronics & Communication Engineering",
    place: "Anna University · Tamil Nadu",
    detail: "CGPA 8.7 / 10 · Coursework in VLSI, Communication Systems, Embedded, Antennas, DSP.",
  },
  {
    period: "2021 — 2023",
    title: "Higher Secondary — PCM + Computer Science",
    place: "State Board · Tamil Nadu",
    detail: "Graduated 92.4%. School topper in Physics. Robotics club founder.",
  },
  {
    period: "Until 2021",
    title: "Secondary Schooling",
    place: "St. Joseph's Matric. Hr. Sec. School",
    detail: "Built first Arduino weather station in 9th grade. That decided the rest.",
  },
];

const learning = [
  { title: "Embedded Systems Specialization", from: "Coursera · UC Boulder", state: "Completed" },
  { title: "Digital Signal Processing", from: "NPTEL · IIT Madras", state: "Completed" },
  { title: "Self-driving Car Nanodegree", from: "Udacity", state: "In progress" },
  { title: "RF Design with KiCad", from: "Independent · GitHub builds", state: "Ongoing" },
];

export function Education() {
  return (
    <section id="education" className="border-t border-foreground/15 py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeader
          index="04"
          label="Education"
          title={
            <>
              Schools, syllabi & <span className="font-serif-display italic font-normal">self-study.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            {education.map((e) => (
              <div key={e.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-foreground/15 pt-8">
                <div className="md:col-span-4 text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  {e.period}
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                  <div className="text-muted-foreground mt-1">{e.place}</div>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="border border-foreground/20 bg-background p-8 grain relative">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Continuous Learning
              </div>
              <h3 className="font-serif-display italic text-3xl mb-8 leading-tight">
                "The degree is the floor, not the ceiling."
              </h3>
              <ul className="divide-y divide-foreground/15">
                {learning.map((l) => (
                  <li key={l.title} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{l.title}</div>
                      <div className="text-sm text-muted-foreground">{l.from}</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] border border-foreground/30 px-2 py-1 whitespace-nowrap">
                      {l.state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}