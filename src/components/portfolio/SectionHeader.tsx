import { Reveal } from "./Reveal";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
}

export function SectionHeader({ index, label, title }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
      <Reveal className="md:col-span-3 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <>
          <span className="font-mono">{index}</span>
          <span className="h-px w-10 bg-foreground/30" />
          <span>{label}</span>
        </>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-9">
        <h2 className="font-display font-semibold leading-[0.95] tracking-[-0.03em] text-5xl md:text-7xl text-balance">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}