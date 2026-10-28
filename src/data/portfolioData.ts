import { Boxes, ShoppingBasket } from 'lucide-react'

export const SKILLS_DATA = {
  frontend: [
    { name: 'Next.js & React', level: 'Pemula', width: 'w-[88%]' },
    { name: 'JavaScript (ES6+)', level: 'Menengah', width: 'w-[85%]' },
    { name: 'Tailwind CSS / HTML5', level: 'Kompeten', width: 'w-[92%]' },
    { name: 'Figma (UI/UX)', level: 'Kompeten', width: 'w-[80%]' },
  ],
  backend: [
    { name: 'PHP (Native & Framework)', level: 'Menengah', width: 'w-[85%]' },
    { name: 'MySQL (Relational DB)', level: 'Menengah', width: 'w-[88%]' },
    { name: 'Python (Scripting & Data)', level: 'Kompeten', width: 'w-[78%]' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 'Menengah', width: 'w-[90%]' },
    { name: 'VS Code & Extensions', level: 'Mahir', width: 'w-[95%]' },
    { name: 'Postman (API Testing)', level: 'Menengah', width: 'w-[82%]' },
  ],
}

export const PROJECTS_DATA = [
  {
    num: '01',
    category: 'Sistem Informasi Usaha',
    icon: Boxes,
    title: 'Geprek Jago',
    desc: 'Sistem informasi untuk membantu pengelolaan usaha Geprek Jago, mulai dari manajemen menu hingga pencatatan penjualan.',
    features: ['Manajemen menu', 'Catatan transaksi penjualan', 'Laporan harian'],
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    repoUrl: 'https://github.com/ahmdwarisi/geprek_jago',
  },
  {
    num: '02',
    category: 'Aplikasi Pemesanan',
    icon: ShoppingBasket,
    title: 'Bubur Ayam Mang Jay',
    desc: 'Membuat sistem pemesanan online untuk UMKM Bubur Ayam Mang Jay.',
    features: ['Pemesanan bubur secara online'],
    tags: ['PHP', 'CSS', 'UMKM'],
    repoUrl: 'https://github.com/ahmdwarisi/Apps-Pemesanan-Bubur-Ayam-Mang-Jay.git',
  },
  {
    num: '03',
    category: 'Sistem Persediaan',
    icon: Boxes,
    title: 'Sistem Persediaan Barang',
    desc: 'Aplikasi untuk membantu manajemen persediaan barang.',
    features: ['Manajemen persediaan barang'],
    tags: ['PHP', 'JavaScript', 'CSS', 'MySQL'],
    repoUrl: 'https://github.com/ahmdwarisi/sim_persedian_barang.git',
  },
]