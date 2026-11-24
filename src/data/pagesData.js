export const pagesData = [
  {
    id: 1,
    pageNumber: 1,
    type: 'cover-page-01',
    titleTop: 'BERAGAM BUDAYA',
    titleBottom: 'INDONESIA',
    subtitleTop: 'Cerita Nilai untuk',
    subtitleBottom: 'Literasi Sosial',
    assets: {
      background: '/pages/page-01/backgorund.png',
      light: '/pages/page-02/cahaya.png',
      cloudDark: '/pages/page-01/awan.png',
      cloudLight: '/pages/page-01/awan-02.png',
      bird: '/pages/page-01/burung.png',
      titleArt: '/pages/page-01/judul.png',
      titleRibbon: '/pages/page-01/label-judul.png',
      subtitleArt: '/pages/page-01/sub%20judul.png',
      mountain: '/pages/page-01/gunung.png',
      hills: '/pages/page-01/hamparan-gunung.png',
      tree: '/pages/page-01/pohon.png',
      flower: '/pages/page-01/bunga.png',
      foliage: '/pages/page-01/daun-daun.png',
      houses: [
        { id: 'joglo', src: '/pages/page-01/rumah-adat-jawa-tengah.png', alt: 'Rumah Adat Joglo' },
        { id: 'honai', src: '/pages/page-01/rumah-adat-papua.png', alt: 'Rumah Adat Honai' },
        { id: 'julang', src: '/pages/page-01/rumah-adat-jawa-barat.png', alt: 'Rumah Adat Julang Ngapak' },
        { id: 'gadang', src: '/pages/page-01/rumah-adat-sumatra.png', alt: 'Rumah Adat Gadang' }
      ],
      characters: [
        { id: 'sinta', src: '/pages/page-01/sinta.png', alt: 'Sinta' },
        { id: 'naya', src: '/pages/page-01/naya.png', alt: 'Naya' },
        { id: 'danu', src: '/pages/page-01/danu.png', alt: 'Danu' },
        { id: 'rafi', src: '/pages/page-01/rafi.png', alt: 'Rafi' }
      ]
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Dengarkan Musik / Suara' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 2,
    pageNumber: 2,
    type: 'content-page-02',
    title: 'Kata Pengantar',
    bodyParagraphs: [
      'Indonesia memiliki banyak budaya yang berbeda. Setiap daerah memiliki ciri khasnya sendiri, seperti pakaian adat, rumah adat, bahasa, makanan khas, kesenian, dan tradisi. Perbedaan tersebut membuat Indonesia menjadi negara yang kaya akan budaya. ', 
      'Melalui buku ini, kita akan mengikuti perjalanan beberapa anak yang belajar mengenal budaya dari daerah yang berbeda. Dari cerita mereka, kita akan belajar bagaimana menghargai perbedaan, bekerja sama, dan peduli terhadap budaya Indonesia.',
      'Yuk, kita belajar sambil mengikuti petualangan mereka!'
    ],
    assets: {
      background: '/pages/page-02/backgorund.png',
      light: '/pages/page-02/cahaya.png',
      cloudDark: '/pages/page-02/awan.png',
      cloudLight: '/pages/page-02/awan-02.png',
      mountain: '/pages/page-02/gunung.png',
      hills: '/pages/page-02/hamparan-gunung.png',
      houseLeft: '/pages/page-02/rumah-adat-jawa-barat.png',
      tree: '/pages/page-02/pohon.png',
      houseRight: '/pages/page-02/rumah-adat-sumatra.png',
      rocks: '/pages/page-02/batu.png',
      noteFrame: '/pages/page-02/template-catatan.png',
      titleArt: '/pages/page-02/kata-pengantar.svg',
      foliage: '/pages/page-02/daun-daun.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Dengarkan Narasi' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 3,
    pageNumber: 3,
    type: 'content-page-03',
    title: 'DAFTAR ISI',
    items: [
      { title: 'Bagian Awal', isHeader: true },
      { title: 'Kata Pengantar', page: 1 },
      { title: 'Daftar Isi', page: 2 },
      { title: 'Kenali Tombol', page: 3 },
      { title: 'Petunjuk Penggunaan', page: 4 },
      { title: 'Yuk, Kita Mulai! Kenalan dengan Tokoh', page: 5 },
      { title: 'Cerita 1 – Tiga Warna di Festival Sekolah (Toleransi)', page: 6 },
      { title: 'Kuis Cerita 1', page: 11 },
      { title: 'Saatnya Lanjut', page: 13 },
      { title: 'Cerita 2 – Satu Panggung, Banyak Budaya (Kerja Sama)...', page: 14 },
      { title: 'Kuis Cerita 2', page: 19 },
      { title: 'Saatnya Lanjut', page: 21 },
      { title: 'Cerita 3 – Warisan yang Harus Dijaga (Kepedulian)', page: 22 },
      { title: 'Kuis Cerita 3', page: 27 },
      { title: 'Games: Petualangan Penjaga Budaya', page: 29 },
      { title: 'Aturan Main Bersama', page: 29 },
      { title: 'Pilih Game', page: 30 },
      { title: 'Game 1: Kenali Budaya Teman', page: 31 },
      { title: 'Game 2: Pasangkan Bantuan', page: 32 },
      { title: 'Game 3: Selamatkan Pojok Budaya', page: 33 },
      { title: 'Selamat!', page: 34 },
      { title: 'Bagian Akhir', isHeader: true },
      { title: 'Refleksi Bersama', page: 35 },
      { title: 'Pesan Utama', page: 36 },
      { title: 'Glosarium', page: 37 },
      { title: 'Profil Penulis', page: 38 },
      { title: 'Penutup dan Sampai Jumpa!', page: 39 }
    ],
    assets: {
      background: '/pages/page-02/backgorund.png',
      light: '/pages/page-02/cahaya.png',
      cloudDark: '/pages/page-02/awan.png',
      cloudLight: '/pages/page-02/awan-02.png',
      mountain: '/pages/page-02/gunung.png',
      hills: '/pages/page-02/hamparan-gunung.png',
      flower: '/pages/page-03/bunga.png',
      butterfly: '/pages/page-03/kupu-kupu.png',
      noteFrame: '/pages/page-03/template-catatan.png',
      foliage: '/pages/page-02/daun-daun.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Dengarkan Narasi' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 4,
    pageNumber: 4,
    type: 'content-page-04',
    title: 'KENALI TOMBOL',
    buttons: [
      { id: 'btn-intro-audio', action: 'audio', icon: '/icons/audio.svg', label: 'AUDIO', desc: 'Dengarkan narasi suara' },
      { id: 'btn-intro-back', action: 'back', icon: '/icons/back.svg', label: 'KEMBALI', desc: 'Kembali ke halaman sebelumnya' },
      { id: 'btn-intro-next', action: 'next', icon: '/icons/next.svg', label: 'LANJUT', desc: 'Lanjut ke halaman berikutnya' },
      { id: 'btn-intro-kuis', action: 'kuis', icon: '/icons/kuis.svg', label: 'KUIS', desc: 'Buka kuis interaktif' },
      { id: 'btn-intro-home', action: 'home', icon: '/icons/home.svg', label: 'HOME', desc: 'Kembali ke halaman utama' },
      { id: 'btn-intro-games', action: 'games', icon: '/icons/game.svg', label: 'GAMES', desc: 'Buka permainan mini' }
    ],
    assets: {
      background: '/pages/page-04/backgorund.png',
      light: '/pages/page-02/cahaya.png',
      cloudDark: '/pages/page-04/awan.png',
      cloudLight: '/pages/page-04/awan-02.png',
      mountain: '/pages/page-04/gunung.png',
      hills: '/pages/page-04/hamparan-gunung.png',
      houseLeft: '/pages/page-04/rumah-honai.png',
      houseRight: '/pages/page-04/rumah-gadang.png',
      flowers: '/pages/page-04/rumput-bunga.png',
      cardFrame: '/pages/page-04/template-icons.png',
      crown: '/pages/page-04/ornamen-mahkota.png',
      foliage: '/pages/page-04/daun-daun.png'
    },
    controls: [
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 5,
    pageNumber: 5,
    type: 'content-page-05',
    title: 'PETUNJUK PENGGUNAAN',
    bodyParagraphs: [
      'Di buku ini ada 3 cerita. Bacalah setiap cerita sampai selesai dengan baik. Jangan terburu-buru, ya!',
      'Di setiap cerita akan muncul <span class="p5-keyword p5-keyword--misi">🎯 MISI</span> dan <span class="p5-keyword p5-keyword--kuis">❓ KUIS</span> secara otomatis. Kerjakan kuis setelah ceritanya selesai dibaca.',
      'Di akhir buku, kamu akan memainkan <span class="p5-keyword p5-keyword--games">🎮 GAMES</span>.'
    ],
    assets: {
      background: '/pages/page-01/backgorund.png',
      light: '/pages/page-02/cahaya.png',
      cloudDark: '/pages/page-01/awan.png',
      cloudLight: '/pages/page-01/awan-02.png',
      mountain: '/pages/page-01/gunung.png',
      hills: '/pages/page-01/hamparan-gunung.png',
      houseLeft: '/pages/page-05/rumah-adat.png',
      tree: '/pages/page-05/pohon.png',
      houseRight: '/pages/page-05/rumah-gadang.png',
      character: '/pages/page-05/karakter.png',
      flowers: '/pages/page-05/bunga.png',
      titleBanner: '/pages/page-05/template-sub-judul.png',
      noteCard: '/pages/page-05/template-catatan.png',
      foliage: '/pages/page-01/daun-daun.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Audio' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 6,
    pageNumber: 6,
    type: 'content-page-06',
    title: 'Yuk, Kita Mulai! Petualang Ceritanya!',
    characters: [
      { name: 'Naya', origin: '(Jawa Barat)' },
      { name: 'Rafi', origin: '(Sumatera Barat)' },
      { name: 'Sinta', origin: '(Jawa tengah)' },
      { name: 'Danu', origin: '(Papua)' }
    ],
    assets: {
      background: '/pages/page-06/background.png',
      light: '/pages/page-06/cahaya.png',
      sun: '/pages/page-06/awan-matahari.png',
      tree: '/pages/page-06/pohon.png',
      butterflies: '/pages/page-06/kupu-kupu.png',
      title: '/pages/page-06/judul.png',
      hills: '/pages/page-06/hamparan-gunung.png',
      houseGadang: '/pages/page-06/rumah-gadang.png',
      houseHonai: '/pages/page-06/honai.png',
      houseJulang: '/pages/page-06/julang-ngapak.png',
      houseJateng: '/pages/page-06/rumah-adat-jateng.png',
      angklung: '/pages/page-06/angklung.png',
      gamelan: '/pages/page-06/alat-musik.png',
      pond: '/pages/page-06/air.png',
      rocks: '/pages/page-06/batu.png',
      charNaya: '/pages/page-06/naya.png',
      charRafi: '/pages/page-06/rafi.png',
      charSinta: '/pages/page-06/sinta.png',
      charDanu: '/pages/page-06/danu.png',
      nameBadge: '/pages/page-06/template-nama.png',
      grass: '/pages/page-06/rumput-daun.png',
      flowers: '/pages/page-06/bunga.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Audio' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 7,
    pageNumber: 7,
    type: 'content-page-07',
    title: 'Cerita 1: Tiga Warna di Festival Sekolah',
    subtitle: 'Toleransi',
    characters: [
      { name: 'Rafi', origin: '(Sumatera Barat)' },
      { name: 'Naya', origin: '(Jawa Barat)' },
      { name: 'Danu', origin: '(Papua)' }
    ],
    assets: {
      background: '/pages/page-07/background.png',
      light: '/pages/page-07/cahaya.png',
      clouds: '/pages/page-07/awan-awan.png',
      birds: '/pages/page-07/burung-burung.png',
      tree: '/pages/page-07/pohon.png',
      houseGadang: '/pages/page-07/rumah-gadang.png',
      houseJulang: '/pages/page-07/julang-ngapak.png',
      school: '/pages/page-07/sekolah.png',
      swing: '/pages/page-07/ayunan-ranting.png',
      garden: '/pages/page-07/hamparan-taman.png',
      rocks: '/pages/page-07/batu.png',
      signpost: '/pages/page-07/papan.png',
      charRafi: '/pages/page-07/rafi.png',
      charNaya: '/pages/page-07/naya.png',
      charDanu: '/pages/page-07/danu.png',
      nameBadge: '/pages/page-07/template-nama.png',
      title: '/pages/page-07/judul.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Audio' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 8,
    pageNumber: 8,
    type: 'content-page-08',
    title: 'Cerita 1: Menuju Sekolah',
    bodyParagraphs: [
      'Hari ini sekolah Naya mengadakan Festival Budaya Indonesia. Setiap kelompok menampilkan budaya dari beberapa daerah.',
      'Naya memakai pakaian adat Sunda dan membawa gambar Rumah Julang Ngapak. Rafi memakai pakaian adat Minangkabau dan membawa gambar Rumah Gadang. Danu membawa gambar Rumah Honai dari Papua.',
      'Mereka bertiga satu kelompok. Awalnya mereka sangat bersemangat.'
    ],
    characters: [
      { name: 'Rafi', role: 'Siswa' },
      { name: 'Naya', role: 'Siswi' },
      { name: 'Danu', role: 'Siswa' }
    ],
    assets: {
      background: '/pages/page-08/background.png',
      light: '/pages/page-06/cahaya.png',
      clouds: '/pages/page-08/awan.png',
      school: '/pages/page-08/sekolah.png',
      tree: '/pages/page-08/pohon.png',
      road: '/pages/page-08/jalan.png',
      flowers: '/pages/page-08/bunga-dayb.png',
      charRafi: '/pages/page-08/rafi.png',
      charNaya: '/pages/page-08/naya.png',
      charDanu: '/pages/page-08/danu.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Audio' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  },
  {
    id: 9,
    pageNumber: 9,
    type: 'content-page-09',
    title: 'Cerita 1: Berbeda Keinginan',
    bodyParagraphs: [
      'Naya berkata, "Kita tampilkan budaya Jawa Barat saja, ya."',
      'Rafi menggeleng. "Aku juga ingin mengenalkan Rumah Gadang."',
      'Danu menambahkan, "Aku ingin kalian mengenal Rumah Honai." Tidak ada yang mau mengalah.'
    ],
    characters: [
      { name: 'Naya', role: 'Siswi' },
      { name: 'Rafi', role: 'Siswa' },
      { name: 'Danu', role: 'Siswa' }
    ],
    hasMission: true,
    missionId: 'misi-01',
    assets: {
      background: '/pages/page-09/background.png',
      foliageLeft: '/pages/page-09/daun.png',
      foliageRight: '/pages/page-09/daun.png',
      school: '/pages/page-09/sekolah.png',
      tree: '/pages/page-09/pohon.png',
      road: '/pages/page-09/jalan.png',
      traditionalHouse: '/pages/page-09/rumat-adat.png',
      mortarActivity: '/pages/page-09/orang-menumbuk.png',
      charNaya: '/pages/page-09/naya.png',
      charRafi: '/pages/page-09/rafi.png',
      charDanu: '/pages/page-09/danu.png'
    },
    controls: [
      { id: 'btn-audio', action: 'audio', icon: '/icons/audio.svg', label: 'Audio' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  }
];
