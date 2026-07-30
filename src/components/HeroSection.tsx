import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import avatarImg from "@/assets/sainath-photo.jpg";

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
            className="flex flex-col gap-3 pt-2"
          >
            <p className="text-sm text-muted-foreground">Let's connect</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/vinnakota-sainath"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/sainath1420"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:kasisainath14@gmail.com"
                title="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-[#EA4335] hover:border-[#EA4335]/40 hover:bg-[#EA4335]/5 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919133839569"
                title="Call"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200"
              >
                <Phone size={18} />
              </a>
            </div>
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
              className="relative w-full h-full object-cover rounded-2xl border border-border/60 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
