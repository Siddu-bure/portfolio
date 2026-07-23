"use client";

import { personalInfo } from "@/data/resume";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="shrink-0 relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-accent2 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow" />
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-muted">
            <img
              src="/profile.png"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="glass rounded-xl p-3 text-center hover:bg-muted/50 transition-all duration-300">
              <p className="text-2xl font-bold gradient-text">2</p>
              <p className="text-xs text-muted-foreground mt-0.5">Internships</p>
            </div>
            <div className="glass rounded-xl p-3 text-center hover:bg-muted/50 transition-all duration-300">
              <p className="text-2xl font-bold gradient-text">2</p>
              <p className="text-xs text-muted-foreground mt-0.5">Projects</p>
            </div>
            <div className="glass rounded-xl p-3 text-center hover:bg-muted/50 transition-all duration-300 col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold gradient-text">30+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tech Skills</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
