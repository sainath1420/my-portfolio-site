import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Youtube, GraduationCap, Building2, Trophy, Rocket, Briefcase, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2019",
    title: "Started College",
    description: "B.Tech in Computer Science at DMS SVH College of Engineering, Machilipatnam.",
    logo: "/assets/college-logo.png",
    icon: GraduationCap,
    gradient: "from-amber-500/20 to-transparent",
    dot: "bg-amber-400",
  },
  {
    year: "2020",
    title: "YouTube Era Begins",
    description: "Launched \"Sainath Roy Gaming\" — streaming and content creation, building a community from scratch.",
    icon: Youtube,
    gradient: "from-red-500/20 to-transparent",
    dot: "bg-red-400",
    thumbnail: "/assets/gaming-logo.png",
  },
  {
    year: "2021",
    title: "50K Subscribers",
    description: "Hit the 50,000 subscriber milestone. Learned consistency, audience building, and content strategy.",
    icon: Youtube,
    gradient: "from-rose-500/20 to-transparent",
    dot: "bg-rose-400",
    thumbnail: "/assets/youtube-50k.png",
  },
  {
    year: "2022",
    title: "Career Begins",
    description: "Graduated B.Tech, quit YouTube, and joined Smart IMS as a Python developer intern.",
    logo: "/assets/smartims.png",
    icon: Building2,
    gradient: "from-blue-500/20 to-transparent",
    dot: "bg-blue-400",
    showcase: { image: "/assets/smartims.png", bg: "bg-blue-950", border: "border-blue-500/50" },
  },
  {
    year: "2023",
    title: "Full-time Engineer",
    description: "Promoted to Associate Engineer 1. Built microservices, REST APIs, and backend systems with FastAPI.",
    logo: "/assets/smartims.png",
    icon: Briefcase,
    gradient: "from-emerald-500/20 to-transparent",
    dot: "bg-emerald-400",
    showcase: { image: "/assets/smartims.png", bg: "bg-blue-950", border: "border-blue-500/50" },
  },
  {
    year: "2024",
    title: "Extra Miler Award",
    description: "Recognised for exceptional dedication and outstanding contributions to enterprise projects.",
    icon: Trophy,
    gradient: "from-purple-500/20 to-transparent",
    dot: "bg-purple-400",
  },
  {
    year: "2025",
    title: "The AI Pivot",
    description: "Dove deep into Generative AI — RAG, agents, voice AI. Awarded Difference Maker. Promoted to SE1.",
    icon: Rocket,
    gradient: "from-orange-500/20 to-transparent",
    dot: "bg-orange-400",
  },
  {
    year: "2026",
    title: "BHP — AI Engineer",
    description: "Joined BHP, one of the world's largest resources companies, as an AI Engineer in Gurugram, India.",
    logo: "/assets/bhp.png",
    icon: Building2,
    gradient: "from-orange-600/20 to-transparent",
    dot: "bg-orange-500",
    showcase: { image: "/assets/bhp.png", bg: "bg-orange-950", border: "border-orange-500/50" },
  },
];

type LightboxItem = { image: string; title: string; bg?: string; border?: string } | null;

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [lightbox, setLightbox] = useState<LightboxItem>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="mb-16">
          <p className="section-subtitle">START SMALL GROW BIG</p>
          <h2 className="section-heading mt-3">About Me (&)<br />My Journey</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-[2px]">
            <div
              ref={lineRef}
              className="w-full h-full origin-top"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary) / 0.3), transparent)",
              }}
            />
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.year + m.title}
                  ref={(el) => { if (el) cardsRef.current[i] = el; }}
                  className="relative pl-14 md:pl-16"
                >
                  {/* Dot on the line */}
                  <div className={`absolute left-[10px] md:left-[14px] top-8 w-4 h-4 rounded-full ${m.dot} border-4 border-background z-10 shadow-lg`} />

                  {/* Horizontal connector */}
                  <div className="absolute left-[26px] md:left-[30px] top-[22px] w-6 md:w-8 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />

                  {/* Card */}
                  <div className={`group relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}>
                    {/* Gradient accent bar */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${m.gradient} pointer-events-none`} />

                    <div className="relative p-6 md:p-7">
                      <div className="flex items-start gap-4">
                        {/* Icon/Logo */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                          {m.logo ? (
                            <img src={m.logo} alt={m.title} className="w-7 h-7 object-contain" />
                          ) : (
                            <Icon size={22} className="text-primary" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary/70 bg-primary/10 px-2.5 py-1 rounded-full">
                              {m.year}
                            </span>
                            <h3 className="text-lg font-bold text-foreground font-heading">{m.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">{m.description}</p>

                          {/* Thumbnail image (clickable) */}
                          {m.thumbnail && (
                            <button
                              type="button"
                              onClick={() => setLightbox({ image: m.thumbnail!, title: m.title })}
                              className="mt-3 rounded-lg overflow-hidden border border-border/60 hover:border-primary/50 transition-colors inline-block"
                            >
                              <img
                                src={m.thumbnail}
                                alt={m.title}
                                className="h-14 w-auto object-contain bg-white/5 p-1.5"
                                loading="lazy"
                              />
                            </button>
                          )}

                          {/* Showcase logo (bigger, clickable) */}
                          {m.showcase && (
                            <button
                              type="button"
                              onClick={() => setLightbox({ image: m.showcase!.image, title: m.title, bg: m.showcase!.bg, border: m.showcase!.border })}
                              className={`mt-4 rounded-xl overflow-hidden border ${m.showcase.border} hover:scale-105 transition-transform inline-block ${m.showcase.bg} p-4`}
                            >
                              <img
                                src={m.showcase.image}
                                alt={m.title}
                                className="h-12 md:h-16 w-auto object-contain"
                                loading="lazy"
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <div
            className={`max-w-lg w-full rounded-3xl p-12 flex flex-col items-center justify-center ${lightbox.bg || "bg-card"} border ${lightbox.border || "border-border"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[50vh] object-contain" />
            <p className="text-center text-lg font-bold text-white mt-6">{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default JourneySection;
