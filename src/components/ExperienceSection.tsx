import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const highlights = [
  "Specialised as an AI Engineer building production RAG pipelines, agentic workflows, and LLM-powered backends using FastAPI and Python.",
  "Built end-to-end Chat Agent platform using the Agno agentic framework, enabling users to configure LLMs, tools, guardrails, MCPs, and RAG-based knowledge integration.",
  "Designed and deployed RAG-based document processing APIs: extraction, chunking, and summarisation to power 'Chat with Doc' and notebook-style LLM features.",
  "Implemented real-time conversational voice agents using Pipecat with Deepgram & Cartesia (English) and Sarvam (Indian regional languages) for STT/TTS over WebSockets and WebRTC.",
  "Integrated AWS Bedrock, AgentCore, and Strands to build cloud-native AI agent infrastructure for enterprise clients.",
  "Integrated LLMWhispher OCR for converting scanned insurance documents into clean Markdown, combined with EasyOCR and Tesseract for hybrid extraction.",
  "Implemented JWT authentication and Role-Based Access Control (RBAC) for secure multi-user AI applications.",
  "Leveraged Celery and FastAPI Background Tasks for heavy, long-running AI/ML workflows and batch processing pipelines.",
];

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
          className="mb-12"
        >
          <p className="section-subtitle">Where I've Worked</p>
          <h2 className="section-heading mt-2">Experience</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUp}
          custom={1}
          className="bg-background border border-border rounded-xl p-8 max-w-3xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-foreground">AI Engineer / Software Engineer I</h3>
              <p className="text-primary font-medium">Smart IMS, Hyderabad</p>
              <p className="text-sm text-muted-foreground">Dec 2022 – Present</p>
            </div>
          </div>

          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                custom={i + 2}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
