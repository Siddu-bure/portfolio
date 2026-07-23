"use client";

import { experience } from "@/data/resume";
import Section from "@/components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-accent2 hidden sm:block animate-gradient" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <div key={i} className="card-hidden relative pl-0 sm:pl-14">
              <div className="hidden sm:block absolute left-0 top-1 w-[39px] h-[39px] rounded-full glass border-2 border-primary/30 flex items-center justify-center bg-background group overflow-hidden">
                {exp.logo ? (
                  <img src={exp.logo} alt="" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <>
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20 group-hover:opacity-40" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </>
                )}
              </div>

              <div className="group relative glass rounded-2xl p-6 hover:bg-muted/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-accent2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 rounded-lg object-contain bg-white/80 dark:bg-white/10 p-1"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs text-muted-foreground tabular-nums">{exp.period}</span>
                    <span className="text-xs text-muted-foreground">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed group/point">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/point:bg-primary group-hover/point:scale-125 transition-all duration-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
