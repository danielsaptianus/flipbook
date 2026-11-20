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
      light: '/pages/page-01/cahaya.png',
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
      'Indonesia memiliki banyak budaya yang berbeda. Setiap daerah memiliki ciri khasnya sendiri, seperti pakaian adat, rumah adat, bahasa, makanan khas, kesenian, dan tradisi. Perbedaan tersebut membuat Indonesia menjadi negara yang kaya akan budaya. Melalui buku ini, kita akan mengikuti perjalanan beberapa anak yang belajar mengenal budaya dari daerah yang berbeda. Dari cerita mereka, kita akan belajar bagaimana menghargai perbedaan, bekerja sama, dan peduli terhadap budaya Indonesia.',
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
      { title: 'Cover', page: 1 },
      { title: 'Kata Pengantar', page: 2 },
      { title: 'Daftar Isi', page: 3 },
      { title: 'Kenali Tombol', page: 4 },
      { title: 'Yuk, Kita Mulai!', page: 5 },
      { title: 'CERITA 1 : Tiga Warna di Festival Sekolah', page: 7 },
      { title: 'Kuis Cerita 1', page: 12 },
      { title: 'Saatnya Lanjut! Yuk, lanjut ke cerita berikutnya', page: 16 },
      { title: 'CERITA 2 : Satu Panggung Banyak Budaya', page: 17 },
      { title: 'Kuis 2', page: 23 },
      { title: 'CERITA 3 : Warisan yang Harus Dijaga', page: 28 },
      { title: 'Kuis 3', page: 34 },
      { title: 'Refleksi Bersama', page: 44 }
    ],
    assets: {
      background: '/pages/page-03/backgorund.png',
      light: '/pages/page-01/cahaya.png',
      cloudDark: '/pages/page-03/awan.png',
      cloudLight: '/pages/page-03/awan-02.png',
      mountain: '/pages/page-03/gunung.png',
      hills: '/pages/page-03/hamparan-gunung.png',
      flower: '/pages/page-03/bunga.png',
      butterfly: '/pages/page-03/kupu-kupu.png',
      noteFrame: '/pages/page-03/template-catatan.png',
      foliage: '/pages/page-03/daun-daun.png'
    },
    controls: [
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' },
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' }
    ]
  }
];
