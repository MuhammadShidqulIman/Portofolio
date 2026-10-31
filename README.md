# Website Portofolio Modern - Muhammad Shidqul Iman

Kerangka antarmuka (UI/UX) portofolio personal eksklusif dan modern yang dirancang menggunakan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

---

## 🎨 Karakteristik Desain & Estetika

- **Dark Mode Eksklusif**: Latar belakang dominan hitam pekat & zinc-950 (`#09090b`) dengan aksen ambient glow neon radial.
- **Warna Aksen**: Neon Cyan (`#06b6d4`), Electric Blue (`#3b82f6`), dan Emerald Green (`#10b981`).
- **Efek Glassmorphism**: Permukaan semi-transparan dengan *backdrop-filter blur* halus pada navbar dan kartu UI.
- **Tipografi Bersih & Modern**: Hirarki tipografi proporsional dengan font sans-serif modern.
- **Animasi Interaktif**:
  - Hero text bertahap (*staggered fade-in & slide-up*).
  - Hover float pada kartu keterampilan (*Skills*).
  - Hover glow shadow berpendar & pembesaran kartu (*scale 1.05*) pada Proyek.
  - Smooth scrolling otomatis antar seksi.

---

## 📂 Struktur Proyek Modular

```text
Portofolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives, glassmorphism utilities & dark scrollbar
│   │   ├── layout.tsx          # Root layout & konfigurasi SEO metadata
│   │   └── page.tsx            # Single Page Application (merangkai seluruh komponen)
│   └── components/
│       ├── BackgroundGlow.tsx  # Ambient mesh glow & neon orbs
│       ├── Navbar.tsx          # Sticky glass navbar, logo, nav link & menu mobile
│       ├── Hero.tsx            # Hero section, teks bertahap, status badge & interactive code card
│       ├── Skills.tsx          # Grid teknologi dengan efek hover float & filter kategori
│       ├── Projects.tsx        # 3 kartu proyek dummy dengan efek scale 1.05 & neon glow
│       ├── Contact.tsx         # Formulir kontak estetik dark mode & tautan media sosial
│       └── Footer.tsx          # Footer dengan tombol Back to Top & copyright
├── package.json                # Dependencies Next.js, Framer Motion, Lucide, Tailwind
├── tsconfig.json               # Konfigurasi TypeScript dan path alias (@/*)
├── tailwind.config.ts          # Konfigurasi tema warna neon & animasi kustom
├── postcss.config.mjs          # Konfigurasi PostCSS
└── next.config.mjs             # Konfigurasi Next.js
```

---

## 🚀 Cara Menjalankan Proyek

### 1. Instalasi Dependensi
Buka terminal (PowerShell / Command Prompt / Git Bash) di direktori ini, lalu jalankan:

```bash
npm install
```

### 2. Jalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```

Buka peramban (browser) di [http://localhost:3000](http://localhost:3000).

### 3. Build untuk Produksi
```bash
npm run build
npm run start
```
