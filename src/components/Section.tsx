"use client";

import { useRef, useEffect, ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          hasBeenVisible.current = true;
          el.classList.add("section-visible");
          el.querySelectorAll(".card-hidden").forEach((card, i) => {
            setTimeout(() => card.classList.add("card-visible"), i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-hidden max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {title}
          <span className="text-primary">.</span>
        </h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-accent2 animate-gradient" />
      </div>
      {children}
    </section>
  );
}
