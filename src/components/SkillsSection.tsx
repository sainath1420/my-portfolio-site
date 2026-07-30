import { motion } from "framer-motion";
import { useState } from "react";
import DevIllustration from "@/components/DevIllustration";

const intro =
  "AI Engineer building production-grade enterprise Generative AI solutions — from concept to deployment.";

// Real logos: local files live in /public/assets, others use the simpleicons CDN.
const simple = (slug: string, color = "") =>
  `https://cdn.simpleicons.org/${slug}${color ? "/" + color : ""}`;

type TechLogo = { name: string; src: string };

const techLogos: TechLogo[] = [
  { name: "Python", src: simple("python") },
  { name: "AWS", src: "/assets/aws.png" },
  { name: "FastAPI", src: "/assets/fastapi.webp" },
  { name: "Docker", src: "/assets/docker.png" },
  { name: "PostgreSQL", src: simple("postgresql") },
  { name: "OpenAI", src: "/assets/openai.png" },
  { name: "Azure", src: simple("microsoftazure", "0078D4") },
  { name: "Anthropic", src: "/assets/claude.png" },
  { name: "Agno", src: "/assets/agno.png" },
  { name: "LangChain", src: "/assets/langchain.png" },
  { name: "AWS Bedrock", src: "/assets/bedrock.jpg" },
  { name: "Strands", src: "/assets/strands.png" },
  { name: "MCP", src: simple("modelcontextprotocol", "000000") },
  { name: "Pipecat", src: "/assets/pipecat.png" },
  { name: "Gemini", src: simple("googlegemini") },
  { name: "Deepgram", src: simple("deepgram") },
  { name: "RAGAS", src: simple("langchain") },
  { name: "Kafka", src: simple("apachekafka", "000000") },
  { name: "Celery", src: simple("celery") },
  { name: "SQLAlchemy", src: simple("sqlalchemy") },
  { name: "Pydantic", src: simple("pydantic") },
  { name: "Neo4j", src: simple("neo4j") },
  { name: "Supabase", src: simple("supabase") },
  { name: "Postman", src: simple("postman") },
  { name: "Git", src: simple("git") },
  { name: "Streamlit", src: simple("streamlit") },
  { name: "Keycloak", src: simple("keycloak") },
];

const TechChip = ({ tech }: { tech: TechLogo }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary/70 border border-border/60
        hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex-shrink-0"
    >
      <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-black/5">
        {failed ? (
          <span className="text-[11px] font-bold text-slate-700">{tech.name.charAt(0)}</span>
        ) : (
          <img
            src={tech.src}
            alt={tech.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-5 w-5 object-contain"
          />
        )}
      </span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
};

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

        <div className="glow-card p-8 md:p-10 mb-12">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                {intro}
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  I work across the full lifecycle of an AI product. It usually starts with{" "}
                  <strong className="text-foreground font-semibold">Generative AI &amp; RAG</strong> —
                  designing end-to-end pipelines with document ingestion, chunking, embeddings,
                  vector databases, hybrid retrieval, reranking and{" "}
                  <span className="text-primary font-medium">RAGAS</span>-based evaluation to keep
                  accuracy improving over time.
                </p>
                <p>
                  From there I build{" "}
                  <strong className="text-foreground font-semibold">AI agents &amp; orchestration</strong> —
                  enterprise and multi-agent systems with{" "}
                  <span className="text-primary font-medium">Agno</span>,{" "}
                  <span className="text-primary font-medium">AWS Strands</span> and{" "}
                  <span className="text-primary font-medium">LangChain</span>, wiring in custom
                  tools, <span className="text-primary font-medium">MCP</span> and{" "}
                  <span className="text-primary font-medium">Agent-to-Agent (A2A)</span> workflows.
                  When a use case needs to talk, I add{" "}
                  <strong className="text-foreground font-semibold">Voice AI</strong> — real-time
                  conversational agents with <span className="text-primary font-medium">Pipecat</span>,
                  Deepgram &amp; Cartesia for English, and{" "}
                  <span className="text-primary font-medium">Sarvam AI</span> for Indian regional
                  languages over WebSockets and WebRTC.
                </p>
                <p>
                  Underneath it all sits solid{" "}
                  <strong className="text-foreground font-semibold">backend engineering</strong> —
                  Python, FastAPI, Pydantic, SQLAlchemy/SQLModel, Celery and Docker for
                  asynchronous, high-performance workloads — hardened with{" "}
                  <strong className="text-foreground font-semibold">AI security &amp; guardrails</strong>{" "}
                  like PII detection, prompt-injection protection, input validation, RBAC and JWT.
                  Finally I handle{" "}
                  <strong className="text-foreground font-semibold">cloud &amp; deployment</strong>,
                  shipping and scaling on AWS (Bedrock, AgentCore, EC2, ECS, Fargate, IAM, Cognito,
                  DynamoDB, SQS) with Azure DevOps CI/CD.
                </p>
                <p className="text-foreground/80">
                  End to end — I love turning ideas into reliable, scalable, production-ready AI
                  systems that solve real business problems.
                </p>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={1}
              className="hidden lg:flex justify-center"
            >
              <DevIllustration />
            </motion.div>
          </div>
        </div>

        {/* Tech logos - horizontal scrolling */}
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
          <div className="glow-card p-6 overflow-hidden marquee marquee-mask">
            <div className="marquee-track gap-3">
              {[...techLogos, ...techLogos].map((tech, idx) => (
                <TechChip key={`${tech.name}-${idx}`} tech={tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
