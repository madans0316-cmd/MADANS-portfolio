import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, ChevronDown } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";
import { LiveClock } from "./LiveClock";

function LinkedInSvg({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#career", label: "Carrier" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const actionItems = [
  { label: "Download resume", href: "#", icon: Download },
  { label: "View the website", href: "#projects", icon: ExternalLink },
  { label: "View the LinkedIn", href: "https://linkedin.com", icon: LinkedInSvg },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ringOn, setRingOn] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    // Turn on the black lightning ring after the loader finishes.
    const t = setTimeout(() => setRingOn(true), 2300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <>
    <ScrollProgress />
    <header id="top" className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          paddingTop: scrolled ? 12 : 20,
          paddingBottom: scrolled ? 12 : 20,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 md:px-8"
      >
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`nova-bar pointer-events-auto mx-auto flex items-center justify-between gap-6 ${ringOn ? "nova-lightning" : ""}`}
          style={{ maxWidth: scrolled ? 980 : 1400 }}
        >
          <div className="flex items-center gap-2 shrink-0 pl-1">
            {/* Two small round shapes (left corner) flanking a minus */}
            <span
              className="h-3 w-3 rounded-full bg-foreground/85 ring-1 ring-foreground/20"
              aria-label="Status"
              title="Live"
            />
            <span className="h-px w-2 bg-foreground/40" aria-hidden />
            <span
              className="h-3 w-3 rounded-full border border-foreground/60 bg-background"
              aria-label="Theme"
              title="Paper"
            />
            <a
              href="/"
              className="ml-2 font-display text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase flex items-center gap-2"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-60" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="hidden sm:inline">Madan&nbsp;Kumar&nbsp;S</span>
              <span className="sm:hidden">MK·S</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nova-link relative px-3 py-2 rounded-full transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <LiveClock />
            </span>
            <div ref={menuRef} className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="nova-link flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold px-3 py-2 rounded-full"
              >
                Menu
                <ChevronDown className={`size-3 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatedMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>
            <a
              href="#contact"
              className="text-[10px] uppercase tracking-[0.22em] font-semibold rounded-full bg-foreground text-background px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Let's talk
            </a>
          </div>
        </motion.div>
      </motion.div>
    </header>
    </>
  );
}

function AnimatedMenu({ open, onClose }: Readonly<{ open: boolean; onClose: () => void }>) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        y: open ? 0 : -6,
        pointerEvents: open ? "auto" : "none",
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="nova-bar absolute right-0 top-[calc(100%+10px)] w-[240px] !rounded-2xl !p-2"
    >
      {actionItems.map((it) => {
        const Icon = it.icon;
        const external = it.href.startsWith("http");
        return (
          <a
            key={it.label}
            href={it.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            onClick={onClose}
            className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-foreground/5 transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <Icon className="size-3.5" />
              {it.label}
            </span>
            <span className="opacity-30 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        );
      })}
    </motion.div>
  );
}