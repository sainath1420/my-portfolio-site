import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlipCard from "@/components/FlipCard";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "'19",
    title: "Started College",
    description: "B.Tech in Computer Science at DMS SVH College of Engineering, Machilipatnam.",
    image: "/assets/college-logo.png",
    color: "bg-amber-500/15",
  },
  {
    year: "'20",
    title: "YouTube Era Begins",
    description: "Launched \"Sainath Roy Gaming\" — streaming and content creation, building a community from scratch.",
    image: "/assets/gaming-logo.png",
    color: "bg-red-500/15",
  },
  {
    year: "'21",
    title: "50K Subscribers",
    description: "Hit the 50,000 subscriber milestone. Learned consistency, audience building, and content strategy.",
    image: "/assets/youtube-50k.png",
    color: "bg-rose-500/15",
  },
  {
    year: "'22",
    title: "Career Begins",
    description: "Graduated B.Tech, quit YouTube, and joined Smart IMS as a Python developer intern.",
    image: "/assets/smartims.png",
    color: "bg-blue-500/15",
  },
  {
    year: "'23",
    title: "Full-time Engineer",
    description: "Promoted to Associate Engineer 1. Built microservices, REST APIs, and backend systems with FastAPI.",
    color: "bg-emerald-500/15",
  },
  {
    year: "'24",
    title: "Extra Miler Award",
    description: "Recognised for exceptional dedication and outstanding contributions to enterprise projects.",
    image: "/assets/award-extra-miler.png",
    color: "bg-purple-500/15",
  },
  {
    year: "'25",
    title: "The AI Pivot",
    description: "Dove deep into Generative AI — RAG, agents, voice AI. Awarded Difference Maker. Promoted to SE1.",
    image: "/assets/award-difference-maker.png",
    color: "bg-orange-500/15",
  },
  {
    year: "'26",
    title: "BHP — AI Engineer",
    description: "Joined BHP, one of the world's largest resources companies, as an AI Engineer in Gurugram, India.",
    image: "/assets/bhp.png",
    color: "bg-orange-600/15",
  },
];

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, i) => {
      const fromLeft = i % 2 === 0;
      gsap.fromTo(
        card,
        { opacity: 0, x: fromLeft ? -60 : 60, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 70%",
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

        <div className="relative">
          {/* Curved SVG connecting path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            preserveAspectRatio="none"
            viewBox="0 0 800 2400"
            fill="none"
          >
            <path
              ref={pathRef}
              d="M 650 50 C 700 150, 150 200, 150 300 C 150 400, 700 450, 650 550 C 600 650, 150 700, 150 800 C 150 900, 700 950, 650 1050 C 600 1150, 150 1200, 150 1300 C 150 1400, 700 1450, 650 1550 C 600 1650, 150 1700, 150 1800 C 150 1900, 700 1950, 650 2050"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Dots at each milestone */}
            {[50, 300, 550, 800, 1050, 1300, 1550, 1800].map((y, i) => (
              <circle
                key={i}
                cx={i % 2 === 0 ? 650 : 150}
                cy={y}
                r="6"
                fill="hsl(var(--primary))"
                opacity="0.8"
              />
            ))}
          </svg>

          {/* Cards */}
          <div className="space-y-12 md:space-y-20 relative z-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={m.year + m.title}
                  ref={(el) => { if (el) cardsRef.current[i] = el; }}
                  className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="w-full md:w-[55%]">
                    <FlipCard
                      heightClass="min-h-[14rem]"
                      front={
                        <div className={`h-full flex flex-col justify-center p-7 ${m.color}`}>
                          <span className="text-4xl md:text-5xl font-black text-primary/80 font-heading leading-none">
                            {m.year}
                          </span>
                          <h3 className="text-xl font-bold text-foreground mt-3 font-heading">{m.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2">{m.description}</p>
                        </div>
                      }
                      back={
                        <div className={`h-full flex items-center justify-center p-4 ${m.color}`}>
                          {m.image ? (
                            <img
                              src={m.image}
                              alt={m.title}
                              className="max-h-40 max-w-full object-contain rounded-lg"
                              loading="lazy"
                            />
                          ) : (
                            <div className="text-center">
                              <span className="text-6xl font-black text-primary/40">{m.year}</span>
                              <p className="text-sm text-muted-foreground mt-2">{m.title}</p>
                            </div>
                          )}
                        </div>
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
