import { Mail, MessageSquare, Linkedin } from 'lucide-react'

export default function Contact() {
  const email = 'ahmdwarisi2@gmail.com'

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-primary/15" id="kontak">
      <div className="relative rounded p-8 md:p-12 bg-surface-container-low/90 border border-primary/30 backdrop-blur-xl text-center flex flex-col items-center overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-primary/25 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-tertiary-fixed uppercase tracking-wider">
            Koneksi &amp; Kolaborasi
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl text-white font-extrabold tracking-tight max-w-2xl leading-tight">
          Terbuka untuk Peluang Magang, Kolaborasi, &amp; Proyek Web
        </h2>

        <p className="text-sm md:text-base text-on-surface-variant max-w-xl mt-3 mb-8 leading-relaxed">
          Punya ide proyek, membutuhkan pengembang web untuk tim Anda, atau ingin berdiskusi seputar sistem informasi? Mari terhubung langsung.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-lg">
          <a
            href={`mailto:${email}`}
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>
          <a
            href="https://wa.me/+6282332325294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-surface-container text-white text-sm border border-primary/30 hover:bg-surface-bright transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://linkedin.com/in/ahmdwarisi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-surface-container text-white text-sm border border-primary/30 hover:bg-surface-bright transition-colors"
          >
            <Linkedin className="w-4 h-4 text-primary" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-primary/10 w-full flex flex-wrap items-center justify-between text-tertiary text-[11px] font-semibold">
          <span>STATUS: SIAP BERKOLABORASI</span>
          <span>LOKASI: INDONESIA</span>
          <span>WAKTU RESPON: &lt; 24 JAM</span>
        </div>
      </div>
    </section>
  )
}