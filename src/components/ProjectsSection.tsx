import { motion } from "framer-motion";
import { Bot, FlaskConical, Microscope, FileSearch, Youtube, Shield, Headphones } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Coaction – AI Insurance Agent",
    subtitle: "AWS-Native Agent Platform",
    description: "Built AI agent on AWS for Coaction insurance carrier using Bedrock, AgentCore, and Strands. Multi-source RAG pipeline with SharePoint docs and web-scraped data for complex insurance queries.",
    tags: ["AWS Bedrock", "AgentCore", "Strands", "RAG", "FastAPI"],
  },
  {
    icon: Headphones,
    title: "Audio Agent – Insurance",
    subtitle: "Conversational Voice AI",
    description: "Real-time conversational audio agent for insurance policy and claims handling with STT & TTS. Integrated Sarvam for Indian regional language voices over WebSockets and WebRTC.",
    tags: ["Pipecat", "Sarvam", "Deepgram", "WebSockets", "FastAPI"],
  },
  {
    icon: Bot,
    title: "Xymphony AI",
    subtitle: "Agent Development Platform",
    description: "Scalable backend integrating multiple LLM providers via unified API. Modular agent architecture with Agno framework, dynamic RAG and evaluation using RAGAS.",
    tags: ["FastAPI", "Agno", "RAG", "RAGAS", "Docker"],
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    subtitle: "CTMS",
    description: "Streamlined planning, tracking, and management of clinical trials with Keycloak auth and EDC integrations via microservices.",
    tags: ["FastAPI", "Keycloak", "Microservices", "PostgreSQL"],
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
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={i + 1}
              className="glow-card p-6 hover:-translate-y-1 transition-all duration-300 group"
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
