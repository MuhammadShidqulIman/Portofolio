"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Server,
  Terminal,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "web" | "mobile" | "ai" | "devops";
  icon: string;
  level: string;
  description: string;
  accent: "cyan" | "emerald" | "blue" | "purple";
}

const skillsData: SkillItem[] = [
  {
    name: "Next.js",
    category: "web",
    icon: "▲",
    level: "Advanced",
    description: "Fullstack React Framework, App Router, SSR & ISR",
    accent: "cyan",
  },
  {
    name: "Laravel",
    category: "web",
    icon: "⚡",
    level: "Advanced",
    description: "PHP Framework, RESTful API, Eloquent ORM & Authentication",
    accent: "emerald",
  },
  {
    name: "Kotlin",
    category: "mobile",
    icon: "📱",
    level: "Intermediate",
    description: "Modern Android Development, Coroutines & Jetpack",
    accent: "purple",
  },
  {
    name: "Python",
    category: "ai",
    icon: "🐍",
    level: "Advanced",
    description: "Data Processing, Backend Automation, AI Model Scripts",
    accent: "blue",
  },
  {
    name: "Docker",
    category: "devops",
    icon: "🐳",
    level: "Intermediate",
    description: "Containerization, Environment Isolation & Microservices",
    accent: "cyan",
  },
  {
    name: "React.js",
    category: "web",
    icon: "⚛",
    level: "Advanced",
    description: "Component Architecture, Custom Hooks & State Management",
    accent: "cyan",
  },
  {
    name: "TypeScript",
    category: "web",
    icon: "TS",
    level: "Advanced",
    description: "Static Typing, Interface Contracts & Strict Type Safety",
    accent: "blue",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    icon: "🌊",
    level: "Expert",
    description: "Modern Responsive Layouting, Custom Themes & Dark Mode",
    accent: "cyan",
  },
  {
    name: "TensorFlow & ML",
    category: "ai",
    icon: "🧠",
    level: "Intermediate",
    description: "Model Training, Classification, Computer Vision & NLP",
    accent: "emerald",
  },
  {
    name: "Flutter",
    category: "mobile",
    icon: "🎯",
    level: "Intermediate",
    description: "Cross-platform Mobile Apps, Dart & Smooth Animations",
    accent: "blue",
  },
  {
    name: "PostgreSQL & MySQL",
    category: "devops",
    icon: "🗄️",
    level: "Advanced",
    description: "Relational Schemas, Indexing, Query Optimization",
    accent: "emerald",
  },
  {
    name: "Git & CI/CD",
    category: "devops",
    icon: "🌿",
    level: "Advanced",
    description: "Version Control, Git Flow, GitHub Actions Automation",
    accent: "purple",
  },
];

const categories = [
  { id: "all", label: "Semua Teknologi", icon: Layers },
  { id: "web", label: "Web Development", icon: Code },
  { id: "mobile", label: "Mobile Development", icon: Smartphone },
  { id: "ai", label: "Machine Learning & AI", icon: Cpu },
  { id: "devops", label: "DevOps & Database", icon: Server },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getAccentBorder = (accent: SkillItem["accent"]) => {
    switch (accent) {
      case "cyan":
        return "hover:border-cyan-400/60 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)]";
      case "emerald":
        return "hover:border-emerald-400/60 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]";
      case "purple":
        return "hover:border-purple-400/60 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.3)]";
      case "blue":
        return "hover:border-blue-400/60 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)]";
    }
  };

  const getAccentBadge = (accent: SkillItem["accent"]) => {
    switch (accent) {
      case "cyan":
        return "text-cyan-400 bg-cyan-950/50 border-cyan-800/40";
      case "emerald":
        return "text-emerald-400 bg-emerald-950/50 border-emerald-800/40";
      case "purple":
        return "text-purple-400 bg-purple-950/50 border-purple-800/40";
      case "blue":
        return "text-blue-400 bg-blue-950/50 border-blue-800/40";
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Keahlian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Instrumen & Keahlian{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Teknologi
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Kombinasi bahasa pemrograman, kerangka kerja modern, dan alat ekosistem yang digunakan untuk membangun produk digital yang tangguh, cepat, dan teruji.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-zinc-800/90 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/70 hover:bg-zinc-800/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Hover Float Effect */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative p-5 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 transition-all duration-300 ${getAccentBorder(
                skill.accent
              )}`}
            >
              {/* Top Row: Icon & Proficiency Level */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <span>{skill.icon}</span>
                </div>
                <span
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${getAccentBadge(
                    skill.accent
                  )}`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>

              {/* Short Description */}
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                {skill.description}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="capitalize">{skill.category}</span>
                <span className="group-hover:translate-x-1 group-hover:text-cyan-400 transition-all">
                  Hover float ↗
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
