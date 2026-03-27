import { motion } from "framer-motion";

const codeLines = [
  "from fastapi import FastAPI",
  "from langchain import LLMChain",
  "import openai",
  "app = FastAPI()",
  "@app.post('/api/chat')",
  "async def chat(msg):",
  "  chain = LLMChain(llm)",
  "  return chain.run(msg)",
  "# Building AI agents",
  "class AgentTeam:",
  "  def orchestrate():",
  "    return result",
];

const DevIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Desk */}
        <rect x="40" y="280" width="320" height="12" rx="4" className="fill-muted" />
        <rect x="80" y="292" width="16" height="50" rx="2" className="fill-muted-foreground/20" />
        <rect x="304" y="292" width="16" height="50" rx="2" className="fill-muted-foreground/20" />
        
        {/* Monitor */}
        <rect x="100" y="120" width="200" height="145" rx="8" className="fill-foreground/90" />
        <rect x="108" y="128" width="184" height="125" rx="4" fill="#1a1a2e" />
        <rect x="175" y="265" width="50" height="15" rx="2" className="fill-muted-foreground/30" />
        <rect x="155" y="275" width="90" height="6" rx="3" className="fill-muted-foreground/20" />
        
        {/* Code lines on screen - animated */}
        {codeLines.map((line, i) => (
          <motion.g key={i}>
            <motion.text
              x="116"
              y={142 + i * 10}
              fontSize="5.5"
              fontFamily="monospace"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: [0, 1, 1, 0.7], x: 0 }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: codeLines.length * 0.3,
              }}
            >
              <tspan fill="#7ec8e3">{line.split("(")[0]}</tspan>
              {line.includes("(") && (
                <tspan fill="#f8c555">{"(" + line.split("(").slice(1).join("(")}</tspan>
              )}
            </motion.text>
          </motion.g>
        ))}

        {/* Person - sitting on chair */}
        {/* Chair */}
        <rect x="20" y="240" width="70" height="8" rx="4" className="fill-muted-foreground/30" />
        <rect x="18" y="200" width="10" height="48" rx="3" className="fill-muted-foreground/25" />
        <rect x="28" y="248" width="8" height="44" rx="2" className="fill-muted-foreground/20" />
        <rect x="72" y="248" width="8" height="44" rx="2" className="fill-muted-foreground/20" />
        
        {/* Person body */}
        <ellipse cx="55" cy="175" rx="18" ry="18" className="fill-foreground/80" /> {/* Head */}
        <rect x="35" y="193" width="40" height="50" rx="8" className="fill-primary/80" /> {/* Torso */}
        
        {/* Arms reaching to keyboard */}
        <motion.path
          d="M 75 210 Q 95 225 110 270"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
          animate={{ d: ["M 75 210 Q 95 225 110 270", "M 75 210 Q 98 222 115 268", "M 75 210 Q 95 225 110 270"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 45 210 Q 55 240 100 270"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
          animate={{ d: ["M 45 210 Q 55 240 100 270", "M 45 210 Q 52 238 95 268", "M 45 210 Q 55 240 100 270"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Keyboard on desk */}
        <rect x="100" y="272" width="60" height="8" rx="2" className="fill-muted-foreground/30" />
        
        {/* Floating elements */}
        <motion.circle
          cx="330" cy="150" r="6"
          className="fill-primary/40"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x="340" y="200" width="12" height="12" rx="2"
          className="fill-primary/20"
          animate={{ y: [5, -5, 5], rotate: [0, 45, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle
          cx="350" cy="260" r="4"
          className="fill-primary/30"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default DevIllustration;
