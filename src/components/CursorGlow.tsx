"use client";

import { useEffect, useState } from "react";

const oilPastels = [
  { color: "#e85d75", size: 300, blur: 85 },
  { color: "#f09b5a", size: 280, blur: 80 },
  { color: "#f4d35e", size: 260, blur: 75 },
  { color: "#7bc67e", size: 290, blur: 82 },
  { color: "#5ba3d9", size: 270, blur: 78 },
  { color: "#b081d4", size: 310, blur: 88 },
  { color: "#e87db0", size: 250, blur: 72 },
  { color: "#6fc2b0", size: 240, blur: 70 },
];

interface Point {
  x: number;
  y: number;
}

export default function CursorGlow() {
  const [layers, setLayers] = useState<Point[]>(
    oilPastels.map(() => ({ x: -500, y: -500 }))
  );

  useEffect(() => {
    let raf: number;
    const target = { x: -500, y: -500 };
    const currents = oilPastels.map(() => ({ x: -500, y: -500 }));

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const animate = () => {
      currents.forEach((c, i) => {
        const spread = 0.2 - i * 0.02;
        const offsetX = (i - oilPastels.length / 2) * 6;
        const offsetY = (i - oilPastels.length / 2) * 4;
        c.x += (target.x + offsetX - c.x) * spread;
        c.y += (target.y + offsetY - c.y) * spread;
      });
      setLayers(currents.map((c) => ({ x: c.x, y: c.y })));
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {oilPastels.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle at center, ${p.color}cc 0%, ${p.color}66 35%, ${p.color}22 60%, transparent 80%)`,
            filter: `blur(${p.blur}px)`,
            opacity: 0.5,
            transform: `translate(calc(${layers[i]?.x ?? -500}px - 50%), calc(${layers[i]?.y ?? -500}px - 50%))`,
          }}
        />
      ))}
    </div>
  );
}
