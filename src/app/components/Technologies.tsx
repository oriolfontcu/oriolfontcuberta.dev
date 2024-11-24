"use client"

import React, { useEffect, useRef } from "react";
import { DATA } from "@/data/resume";

export function Technologies() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Add animation attributes
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      // Clone elements for infinite scroll effect
      scrollerContent.forEach((item) => {
        const clonedItem = item.cloneNode(true) as HTMLElement;
        clonedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(clonedItem);
      });
    }
  }, []);

  return (
    <section
      ref={scrollerRef}
      className="scroller max-w-[60vw] overflow-hidden relative"
    >
      <ul className="scroller__inner flex gap-16">
        {DATA.technologies.map((technology, index) => (
          <li
            key={index}
            className="flex justify-center items-center w-12 h-12"
            id="technologyIcon"
          >
            <technology.icon/>
          </li>
        ))}
      </ul>
    </section>
  );
}