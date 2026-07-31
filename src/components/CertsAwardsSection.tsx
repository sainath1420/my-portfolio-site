import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, X } from "lucide-react";

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
      gsap.fromTo(card, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, delay: i * 0.08, ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section id="certs" ref={sectionRef} className="py-32">
      <div className="container max-w-5xl mx-auto px-4 lg:pl-56">
        <p className="section-subtitle">Recognition</p>
        <h2 className="section-heading mt-3">Awards & Certifications</h2>

        {/* Awards */}
        <h3 className="text-lg font-bold font-heading text-foreground mt-14 mb-6">Awards</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {awards.map((a, i) => (
            <div
              key={a.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="glow-card group cursor-pointer overflow-hidden"
              onClick={() => a.image && setLightbox({ image: a.image, title: a.title })}
            >
              <div className="p-6">
                <h4 className="text-base font-bold text-foreground">{a.title}</h4>
                <p className="text-sm text-primary mt-1">{a.org}</p>
                <p className="text-sm text-muted-foreground mt-2">{a.text}</p>
              </div>
              {a.image && (
                <div className="relative h-40 bg-muted/30 border-t border-border overflow-hidden">
                  <img src={a.image} alt={a.title} className="h-full w-full object-contain p-3" loading="lazy" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                    <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} /> View
                    </span>
                  </span>
                </div>
              )}
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
              className="glow-card group cursor-pointer overflow-hidden"
              onClick={() => c.image && setLightbox({ image: c.image, title: c.title })}
            >
              <div className="p-5">
                <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
                <p className="text-xs text-primary mt-1">{c.issuer}</p>
                <p className="text-xs text-muted-foreground mt-2">{c.detail}</p>
              </div>
              {c.image && (
                <div className="relative h-36 bg-muted/30 border-t border-border overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-contain p-2" loading="lazy" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                    <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} /> View
                    </span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
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
