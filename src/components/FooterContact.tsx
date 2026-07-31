import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const FooterContact = () => {
  return (
    <footer id="contact" className="relative py-24 border-t border-border overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 lg:pl-56">
        {/* Top section */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              HAVE AN IDEA WORTH BUILDING?
            </p>
            <a
              href="mailto:kasisainath14@gmail.com"
              className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors"
            >
              kasisainath14@gmail.com
              <ArrowUpRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">available for projects</span>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <a href="#home" className="hover:text-foreground transition-colors">Home</a>
                <a href="#about" className="hover:text-foreground transition-colors">About</a>
                <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
                <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
                <a href="#certs" className="hover:text-foreground transition-colors">Certs</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <a href="https://www.linkedin.com/in/vinnakota-sainath" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href="https://github.com/sainath1420" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Github size={14} /> GitHub
                </a>
                <a href="mailto:kasisainath14@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                <a href="tel:+919133839569" className="hover:text-foreground transition-colors">Phone</a>
              </div>
            </div>
          </div>
        </div>

        {/* Large bloating text */}
        <div className="relative mt-8 select-none overflow-hidden">
          <div className="footer-text text-foreground/5 hover:text-foreground/10 transition-colors duration-500 cursor-default whitespace-nowrap">
            <span className="text-primary/20 hover:text-primary/40 transition-colors duration-500">
              Sainath
            </span>
            Vinnakota
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Sainath Vinnakota</span>
          <span>Built with passion & AI</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
