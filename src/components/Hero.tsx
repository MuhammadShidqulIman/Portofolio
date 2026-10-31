"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  Terminal as TerminalIcon,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-5 inline-block">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300">
                Terbuka untuk Kolaborasi & Proyek Baru
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Muhammad Shidqul Iman
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                Full-Stack & AI
              </span>
            </div>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
          >
            Mahasiswa{" "}
            <span className="text-zinc-200 font-medium">
              Teknologi Informasi Universitas Muhammadiyah Yogyakarta
            </span>{" "}
            dengan fokus dan dedikasi dalam perancangan solusi cerdas berbasis{" "}
            <span className="text-cyan-300 font-semibold">Web</span>,{" "}
            <span className="text-blue-400 font-semibold">Mobile</span>, &{" "}
            <span className="text-emerald-400 font-semibold">Machine Learning</span>.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo("projects")}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Hubungi Saya</span>
            </motion.button>
          </motion.div>

          {/* Quick Metrics / Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-xl"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <span>3+</span>
                <span className="text-cyan-400 text-sm ml-1">Domain</span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Web, Mobile & AI</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <span>UMY</span>
                <span className="text-emerald-400 text-sm ml-1">TI</span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Informatika / IT</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <span>100%</span>
                <span className="text-blue-400 text-sm ml-1">Dedikasi</span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Modern & Scalable</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Glassmorphism Code Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Subtle Ambient Back Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 -z-10" />

          {/* Terminal Window Card */}
          <div className="w-full rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden">
            {/* Top Bar with Window Dots */}
            <div className="px-4 py-3 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>engineer.config.ts</span>
              </div>
              <div className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                Active
              </div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-2 select-none overflow-x-auto">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">fullName:</span>{" "}
                <span className="text-emerald-300">&quot;Muhammad Shidqul Iman&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">university:</span>{" "}
                <span className="text-emerald-300">&quot;Universitas Muhammadiyah Yogyakarta&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">major:</span>{" "}
                <span className="text-emerald-300">&quot;Teknologi Informasi&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">specialization:</span> [
              </div>
              <div className="pl-8 text-cyan-300">
                &quot;Web Development&quot;,
              </div>
              <div className="pl-8 text-blue-300">
                &quot;Mobile Application&quot;,
              </div>
              <div className="pl-8 text-emerald-300">
                &quot;Machine Learning&quot;,
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-zinc-400">passion:</span>{" "}
                <span className="text-yellow-300">&quot;Building impactful & high performance solutions&quot;</span>,
              </div>
              <div>&#125;;</div>

              <div className="pt-2 text-zinc-500 italic">
                // System status check:
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready to engineer innovative software</span>
              </div>
            </div>

            {/* Bottom mini bar with quick badges */}
            <div className="px-5 py-3 bg-zinc-950/50 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Modern Architecture</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clean Code</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
