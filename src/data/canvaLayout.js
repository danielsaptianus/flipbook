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
    title: { x: 1.33, y: 1.09, w: 5.80, h: 1.47, rotate: 0, zIndex: 10 },

    // Pita Emas (Background Subjudul)
    ribbon: { x: 1.35, y: 2.25, w: 5.30, h: 1.46, rotate: 0, zIndex: 9 },

    // Teks Subjudul "Cerita Nilai untuk Literasi Sosial" (di atas pita emas)
    subtitle: { x: 2.91, y: 2.46, w: 2.60, h: 0.71, rotate: 0, zIndex: 10 },

    // Burung Cenderawasih Kiri & Kanan
    birdLeft:  { x: 0.43, y: 0.59, w: 1.29, h: 1.29, rotate: 0, zIndex: 5 },
    birdRight: { x: 6.28, y: 0.56, w: 1.29, h: 1.29, rotate: 0, flipH: true, zIndex: 5 },

    // Gunung di sebelah kanan (di depan bukit / z-index 6)
    mountain: { x: 4.80, y: 2.42, w: 3.50, h: 1.12, rotate: 0, zIndex: 6 },

    // Hamparan Bukit Hijau
    hills: { x: 0.00, y: 2.76, w: 8.00, h: 2.83, rotate: 0, zIndex: 5 },

    // Pohon Besar Kiri
    tree: { x: -0.15, y: 3.82, w: 2.00, h: 2.10, rotate: 0, zIndex: 8 },

    // Rumah Adat Nusantara (di atas bukit)
    joglo:  { x: 1.73, y: 4.05, w: 0.94, h: 0.82, rotate: 0, zIndex: 7 }, // Jawa Tengah
    honai:  { x: 2.38, y: 3.72, w: 1.40, h: 1.14, rotate: 0, zIndex: 7 }, // Papua
    julang: { x: 5.20, y: 3.82, w: 1.36, h: 0.70, rotate: 0, zIndex: 7 }, // Jawa Barat
    gadang: { x: 6.52, y: 3.49, w: 1.32, h: 0.80, rotate: 0, zIndex: 7 }, // Sumatra

    // 4 Karakter Anak Nusantara
    charSinta: { x: 1.60, y: 4.64, w: 1.50, h: 2.64, rotate: 0, zIndex: 12 },
    charNaya:  { x: 2.86, y: 4.69, w: 1.40, h: 2.56, rotate: 0, zIndex: 12 },
    charDanu:  { x: 3.96, y: 4.59, w: 1.46, h: 2.64, rotate: 0, zIndex: 12 },
    charRafi:  { x: 5.14, y: 4.64, w: 1.46, h: 2.64, rotate: 0, zIndex: 12 },

    // Dedaunan & Semak Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 18 },

    // Bunga Rafflesia Kiri Bawah (Di depan semak / z-index 19)
    flower: { x: 0.12, y: 5.48, w: 1.40, h: 0.85, rotate: 0, zIndex: 19 },
  },

  // ==========================================================
  // HALAMAN 2 (KATA PENGANTAR)
  // ==========================================================
  page02: {
    // Template Bingkai Catatan (Persis dari panel Canva Anda: Lebar: 5.57, Tinggi: 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Gunung Kanan Latar
    mountain: { x: 4.44, y: 2.49, w: 5.60, h: 1.74, rotate: 0, zIndex: 4 },

    // Hamparan Bukit
    hills: { x: 0.00, y: 2.76, w: 8.00, h: 2.83, rotate: 0, zIndex: 6 },

    // Rumah Adat Kiri (terselip di belakang pohon)
    houseLeft: { x: 0.64, y: 4.52, w: 1.08, h: 0.55, rotate: 0, zIndex: 7 },

    // Pohon Besar Kiri
    tree: { x: -0.32, y: 3.52, w: 2.00, h: 2.09, rotate: 0, zIndex: 8 },

    // Rumah Gadang Kanan
    houseRight: { x: 6.60, y: 3.48, w: 1.36, h: 0.80, rotate: 0, zIndex: 7 },

    // Batu & Bunga Kanan Bawah
    rocks: { x: 6.52, y: 4.92, w: 1.48, h: 0.93, rotate: 0, zIndex: 8 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 18 },
  },

  // ==========================================================
  // HALAMAN 3 (DAFTAR ISI)
  // ==========================================================
  page03: {
    // Template Bingkai Catatan (5.57 x 7.05, X: 1.31, Y: 0.52)
    noteFrame: { x: 1.31, y: 0.52, w: 5.57, h: 7.05, rotate: 0, zIndex: 10 },

    // Kupu-kupu Biru di pojok bingkai
    butterfly: { x: 6.30, y: 0.27, w: 1.12, h: 1.12, rotate: 0, zIndex: 15 },

    // Buket Bunga Kiri & Kanan
    flowerLeft:  { x: -0.20, y: 4.16, w: 1.80, h: 2.56, rotate: 0, zIndex: 11 },
    flowerRight: { x: 6.40, y: 4.16, w: 1.80, h: 2.56, rotate: 0, flipH: true, zIndex: 11 },

    // Gunung Kanan Latar
    mountain: { x: 4.44, y: 2.49, w: 5.60, h: 1.74, rotate: 0, zIndex: 4 },

    // Hamparan Bukit
    hills: { x: 0.00, y: 2.76, w: 8.00, h: 2.83, rotate: 0, zIndex: 6 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 18 },
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
