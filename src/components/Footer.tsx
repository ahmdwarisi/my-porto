import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-primary/15">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-base font-bold text-white tracking-tight">
            Ahmad Warisi<span className="text-primary">.</span>
          </span>
          <p className="text-xs text-on-surface-variant">
            © 2026 Ahmad Warisi. Mahasiswa Sistem Informasi &amp; Web Developer.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/ahmdwarisi" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/ahmad-warisi" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:ahmdwarisi2@gmail.com" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors text-xs font-semibold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}