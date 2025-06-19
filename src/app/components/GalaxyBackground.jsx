"use client";

import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function GalaxyBackground() {
  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#0f1923" },
    particles: {
      number: { value: 100, density: { enable: true, area: 1000 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 0.5, max: 2 } },
      move: { enable: true, speed: 0.3 },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="galaxy-bg"
      init={async (engine) => {
        await loadSlim(engine); // SLIM version is enough for basic effects
      }}
      options={options}
    />
  );
}
