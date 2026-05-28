import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, Linkedin, ChevronDown } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";
import { LiveClock } from "./LiveClock";

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
  { label: "View the LinkedIn", href: "https://linkedin.com", icon: Linkedin },
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
            <Link
              to="/"
              className="ml-2 font-display text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase flex items-center gap-2"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-60" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="hidden sm:inline">Madan&nbsp;Kumar&nbsp;S</span>
              <span className="sm:hidden">MK·S</span>
            </Link>
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
                aria-haspopup="menu"
                aria-expanded={menuOpen}
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

function AnimatedMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <motion.ul
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        y: open ? 0 : -6,
        pointerEvents: open ? "auto" : "none",
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="nova-bar absolute right-0 top-[calc(100%+10px)] w-[240px] !rounded-2xl !p-2"
      role="menu"
    >
      {actionItems.map((it) => {
        const Icon = it.icon;
        const external = it.href.startsWith("http");
        return (
          <li key={it.label}>
            <a
              href={it.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              onClick={onClose}
              className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-foreground/5 transition-colors"
              role="menuitem"
            >
              <span className="flex items-center gap-2.5">
                <Icon className="size-3.5" />
                {it.label}
              </span>
              <span className="opacity-30 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}