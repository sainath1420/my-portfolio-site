import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-heading mt-2">Contact Me</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl"
        >
          <a href="mailto:kasisainath14@gmail.com" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group">
            <Mail size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">kasisainath14@gmail.com</p>
          </a>

          <a href="tel:+919133839569" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group">
            <Phone size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">+91 9133839569</p>
          </a>

          <div className="bg-card border border-border rounded-xl p-5">
            <MapPin size={20} className="text-primary mb-3" />
            <p className="text-sm font-medium text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Hyderabad, India</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 flex flex-col">
            <p className="text-sm font-medium text-foreground mb-3">Socials</p>
            <div className="flex gap-3 mt-auto">
              <a href="https://linkedin.com/in/kasisainath" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/kasisainath" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
