"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  GraduationCap,
  Send,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Sparkles,
  CheckCircle,
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shidquliman@example.com",
    color: "hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Koneksi & Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mari Mulai{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Percakapan
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Apakah Anda memiliki proyek baru, pertanyaan seputar teknologi, atau ingin sekadar berdiskusi? Kirimkan pesan melalui formulir di bawah ini.
          </p>
        </div>

        {/* Content Grid: Left Contact Info, Right Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Information Card */}
            <div className="p-7 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white">Informasi Kontak</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang pengembangan sistem web, aplikasi mobile, maupun implementasi machine learning.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-mono">Email Utama</span>
                    <p className="text-sm font-medium text-zinc-200">
                      shidquliman@example.com
                    </p>
                  </div>
                </div>

                {/* Campus Item */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60">
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-mono">Pendidikan</span>
                    <p className="text-sm font-medium text-zinc-200">
                      Universitas Muhammadiyah Yogyakarta
                    </p>
                    <p className="text-xs text-zinc-400">Teknologi Informasi</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60">
                  <div className="p-2.5 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-mono">Domisili</span>
                    <p className="text-sm font-medium text-zinc-200">
                      D.I. Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-4">
                Terhubung di Media Sosial
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                      className={`p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-400 transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Aesthetic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2">
                Kirim Pesan Langsung
              </h3>
              <p className="text-sm text-zinc-400 mb-8">
                Isi formulir berikut dan pesan akan otomatis tercatat.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 flex items-center gap-3 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>
                    Terima kasih! Pesan dummy Anda berhasil disimulasikan dan terkirim.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono font-medium text-zinc-300 uppercase tracking-wide"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="cth. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono font-medium text-zinc-300 uppercase tracking-wide"
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono font-medium text-zinc-300 uppercase tracking-wide"
                  >
                    Subjek Diskusi
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="cth. Penawaran Proyek / Diskusi Kolaborasi"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono font-medium text-zinc-300 uppercase tracking-wide"
                  >
                    Isi Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan detail pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 hover:bg-right shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Mengirimkan...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
