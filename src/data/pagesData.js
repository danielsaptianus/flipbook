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
        { id: 'joglo', src: '/pages/page-01/rumah-adat-jawa-barat.png', alt: 'Rumah Adat Joglo' },
        { id: 'honai', src: '/pages/page-01/rumah-adat-papua.png', alt: 'Rumah Adat Honai' },
        { id: 'julang', src: '/pages/page-01/rumah-adat-jawa-tengah.png', alt: 'Rumah Adat Julang Ngapak' },
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
      { id: 'btn-back', action: 'back', icon: '/icons/back.svg', label: 'Halaman Sebelumnya' },
      { id: 'btn-next', action: 'next', icon: '/icons/next.svg', label: 'Halaman Berikutnya' },
      { id: 'btn-kuis', action: 'kuis', icon: '/icons/kuis.svg', label: 'Kuis Interaktif' },
      { id: 'btn-home', action: 'home', icon: '/icons/home.svg', label: 'Beranda' }
    ]
  }
];
