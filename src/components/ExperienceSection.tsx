import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import FlipCard from "@/components/FlipCard";
import bhpLogo from "@/assets/bhp-logo.png";
import smartImsLogo from "@/assets/smart-ims-logo.png";

const roles = [
  {
    company: "BHP",
    logo: bhpLogo,
    role: "AI Engineer",
    period: "Aug 2026 — Present",
    location: "Gurugram, India",
    badge: "",
    flipColor: "bg-orange-500/20 dark:bg-orange-500/25",
    accentColor: "bg-orange-500",
    summary:
      "Joining one of the world's leading resources companies to build and scale enterprise Generative AI and agentic systems.",
    highlights: [
      "Building enterprise-grade GenAI platforms and agentic workflows.",
      "Designing RAG architectures over large internal knowledge bases.",
      "Productionising LLM services with robust evaluation and observability.",
    ],
    tags: ["GenAI", "AI Agents", "RAG", "Python"],
  },
  {
    company: "Smart IMS",
    logo: smartImsLogo,
    role: "AI Engineer / Software Engineer I",
    period: "Dec 2022 — Aug 2026",
    location: "Hyderabad, India",
    badge: "3.7 yrs",
    flipColor: "bg-blue-500/20 dark:bg-blue-500/25",
    accentColor: "bg-blue-500",
    summary:
      "Built production RAG pipelines, agentic platforms, and real-time voice agents for enterprise insurance and healthcare clients.",
    highlights: [
      "End-to-end Chat Agent platform on the Agno framework with LLMs, tools, guardrails, MCPs and RAG.",
      "RAG document APIs — extraction, chunking, summarisation — powering 'Chat with Doc' features.",
      "Real-time voice agents with Pipecat + Deepgram/Cartesia (English) and Sarvam (Indian languages).",
      "AWS Bedrock, AgentCore & Strands based cloud-native agent infrastructure.",
      "JWT auth + RBAC, Celery & FastAPI background tasks for heavy AI workloads.",
    ],
    tags: ["Agno", "AWS Bedrock", "Pipecat", "FastAPI", "Celery", "Docker"],
  },
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
          className="mb-12"
        >
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-heading mt-2">Work Experience</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              custom={i + 1}
            >
              <FlipCard
                heightClass="h-[26rem]"
                front={
                  <div className="h-full flex flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-center w-full max-w-[15rem] h-24 border border-border/50">
                        <img
                          src={r.logo}
                          alt={`${r.company} logo`}
                          className="max-h-14 max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      {r.badge && (
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                          {r.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-foreground mt-6">{r.role}</h3>
                    <p className="text-primary font-medium text-sm">{r.company}</p>

                    <div className="flex flex-col gap-1.5 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} /> {r.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} /> {r.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">{r.summary}</p>
                  </div>
                }
                back={
                  <div className={`h-full flex flex-col p-6 ${r.flipColor}`}>
                    <h3 className="text-lg font-bold font-heading text-foreground">{r.company}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{r.role}</p>
                    <ul className="space-y-2 overflow-y-auto pr-1 scrollbar-hide">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className={`w-1.5 h-1.5 rounded-full ${r.accentColor} mt-2 flex-shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {r.tags.map((t) => (
                        <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
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

export default ExperienceSection;
