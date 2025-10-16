"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VantaEffect {
  destroy: () => void;
}

function VantaClouds() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js";
    script.onload = () => {
      // @ts-expect-error window.VANTA comes from a CDN, TypeScript doesn't know its type
      if (window.VANTA && !vantaEffect) {
        setVantaEffect(
          // @ts-expect-error window.VANTA comes from a CDN, TypeScript doesn't know its type
          window.VANTA.CLOUDS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            speed: 1,
            backgroundColor: 0x1e293b,
            skyColor: 0x68b8d7,
            cloudColor: 0xe0e7ff,
            cloudShadowColor: 0x64748b,
            sunColor: 0xfacc15,
            sunlightColor: 0xfff9c4,
          }),
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0"></div>;
}

export default VantaClouds;
