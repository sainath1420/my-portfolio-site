import { motion } from "framer-motion";
import devWorkspace from "@/assets/dev-workspace.png";

const codeLines = [
  { text: "from fastapi import FastAPI", color: "#7ec8e3" },
  { text: "from agno.agent import Agent", color: "#a78bfa" },
  { text: "from agno.models.openai import OpenAIChat", color: "#a78bfa" },
  { text: "", color: "" },
  { text: "app = FastAPI()", color: "#f8c555" },
  { text: "agent = Agent(", color: "#7ec8e3" },
  { text: '  model=OpenAIChat(id="gpt-4o"),', color: "#f8c555" },
  { text: '  description="AI Backend Agent",', color: "#34d399" },
  { text: ")", color: "#7ec8e3" },
  { text: "", color: "" },
  { text: "@app.post('/api/chat')", color: "#f472b6" },
  { text: "async def chat(msg: str):", color: "#7ec8e3" },
  { text: "  response = agent.run(msg)", color: "#f8c555" },
  { text: "  return response.content", color: "#34d399" },
  { text: "", color: "" },
  { text: "# Multi-agent orchestration", color: "#6b7280" },
  { text: "class AgentTeam:", color: "#a78bfa" },
  { text: "  def __init__(self):", color: "#7ec8e3" },
  { text: "    self.agents = []", color: "#f8c555" },
  { text: "  def orchestrate(self, task):", color: "#7ec8e3" },
  { text: "    for a in self.agents:", color: "#f8c555" },
  { text: "      a.run(task)", color: "#34d399" },
  { text: "    return results", color: "#34d399" },
];

const DevIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.img
        src={devWorkspace}
        alt="Developer working at desk with code on screen"
        loading="lazy"
        width={800}
        height={700}
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {/* Code overlay on the monitor area */}
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={{
          top: "5%",
          left: "22%",
          width: "56%",
          height: "52%",
          borderRadius: "4px",
        }}
      >
        <motion.div
          className="flex flex-col gap-[2px] font-mono"
          animate={{ y: [0, -(codeLines.length * 14)] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate lines for seamless loop */}
          {[...codeLines, ...codeLines].map((line, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-[7px] md:text-[9px] leading-[14px] px-1"
              style={{ color: line.color || "transparent" }}
            >
              {line.text || "\u00A0"}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DevIllustration;
