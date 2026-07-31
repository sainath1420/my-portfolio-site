import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FooterContact = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(textRef.current, { x: 100 }, {
      x: -200,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <footer id="contact" className="relative py-20 border-t border-border overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Top section */}
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              HAVE AN IDEA WORTH BUILDING?
            </p>
            <a
              href="mailto:kasisainath14@gmail.com"
              className="group inline-flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} className="text-primary flex-shrink-0" />
              kasisainath14@gmail.com
              <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="tel:+919133839569"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +91 9133839569
              </a>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">available for projects</span>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-10 text-sm">
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
                <a href="mailto:kasisainath14@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail size={14} /> Email
                </a>
                <a href="tel:+919133839569" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Phone size={14} /> Phone
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large scrolling bloating text - no gap */}
        <div ref={textRef} className="select-none overflow-visible whitespace-nowrap">
          <span className="footer-text inline-block text-primary/20 hover:text-primary/40 transition-colors duration-500 cursor-default">
            Sainath
          </span>
          <span className="footer-text inline-block text-foreground/8 hover:text-foreground/15 transition-colors duration-500 cursor-default ml-4">
            Vinnakota
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-8 pt-5 border-t border-border text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Sainath Vinnakota</span>
          <span>Built with passion & AI</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
