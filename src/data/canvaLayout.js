/**
 * ============================================================
 * SISTEM TATA LETAK KOORDINAT CANVA (CANVA POSITIONING SYSTEM)
 * ============================================================
 * Anda bisa mengatur posisi, ukuran, dan rotasi setiap elemen
 * secara LANGSUNG menggunakan angka dari panel posisi di Canva!
 *
 * Di panel Canva:
 * - Lebar  -> w
 * - Tinggi -> h
 * - X      -> x
 * - Y      -> y
 * - Putar  -> rotate (dalam derajat, contoh: 0, 5, -10)
 * - Balik Horizontal -> flipH: true / false
 * - Urutan Lapisan   -> zIndex (angka lebih besar = lebih di depan)
 *
 * Simpan file ini (Ctrl + S), website akan langsung otomatis terupdate!
 */

export const canvaCanvasConfig = {
  // Ukuran kanvas keseluruhan di Canva (8 x 8 inci)
  width: 8.0,  // Total lebar kanvas Canva (inci)
  height: 8.0, // Total tinggi kanvas Canva (inci)
};

export const canvaLayouts = {
  // ==========================================================
  // HALAMAN 1 (COVER)
  // ==========================================================
  page01: {
    // Judul Utama "BERAGAM BUDAYA INDONESIA"
    title: { x: 1.18, y: 1.09, w: 5.87, h: 1.47, rotate: 2, zIndex: 10 },

    // Pita Emas (Background Subjudul)
    ribbon: { x: 2.07, y: 2.44, w: 4.11, h: 1.13, rotate: 0, zIndex: 9 },

    // Teks Subjudul "Cerita Nilai untuk Literasi Sosial" (di atas pita emas)
    subtitle: { x: 2.91, y: 2.48, w: 2.60, h: 0.65, rotate: 0, zIndex: 10 },

    // Burung Cenderawasih Kiri & Kanan
    birdLeft:  { x: 0.43, y: 0.6, w: 1.21, h: 1.71, rotate: 0, zIndex: 5 },
    birdRight: { x: 6.38, y: 0.55, w: 1.24, h: 1.76, rotate: 0, flipH: true, zIndex: 5 },

    // Gunung di sebelah kanan (di depan bukit / z-index 6)
    mountain: { x: 4.19, y: 2.44, w: 6.07, h: 1.88, rotate: 0, zIndex: 5 },

    // Hamparan Bukit Hijau
    hills: { x: -1.62, y: 3.86, w: 13.9, h: 4.92, rotate: 0, zIndex: 6 },

    // Pohon Besar Kiri
    tree: { x: -0.33, y: 3.41, w: 2.2, h: 2.31, rotate: 0, zIndex: 8 },

    // Rumah Adat Nusantara (di atas bukit)
    joglo:  { x: 5.28, y: 3.27, w: 1.38, h: 1.2, rotate: 0, zIndex: 10 }, // Jawa Tengah
    honai:  { x: 2.38, y: 3.72, w: 1.43, h: 1.13, rotate: 0, zIndex: 5 }, // Papua
    julang: { x: 0.77, y: 3.88, w: 2.54, h: 1.27, rotate: 0, zIndex: 7 }, // Jawa Barat
    gadang: { x: 6.49, y: 3.24, w: 2.1, h: 1.23, rotate: 0, zIndex: 7 }, // Sumatra

    // 4 Karakter Anak Nusantara
    charSinta: { x: 0.95, y: 4.76, w: 1.87, h: 3.9, rotate: 0, zIndex: 20 },
    charNaya:  { x: 2.19, y: 4.33, w: 2.14, h: 4.24, rotate: 0, zIndex: 20 },
    charDanu:  { x: 3.52, y: 4.24, w: 2.06, h: 4.16, rotate: 0, zIndex: 20 },
    charRafi:  { x: 5.17, y: 4.41, w: 2.06, h: 4.25, rotate: 0, zIndex: 19 },

    // Dedaunan & Semak Depan Bawah
    foliage: { x: -1.10, y: 5., w: 10.25, h: 4.70, rotate: 0, zIndex: 18 },

    // Bunga Rafflesia Kiri Bawah (Di depan semak / z-index 19)
    flower: { x: 0.12, y: 5.44, w: 2.04, h: 1.2, rotate: 0, zIndex: 19 },
  },

  // ==========================================================
  // HALAMAN 2 (KATA PENGANTAR)
  // ==========================================================
  page02: {
    // Template Bingkai Catatan (Persis dari panel Canva Anda: Lebar: 5.57, Tinggi: 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Gunung Kanan Latar
    mountain: { x: 4.19, y: 2.44, w: 6.07, h: 1.88, rotate: 0, zIndex: 7 },

    // Hamparan Bukit
    hills: { x: -1.62, y: 3.86, w: 13.9, h: 4.92, rotate: 0, zIndex: 6 },

    // Rumah Adat Kiri (terselip di belakang pohon)
    houseLeft: { x: 0.64, y: 4.52, w: 1.08, h: 0.55, rotate: 0, zIndex: 7 },

    // Pohon Besar Kiri
    tree: { x: -0.32, y: 3.47, w: 2.15, h: 2.25, rotate: 0, zIndex: 11 },

    // Rumah Gadang Kanan
    houseRight: { x: 6, y: 3.38, w: 2.1, h: 1.23, rotate: 0, zIndex: 7 },

    // Batu & Bunga Kanan Bawah
    rocks: { x: 6.69, y: 4.68, w: 1.47, h: 1.5, rotate: 0, zIndex: 19 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 9 },
  },

  // ==========================================================
  // HALAMAN 3 (DAFTAR ISI)
  // ==========================================================
  page03: {
    // Template Bingkai Catatan (5.57 x 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Kupu-kupu Biru di pojok bingkai
    butterfly: { x: 6.74, y: 0.5, w: 1.12, h: 1.12, rotate: 0, zIndex: 15 },

    // Buket Bunga Kiri & Kanan
    flowerLeft:  { x: -0.20, y: 4.16, w: 1.76, h: 1.73, rotate: 0, zIndex: 19 },
    flowerRight: { x: 6.40, y: 4.16, w: 1.76, h: 1.73, rotate: 0, flipH: true, zIndex: 19 },

    // Gunung Kanan Latar
    mountain: { x: 4.57, y: 2.67, w: 4.58, h: 1.33, rotate: 0, zIndex: 7 },

    // Hamparan Bukit
    hills: { x: -1.05, y: 3.5, w: 12.83, h: 5.32, rotate: 0, zIndex: 6 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 9 },
  },

  // ==========================================================
  // HALAMAN 4 (KENALI TOMBOL)
  // ==========================================================
  page04: {
    // Template Bingkai Tombol (Card)
    cardFrame: { x: 1.62, y: 0.50, w: 4.76, h: 7.10, rotate: 0, zIndex: 10 },

    // Mahkota Ornamen Bali di atas kartu
    crown: { x: 2.95, y: 0.10, w: 2.10, h: 1.24, rotate: 0, zIndex: 12 },

    // Gunung Kanan Latar
    mountain: { x: 4.55, y: 2.45, w: 5.73, h: 1.78, rotate: 0, zIndex: 4 },

    // Hamparan Bukit (Diperlebar & diperpanjang agar menutup celah biru langit)
    hills: { x: -1.05, y: 3.20, w: 12.83, h: 5.32, rotate: 0, zIndex: 5 },

    // Rumah Honai Kiri
    houseLeft: { x: 0.15, y: 3.65, w: 1.24, h: 0.90, rotate: 0, zIndex: 6 },

    // Rumah Gadang Kanan
    houseRight: { x: 6.36, y: 3.38, w: 1.64, h: 0.94, rotate: 0, zIndex: 6 },

    // Rumput Bunga Kiri & Kanan
    flowersLeft:  { x: 0.00, y: 4.88, w: 1.60, h: 0.75, rotate: 0, zIndex: 7 },
    flowersRight: { x: 6.40, y: 4.88, w: 1.60, h: 0.75, rotate: 0, flipH: true, zIndex: 7 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 9 },
  }
};

