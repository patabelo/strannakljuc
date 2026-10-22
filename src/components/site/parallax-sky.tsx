"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed night-sky layer that drifts upward slower than page scroll.
 * Uses a real image so object-fit can keep the Milky Way sharp and centered.
 */
export function ParallaxSky() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function sizeLayer() {
      if (!layer) return;
      // Extra height = parallax travel; enough to feel motion without over-cropping.
      const travel = Math.max(window.innerHeight * 0.35, 220);
      layer.style.height = `${window.innerHeight + travel}px`;
      layer.dataset.travel = String(travel);
    }

    function paint() {
      if (!layer) return;
      if (reduceMotion.matches) {
        layer.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const travel = Number(layer.dataset.travel || 0);
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      // Negative Y: sky rises as the page scrolls down (classic parallax).
      layer.style.transform = `translate3d(0, ${-progress * travel}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    }

    function onResize() {
      sizeLayer();
      paint();
    }

    sizeLayer();
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    reduceMotion.addEventListener("change", paint);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduceMotion.removeEventListener("change", paint);
    };
  }, []);

  return (
    <div className="parallax-sky" aria-hidden>
      <div ref={layerRef} className="parallax-sky__layer">
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet="/space-bg.webp"
            type="image/webp"
          />
          <img
            src="/space-bg-sm.webp"
            alt=""
            width={3840}
            height={2160}
            decoding="async"
            fetchPriority="low"
            draggable={false}
          />
        </picture>
      </div>
      <div className="parallax-sky__veil" />
    </div>
  );
}
