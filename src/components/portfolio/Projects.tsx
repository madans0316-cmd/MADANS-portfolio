import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { ProjectGrid, type Project } from "./ProjectGrid";
import { Lightbox } from "./Lightbox";
import pcb from "@/assets/proj-pcb.jpg";
import meter from "@/assets/proj-meter.jpg";
import lora from "@/assets/proj-lora.jpg";
import dashboard from "@/assets/proj-dashboard.jpg";
import mobile from "@/assets/proj-mobile.jpg";
import code from "@/assets/proj-code.jpg";

const hardware: Project[] = [
  {
    id: "hw-1",
    n: "H·01",
    title: "Sentinel — Smart Energy Meter",
    year: "2025",
    role: "Hardware + Firmware",
    stack: ["ESP32", "MQTT", "PCB"],
    image: meter,
    images: [meter, pcb, dashboard],
    url: "https://github.com",
    blurb:
      "Wi-Fi enabled household energy meter with anomaly detection and a live web dashboard. Detects appliance signatures from current waveforms.",
  },
  {
    id: "hw-2",
    n: "H·02",
    title: "Echo — Adaptive Hearing Aid",
    year: "2024",
    role: "DSP + 4-layer PCB",
    stack: ["STM32", "C", "MATLAB"],
    image: pcb,
    images: [pcb, meter, code],
    url: "https://github.com",
    blurb:
      "Battery-powered prototype with real-time noise cancellation tuned for crowded environments. Built around a custom 4-layer PCB.",
  },
  {
    id: "hw-3",
    n: "H·03",
    title: "Greenfield — Soil Health Mesh",
    year: "2024",
    role: "LoRa + Sensors",
    stack: ["LoRa", "LoRaWAN", "ATmega"],
    image: lora,
    images: [lora, mobile, dashboard],
    url: "https://github.com",
    blurb:
      "A LoRa mesh of low-power soil sensors deployed across two acres. Farmers receive actionable irrigation alerts on a regional Tamil interface.",
  },
];

const software: Project[] = [
  {
    id: "sw-1",
    n: "S·01",
    title: "Pulse — Operations Dashboard",
    year: "2025",
    role: "Full-stack Web",
    stack: ["React", "Node", "Postgres"],
    image: dashboard,
    images: [dashboard, code, mobile],
    url: "https://github.com",
    blurb:
      "Realtime analytics dashboard for a campus radio station. Streams listener telemetry over WebSockets and renders dense, fast charts.",
  },
  {
    id: "sw-2",
    n: "S·02",
    title: "Field — Mobile Companion",
    year: "2025",
    role: "Mobile + API",
    stack: ["Expo", "tRPC", "SQLite"],
    image: mobile,
    images: [mobile, dashboard, code],
    url: "https://github.com",
    blurb:
      "An offline-first mobile companion for field engineers. Captures inspection waveforms, syncs once it sees Wi-Fi, never loses a sample.",
  },
  {
    id: "sw-3",
    n: "S·03",
    title: "Folio Engine",
    year: "2026",
    role: "Web — this site",
    stack: ["TanStack", "Motion", "Tailwind"],
    image: code,
    images: [code, dashboard, mobile],
    url: "https://github.com",
    blurb:
      "An editorial portfolio system built around a Swiss grid and disciplined typography. Image-light, content-first, accessible by default.",
  },
];

type Tab = "hardware" | "software";

export function Projects() {
  const [tab, setTab] = useState<Tab>("hardware");
  const [active, setActive] = useState<Project | null>(null);
  const list = tab === "hardware" ? hardware : software;

  return (
    <section id="projects" className="border-t border-foreground/15 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeader
          index="05"
          label="Selected Work"
          title={
            <>
              Two disciplines. One{" "}
              <span className="font-serif-display italic font-normal">practice.</span>
            </>
          }
        />

        <Reveal as="div" className="mb-10 flex items-center gap-2">
          <TabButton active={tab === "hardware"} onClick={() => setTab("hardware")}>
            Hardware · {hardware.length.toString().padStart(2, "0")}
          </TabButton>
          <TabButton active={tab === "software"} onClick={() => setTab("software")}>
            Software · {software.length.toString().padStart(2, "0")}
          </TabButton>
          <div className="ml-auto hidden md:block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Click any image to expand
          </div>
        </Reveal>

        <ProjectGrid key={tab} projects={list} onOpen={setActive} />
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "text-[10px] uppercase tracking-[0.22em] font-semibold px-4 py-2 rounded-full border transition-colors",
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent text-foreground/70 border-foreground/25 hover:text-foreground hover:border-foreground/60",
      ].join(" ")}
    >
      {children}
    </button>
  );
}