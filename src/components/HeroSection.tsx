import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatarImg from "@/assets/sainath-photo.jpg";

gsap.registerPlugin(ScrollTrigger);

const traits = ["Creative", "Reliable", "Strategist", "Builder", "Efficient"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !bgText || !image || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
    });

    tl.to(bgText, { filter: "blur(0px)", opacity: 0.85 }, 0);
    tl.to(image, { filter: "blur(12px)", scale: 0.95, opacity: 0.4 }, 0);
    tl.to(content, { y: -60, opacity: 0 }, 0.3);

    return () => { tl.kill(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Large background text */}
      <div
        ref={bgTextRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ filter: "blur(6px)", opacity: 0.15 }}
      >
        <span className="hero-text text-primary whitespace-nowrap">SAINATH</span>
      </div>

      {/* Person cutout image */}
      <div
        ref={imageRef}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <img
          src={avatarImg}
          alt="Sainath"
          className="h-[70vh] md:h-[80vh] w-auto max-w-none object-cover object-top"
          style={{ maskImage: "linear-gradient(to top, transparent 0%, black 20%)" }}
        />
      </div>

      {/* Content overlay */}
      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-display text-foreground mb-4">
          AI, Applied<br />
          <span className="text-primary">Differently.</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 rounded-full border border-primary/30 text-sm font-medium text-primary bg-primary/5"
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-10 text-sm">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">4+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Years of<br/>experience</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">10+</span>
            <p className="text-muted-foreground text-xs mt-0.5">Projects<br/>delivered</p>
          </div>
        </div>
      </div>

      {/* Nav hints - bottom left/right */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-1 text-xs text-muted-foreground">
        <span>HOME</span>
        <span>ABOUT ME</span>
        <span>PROJECTS</span>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-1 text-xs text-muted-foreground text-right">
        <span>SKILLS</span>
        <span>CERTS</span>
        <span>CONTACT</span>
      </div>
    </section>
  );
};

export default HeroSection;
