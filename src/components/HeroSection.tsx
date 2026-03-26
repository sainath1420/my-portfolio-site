import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/kasisainath", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kasisainath", label: "GitHub" },
  { icon: ExternalLink, href: "#projects", label: "Portfolio" },
];

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
            Software Engineer specializing in Python backend development and Generative AI. 
            Building scalable APIs and AI-driven solutions with ~3 years of experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-4 pt-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <s.icon size={18} />
              </a>
            ))}
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
              alt="Sainath - Software Engineer"
              className="relative w-full h-full object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
