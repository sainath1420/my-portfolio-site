import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cutoutImg from "@/assets/sainath-cutout.png";

gsap.registerPlugin(ScrollTrigger);

const traits = ["AI", "Agents", "RAG", "LLMs", "Vibe Coding"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    gsap.to(image, {
      filter: "blur(14px)",
      scale: 0.95,
      opacity: 0.3,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "80% top",
        scrub: 1,
      },
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Large background text - SAINATH */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="hero-text text-primary/15 whitespace-nowrap">SAINATH</span>
      </div>

      {/* Person cutout image - centered, bottom-aligned */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[1]"
      >
        <img
          src={cutoutImg}
          alt="Sainath"
          className="h-[60vh] md:h-[72vh] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* Top content - AI Engineer title */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-foreground leading-none tracking-tight">
          AI Engineer
        </h1>
      </div>

      {/* Traits - below the title, above the face */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 rounded-full border border-primary/40 text-sm font-medium text-primary bg-primary/5 backdrop-blur-sm"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Stats - left side */}
      <div className="absolute left-8 lg:left-16 bottom-[30%] z-10">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-3xl font-black text-primary">4+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Years of<br/>experience</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-black text-primary">10+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Projects<br/>delivered</p>
          </div>
        </div>
      </div>

      {/* Left nav links */}
      <div className="absolute left-8 lg:left-16 bottom-12 z-10 hidden md:flex flex-col gap-1.5 text-xs text-muted-foreground">
        <a href="#home" className="hover:text-foreground transition-colors">HOME</a>
        <a href="#about" className="hover:text-foreground transition-colors">ABOUT ME</a>
        <a href="#projects" className="hover:text-foreground transition-colors">PROJECTS</a>
      </div>

      {/* Right nav links */}
      <div className="absolute right-8 lg:right-16 bottom-12 z-10 hidden md:flex flex-col gap-1.5 text-xs text-muted-foreground text-right">
        <a href="#skills" className="hover:text-foreground transition-colors">SKILLS</a>
        <a href="#certs" className="hover:text-foreground transition-colors">CERTS</a>
        <a href="#contact" className="hover:text-foreground transition-colors">CONTACT</a>
      </div>
    </section>
  );
};

export default HeroSection;
