import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "AWS", src: "/assets/aws.png" },
  { name: "FastAPI", src: "/assets/fastapi.webp" },
  { name: "Docker", src: "/assets/docker.png" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "OpenAI", src: "/assets/openai.png" },
  { name: "Azure", src: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Anthropic", src: "/assets/claude.png" },
  { name: "Agno", src: "/assets/agno.png" },
  { name: "LangChain", src: "/assets/langchain.png" },
  { name: "Strands", src: "/assets/strands.png" },
  { name: "MCP", src: "https://cdn.simpleicons.org/mcp/00C7B7" },
  { name: "Pipecat", src: "/assets/pipecat.png" },
  { name: "Bedrock", src: "/assets/bedrock.jpg" },
  { name: "Redis", src: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const content = contentRef.current;
    if (!heading || !content) return;

    gsap.fromTo(heading, { y: 80, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: heading, start: "top 85%" },
    });

    gsap.fromTo(content, { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2,
      scrollTrigger: { trigger: content, start: "top 85%" },
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32">
      <div className="container max-w-5xl mx-auto px-4 lg:pl-56">
        <div ref={headingRef}>
          <p className="section-subtitle">What I Do</p>
          <h2 className="section-heading mt-3">Full-Stack AI Engineering</h2>
        </div>

        <div ref={contentRef} className="mt-10 space-y-6">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground max-w-3xl">
            <p>
              I work across the full lifecycle of an AI product. It usually starts with{" "}
              <strong className="text-foreground">Generative AI & RAG</strong> —
              designing end-to-end pipelines with document ingestion, chunking, embeddings,
              vector databases, hybrid retrieval, reranking and{" "}
              <span className="text-primary font-medium">RAGAS</span>-based evaluation.
            </p>
            <p>
              From there I build{" "}
              <strong className="text-foreground">AI agents & orchestration</strong> —
              enterprise multi-agent systems with{" "}
              <span className="text-primary font-medium">Agno</span>,{" "}
              <span className="text-primary font-medium">AWS Strands</span> and{" "}
              <span className="text-primary font-medium">LangChain</span>, wiring in custom
              tools, <span className="text-primary font-medium">MCP</span> and{" "}
              <span className="text-primary font-medium">A2A</span> workflows.
              When a use case needs to talk, I add{" "}
              <strong className="text-foreground">Voice AI</strong> — real-time
              agents with <span className="text-primary font-medium">Pipecat</span>,
              Deepgram & Cartesia for English, and Sarvam AI for Indian languages.
            </p>
            <p>
              Underneath it all sits solid{" "}
              <strong className="text-foreground">backend engineering</strong> —
              Python, FastAPI, Pydantic, Celery, Docker — hardened with{" "}
              <strong className="text-foreground">AI security & guardrails</strong>{" "}
              and shipped on{" "}
              <strong className="text-foreground">AWS</strong> (Bedrock, AgentCore, EC2, ECS, Fargate, DynamoDB, SQS)
              with Azure DevOps CI/CD.
            </p>
          </div>

          {/* Tech logo grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-12 pt-8 border-t border-border">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 py-3"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-border group-hover:border-primary/40 transition-colors">
                  <img src={tech.src} alt={tech.name} className="h-7 w-7 object-contain" loading="lazy" />
                </div>
                <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
