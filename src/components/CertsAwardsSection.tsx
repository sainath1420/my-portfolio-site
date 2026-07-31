import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, X, BadgeCheck, Award } from "lucide-react";
import FlipCard from "@/components/FlipCard";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "AI Agentathon",
    issuer: "Google Developers Group Hyderabad",
    detail: "Participated in Agentathon 2025 — the largest agentic AI hackathon.",
    image: "/assets/cert-agentathon.png",
  },
  {
    title: "Java Certification",
    issuer: "Frontlines EduTech",
    detail: "Core Java, OOP design principles and data structures.",
    image: "/assets/cert-java.png",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Bitlabs",
    detail: "Responsive layouts, semantic markup and modern CSS.",
    image: "/assets/cert-html-css.png",
  },
];

const awards = [
  {
    title: "Difference Maker Award",
    org: "Smart IMS • Dec 2025",
    text: "Recognised for outstanding impact and contributions.",
    image: "/assets/award-difference-maker.png",
  },
  {
    title: "Extra Miler Award",
    org: "Smart IMS • 2024",
    text: "Recognised for exceptional dedication and contributions.",
    image: "/assets/award-extra-miler.png",
  },
];

type LightboxItem = { image: string; title: string } | null;

const CertsAwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [lightbox, setLightbox] = useState<LightboxItem>(null);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      gsap.fromTo(card, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, delay: i * 0.06, ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
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
    <section id="certs" ref={sectionRef} className="py-32">
      <div className="container max-w-5xl mx-auto px-4">
        <p className="section-subtitle">Recognition</p>
        <h2 className="section-heading mt-3">Awards & Certifications</h2>

        {/* Awards */}
        <h3 className="text-lg font-bold font-heading text-foreground mt-14 mb-6">Awards</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {awards.map((a, i) => (
            <div
              key={a.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
            >
              <FlipCard
                heightClass="h-60"
                front={
                  <div className="h-full flex flex-col justify-center p-6 bg-card border border-border rounded-xl">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Award size={22} className="text-primary" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">{a.title}</h4>
                    <p className="text-sm text-primary mt-1">{a.org}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.text}</p>
                  </div>
                }
                back={
                  <button
                    type="button"
                    onClick={() => a.image && setLightbox({ image: a.image, title: a.title })}
                    className="group/back relative h-full w-full overflow-hidden bg-card border border-border rounded-xl p-3"
                  >
                    <img src={a.image} alt={a.title} className="h-full w-full object-contain rounded-lg" loading="lazy" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/back:bg-black/40 transition-colors">
                      <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground opacity-0 group-hover/back:opacity-100 transition-opacity">
                        <Maximize2 size={14} /> View Certificate
                      </span>
                    </span>
                  </button>
                }
              />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-lg font-bold font-heading text-foreground mt-14 mb-6">Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => { if (el) cardsRef.current[awards.length + i] = el; }}
            >
              <FlipCard
                heightClass="h-64"
                front={
                  <div className="h-full flex flex-col justify-center p-5 bg-card border border-border rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <BadgeCheck size={18} className="text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
                    <p className="text-xs text-primary mt-1">{c.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{c.detail}</p>
                  </div>
                }
                back={
                  <button
                    type="button"
                    onClick={() => c.image && setLightbox({ image: c.image, title: c.title })}
                    className="group/back relative h-full w-full overflow-hidden bg-card border border-border rounded-xl p-2"
                  >
                    <img src={c.image} alt={c.title} className="h-full w-full object-contain rounded-lg" loading="lazy" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/back:bg-black/40 transition-colors">
                      <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 group-hover/back:opacity-100 transition-opacity">
                        <Maximize2 size={14} /> View
                      </span>
                    </span>
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <p className="text-center text-sm text-white/70 mt-4">{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertsAwardsSection;
