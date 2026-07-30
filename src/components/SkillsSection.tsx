import { motion } from "framer-motion";
import DevIllustration from "@/components/DevIllustration";
import {
  PythonIcon, FastAPIIcon, DockerIcon, PostgreSQLIcon,
  LangChainIcon, AgnoIcon, StrandsIcon, AWSIcon,
  OpenAIIcon, GitIcon, SupabaseIcon, KafkaIcon,
  PipecatIcon, RAGASIcon, SarvamIcon, PostmanIcon, MCPIcon, AgentCoreIcon,
} from "@/components/TechIcons";

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
  { name: "Python", Icon: PythonIcon, color: "#3776AB" },
  { name: "FastAPI", Icon: FastAPIIcon, color: "#009688" },
  { name: "Docker", Icon: DockerIcon, color: "#2496ED" },
  { name: "PostgreSQL", Icon: PostgreSQLIcon, color: "#4169E1" },
  { name: "LangChain", Icon: LangChainIcon, color: "#1C3C3C" },
  { name: "Agno", Icon: AgnoIcon, color: "#6C5CE7" },
  { name: "Strands", Icon: StrandsIcon, color: "#FF6B35" },
  { name: "AWS", Icon: AWSIcon, color: "#FF9900" },
  { name: "OpenAI", Icon: OpenAIIcon, color: "#412991" },
  { name: "Git", Icon: GitIcon, color: "#F05032" },
  { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E" },
  { name: "Pipecat", Icon: PipecatIcon, color: "#FF4081" },
  { name: "RAGAS", Icon: RAGASIcon, color: "#009FE3" },
  { name: "Kafka", Icon: KafkaIcon, color: "#231F20" },
  { name: "Sarvam", Icon: SarvamIcon, color: "#E65100" },
  { name: "Postman", Icon: PostmanIcon, color: "#FF6C37" },
  { name: "MCP", Icon: MCPIcon, color: "#7C3AED" },
  { name: "AgentCore", Icon: AgentCoreIcon, color: "#FF9900" },
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

        <div className="glow-card p-8 md:p-12 mb-12">
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
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={2}
              className="flex justify-center"
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
                <div
                  key={`${tech.name}-${idx}`}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary/70 border border-border/60
                    hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex-shrink-0"
                >
                  <tech.Icon />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
