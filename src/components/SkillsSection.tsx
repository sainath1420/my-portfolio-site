import { motion } from "framer-motion";
import devIllustration from "@/assets/developer-illustration.png";

const skillCategories = [
  {
    title: "Backend Development",
    description: "I build scalable and maintainable backend applications using cutting-edge technologies like FastAPI, Docker, Celery, Kafka, and PostgreSQL.",
    tags: ["Python", "FastAPI", "Django", "Celery", "Kafka", "Docker"],
  },
  {
    title: "Generative AI Solutions",
    description: "I develop AI-driven solutions with Agentic AI, multi-agent orchestration, RAG pipelines, MCPs, and LLM integrations for enterprise applications.",
    tags: ["LangChain", "Agno", "OpenAI", "Claude", "Gemini", "RAG"],
  },
];

const techLogos = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "FastAPI", icon: "⚡", color: "#009688" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "LangChain", icon: "🔗", color: "#1C3C3C" },
  { name: "OpenAI", icon: "🤖", color: "#412991" },
  { name: "Git", icon: "📦", color: "#F05032" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Celery", icon: "🌿", color: "#37814A" },
  { name: "Neo4j", icon: "🔵", color: "#008CC1" },
  { name: "MySQL", icon: "💾", color: "#4479A1" },
  { name: "Pytest", icon: "🧪", color: "#009FE3" },
  { name: "SQLAlchemy", icon: "🗄️", color: "#D71F00" },
  { name: "Kafka", icon: "📡", color: "#231F20" },
  { name: "Supabase", icon: "⚡", color: "#3ECF8E" },
  { name: "TypeScript", icon: "📘", color: "#3178C6" },
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
          className="mb-12"
        >
          <p className="section-subtitle">What I Do</p>
          <h2 className="section-heading mt-2">My Top Skills</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        {/* Skills with illustration - Kenneth Jimmy style */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={slideUp}
                  custom={i + 1}
                >
                  <h3 className="text-lg font-bold font-heading text-muted-foreground uppercase tracking-wide mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              custom={2}
              className="flex justify-center"
            >
              <img
                src={devIllustration}
                alt="Developer at work"
                className="w-full max-w-md"
                loading="lazy"
                width={800}
                height={800}
              />
            </motion.div>
          </div>
        </div>

        {/* Tech logos - grey, color on hover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUp}
          custom={0}
        >
          <p className="text-sm italic text-muted-foreground mb-6">
            Technologies I use for building scalable backend & AI applications
          </p>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {techLogos.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideUp}
                  custom={i * 0.05}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-muted-foreground 
                    grayscale hover:grayscale-0 hover:bg-secondary/80 transition-all duration-300 cursor-default"
                  style={{ "--hover-color": tech.color } as React.CSSProperties}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
