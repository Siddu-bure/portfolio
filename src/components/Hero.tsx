"use client";

import { personalInfo } from "@/data/resume";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center relative z-10">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8 hover:bg-muted/50 transition-all duration-300 group">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-green-400" />
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </span>
            <span>Open to opportunities</span>
          </div>
        </div>

        <h1 className="animate-fade-up stagger-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <br />
          {personalInfo.name.split(" ")[1]}
        </h1>

        <p className="animate-fade-up stagger-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          AI Engineer & SDE — Building intelligent systems at the intersection of
          {" "}<span className="text-foreground font-semibold relative group">
            Machine Learning
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>,
          {" "}<span className="text-foreground font-semibold relative group">
            LLMs
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>, and
          {" "}<span className="text-foreground font-semibold relative group">
            Cloud
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-accent2 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>.
        </p>

        <p className="animate-fade-up stagger-3 text-muted-foreground/70 mb-10">
          B.Tech AI & Data Science @ IIT Jodhpur
        </p>

        <div className="animate-fade-up stagger-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="group relative px-6 py-3 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-primary-foreground">Get in Touch</span>
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="group relative px-6 py-3 rounded-xl glass font-medium text-foreground hover:bg-muted/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">View Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        <div className="animate-fade-up stagger-5 mt-12 flex items-center justify-center gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl glass hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl glass hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative p-3 rounded-xl glass hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium animate-bounce">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
