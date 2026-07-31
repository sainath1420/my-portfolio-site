import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "'19",
    title: "Started College",
    description: "Began B.Tech in Computer Science at DMS SVH College of Engineering, Machilipatnam.",
    image: "/assets/college-logo.png",
    side: "right" as const,
  },
  {
    year: "'20",
    title: "YouTube Era Begins",
    description: "Launched \"Sainath Roy Gaming\" — streaming, content creation, and building a community from scratch.",
    image: "/assets/gaming-logo.png",
    side: "left" as const,
  },
  {
    year: "'21",
    title: "50K Subscribers",
    description: "Hit the 50,000 subscriber milestone on YouTube. Learned consistency, audience building, and content strategy.",
    image: "/assets/youtube-50k.png",
    side: "right" as const,
  },
  {
    year: "'22",
    title: "Career Begins",
    description: "Graduated B.Tech (CGPA 7.58), quit YouTube, and joined Smart IMS as a Python developer intern.",
    image: "/assets/smartims.png",
    side: "left" as const,
  },
  {
    year: "'23",
    title: "Full-time Engineer",
    description: "Converted to full-time Associate Engineer 1. Built microservices, REST APIs, and backend systems with FastAPI.",
    side: "right" as const,
  },
  {
    year: "'24",
    title: "Extra Miler Award",
    description: "Recognised for exceptional dedication and outstanding contributions to enterprise projects.",
    image: "/assets/award-extra-miler.png",
    side: "left" as const,
  },
  {
    year: "'25",
    title: "The AI Pivot",
    description: "Dove deep into Generative AI — RAG, agents, voice AI. Awarded Difference Maker. Promoted to Software Engineer 1.",
    image: "/assets/award-difference-maker.png",
    side: "right" as const,
  },
  {
    year: "'26",
    title: "BHP — AI Engineer",
    description: "Joined BHP, one of the world's largest resources companies, as an AI Engineer in Gurugram, India.",
    image: "/assets/bhp.png",
    side: "left" as const,
  },
];

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card) => {
      const isLeft = card.dataset.side === "left";
      gsap.fromTo(
        card,
        { opacity: 0, x: isLeft ? -80 : 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (lineRef.current) {
      const length = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <p className="section-subtitle">START SMALL GROW BIG</p>
          <h2 className="section-heading mt-3">About Me (&)<br/>My Journey</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line (SVG) */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 hidden md:block"
            preserveAspectRatio="none"
          >
            <line
              ref={lineRef}
              x1="50%" y1="0" x2="50%" y2="100%"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Mobile line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => (
              <div
                key={m.year + m.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                data-side={m.side}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  m.side === "left"
                    ? "md:flex-row-reverse md:text-right"
                    : "md:flex-row md:text-left"
                }`}
              >
                {/* Dot on timeline */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Mobile dot */}
                <div className="md:hidden absolute left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-3 border-background z-10" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${m.side === "left" ? "md:pr-0 md:pl-0" : ""}`}>
                  <div className="glow-card p-6">
                    <span className="text-4xl md:text-5xl font-black text-primary/80 font-heading leading-none">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-3 font-heading">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{m.description}</p>
                    {m.image && (
                      <div className="mt-4 flex items-center gap-3">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="h-10 w-10 rounded-lg object-contain bg-white/5 p-1"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
