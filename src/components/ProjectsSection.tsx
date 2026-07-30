import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, FlaskConical, Microscope, FileSearch, Shield, Headphones, Plus, X } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Project Vega",
    subtitle: "AWS-Native AI Insurance Agent",
    color: "from-orange-500/30 to-orange-600/10",
    accentBorder: "border-orange-500/70",
    accentBg: "bg-orange-500/15",
    accentText: "text-orange-600 dark:text-orange-400",
    description: "Enterprise AI agent built on AWS (Bedrock, AgentCore, Strands) for an insurance carrier. Multi-source RAG pipeline over SharePoint docs and web-scraped carrier data, with RBAC, JWT and LLM guardrails for secure, high-precision insurance Q&A.",
    tags: ["AWS Bedrock", "AgentCore", "Strands", "RAG", "OpenSearch", "FastAPI"],
  },
  {
    icon: Bot,
    title: "Xymphony AI",
    subtitle: "Agent Development Platform",
    color: "from-blue-500/30 to-blue-600/10",
    accentBorder: "border-blue-500/70",
    accentBg: "bg-blue-500/15",
    accentText: "text-blue-600 dark:text-blue-400",
    description: "Scalable backend integrating multiple LLM providers (OpenAI, Gemini, Claude) via a unified API. Modular agent architecture on the Agno framework with dynamic RAG and continuous evaluation using RAGAS.",
    tags: ["FastAPI", "Agno", "RAG", "RAGAS", "FastMCP", "Docker"],
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Management System",
    subtitle: "CTMS",
    color: "from-emerald-500/30 to-emerald-600/10",
    accentBorder: "border-emerald-500/70",
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-600 dark:text-emerald-400",
    description: "Microservices system to streamline planning, tracking, and management of clinical trials with Keycloak authentication and EDC (ETMF & ISF) integrations, plus version control for trial protocols ensuring compliance.",
    tags: ["FastAPI", "Keycloak", "Microservices", "PostgreSQL", "Docker"],
  },
  {
    icon: Microscope,
    title: "Sample Management System",
    subtitle: "SMS",
    color: "from-purple-500/30 to-purple-600/10",
    accentBorder: "border-purple-500/70",
    accentBg: "bg-purple-500/15",
    accentText: "text-purple-600 dark:text-purple-400",
    description: "System to efficiently store, track, and manage blood and tissue samples with secure document storage, data confidentiality, and a scalable microservices architecture.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Microservices"],
  },
  {
    icon: Headphones,
    title: "Voice AI Agent",
    subtitle: "Personal Project · Conversational Voice",
    color: "from-rose-500/30 to-rose-600/10",
    accentBorder: "border-rose-500/70",
    accentBg: "bg-rose-500/15",
    accentText: "text-rose-600 dark:text-rose-400",
    description: "Real-time conversational voice agent with speech-to-text and text-to-speech. Built with Pipecat and Deepgram/Cartesia (English) plus Sarvam for Indian regional languages, streaming over WebSockets and WebRTC.",
    tags: ["Pipecat", "Deepgram", "Cartesia", "Sarvam", "WebRTC"],
  },
  {
    icon: FileSearch,
    title: "Document Q/A",
    subtitle: "Personal Project · RAG System",
    color: "from-amber-500/30 to-amber-600/10",
    accentBorder: "border-amber-500/70",
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-600 dark:text-amber-400",
    description: "AI-powered document retrieval and question-answering system using LangChain and RAG, with Ollama for locally deploying and managing open-source language models.",
    tags: ["LangChain", "RAG", "Ollama", "Python", "FastAPI"],
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
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

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

        <div className="grid gap-4">
          {projects.map((project, i) => {
            const isOpen = expanded === project.title;
            return (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideUp}
                custom={i + 1}
                className={`glow-card overflow-hidden transition-all duration-300 ${
                  isOpen ? project.accentBorder + " border" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(project.title)}
                  className="w-full flex items-center gap-4 p-5 text-left group"
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? project.accentBg : "bg-primary/10"
                    }`}
                  >
                    <project.icon
                      size={20}
                      className={`transition-colors ${isOpen ? project.accentText : "text-primary"}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-heading text-foreground truncate">
                      {project.title}
                    </h3>
                    <p className={`text-xs font-medium truncate ${isOpen ? project.accentText : "text-muted-foreground"}`}>
                      {project.subtitle}
                    </p>
                  </div>
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full border border-border flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? project.accentBg + " " + project.accentBorder + " rotate-45"
                        : "group-hover:border-primary/40"
                    }`}
                  >
                    {isOpen ? (
                      <X size={16} className={project.accentText} />
                    ) : (
                      <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 pb-5 pt-0`}>
                        <div className={`rounded-lg bg-gradient-to-br ${project.color} p-4`}>
                          <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.accentBg} ${project.accentText}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
