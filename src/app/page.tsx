import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Ambient glowing radial orbs & noise */}
      <BackgroundGlow />

      {/* Sticky Glassmorphism Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section with staggered animations */}
        <Hero />

        {/* 2. Skills & Tech Stack Section with hover float */}
        <Skills />

        {/* 3. Projects Section with 3 dummy cards, scale 1.05 & neon glow */}
        <Projects />

        {/* 4. Contact Section with aesthetic form & social icons */}
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  );
}
