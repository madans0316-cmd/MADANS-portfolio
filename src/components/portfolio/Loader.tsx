import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 280);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="absolute inset-0 grain" aria-hidden />

      <div className="relative flex flex-col items-center gap-10 px-6">
        <div className="nova-bar nova-lightning flex items-center gap-3 px-5 py-3">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-60" />
            <span className="relative inline-block h-2 w-2 rounded-full bg-foreground" />
          </span>
          <svg viewBox="0 0 24 32" className="h-5 w-4" aria-hidden>
            <path
              className="bolt-stroke"
              d="M14 1 L3 18 H11 L9 31 L21 12 H13 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[11px] font-semibold tracking-[0.32em] uppercase">
            Madan&nbsp;Kumar&nbsp;S
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Booting · {Math.round(progress * 100).toString().padStart(3, "0")}%
          </div>
          <div className="h-px w-[220px] bg-foreground/15 overflow-hidden">
            <div
              className="h-full bg-foreground origin-left"
              style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
            />
          </div>
          <div className="font-serif-display italic text-sm text-muted-foreground">
            "Signal meets system."
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LoaderShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Prevent re-loading after first mount in the session
    if (typeof window !== "undefined" && sessionStorage.getItem("mks-loaded")) {
      setLoaded(true);
    }
  }, []);
  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <Loader
            key="loader"
            onDone={() => {
              sessionStorage.setItem("mks-loaded", "1");
              setLoaded(true);
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}