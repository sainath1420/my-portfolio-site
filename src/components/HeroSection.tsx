import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-foreground leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-primary">Sainath</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            AI Engineer with 4 years of experience building Generative AI systems —
            RAG pipelines, AI agents, real-time voice agents, and Python backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="https://linkedin.com/in/kasisainath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/kasisainath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground hover:border-primary/30 transition-colors font-medium text-sm"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
            <img
              src={avatarImg}
              alt="Sainath - AI Engineer"
              className="relative w-full h-full object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
