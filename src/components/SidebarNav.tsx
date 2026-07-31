import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code2, Award, Mail, Menu, X, FileDown, Github, Linkedin, Phone } from "lucide-react";

const navItems = [
  { id: "home", label: "HOME", icon: Home, href: "#home" },
  { id: "about", label: "ABOUT ME", icon: User, href: "#about" },
  { id: "projects", label: "PROJECTS", icon: Briefcase, href: "#projects" },
  { id: "skills", label: "SKILLS", icon: Code2, href: "#skills" },
  { id: "certs", label: "CERTS", icon: Award, href: "#certs" },
  { id: "contact", label: "CONTACT", icon: Mail, href: "#contact" },
];

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <a href="#home" className="font-heading text-lg font-black text-primary tracking-tight">
          SAINATH<span className="text-foreground">.</span>
        </a>
        <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
          AI Engineer building production-grade Generative AI systems.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
        <div className="text-center">
          <span className="text-lg font-black text-primary">4+</span>
          <p className="text-[9px] text-muted-foreground">Years</p>
        </div>
        <div className="text-center">
          <span className="text-lg font-black text-primary">10+</span>
          <p className="text-[9px] text-muted-foreground">Projects</p>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
          >
            <span className={`w-2 h-2 rounded-full transition-colors ${activeSection === item.id ? "bg-primary" : "bg-transparent"}`} />
            <item.icon size={15} />
            <span className="text-xs font-medium tracking-wide">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-border space-y-3">
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/vinnakota-sainath"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://github.com/sainath1420"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href="tel:+919133839569"
            className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
          >
            <Phone size={14} />
          </a>
        </div>
        <p className="text-[10px] text-muted-foreground truncate">kasisainath14@gmail.com</p>
        <a
          href="/Sainath_AI_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <FileDown size={14} />
          Resume
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar - animates in after scroll */}
      <aside
        className={`hidden lg:flex fixed left-0 top-0 bottom-0 w-48 z-40 flex-col p-5 border-r border-border bg-background/95 backdrop-blur-sm transition-transform duration-500 ease-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavContent />
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 grid h-10 w-10 place-items-center rounded-lg bg-card border border-border text-foreground"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="w-56 bg-background border-r border-border p-5 flex flex-col h-full">
            <NavContent />
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
};

export default SidebarNav;
