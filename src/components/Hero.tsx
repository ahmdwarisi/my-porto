'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Mail, Copy, Check, Github, Linkedin, Instagram } from 'lucide-react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const email = 'ahmdwarisi2@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Kiri */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 z-10">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container/90 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-tertiary-fixed tracking-wider uppercase">
              Mahasiswa Sistem Informasi &amp; Web Developer
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-white leading-none">
              I&apos;M WARISI
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Saya <span className="text-white font-semibold">Ahmad Warisi</span>, mahasiswa Sistem Informasi yang fokus membangun website fungsional, arsitektur modern, dan integrasi sistem digital untuk efisiensi bisnis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed transition-colors shadow-md"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/cv-ahmad-warisi.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-surface-container-high/60 text-white text-sm font-medium border border-primary/40 hover:bg-surface-container-highest transition-colors"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Unduh CV</span>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-primary/20 hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs text-on-surface select-all">{email}</span>
              <button
                onClick={handleCopy}
                aria-label="Salin Email"
                className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-tertiary transition-colors flex items-center justify-center"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            {copied && <span className="text-xs text-primary font-medium">Tersalin!</span>}
          </div>
        </div>

        {/* Tengah (Foto Cutout) */}
        <div className="lg:col-span-4 flex items-end justify-center relative min-h-[380px] lg:min-h-[460px]">
          <div className="relative w-full max-w-[340px] h-[440px]">
            <Image
              src="/profile.png"
              alt="Ahmad Warisi - Web Developer"
              fill
              priority
              unoptimized
              className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
              sizes="(max-width: 768px) 100vw, 340px"
            />
          </div>
        </div>

        {/* Kanan */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 z-10 bg-surface-container-low/60 p-6 rounded border border-primary/15 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-tertiary uppercase tracking-wider">Ikuti Saya</span>
            <div className="flex items-center gap-2">
              <a href="https://github.com/ahmdwarisi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/ahmdwarisi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/ahmdwarisi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-sm text-on-surface-variant leading-relaxed">
            Merancang dan mengembangkan arsitektur frontend interaktif serta integrasi sistem backend yang efisien, skalabel, dan ramah pengguna.
          </p>

          <div className="border-t border-primary/10 pt-3">
            <span className="text-[11px] font-semibold text-tertiary uppercase tracking-widest block mb-0.5">Spesialisasi</span>
            <div className="text-3xl font-extrabold text-primary tracking-tight">WEB DEVELOPER</div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {['Next.js', 'JavaScript', 'PHP', 'Python', 'UI/UX'].map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded bg-surface-container text-tertiary-fixed text-xs font-medium border border-primary/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}