import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cutoutImg from "@/assets/sainath-cutout.png";

gsap.registerPlugin(ScrollTrigger);

const traits = ["Creative", "Reliable", "Strategist", "Builder", "Efficient"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    if (!section || !bgText || !image || !overlay) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(image, { filter: "blur(14px)", scale: 0.92, opacity: 0.3 }, 0);
    tl.to(bgText, { filter: "blur(0px)", opacity: 0.9 }, 0);
    tl.to(overlay, { y: -80, opacity: 0 }, 0.2);

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Large background text - SAINATH */}
      <div
        ref={bgTextRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ filter: "blur(4px)", opacity: 0.12 }}
      >
        <span className="hero-text text-primary whitespace-nowrap">SAINATH</span>
      </div>

      {/* Person cutout image - centered, bottom-aligned, half body */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <img
          src={cutoutImg}
          alt="Sainath"
          className="h-[65vh] md:h-[75vh] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* Content overlaying the image */}
      <div ref={overlayRef} className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        {/* Title above the face */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-foreground leading-none tracking-tight">
          AI Engineer
        </h1>

        {/* Traits below */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 rounded-full border border-primary/30 text-sm font-medium text-primary bg-primary/5 backdrop-blur-sm"
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mt-10">
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
    </section>
  );
};

export default HeroSection;
