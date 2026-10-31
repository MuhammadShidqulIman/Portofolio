"use client";

import React from "react";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Neon Cyan Orb */}
      <div className="absolute -top-40 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Top Right Neon Blue Orb */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse-slow delay-1000" />

      {/* Bottom Center Emerald Orb */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse-slow delay-2000" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />
    </div>
  );
}
