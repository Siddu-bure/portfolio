"use client";

import { achievements, responsibilities } from "@/data/resume";
import Section from "@/components/Section";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements &amp; Responsibilities">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-500">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <div key={i} className="card-hidden group relative glass rounded-xl p-4 hover:bg-muted/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-yellow-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">{a.title}</h4>
                  <span className="text-xs text-muted-foreground tabular-nums bg-muted/50 px-2 py-0.5 rounded-md">{a.year}</span>
                </div>
                <p className="text-xs text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            Positions of Responsibility
          </h3>
          <div className="space-y-4">
            {responsibilities.map((r, i) => (
              <div key={i} className="card-hidden group relative glass rounded-xl p-4 hover:bg-muted/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-accent/10 to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                <h4 className="font-medium text-sm text-foreground group-hover:text-accent transition-colors duration-300 mb-1">{r.title}</h4>
                <p className="text-xs text-muted-foreground tabular-nums">{r.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
