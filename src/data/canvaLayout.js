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
 * Contoh:
 * Dari screenshot Canva Anda:
 * Lebar: 5.57 inci, Tinggi: 7.05 inci, X: 1.31 inci, Y: 0.52 inci, Putar: 0°
 * Ditulis di sini sebagai:
 * noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0 }
 *
 * Simpan file ini (Ctrl + S), website akan langsung otomatis terupdate!
 */

export const canvaCanvasConfig = {
  // Ukuran kanvas keseluruhan di Canva (default: inci)
  // Catatan: Jika di Canva Anda menggunakan px (misal 2000 x 2000) atau cm (misal 20 x 20),
  // Anda cukup sesuaikan angka width dan height di bawah ini!
  width: 8.19,  // Total lebar kanvas Canva (inci)
  height: 8.19, // Total tinggi kanvas Canva (inci)
};

export const canvaLayouts = {
  // ==========================================================
  // HALAMAN 1 (COVER)
  // ==========================================================
  page01: {
    // Judul Utama "BERAGAM BUDAYA INDONESIA"
    title: { x: 0.85, y: 1.28, w: 6.49, h: 2.00, rotate: 0, zIndex: 10 },

    // Pita Emas Subjudul "Cerita Nilai untuk Literasi Sosial"
    ribbon: { x: 1.48, y: 2.76, w: 5.23, h: 1.44, rotate: 0, zIndex: 10 },

    // Burung Cenderawasih Kiri & Kanan
    birdLeft:  { x: 0.43, y: 0.59, w: 1.29, h: 1.29, rotate: 0, zIndex: 5 },
    birdRight: { x: 6.47, y: 0.56, w: 1.29, h: 1.29, rotate: 0, flipH: true, zIndex: 5 },

    // Gunung di sebelah kanan (di depan bukit / z-index 6)
    mountain: { x: 4.91, y: 2.42, w: 3.60, h: 1.12, rotate: 0, zIndex: 6 },

    // Hamparan Bukit Hijau
    hills: { x: 0.00, y: 2.83, w: 8.19, h: 2.90, rotate: 0, zIndex: 5 },

    // Pohon Besar Kiri
    tree: { x: -0.15, y: 3.91, w: 2.03, h: 2.13, rotate: 0, zIndex: 8 },

    // Rumah Adat Nusantara (di atas bukit)
    joglo:  { x: 1.77, y: 4.14, w: 0.94, h: 0.82, rotate: 0, zIndex: 7 }, // Jawa Tengah
    honai:  { x: 2.43, y: 3.81, w: 1.43, h: 1.14, rotate: 0, zIndex: 7 }, // Papua
    julang: { x: 5.32, y: 3.91, w: 1.39, h: 0.70, rotate: 0, zIndex: 7 }, // Jawa Barat
    gadang: { x: 6.67, y: 3.57, w: 1.35, h: 0.80, rotate: 0, zIndex: 7 }, // Sumatra

    // 4 Karakter Anak Nusantara
    charSinta: { x: 1.64, y: 4.75, w: 1.54, h: 2.70, rotate: 0, zIndex: 12 },
    charNaya:  { x: 2.93, y: 4.80, w: 1.43, h: 2.62, rotate: 0, zIndex: 12 },
    charDanu:  { x: 4.05, y: 4.70, w: 1.49, h: 2.70, rotate: 0, zIndex: 12 },
    charRafi:  { x: 5.26, y: 4.75, w: 1.49, h: 2.70, rotate: 0, zIndex: 12 },

    // Dedaunan & Semak Depan Bawah
    foliage: { x: 0.00, y: 5.10, w: 8.19, h: 3.09, rotate: 0, zIndex: 18 },

    // Bunga Rafflesia Kiri Bawah (Di depan semak / z-index 19)
    flower: { x: 0.12, y: 5.61, w: 1.43, h: 0.85, rotate: 0, zIndex: 19 },
  },

  // ==========================================================
  // HALAMAN 2 (KATA PENGANTAR)
  // ==========================================================
  page02: {
    // Template Bingkai Catatan (Persis dari panel Canva Anda: Lebar: 5.57, Tinggi: 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Gunung Kanan Latar
    mountain: { x: 4.55, y: 2.55, w: 5.73, h: 1.78, rotate: 0, zIndex: 4 },

    // Hamparan Bukit
    hills: { x: 0.00, y: 2.83, w: 8.19, h: 2.90, rotate: 0, zIndex: 6 },

    // Rumah Adat Kiri (terselip di belakang pohon)
    houseLeft: { x: 0.66, y: 4.63, w: 1.11, h: 0.56, rotate: 0, zIndex: 7 },

    // Pohon Besar Kiri
    tree: { x: -0.33, y: 3.60, w: 2.05, h: 2.14, rotate: 0, zIndex: 8 },

    // Rumah Gadang Kanan
    houseRight: { x: 6.76, y: 3.56, w: 1.39, h: 0.82, rotate: 0, zIndex: 7 },

    // Batu & Bunga Kanan Bawah
    rocks: { x: 6.67, y: 5.04, w: 1.52, h: 0.95, rotate: 0, zIndex: 8 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 5.10, w: 8.19, h: 3.09, rotate: 0, zIndex: 18 },
  },

  // ==========================================================
  // HALAMAN 3 (DAFTAR ISI)
  // ==========================================================
  page03: {
    // Template Bingkai Catatan (5.57 x 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Kupu-kupu Biru di pojok bingkai
    butterfly: { x: 6.45, y: 0.28, w: 1.15, h: 1.15, rotate: 0, zIndex: 15 },

    // Buket Bunga Kiri & Kanan
    flowerLeft:  { x: -0.20, y: 4.26, w: 1.84, h: 2.62, rotate: 0, zIndex: 11 },
    flowerRight: { x: 6.55, y: 4.26, w: 1.84, h: 2.62, rotate: 0, flipH: true, zIndex: 11 },

    // Gunung Kanan Latar
    mountain: { x: 4.55, y: 2.55, w: 5.73, h: 1.78, rotate: 0, zIndex: 4 },

    // Hamparan Bukit
    hills: { x: 0.00, y: 2.83, w: 8.19, h: 2.90, rotate: 0, zIndex: 6 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 5.10, w: 8.19, h: 3.09, rotate: 0, zIndex: 18 },
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
  const height = item.h !== undefined && item.h !== null ? (item.h / ch) * 100 : null;
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
