import { motion } from "framer-motion";
import { Code, Database, Brain, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Backend Development",
    description: "Building scalable RESTful APIs and microservices using FastAPI, Docker, Celery, and Kafka with async Python.",
    tags: ["Python", "FastAPI", "TypeScript", "React"],
  },
  {
    icon: Brain,
    title: "Generative AI",
    description: "Developing AI-driven solutions with Agentic AI, multi-agent orchestration, RAG pipelines, MCPs, and LLM integrations.",
    tags: ["LangChain", "Agno", "OpenAI", "Claude", "Gemini"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Strong expertise in SQL and vector databases, designing efficient schemas for enterprise applications.",
    tags: ["PostgreSQL", "MySQL", "Neo4j", "Vector DB", "Supabase"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    description: "Containerization, background processing, and CI/CD pipelines for efficient deployments.",
    tags: ["Docker", "Celery", "Git", "Pytest", "SQLAlchemy"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-subtitle">What I Do</p>
          <h2 className="section-heading mt-2">My Top Skills</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <skill.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
