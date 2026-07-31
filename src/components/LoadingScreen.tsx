import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        setTimeout(onComplete, 600);
      },
    });

    tl.fromTo(
      lettersRef.current,
      { opacity: 0, y: 60, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.5)",
      }
    );

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.4,
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background ${done ? "pointer-events-none" : ""}`}
    >
      <div className="flex perspective-[800px]">
        {"SAINATH".split("").map((letter, i) => (
          <span
            key={i}
            ref={(el) => { if (el) lettersRef.current[i] = el; }}
            className="text-hero font-heading text-primary inline-block opacity-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