/**
 * Helper untuk mengonversi data Canva { x, y, w, h, rotate, flipH, zIndex } ke inline CSS style
 */
export function getCanvaStyle(pageKey, layerKey, extraStyle = '') {
  const item = canvaLayouts[pageKey]?.[layerKey];
  if (!item) return extraStyle;

  const { width: cw, height: ch } = canvaCanvasConfig;
  const left = (item.x / cw) * 100;
  const top = (item.y / ch) * 100;
  const width = (item.w / cw) * 100;
  const height = (item.h !== undefined && item.h !== null && item.h !== 'auto')
    ? (item.h / ch) * 100
    : null;
  const rot = item.rotate || 0;

  let s = `left: ${left.toFixed(2)}%; top: ${top.toFixed(2)}%; width: ${width.toFixed(2)}%;`;
  if (height !== null) {
    s += ` height: ${height.toFixed(2)}%;`;
  }

  const transforms = [];
  if (item.flipH) {
    transforms.push('scaleX(-1)');
  }
  if (rot !== 0) {
    transforms.push(`rotate(${rot}deg)`);
  }
  if (transforms.length > 0) {
    s += ` transform: ${transforms.join(' ')};`;
  }

  if (item.zIndex !== undefined && item.zIndex !== null) {
    s += ` z-index: ${item.zIndex};`;
  }

  return extraStyle ? `${s} ${extraStyle}` : s;
}
