import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cutoutImg from "@/assets/sainath-cutout.png";

gsap.registerPlugin(ScrollTrigger);

const traits = ["AI", "Agents", "RAG", "LLMs", "Vibe Coding"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const traitsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightNavRef = useRef<HTMLDivElement>(null);
  const sainathRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      // Phase 1: Full blur image until invisible
      tl.to(imageRef.current, {
        filter: "blur(40px)",
        opacity: 0,
        scale: 0.85,
        duration: 1,
      }, 0);

      // Phase 2: AI Engineer title moves up and fades
      tl.to(titleRef.current, { y: -150, opacity: 0, duration: 0.7 }, 0.4);
      tl.to(traitsRef.current, { y: -100, opacity: 0, duration: 0.6 }, 0.4);
      tl.to(statsRef.current, { opacity: 0, x: -50, duration: 0.5 }, 0.5);
      tl.to(rightNavRef.current, { opacity: 0, x: 50, duration: 0.5 }, 0.5);
      tl.to(leftNavRef.current, { opacity: 0, x: -50, duration: 0.5 }, 0.5);

      // Phase 3: SAINATH text shrinks and moves to top-left (sidebar position)
      tl.to(sainathRef.current, {
        fontSize: "1.25rem",
        x: "-42vw",
        y: "-42vh",
        opacity: 0.9,
        duration: 1,
        ease: "power2.inOut",
      }, 0.6);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Large background text - SAINATH (behind the image) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[0]"
      >
        <span ref={sainathRef} className="hero-text text-primary whitespace-nowrap">
          SAINATH
        </span>
      </div>

      {/* Person cutout image (on top of text) */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[2]"
      >
        <img
          src={cutoutImg}
          alt="Sainath"
          className="h-[62vh] md:h-[75vh] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* AI Engineer title */}
      <h1
        ref={titleRef}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 text-5xl md:text-7xl lg:text-8xl font-black font-heading text-foreground leading-none tracking-tight text-center"
      >
        AI Engineer
      </h1>

      {/* Traits */}
      <div ref={traitsRef} className="absolute top-[26%] left-1/2 -translate-x-1/2 z-10">
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
      <div ref={statsRef} className="absolute left-8 lg:left-16 bottom-[30%] z-10">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-3xl font-black text-primary">4+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Years of<br />experience</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-black text-primary">10+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Projects<br />delivered</p>
          </div>
        </div>
      </div>

      {/* Left nav links */}
      <div ref={leftNavRef} className="absolute left-8 lg:left-16 bottom-12 z-10 hidden md:flex flex-col gap-1.5 text-xs text-muted-foreground">
        <a href="#home" className="hover:text-foreground transition-colors">HOME</a>
        <a href="#about" className="hover:text-foreground transition-colors">ABOUT ME</a>
        <a href="#projects" className="hover:text-foreground transition-colors">PROJECTS</a>
      </div>

      {/* Right nav links */}
      <div ref={rightNavRef} className="absolute right-8 lg:right-16 bottom-12 z-10 hidden md:flex flex-col gap-1.5 text-xs text-muted-foreground text-right">
        <a href="#skills" className="hover:text-foreground transition-colors">SKILLS</a>
        <a href="#certs" className="hover:text-foreground transition-colors">CERTS</a>
        <a href="#contact" className="hover:text-foreground transition-colors">CONTACT</a>
      </div>
    </section>
  );
};

export default HeroSection;
