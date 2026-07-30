import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          custom={0}
          className="mb-12"
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-heading mt-2">Contact Me</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUp}
          custom={1}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <a href="mailto:kasisainath14@gmail.com" className="glow-card p-5 hover:border-primary/30 transition-all duration-300 group">
            <Mail size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">kasisainath14@gmail.com</p>
          </a>

          <a href="tel:+919133839569" className="glow-card p-5 hover:border-primary/30 transition-all duration-300 group">
            <Phone size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">+91 9133839569</p>
          </a>

          <div className="glow-card p-5">
            <MapPin size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Hyderabad, India</p>
          </div>

          <a
            href="https://linkedin.com/in/kasisainath"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-5 hover:border-primary/30 transition-all duration-300 group flex flex-col"
          >
            <Linkedin size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">LinkedIn</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">kasisainath</p>
          </a>

          <a
            href="https://github.com/kasisainath"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-5 hover:border-primary/30 transition-all duration-300 group flex flex-col"
          >
            <Github size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">GitHub</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">kasisainath</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
