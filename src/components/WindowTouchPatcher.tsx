"use client";

import { useEffect } from "react";

export default function WindowTouchPatcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const orig = window.addEventListener;
    window.addEventListener = function (type: any, listener: any, options?: any) {
      if (type === "touchmove") {
        const opts = typeof options === "object" ? { ...options, passive: true } : { passive: true };
        return orig.call(window, type, listener, opts);
      }
      return orig.call(window, type, listener, options);
    } as typeof window.addEventListener;

    return () => {
      window.addEventListener = orig;
    };
  }, []);

  return null;
}
