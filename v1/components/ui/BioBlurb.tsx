"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BioBlurb() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    // Split text into spans
    const words = text.textContent?.split(" ") || [];
    text.innerHTML = "";
    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.color = "#a3a3a3";
      text.appendChild(span);
    });

    const spans = text.querySelectorAll("span");

    // ✅ Corrected GSAP setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 5%",
        end: "+=1000", // gives enough scroll space for the effect
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false, // set true if you want to debug scroll zones
      },
    });

    // animate each span smoothly
    tl.to(spans, {
      color: "#000",
      stagger: 0.2,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center "
    >
      <p
        ref={textRef}
        className="max-w-3xl text-3xl md:text-5xl font-semibold leading-snug text-center"
      >
        Open Jar Labs is where I explore the intersection of design and
        technology — crafting digital experiences that feel alive, emotional,
        and intentional. Every interface, and every detail is a study in
        curiosity.
      </p>
    </section>
  );
}