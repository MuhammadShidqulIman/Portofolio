"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-200">
              Muhammad Shidqul Iman
            </p>
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Hak Cipta Dilindungi. Mahasiswa TI Universitas Muhammadiyah Yogyakarta.
            </p>
          </div>
        </div>

        {/* Tech Stack Indicator */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          <span>Dirancang dengan</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          <span>menggunakan Next.js & Framer Motion</span>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Kembali ke atas"
          className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  );
}
