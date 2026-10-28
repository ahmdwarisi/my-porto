'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark'

    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-primary/10">
      <div className="h-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold tracking-tight text-white flex items-center">
          Ahmad Warisi<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {['tentang', 'pendidikan', 'keahlian', 'proyek', 'kontak'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-on-surface-variant hover:text-white capitalize transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Aktifkan mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-pressed={theme === 'light'}
            onClick={toggleTheme}
            className="w-9 h-9 rounded flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-primary-container text-on-primary-container text-sm font-semibold hover:bg-primary hover:text-on-primary transition-all"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </header>
  )
}