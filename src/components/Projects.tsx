import { CheckCircle, Terminal } from 'lucide-react'
import { PROJECTS_DATA } from '@/data/portfolioData'

export default function Projects() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-primary/15" id="proyek">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-0.5 w-6 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Karya &amp; Implementasi</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Proyek Pilihan</h2>
        </div>
        <p className="text-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
          Portofolio aplikasi nyata yang dirancang untuk memecahkan kendala sistematis dengan performa optimal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj, idx) => {
          const IconComponent = proj.icon
          return (
            <div
              key={idx}
              className="bg-surface-container-low rounded border border-primary/20 overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all group"
            >
              <div>
                <div className="h-36 bg-surface-container-high/70 relative p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c4a482_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/40">
                      {proj.category}
                    </span>
                    <IconComponent className="w-5 h-5 text-primary/70" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] text-tertiary block font-semibold">PROYEK {proj.num}</span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{proj.title}</h3>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <p className="text-xs text-on-surface-variant leading-relaxed">{proj.desc}</p>
                  <div className="space-y-1.5 bg-surface-container p-2.5 rounded text-xs text-white">
                    {proj.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-tertiary-fixed border border-primary/25 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded bg-surface-container-high text-white text-xs border border-primary/30 flex items-center justify-center gap-1.5 hover:bg-surface-bright transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}