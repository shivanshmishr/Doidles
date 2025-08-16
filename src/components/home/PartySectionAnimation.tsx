"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homePartySection } from "@/data/homePartySection";

const PartySectionAnimation = () => {
  const stickySectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const countContainerRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
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

    // ScrollTrigger for pinning the steps section
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

    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    function positionCards(progress = 0) {
      const radius = getRadius();
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 0.75;

      cards.forEach((card, i) => {
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x: x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    }

    positionCards(0);

    let currentCardIndex = 0;

    const options = {
      root: null,
      rootMargin: "0% 0%",
      threshold: 0.5,
    };

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
      if (card) {
        observer.observe(card);
      }
    });

    const handleResize = () => positionCards(0);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
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
                width={500}
                height={490}
                className="aspect-square w-full h-full md:w-[55vh] md:h-[55vh] rounded-lg object-cover"
                priority={index === 0}
              />
              <div
                className={`
                  w-full gamingFont text-center mt-2 text-[1.5rem] md:text-[2.5rem] text-white font-semibold mix-blend-screen
                `}
              >
                {card.title}
              </div>
            </div>
          ))}
        </div>

        {/* Title + Step Counter */}
        <div className="flex flex-col m-8 steps-counter">
          <div className="relative  overflow-hidden">
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
