"use client";

import { education } from "@/data/resume";
import Section from "@/components/Section";

const icons = [
  <svg key="iit" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
  </svg>,
  <svg key="college" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
  </svg>,
  <svg key="school" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
  </svg>,
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="card-hidden group relative p-6 rounded-2xl glass hover:bg-muted/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-accent2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {icons[i]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap tabular-nums">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                {edu.score && (
                  <p className="text-sm font-medium mt-1 inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-md">{edu.score}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
