import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  id: string;
  n: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  image: string;
  images?: string[];
  url?: string;
  blurb: string;
};

export function ProjectGrid({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {projects.map((p, i) => (
        <motion.article
          key={p.id}
          initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group flex flex-col gap-4"
        >
          <button
            onClick={() => onOpen(p)}
            className="relative block w-full overflow-hidden bg-muted aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            aria-label={`Expand ${p.title}`}
          >
            <motion.img
              layoutId={`proj-img-${p.id}`}
              src={p.image}
              alt={p.title}
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
              View <ArrowUpRight className="size-3" />
            </div>
            <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] bg-background/85 backdrop-blur px-2 py-1">
              {p.n}
            </div>
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                {p.title}
              </h3>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground shrink-0">
                {p.year}
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {p.role}
            </div>
            <p className="text-sm leading-relaxed text-foreground/75">{p.blurb}</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] uppercase tracking-[0.2em] border border-foreground/25 px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}