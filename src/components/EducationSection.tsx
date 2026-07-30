import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Award, BadgeCheck, Maximize2, X } from "lucide-react";
import FlipCard from "@/components/FlipCard";

const certifications = [
  {
    title: "AI Agentathon",
    issuer: "Google Developers Group Hyderabad",
    detail: "Participated in Agentathon 2025 — the largest agentic AI hackathon, hosted by GDG Hyderabad.",
    image: "/assets/cert-agentathon.png",
  },
  {
    title: "Java Certification",
    issuer: "Frontlines EduTech",
    detail: "Core Java, OOP design principles and data structures fundamentals.",
    image: "/assets/cert-java.png",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Bitlabs",
    detail: "Responsive layouts, semantic markup and modern CSS foundations.",
    image: "/assets/cert-html-css.png",
  },
];

const awards = [
  {
    title: "Difference Maker Award",
    org: "Smart IMS • Dec 2025",
    text: "Recognised for outstanding impact and contributions at Smart IMS.",
    image: "/assets/award-difference-maker.png",
  },
  {
    title: "Extra Miler Award",
    org: "Smart IMS • 2024",
    text: "Recognised for exceptional dedication and outstanding contributions to projects.",
    image: "/assets/award-extra-miler.png",
  },
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

type LightboxItem = { image: string; title: string } | null;

const Lightbox = ({ item, onClose }: { item: LightboxItem; onClose: () => void }) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X size={22} />
      </button>
      <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
        <p className="text-center text-sm text-white/80 mt-4">{item.title}</p>
      </div>
    </div>
  );
};

/** Flip-back showing the certificate/award image preview with a "View" affordance. */
const CertBack = ({
  image,
  title,
  fallback,
  onOpen,
  contain = false,
}: {
  image: string;
  title: string;
  fallback: string;
  onOpen: () => void;
  contain?: boolean;
}) => {
  if (!image) {
    return (
      <div className="h-full flex flex-col justify-center p-5 bg-primary/5">
        <p className="text-sm text-muted-foreground leading-relaxed">{fallback}</p>
        <p className="text-xs text-primary mt-4">Certificate image coming soon</p>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group/back relative h-full w-full overflow-hidden ${contain ? "bg-muted/50 p-3" : ""}`}
      aria-label={`View ${title}`}
    >
      <img
        src={image}
        alt={title}
        className={`h-full w-full ${contain ? "object-contain rounded-lg" : "object-cover"}`}
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/back:bg-black/40 transition-colors duration-300">
        <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-0 group-hover/back:opacity-100 translate-y-1 group-hover/back:translate-y-0 transition-all duration-300">
          <Maximize2 size={16} /> View Certificate
        </span>
      </span>
    </button>
  );
};

const EducationSection = () => {
  const [lightbox, setLightbox] = useState<LightboxItem>(null);

  return (
    <section id="education" className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
          className="mb-12"
        >
          <p className="section-subtitle">Background</p>
          <h2 className="section-heading mt-2">Education, Awards & Certifications</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <h3 className="text-lg font-bold font-heading text-foreground mb-6">Education & Awards</h3>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideUp}
            custom={1}
            className="glow-card p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold font-heading text-foreground">Bachelor of Technology</h3>
            <p className="text-sm text-primary font-medium">DMS SVH College of Engineering</p>
            <p className="text-sm text-muted-foreground">Machilipatnam • Jun 2019 – Apr 2022</p>
            <p className="text-sm text-muted-foreground mt-2">CGPA: 7.58 / 10</p>
          </motion.div>

          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={i + 2}
            >
              <FlipCard
                heightClass="h-full min-h-[13rem]"
                front={
                  <div className="h-full flex flex-col justify-center p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Award size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-foreground">{a.title}</h3>
                    <p className="text-sm text-primary font-medium">{a.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{a.text}</p>
                  </div>
                }
                back={
                  <CertBack
                    image={a.image}
                    title={a.title}
                    fallback={a.text}
                    contain={true}
                    onOpen={() => a.image && setLightbox({ image: a.image, title: a.title })}
                  />
                }
              />
            </motion.div>
          ))}
        </div>

        <h3 className="text-lg font-bold font-heading text-foreground mt-14 mb-6">Certifications & Workshops</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={i + 1}
            >
              <FlipCard
                heightClass="h-64"
                front={
                  <div className="h-full flex flex-col justify-center p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <BadgeCheck size={20} className="text-primary" />
                    </div>
                    <h4 className="text-base font-bold font-heading text-foreground leading-snug">{c.title}</h4>
                    <p className="text-sm text-primary mt-1">{c.issuer}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{c.detail}</p>
                  </div>
                }
                back={
                  <CertBack
                    image={c.image}
                    title={c.title}
                    fallback={c.detail}
                    onOpen={() => c.image && setLightbox({ image: c.image, title: c.title })}
                  />
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
};

export default EducationSection;
