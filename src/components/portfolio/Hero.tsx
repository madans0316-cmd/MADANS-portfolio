import { motion } from "motion/react";
import portrait from "@/assets/portrait.jpg";
import { ArrowDownRight } from "lucide-react";
import { RotatingText } from "./RotatingText";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Top meta row */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12 md:mb-20">
          <div className="md:col-span-3">
            <div className="text-foreground/40">[ 01 / Portfolio ]</div>
          </div>
          <div className="md:col-span-3">
            <div className="text-foreground/40 mb-1">Based in</div>
            <div className="text-foreground">Tamil Nadu, India</div>
          </div>
          <div className="md:col-span-3">
            <div className="text-foreground/40 mb-1">Discipline</div>
            <div className="text-foreground">Electronics & Communication</div>
          </div>
          <div className="md:col-span-3">
            <div className="text-foreground/40 mb-1">Status</div>
            <div className="text-foreground">Open to internships · 2026</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Headline */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold leading-[0.88] tracking-[-0.04em] text-[14vw] lg:text-[10.5vw]"
            >
              Madan
              <br />
              Kumar <span className="font-serif-display italic font-normal">S.</span>
            </motion.h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl">
              <p className="md:col-span-7 text-lg md:text-xl leading-relaxed text-balance">
                I build{" "}
                <RotatingText
                  words={["circuits.", "firmware.", "antennas.", "interfaces.", "honest software."]}
                />
                <br />
                Electronics & Communication engineer in the making — where signal meets system.
              </p>
              <div className="md:col-span-5 md:col-start-9 flex items-end">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium border-b border-foreground pb-2"
                >
                  Selected Work
                  <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-4 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted grain">
              <img
                src={portrait}
                alt="Portrait of Madan Kumar S"
                className="h-full w-full object-cover grayscale"
                width={1024}
                height={1280}
              />
            </div>
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>FIG. 01</span>
              <span>Self-portrait, 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}