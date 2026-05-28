import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <span className="opacity-0">00:00:00 IST</span>;
  const t = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });
  return (
    <span className="tabular-nums">
      {t} <span className="text-foreground/40">IST</span>
    </span>
  );
}