export const pagesData = [
  // Halaman 0: Cover Depan
  {
    id: 0,
    type: 'cover',
    badge: 'BUKU CERITA DIGITAL INTERAKTIF ANAK SD',
    title: 'KEBERAGAMAN BUDAYA INDONESIA',
    subtitle: 'Cerita dan Nilai untuk Literasi Sosial',
    coverArt: '/images/cover_art.png',
    artPill: 'Belajar Toleransi, Gotong Royong, & Kasih Sayang',
    characters: [
      { id: 'naya', name: 'Naya', origin: 'Minang (Sumbar)', borderClass: 'char-pink', icon: '🌸' },
      { id: 'rafi', name: 'Rafi', origin: 'Sunda (Jabar)', borderClass: 'char-blue', icon: '🌿' },
      { id: 'sinta', name: 'Sinta', origin: 'Jawa (Jateng)', borderClass: 'char-green', icon: '☀️' },
      { id: 'danu', name: 'Danu', origin: 'Papua (Honai)', borderClass: 'char-amber', icon: '🪶' }
    ],
    houses: [
      { id: 'gadang', name: 'Rumah Gadang', origin: 'Sumatera Barat', icon: '/images/icon_gadang.png', fact: 'Rumah adat Minangkabau dengan atap gonjong runcing menyerupai tanduk kerbau.' },
      { id: 'julang', name: 'Julang Ngapak', origin: 'Jawa Barat', icon: '/images/icon_julang.png', fact: 'Rumah adat Sunda tradisional dengan atap menyerupai sayap burung yang sedang mengepak.' },
      { id: 'joglo', name: 'Rumah Joglo', origin: 'Jawa Tengah', icon: '/images/icon_joglo.png', fact: 'Rumah adat Jawa yang megah dengan empat pilar soko guru dan atap bertingkat.' },
      { id: 'honai', name: 'Rumah Honai', origin: 'Papua Pegunungan', icon: '/images/icon_honai.png', fact: 'Rumah bundar beratap jerami/ilalang khas suku Dani yang hangat dan sarat nilai kebersamaan.' }
    ],
    audioText: 'Selamat datang di Buku Cerita Digital Interaktif Anak SD: Keberagaman Budaya Indonesia. Cerita dan Nilai untuk Literasi Sosial. Mari berkenalan dengan sahabat baru kita: Naya, Rafi, Sinta, dan Danu, serta jelajahi rumah adat nusantara!'
  },

  // Halaman 1: Halaman Identitas Siswa (Halaman 1 dari 8)
  {
    id: 1,
    type: 'identity',
    pageNum: 1,
    totalPages: 8,
    badge: '✦ HALAMAN IDENTITAS SISWA ✦',
    title: 'BUKU INI MILIK 📖',
    subtitle: 'Tuliskan nama dan asal sekolahmu untuk memulai petualangan budaya nusantara!',
    characters: [
      { id: 'naya', name: 'Naya', origin: 'Minang', icon: '🌸' },
      { id: 'rafi', name: 'Rafi', origin: 'Jawa', icon: '🌿' },
      { id: 'sinta', name: 'Sinta', origin: 'Sunda', icon: '☀️' },
      { id: 'danu', name: 'Danu', origin: 'Papua', icon: '🪶' }
    ],
    houses: [
      { id: 'gadang', name: 'Rumah Gadang', origin: 'Sumatera Barat', icon: '/images/icon_gadang.png', fact: 'Rumah adat Minangkabau dengan atap gonjong runcing menyerupai tanduk kerbau.' },
      { id: 'julang', name: 'Julang Ngapak', origin: 'Jawa Barat', icon: '/images/icon_julang.png', fact: 'Rumah adat Sunda tradisional dengan atap menyerupai sayap burung yang sedang mengepak.' },
      { id: 'joglo', name: 'Rumah Joglo', origin: 'Jawa Tengah', icon: '/images/icon_joglo.png', fact: 'Rumah adat Jawa yang megah dengan empat pilar soko guru dan atap bertingkat.' },
      { id: 'honai', name: 'Rumah Honai', origin: 'Papua Pegunungan', icon: '/images/icon_honai.png', fact: 'Rumah bundar beratap jerami/ilalang khas suku Dani yang hangat dan sarat nilai kebersamaan.' }
    ],
    audioText: 'Petunjuk Identitas Siswa. Halo Sahabat Cilik! Tuliskan nama lengkapmu, kelas, dan nama sekolahmu agar buku ini menjadi milikmu. Pilih karakter sahabat nusantara favoritmu, lalu tekan Mulai Petualangan!'
  },

  // Halaman 2: Kata Pengantar (Halaman 2 dari 8)
  {
    id: 2,
    type: 'preface',
    pageNum: 2,
    totalPages: 8,
    badge: '★ KATA PENGANTAR ★',
    subtitle: 'Selamat Datang di Petualangan Budaya Nusantara!',
    prefaceArt: '/images/pengantar_art.png',
    quote: 'Perbedaan bukan pemisah, melainkan pelangi indah yang mempersatukan kita!',
    paragraphs: [
      'Indonesia memiliki banyak budaya yang berbeda. Setiap daerah memiliki ciri khasnya sendiri, seperti pakaian adat, rumah adat, bahasa, makanan khas, kesenian, dan tradisi.',
      'Perbedaan tersebut membuat Indonesia menjadi negara yang kaya akan budaya.',
      'Melalui buku ini, kita akan mengikuti perjalanan beberapa anak yang belajar mengenal budaya dari daerah yang berbeda. Dari cerita mereka, kita akan belajar bagaimana menghargai perbedaan, bekerja sama, dan peduli terhadap budaya Indonesia.',
      'Yuk, kita belajar sambil mengikuti petualangan mereka!'
    ],
    values: [
      { icon: '👥', label: 'Menghargai Perbedaan', value: 'Toleransi' },
      { icon: '🤝', label: 'Bekerja Sama', value: 'Gotong Royong' },
      { icon: '🤍', label: 'Peduli Budaya', value: 'Warisan Leluhur' }
    ],
    audioText: 'Kata Pengantar. Selamat Datang di Petualangan Budaya Nusantara! Indonesia memiliki banyak budaya yang berbeda. Setiap daerah memiliki ciri khasnya sendiri, seperti pakaian adat, rumah adat, bahasa, makanan khas, kesenian, dan tradisi. Perbedaan tersebut membuat Indonesia menjadi negara yang kaya akan budaya. Melalui buku ini, kita akan mengikuti perjalanan beberapa anak yang belajar mengenal budaya dari daerah yang berbeda. Dari cerita mereka, kita akan belajar bagaimana menghargai perbedaan, bekerja sama, dan peduli terhadap budaya Indonesia. Yuk, kita belajar sambil mengikuti petualangan mereka!'
  }
];
