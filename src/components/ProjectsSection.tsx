import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, FlaskConical, Microscope, FileSearch, Shield, Headphones, LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects: { icon: LucideIcon; title: string; subtitle: string; description: string; tags: string[]; color: string; accent: string }[] = [
  {
    icon: Shield,
    title: "Project Vega",
    subtitle: "AWS-Native AI Insurance Agent",
    description: "Enterprise AI agent built on AWS (Bedrock, AgentCore, Strands) for an insurance carrier. Multi-source RAG pipeline with RBAC, JWT and LLM guardrails.",
    tags: ["AWS Bedrock", "AgentCore", "Strands", "RAG", "FastAPI"],
    color: "from-orange-600/20 to-orange-900/10",
    accent: "text-orange-400",
  },
  {
    icon: Bot,
    title: "Xymphony AI",
    subtitle: "Agent Development Platform",
    description: "Scalable backend integrating multiple LLM providers via a unified API. Modular agent architecture on Agno with dynamic RAG and RAGAS evaluation.",
    tags: ["FastAPI", "Agno", "RAG", "RAGAS", "Docker"],
    color: "from-blue-600/20 to-blue-900/10",
    accent: "text-blue-400",
  },
  {
    icon: FlaskConical,
    title: "CTMS",
    subtitle: "Clinical Trial Management",
    description: "Microservices system for planning, tracking, and managing clinical trials with Keycloak auth and EDC integrations.",
    tags: ["FastAPI", "Keycloak", "Microservices", "PostgreSQL"],
    color: "from-emerald-600/20 to-emerald-900/10",
    accent: "text-emerald-400",
  },
  {
    icon: Microscope,
    title: "SMS",
    subtitle: "Sample Management System",
    description: "System to efficiently store, track, and manage blood and tissue samples with secure document storage and scalable architecture.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    color: "from-purple-600/20 to-purple-900/10",
    accent: "text-purple-400",
  },
  {
    icon: Headphones,
    title: "Voice AI Agent",
    subtitle: "Real-time Conversational Voice",
    description: "Real-time voice agent with Pipecat, Deepgram/Cartesia for English and Sarvam AI for Indian languages over WebSockets and WebRTC.",
    tags: ["Pipecat", "Deepgram", "Cartesia", "Sarvam", "WebRTC"],
    color: "from-rose-600/20 to-rose-900/10",
    accent: "text-rose-400",
  },
  {
    icon: FileSearch,
    title: "Document Q/A",
    subtitle: "RAG System",
    description: "AI-powered document retrieval and Q&A system using LangChain and RAG with Ollama for locally managing open-source LLMs.",
    tags: ["LangChain", "RAG", "Ollama", "Python"],
    color: "from-amber-600/20 to-amber-900/10",
    accent: "text-amber-400",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalScroll}`,
      pin: true,
      scrub: 1,
      animation: gsap.to(track, { x: -totalScroll, ease: "none" }),
      invalidateOnRefresh: true,
    });

    return () => { st.kill(); };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="px-8 lg:pl-8 mb-8">
          <p className="section-subtitle">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground mt-2">
            Projects
          </h2>
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className="flex gap-6 px-8 lg:pl-8 pr-16 will-change-transform">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex-shrink-0 w-[22rem] md:w-[28rem] rounded-2xl border border-border bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between min-h-[24rem]`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10`}>
                    <project.icon size={18} className={project.accent} />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${project.accent}`}>
                    {project.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground font-heading mt-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
