"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homePartySection } from "@/data/homePartySection";

const PHASE_A_END = 0.2; // stack
const PHASE_B_END = 0.4; // disperse

const PartySectionAnimation = () => {
  const stickySectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const countContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis (no 'smooth' option in new versions)
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickySection = stickySectionRef.current;
    const cards = cardsRef.current;
    const countContainer = countContainerRef.current;
    const totalCards = cards.length;
    const stickyHeight = window.innerHeight * 7;

    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress);
      },
    });

    const getRadius = () => {
      return window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;
    };

    // Your original arc constants
    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    function positionCards(progress = 0) {
      const radius = getRadius();

      // ---- Phase A: stack (0.0 → 0.2) ----
      if (progress <= PHASE_A_END) {
        cards.forEach((card, i) => {
          if (!card) return;
          gsap.set(card, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            zIndex: totalCards - i,
            transformOrigin: "center center",
          });
        });
        return;
      }

      // ---- Phase B: disperse (0.2 → 0.5) ----
      if (progress <= PHASE_B_END) {
        const disperseProgress =
          (progress - PHASE_A_END) / (PHASE_B_END - PHASE_A_END); // 0..1
        cards.forEach((card, i) => {
          if (!card) return;
          const angle = (i / totalCards) * Math.PI * 2; // full circle
          const r = 300 + disperseProgress * 200;

          const x = Math.cos(angle) * r * disperseProgress;
          const y = Math.sin(angle) * r * disperseProgress;

          gsap.set(card, {
            x,
            y,
            rotation: i * 2 + disperseProgress * 180,
            scale: 1 - disperseProgress * 0.5,
            opacity: 1 - disperseProgress, // fade out
            zIndex: totalCards - i,
            transformOrigin: "center center",
          });
        });
        return;
      }

      // ---- Phase C: ORIGINAL arc reveal (0.5 → 1.0) ----
      // Remap progress back to 0..1, then run your old math unchanged.
      const arcProgress = (progress - PHASE_B_END) / (1 - PHASE_B_END); // 0..1
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (arcProgress * totalTravel - 1) * 0.75;

      cards.forEach((card, i) => {
        if (!card) return;

        // ORIGINAL “one-by-one” sequencing:
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x: x,
          y: -y + radius,     // your original Y mapping
          rotation: -rotation, // your original rotation mapping
          scale: 1,
          opacity: 1,         // fully visible in arc phase
          zIndex: totalCards - i,
          transformOrigin: "center center",
        });
      });
    }

    // initial render
    positionCards(0);

    // (kept) intersection observer for your counter UI
    let currentCardIndex = 0;
    const options = { root: null, rootMargin: "0% 0%", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let cardIndex = cards.indexOf(entry.target as HTMLDivElement);
          currentCardIndex = cardIndex;
          const targetY = 100 - currentCardIndex * 100;
          gsap.to(countContainer, {
            y: targetY,
            duration: 0.3,
            ease: "power1.out",
            overwrite: true,
          });
        }
      });
    }, options);

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    const handleResize = () => positionCards(0);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-screen h-[800vh] bg-black text-white">
      {/* Steps Section */}
      <section
        ref={stickySectionRef}
        className="relative w-full h-screen overflow-hidden steps"
      >
        <div className="absolute top-[50%] w-[100%] h-[80vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
          {homePartySection.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute w-[90%] md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:gap-4"
            >
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                width={250}
                height={230}
                className="aspect-square w-full h-full md:w=[55vh] md:h=[55vh] rounded-lg object-cover"
                priority={index === 0}
              />
              <div className="w-full gamingFont text-center mt-2 text-[1.5rem] md:text-[2.5rem] text-white font-semibold mix-blend-screen">
                {card.title}
              </div>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="flex flex-col mb-10 steps-counter">
          <div className="relative overflow-hidden">
            <h1 className="w-full text-center text-white uppercase gamingFont font-black text-5xl leading-none tracking-tight">
              GAMES
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartySectionAnimation;
