"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homePartySection } from "@/data/homePartySection";

const PHASE_A_END = 0.2; // stack
const PHASE_B_END = 0.4; // disperse

const PartySectionAnimation = () => {
  const stickySectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const countContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const stickySection = stickySectionRef.current!;
    const cards = cardsRef.current;
    const totalCards = cards.length;
    const stickyHeight = window.innerHeight * (cards.length < 5 ? 5 : 7);


    // Hide-to-show: avoid FOUC/overlap before first paint
    stickySection.classList.add("is-prep"); // hidden by CSS
    const reveal = () => {
      stickySection.classList.remove("is-prep");
      stickySection.classList.add("is-ready");
    };

    const getRadius = () =>
      window.innerWidth < 900 ? window.innerWidth * 7.5 : window.innerWidth * 2.5;

    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    function positionCards(progress = 0) {
      const radius = getRadius();

      // Phase A: stack
      const showTitles = progress > PHASE_A_END;
      cards.forEach((card) => {
        if (!card) return;
        const title = card.querySelector('.card-title') as HTMLElement;
        if (title) {
          gsap.set(title, {
            opacity: showTitles ? 1 : 0,
          });
        }
      });
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
            force3D: true,
          });
        });
        return;
      }

      // Phase B: disperse
      if (progress <= PHASE_B_END) {
        const disperseProgress =
          (progress - PHASE_A_END) / (PHASE_B_END - PHASE_A_END);
        cards.forEach((card, i) => {
          if (!card) return;
          const angle = (i / totalCards) * Math.PI * 2;
          const r = 300 + disperseProgress * 200;
          const x = Math.round(Math.cos(angle) * r * disperseProgress);
          const y = Math.round(Math.sin(angle) * r * disperseProgress);

          gsap.set(card, {
            x,
            y,
            rotation: i * 2 + disperseProgress * 180,
            scale: 1 - disperseProgress * 0.5,
            opacity: 1 - disperseProgress,
            zIndex: totalCards - i,
            transformOrigin: "center center",
            force3D: true,
          });
        });
        return;
      }

      // Phase C: arc reveal
      const arcProgress = (progress - PHASE_B_END) / (1 - PHASE_B_END);
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (arcProgress * totalTravel - 1) * 0.75;

      cards.forEach((card, i) => {
        if (!card) return;
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.round(Math.cos(angle) * radius);
        const y = Math.round(Math.sin(angle) * radius);
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x,
          y: -y + radius,
          rotation: -rotation,
          scale: 1,
          opacity: 1,
          zIndex: totalCards - i,
          transformOrigin: "center center",
          force3D: true,
        });
      });
    }

    // ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: () => "+=" + stickyHeight,
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      anticipatePin: 1,
      pinType: "fixed",
      onUpdate: (self) => positionCards(self.progress),
      onRefresh: (self) => positionCards(self.progress),
    });

    // Initial layout before reveal
    positionCards(0);
    reveal();

    const handleResize = () => positionCards(0);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-screen  bg-black text-white">
      <div className="flex flex-col mb-10 steps-counter">
        <div className="relative overflow-hidden">
          <h1 className="w-full text-center text-white uppercase gamingFont font-black text-5xl leading-none tracking-tight">
            GAMES
          </h1>
        </div>
      </div>
      <section
        ref={stickySectionRef}
        className="relative w-full min-h-screen overflow-visible steps"
      >
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
          {homePartySection.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                // return nothing!
                cardsRef.current[index] = el;
              }}
              className="party-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="card-frame w-[250px] h-[250px] md:w-[55vh] md:h-[55vh] rounded-lg overflow-hidden">
                <Image
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  width={1100}
                  height={1100}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="card-title w-full gamingFont text-center mt-2 text-[1.5rem] md:text-[2.5rem] text-white font-semibold mix-blend-screen pointer-events-none">

                {card.title}
              </div>
            </div>
          ))}
        </div>


      </section>

      {/* small CSS helpers */}
      <style jsx global>{`
        /* Lenis recommended base */
        html.lenis,
        html.lenis body {
          height: auto;
        }
        .lenis-smooth {
          scroll-behavior: auto !important;
        }

        /* Hide cards until GSAP is ready (prevents overlap/FOUC) */
        .steps.is-prep .party-card {
          opacity: 0;
          visibility: hidden;
        }
        .steps.is-ready .party-card {
          opacity: 1;
          visibility: visible;
        }

        /* Cross-browser rasterization guards */
        .party-card,
        .party-card * {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0); /* avoid split lines in Edge/Safari */
        }

        /* Image wrapper anti-flicker + isolate paint */
        .card-frame {
          contain: layout paint size;      /* isolates card paints */
          image-rendering: auto;
          outline: 1px solid transparent;  /* fixes hairline seams on Edge */
        }
      `}</style>
    </div>
  );
};

export default PartySectionAnimation;
