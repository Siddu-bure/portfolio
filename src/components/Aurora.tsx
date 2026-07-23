"use client";

import { useEffect, useState } from "react";

const lightBlobs = [
  { from: "#fbcfe8", to: "#fce7f3", top: "-5%", left: "-5%", w: 800, h: 600, dur: 14 },
  { from: "#c7d2fe", to: "#e0e7ff", top: "25%", left: "55%", w: 700, h: 550, dur: 11 },
  { from: "#fde68a", to: "#fef3c7", top: "50%", left: "-8%", w: 650, h: 500, dur: 16 },
  { from: "#a7f3d0", to: "#d1fae5", top: "10%", left: "35%", w: 600, h: 450, dur: 13 },
  { from: "#ddd6fe", to: "#ede9fe", top: "55%", left: "45%", w: 550, h: 450, dur: 18 },
];

const darkBlobs = [
  { from: "#059669", to: "#0d9488", top: "-5%", left: "-5%", w: 800, h: 600, dur: 14 },
  { from: "#4338ca", to: "#6366f1", top: "25%", left: "55%", w: 700, h: 550, dur: 11 },
  { from: "#0891b2", to: "#22d3ee", top: "50%", left: "-8%", w: 650, h: 500, dur: 16 },
  { from: "#047857", to: "#10b981", top: "10%", left: "35%", w: 600, h: 450, dur: 13 },
  { from: "#7c3aed", to: "#a855f7", top: "55%", left: "45%", w: 550, h: 450, dur: 18 },
];

export default function Aurora() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);

    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const blobs = dark ? darkBlobs : lightBlobs;

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden" aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.w,
            height: b.h,
            top: b.top,
            left: b.left,
            background: `radial-gradient(ellipse at center, ${b.from} 0%, ${b.to} 50%, transparent 70%)`,
            opacity: dark ? 0.55 : 0.45,
            mixBlendMode: dark ? "screen" : "normal",
            filter: `blur(${dark ? "100px" : "80px"})`,
            animation: `aurora-move-${i} ${b.dur}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        ${blobs.map((_, i) => `
          @keyframes aurora-move-${i} {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(${40 + i * 8}px, ${30 + i * 5}px) scale(${1 + i * 0.02}) rotate(${4 + i * 2}deg); }
            66% { transform: translate(${-20 - i * 5}px, ${50 + i * 6}px) scale(${0.92 - i * 0.01}) rotate(${-6 - i * 2}deg); }
            100% { transform: translate(${10 + i * 6}px, ${-20 - i * 3}px) scale(1) rotate(${2 + i}deg); }
          }
        `).join('')}
      `}</style>
    </div>
  );
}
