import { motion } from "framer-motion";
import { Bot, FlaskConical, Microscope, FileSearch, Youtube } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Xymphony AI",
    subtitle: "Agent Development Platform",
    description: "Scalable backend integrating multiple LLM providers via unified API. Modular agent architecture with dynamic RAG and evaluation using RAGAS.",
    tags: ["FastAPI", "OpenAI", "Docker", "RAGAS", "CI/CD"],
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    subtitle: "CTMS",
    description: "Streamlined planning, tracking, and management of clinical trials with Keycloak auth and EDC integrations via microservices.",
    tags: ["FastAPI", "Keycloak", "Microservices", "ETMF"],
  },
  {
    icon: Microscope,
    title: "Sample Management System",
    subtitle: "SMS",
    description: "Efficiently store, track, and manage blood and tissue samples with secure document storage and microservices architecture.",
    tags: ["Python", "PostgreSQL", "Microservices"],
  },
  {
    icon: FileSearch,
    title: "AI Document Retrieval",
    subtitle: "RAG System",
    description: "Document retrieval system using LangChain and RAG with Ollama for deploying and managing language models.",
    tags: ["LangChain", "RAG", "Ollama", "Python"],
  },
  {
    icon: Youtube,
    title: "YouTube Video Analyzer",
    subtitle: "Analytics Tool",
    description: "Comprehensive tool to analyze YouTube videos by extracting metadata, comments, and engagement metrics for content optimization.",
    tags: ["Python", "Data Scraping", "Analytics"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-subtitle">What I've Built</p>
          <h2 className="section-heading mt-2">Projects</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">{project.title}</h3>
              <p className="text-xs font-medium text-primary mb-2">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
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

export default ProjectsSection;
