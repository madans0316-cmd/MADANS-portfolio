import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "./ProjectGrid";

export function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const images = useMemo(
    () => (project ? project.images && project.images.length > 0 ? project.images : [project.image] : []),
    [project],
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose, images.length]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-foreground/85 backdrop-blur-md"
            aria-hidden
          />

          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15 }}
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-semibold"
            aria-label="Close"
          >
            Close <X className="size-3.5" />
          </motion.button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative z-[1] grid w-full max-w-6xl grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 max-h-[88vh]"
          >
            <div className="lg:col-span-3 relative overflow-hidden bg-background shadow-2xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={idx}
                  layoutId={idx === 0 ? `proj-img-${project.id}` : undefined}
                  src={images[idx]}
                  alt={`${project.title} — image ${idx + 1}`}
                  width={1280}
                  height={896}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-background/90 hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setIdx((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-background/90 hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        aria-label={`Image ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === idx ? "bg-background w-6" : "bg-background/50 w-1.5"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 bg-background p-6 md:p-8 overflow-y-auto"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                {project.n} · {project.year}
              </div>
              <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold leading-[0.95] tracking-tight">
                {project.title}
              </h3>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {project.role}
              </div>
              <p className="mt-6 text-foreground/80 leading-relaxed">{project.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-1">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] uppercase tracking-[0.2em] border border-foreground/30 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {project.url && (
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 group inline-flex items-center justify-between w-full gap-3 bg-foreground text-background px-4 py-3 text-[10px] uppercase tracking-[0.22em] font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="size-3.5" />
                    View website
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}