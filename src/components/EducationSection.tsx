import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";
import FlipCard from "@/components/FlipCard";

const certifications = [
  {
    title: "Data Science & GenAI Workshop",
    issuer: "Innomatics Research Labs",
    detail: "Hands-on training across the data science lifecycle and modern Generative AI tooling.",
  },
  {
    title: "SQL Certification",
    issuer: "Skills Caravan",
    detail: "Advanced querying, joins, window functions and relational data modelling.",
  },
  {
    title: "Java Certification",
    issuer: "Frontlines EduTech",
    detail: "Core Java, OOP design principles and data structures fundamentals.",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Bitlabs",
    detail: "Responsive layouts, semantic markup and modern CSS foundations.",
  },
];

const awards = [
  {
    title: "Difference Maker Award",
    org: "Smart IMS • Dec 2025",
    text: "Recognised for outstanding impact and contributions at Smart IMS.",
  },
  {
    title: "Extra Miler Award",
    org: "Smart IMS • 2024",
    text: "Recognised for exceptional dedication and outstanding contributions to projects.",
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

const EducationSection = () => {
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
          <h2 className="section-heading mt-2">Education & Certifications</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
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
              className="glow-card p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">{a.title}</h3>
              <p className="text-sm text-primary font-medium">{a.org}</p>
              <p className="text-sm text-muted-foreground mt-2">{a.text}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-lg font-bold font-heading text-foreground mt-14 mb-2">Certifications & Workshops</h3>
        <p className="text-sm text-muted-foreground mb-6">Hover (or tap) a certificate to flip it.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                heightClass="h-56"
                front={
                  <div className="h-full flex flex-col justify-center p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <BadgeCheck size={20} className="text-primary" />
                    </div>
                    <h4 className="text-base font-bold font-heading text-foreground leading-snug">{c.title}</h4>
                    <p className="text-sm text-primary mt-1">{c.issuer}</p>
                  </div>
                }
                back={
                  <div className="h-full flex flex-col justify-center p-6 bg-primary/5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                    <p className="text-xs text-primary mt-4">Certificate image coming soon</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
