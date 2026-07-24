"use client";

import { useEffect, useState } from "react";
import { SmokeyFluidCursor } from "react-smokey-fluid-cursor";

export default function FluidCursorWrapper() {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <SmokeyFluidCursor
      config={{
        transparent: true,
        densityDissipation: 0.98,
        velocityDissipation: 0.98,
        curl: 30,
        splatRadius: 0.2,
        splatForce: 6000,
      }}
    />
  );
}
