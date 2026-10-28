const highlights = [
  {
    title: 'Sistem Informasi',
    description:
      'Menghubungkan kebutuhan bisnis dengan solusi teknologi yang mudah digunakan.',
  },
  {
    title: 'Pengembangan Web',
    description:
      'Membangun aplikasi web responsif dengan frontend dan backend yang terintegrasi.',
  },
  {
    title: 'Pemecahan Masalah',
    description:
      'Menerjemahkan proses yang kompleks menjadi pengalaman digital yang lebih efisien.',
  },
]

export default function About() {
  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-primary/15"
      id="tentang"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-0.5 w-6 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Tentang Saya
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Teknologi untuk solusi yang berguna
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
            Saya Ahmad Warisi, mahasiswa Sistem Informasi yang tertarik pada
            pengembangan web dan transformasi proses menjadi sistem digital.
            Saya senang belajar teknologi baru dan membangun produk yang
            fungsional, mudah digunakan, serta menjawab kebutuhan nyata.
          </p>
        </div>

        <div className="grid gap-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded border border-primary/20 bg-surface-container-low p-4"
            >
              <h3 className="font-semibold text-white">{highlight.title}</h3>
              <p className="mt-1 text-sm text-on-surface-variant">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="mt-12 border-t border-primary/10 pt-10"
        id="pendidikan"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="h-0.5 w-6 bg-primary rounded-full" />
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Pendidikan
          </span>
        </div>
        <h3 className="text-xl font-bold text-white">Sistem Informasi</h3>
        <p className="mt-1 text-sm text-on-surface-variant">
          Mahasiswa yang berfokus pada pengembangan aplikasi web dan solusi
          sistem informasi.
        </p>
      </div>
    </section>
  )
}