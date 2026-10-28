import { Code2, Database, Terminal } from 'lucide-react'
import { SKILLS_DATA } from '@/data/portfolioData'

export default function Skills() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-primary/15" id="keahlian">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="h-0.5 w-6 bg-primary rounded-full" />
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">Tech Stack &amp; Kapabilitas</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Keahlian &amp; Teknologi</h2>
        <p className="text-sm text-on-surface-variant mt-1 max-w-xl">
          Kombinasi teknologi yang saya gunakan sehari-hari untuk mengembangkan aplikasi web dari konsep rancangan hingga implementasi fungsional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="bg-surface-container-low/80 p-6 rounded border border-primary/25 hover:border-primary/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Frontend &amp; UI</h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Membangun antarmuka modern yang cepat, mobile-friendly, dan accessible dengan komponen modular.
            </p>
            <div className="space-y-3">
              {SKILLS_DATA.frontend.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white font-medium">{s.name}</span>
                    <span className="text-primary">{s.level}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-primary rounded-full ${s.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 mt-6 border-t border-primary/10 flex flex-wrap gap-1.5">
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">Responsive Design</span>
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">Component Reuse</span>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-surface-container-low/80 p-6 rounded border border-primary/25 hover:border-primary/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Backend &amp; Database</h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Mendesain database relasional yang rapi, autentikasi aman, dan endpoint API terstruktur.
            </p>
            <div className="space-y-3">
              {SKILLS_DATA.backend.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white font-medium">{s.name}</span>
                    <span className="text-primary">{s.level}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-primary rounded-full ${s.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 mt-6 border-t border-primary/10 flex flex-wrap gap-1.5">
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">CRUD Architecture</span>
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">Role-Based Access</span>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-surface-container-low/80 p-6 rounded border border-primary/25 hover:border-primary/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Tools &amp; Workflow</h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Lingkungan kerja modern untuk kolaborasi tim, version control, dan efisiensi deployment.
            </p>
            <div className="space-y-3">
              {SKILLS_DATA.tools.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white font-medium">{s.name}</span>
                    <span className="text-primary">{s.level}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-primary rounded-full ${s.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 mt-6 border-t border-primary/10 flex flex-wrap gap-1.5">
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">Version Control</span>
            <span className="text-tertiary-fixed text-[11px] px-2 py-0.5 rounded bg-surface-container">Clean Workflow</span>
          </div>
        </div>
      </div>
    </section>
  )
}