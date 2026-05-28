import { ArrowUpRight, Github, Linkedin, Mail, FileText, MessageSquare, Send } from "lucide-react";

const links = [
  { label: "Email", value: "madan.kumar@portfolio.dev", href: "mailto:madan.kumar@portfolio.dev", icon: Mail },
  { label: "GitHub", value: "github.com/madankumar-s", href: "https://github.com", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/madankumar-s", href: "https://linkedin.com", icon: Linkedin },
  { label: "Resume", value: "Download · PDF", href: "#", icon: FileText },
];

const steps = [
  { n: "01", label: "Email", href: "mailto:madan.kumar@portfolio.dev", icon: Mail },
  { n: "02", label: "GitHub", href: "https://github.com", icon: Github },
  { n: "03", label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { n: "04", label: "Resume", href: "#", icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-foreground/15 bg-foreground text-background relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-background/50">
            [ 06 / Contact ]
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display font-semibold leading-[0.9] tracking-[-0.04em] text-6xl md:text-[10vw]">
              Let's build
              <br />
              <span className="font-serif-display italic font-normal">something honest.</span>
            </h2>
            <p className="mt-10 max-w-xl text-background/70 text-lg leading-relaxed">
              Open to embedded internships, hardware-software collaborations, and
              research opportunities. The fastest way to reach me is email.
            </p>
          </div>
        </div>

        {/* Step-by-step contact stack (left) + tagline column (right) */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-background/50 mb-6">
              How to reach me · step by step
            </div>
            <ol className="relative">
              <span
                aria-hidden
                className="absolute left-[15px] top-2 bottom-2 w-px bg-background/20"
              />
              {steps.map((s) => {
                const Icon = s.icon;
                const external = s.href.startsWith("http");
                return (
                  <li key={s.label} className="relative pl-12 py-4 group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 rounded-full border border-background/40 bg-foreground text-background font-mono text-[10px] tracking-widest group-hover:bg-background group-hover:text-foreground transition-colors">
                      {s.n}
                    </span>
                    <a
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="flex items-center justify-between gap-4 border-b border-background/15 pb-3"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 text-background/70" />
                        <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                          {s.label}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 text-background/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </li>
                );
              })}
            </ol>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="sms:+910000000000"
                className="group flex items-center justify-between gap-3 border border-background/30 px-5 py-4 hover:bg-background hover:text-foreground transition-colors"
              >
                <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold">
                  <MessageSquare className="size-4" />
                  Send a text message
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:madan.kumar@portfolio.dev"
                className="group flex items-center justify-between gap-3 bg-background text-foreground px-5 py-4 hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold">
                  <Send className="size-4" />
                  Contact me
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-background/50 mb-3">
                Right corner · always
              </div>
              <p className="font-serif-display italic text-3xl md:text-4xl leading-tight">
                "Let's build something honest."
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-background/40 leading-relaxed">
              Replies typically within 24 hours · IST (UTC+5:30)
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/15 border border-background/15">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group bg-foreground p-8 hover:bg-background/5 transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <Icon className="size-5" />
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-background/50">{l.label}</div>
                <div className="mt-2 font-display text-xl">{l.value}</div>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-background/15">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs uppercase tracking-[0.2em] text-background/50">
          <div>© 2026 Madan Kumar S. — All work shown is my own.</div>
          <div>Built with TanStack Start, Tailwind & Motion.</div>
        </div>
      </footer>
    </section>
  );
}