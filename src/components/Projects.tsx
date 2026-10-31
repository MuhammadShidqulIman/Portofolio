"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, FolderGit2, Eye } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  placeholderGradient: string;
  accentColor: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "proyek-a",
    name: "Proyek A",
    title: "AI E-Commerce Recommendation Engine",
    category: "Web & Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Solusi rekomendasi produk adaptif secara realtime berbasis neural collaborative filtering.",
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    placeholderGradient: "from-cyan-900/40 via-blue-900/20 to-zinc-900",
    accentColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "proyek-b",
    name: "Proyek B",
    title: "Aplikasi Mobile Healthcare & Telemedicine",
    category: "Mobile Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Platform konsultasi medis terintegrasi dan monitoring resep digital.",
    technologies: ["Kotlin", "Laravel", "MySQL", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    placeholderGradient: "from-purple-900/40 via-indigo-900/20 to-zinc-900",
    accentColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: "proyek-c",
    name: "Proyek C",
    title: "Smart Traffic & IoT Vision Monitor",
    category: "Computer Vision & IoT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sistem deteksi kepadatan lalu lintas dan analisis sensor edge.",
    technologies: ["React", "FastAPI", "TensorFlow", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    placeholderGradient: "from-emerald-900/40 via-teal-900/20 to-zinc-900",
    accentColor: "rgba(16, 185, 129, 0.4)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Karya & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sorotan Proyek{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Terpilih
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Berikut adalah contoh representasi kartu proyek dengan tata letak modern, badge teknologi terintegrasi, dan interaksi visual saat disorot kursor.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 hover:border-cyan-500/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Thumbnail Placeholder Area */}
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${project.placeholderGradient} border-b border-zinc-800/80 flex flex-col items-center justify-center p-6 overflow-hidden`}
              >
                {/* Abstract Pattern Lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Placeholder Graphic Box */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md group-hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FolderGit2 className="w-5 h-5 text-cyan-400" />
                    <span className="font-mono text-xs font-semibold text-zinc-200">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    [Thumbnail Placeholder Image]
                  </span>
                </div>

                {/* Category Badge on Top-Right */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider bg-zinc-950/80 text-cyan-300 border border-zinc-700/60 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Short Description (Lorem ipsum) */}
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 group-hover:border-zinc-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                  <a
                    href={project.demoUrl}
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
