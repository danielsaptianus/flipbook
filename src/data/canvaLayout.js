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
    cardFrame: { x: 1.62, y: 0.61, w: 4.76, h: 7.12, rotate: 0, zIndex: 10 },

    // Mahkota Ornamen Bali di atas kartu
    crown: { x: 3.22, y: 0.06, w: 1.51, h: 0.92, rotate: 0, zIndex: 12 },

    // Gunung Kanan Latar
    mountain: { x: 4.55, y: 2.45, w: 5.73, h: 1.78, rotate: 0, zIndex: 6 },

    // Hamparan Bukit (Diperlebar & diperpanjang agar menutup celah biru langit)
    hills: { x: -1.05, y: 3.20, w: 12.83, h: 5.32, rotate: 0, zIndex: 5 },

    // Rumah Honai Kiri
    houseLeft: { x: 0.15, y: 3.65, w: 1.24, h: 0.90, rotate: 0, zIndex: 6 },

    // Rumah Gadang Kanan
    houseRight: { x: 5.57, y: 2.4, w: 3.26, h: 1.87, rotate: 0, zIndex: 6 },

    // Rumput Bunga Kiri & Kanan
    flowersLeft:  { x: 0.00, y: 4.88, w: 2.44, h: 0.75, rotate: 0, zIndex: 8 },
    flowersRight: { x: 6.40, y: 4.82, w: 2.44, h: 0.75, rotate: 0, flipH: true, zIndex: 8 },

    // Dedaunan Depan Bawah
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 9 },
  },

  // ==========================================================
  // HALAMAN 5 (PETUNJUK PENGGUNAAN)
  // ==========================================================
  page05: {
    // Template Banner Judul "PETUNJUK PENGGUNAAN" (Atas)
    titleBanner: { x: 1.55, y: 0.90, w: 4.90, h: 0.91, rotate: 0, zIndex: 15 },

    // Template Bingkai Catatan Kuning dengan Toa / Megaphone
    noteCard: { x: 1.62, y: 2.14, w: 4.77, h: 5.11, rotate: 0, zIndex: 10 },

    // Rumah Adat Kiri (Julang Ngapak)
    houseLeft: { x: 0.20, y: 2.48, w: 2.25, h: 2.00, rotate: 0, zIndex: 6 },

    // Pohon Besar Kiri
    tree: { x: -0.40, y: 2.20, w: 2.24, h: 2.80, rotate: 0, zIndex: 7 },

    // Rumah Joglo Kanan
    houseRight: { x: 5.92, y: 2.73, w: 2.35, h: 1.26, rotate: 0, zIndex: 6 },

    // Karakter Anak Perempuan Kanan
    character: { x: 7.47, y: 2.74, w: 0.50, h: 1.50, rotate: 0, zIndex: 7 },

    // Gunung Kanan Latar (Sama persis seperti halaman sebelumnya)
    mountain: { x: 4.55, y: 2.45, w: 5.73, h: 1.78, rotate: 0, zIndex: 4 },

    // Hamparan Bukit (Sama persis seperti halaman sebelumnya)
    hills: { x: -1.05, y: 3.20, w: 12.83, h: 5.32, rotate: 0, zIndex: 5 },

    // Rumput Bunga Kiri & Kanan (Sama persis seperti halaman sebelumnya)
    flowersLeft:  { x: 0.00, y: 4.81, w: 1.60, h: 0.75, rotate: 13, zIndex: 8 },
    flowersRight: { x: 6.40, y: 4.89, w: 1.60, h: 0.75, rotate: 13, flipH: true, zIndex: 8 },

    // Dedaunan Depan Bawah (Sama persis seperti halaman sebelumnya)
    foliage: { x: 0.00, y: 4.98, w: 8.00, h: 3.02, rotate: 0, zIndex: 9 },
  },

  // ==========================================================
  // HALAMAN 6 (YUK, KITA MULAI! PETUALANG CERITANYA!)
  // ==========================================================
  page06: {
    // Judul Utama "Yuk, Kita Mulai! Petualang Ceritanya!"
    title: { x: 1.05, y: 0.80, w: 5.80, h: 1.60, rotate: 0, zIndex: 12 },

    // Dahan Pohon Rindang Kiri Atas
    tree: { x: -0.15, y: -0.10, w: 3.75, h: 2.81, rotate: 0, zIndex: 10 },

    // Matahari & Awan Kanan Atas
    sun: { x: 6.45, y: 0.15, w: 1.40, h: 0.98, rotate: 0, zIndex: 5 },

    // Kawanan Kupu-kupu Biru
    butterflies: { x: 1.00, y: 0.65, w: 2.70, h: 2.15, rotate: 0, zIndex: 11 },

    // Hamparan Perbukitan Hijau (Diperlebar & diperpanjang ke bawah agar menutup celah biru langit)
    hills: { x: -0.50, y: 2.45, w: 9.00, h: 5.65, rotate: 0, zIndex: 4 },

    // Rumah Adat di Atas Bukit (Kiri ke Kanan)
    houseGadang: { x: 0.00, y: 3.50, w: 2.10, h: 1.24, rotate: 0, zIndex: 5 },
    houseHonai:  { x: 2.30, y: 3.65, w: 1.30, h: 1.03, rotate: 0, zIndex: 5 },
    houseJulang: { x: 4.90, y: 2.75, w: 1.55, h: 1.35, rotate: 0, zIndex: 5 },
    houseJateng: { x: 6.30, y: 2.80, w: 2.15, h: 1.08, rotate: 0, zIndex: 5 },

    // Kolam Air & Batu Kiri
    pond:  { x: 0.85, y: 5.30, w: 2.20, h: 0.55, rotate: 0, zIndex: 6 },
    rocks: { x: 0.88, y: 4.88, w: 0.70, h: 0.59, rotate: 0, zIndex: 6 },

    // Alat Musik Tradisional Kanan (Angklung & Kolintang)
    angklung: { x: 6.85, y: 4.15, w: 0.95, h: 1.05, rotate: 0, zIndex: 6 },
    gamelan:  { x: 5.75, y: 4.70, w: 1.65, h: 0.47, rotate: 0, zIndex: 6 },

    // 4 Karakter Sahabat Nusantara
    charNaya:  { x: 0.85, y: 3.50, w: 1.80, h: 3.55, rotate: 0, zIndex: 15 },
    charRafi:  { x: 2.40, y: 3.40, w: 1.80, h: 3.60, rotate: 0, zIndex: 15 },
    charSinta: { x: 4.10, y: 3.60, w: 1.80, h: 3.65, rotate: 0, zIndex: 15 },
    charDanu:  { x: 5.70, y: 3.40, w: 1.5, h: 3.50, rotate: 0, zIndex: 15 },

    // Kartu Nama 4 Karakter
    nameNaya:  { x: 0.78, y: 6.54, w: 1.50, h: 0.68, rotate: 0, zIndex: 18 },
    nameRafi:  { x: 2.45, y: 6.54, w: 1.50, h: 0.68, rotate: 0, zIndex: 18 },
    nameSinta: { x: 4.12, y: 6.54, w: 1.50, h: 0.68, rotate: 0, zIndex: 18 },
    nameDanu:  { x: 5.75, y: 6.54, w: 1.50, h: 0.68, rotate: 0, zIndex: 18 },

    // Rumput & Dedaunan Depan Bawah
    grass:   { x: -0.10, y: 4.90, w: 9.00, h: 3.10, rotate: 0, zIndex: 14 },
    flowers: { x: 0, y: 6.7, w: 8.00, h: 1.65, rotate: 0, zIndex: 17 },
  },

  // ==========================================================
  // HALAMAN 7 (CERITA 1: TIGA WARNA DI FESTIVAL SEKOLAH - TOLERANSI)
  // Spesifikasi Tipografi Canva:
  // - Font: Archivo Black
  // - Efek lengkungan: Lengkungan 33
  // - Cerita 1: ukuran 32
  // - Tiga Warna di Festival Sekolah: ukuran 34
  // - Toleransi: ukuran 18,5
  // ==========================================================
  page07: {
    // Judul Utama (Cerita 1: Tiga Warna di Festival Sekolah - Toleransi)
    title: { x: 1.34, y: 0.13, w: 5.70, h: 2.99, rotate: 0, zIndex: 16 },

    // Awan-awan Atas
    cloudsLeft: { x: -0.20, y: 0.20, w: 5.00, h: 1.90, rotate: 0, zIndex: 3 },
    cloudsRight: { x: 3.20, y: 0.20, w: 5.00, h: 1.90, rotate: 0, flipH: true, zIndex: 3 },

    // Burung-burung Terbang Kiri
    birds: { x: 0.53, y: 0.89, w: 1.71, h: 1.49, rotate: 0, zIndex: 4 },

    // Rumah Gadang Kiri (Latar Belakang Pohon)
    houseGadang: { x: -0.36, y: 3.38, w: 2.80, h: 1.68, rotate: 0, zIndex: 8 },

    // Pohon Besar Rindang Kiri
    tree: { x: -0.18, y: 2.83, w: 3.77, h: 3.22, rotate: 0, zIndex: 8 },

    // Rumah Julang Ngapak (Tengah Kiri)
    houseJulang: { x: 2.30, y: 4.07, w: 1.53, h: 1.33, rotate: 0, zIndex: 8 },

    // Gedung Sekolah Kanan
    school: { x: 3.82, y: 3.80, w: 4.29, h: 1.71, rotate: 0, zIndex: 8 },

    // Dahan Pohon & Ayunan Gantung Kanan
    swing: { x: 5.96, y: 2.90, w: 2.04, h: 2.73, rotate: 0, zIndex: 9 },

    // Hamparan Rumput Taman
    garden: { x: -0.66, y: 3.10, w: 8.66, h: 3.38, rotate: 0, zIndex: 7 },

    // Bebatuan Kiri Bawah
    rocks: { x: -0.19, y: 5.22, w: 1.02, h: 1.04, rotate: 0, zIndex: 10 },

    // Papan Kayu Kiri (Di samping bebatuan)
    signpost: { x: 1.39, y: 5.46, w: 1.09, h: 1.40, rotate: 0, zIndex: 10 },

    // 3 Karakter Anak Nusantara (Ukuran dan posisi persis Canva)
    charRafi: { x: 1.45, y: 4.25, w: 1.60, h: 3.50, rotate: 0, zIndex: 15 },
    charNaya: { x: 2.95, y: 4.30, w: 2.10, h: 3.70, rotate: 0, zIndex: 15 },
    charDanu: { x: 4.95, y: 3.50, w: 1.55, h: 4.40, rotate: 0, zIndex: 15 },

    // 3 Kartu Nama Karakter (Persis di bawah masing-masing karakter)
    nameRafi: { x: 1.50, y: 6.45, w: 1.50, h: 0.58, rotate: 0, zIndex: 18 },
    nameNaya: { x: 3.20, y: 6.45, w: 1.50, h: 0.58, rotate: 0, zIndex: 18 },
    nameDanu: { x: 4.90, y: 6.45, w: 1.50, h: 0.58, rotate: 0, zIndex: 18 },
  },

  // ==========================================================
  // HALAMAN 8 (CERITA 1: MENJELANG FESTIVAL DI SEKOLAH)
  // ==========================================================
  page08: {
    // Teks Narasi Cerita (Font: League Spartan, uk 15, letter-spacing -15)
    storyBox: { x: 0.76, y: 1.23, w: 6.38, h: 2.77, rotate: 0, zIndex: 15 },

    // Awan Cerah Kiri & Kanan Atas
    cloudsRight: { x: 0, y: 1.57, w: 4.02, h: 2.33, rotate: 0, zIndex: 3 },
    cloudsLeft: { x: 3.77, y: 0.13, w: 4.29, h: 2.49, rotate: 0, flipH: true, zIndex: 3 },

    // Gedung Sekolah Dasar di Cakrawala
    school: { x: 0, y: 4.30, w: 5.34, h: 2.13, rotate: 0, zIndex: 8 },

    // Pohon Rindang Kanan
    tree: { x: -0.65, y: 4.18, w: 2.89, h: 2.59, rotate: 0, zIndex: 13 },

    // Jalan & Hamparan Rumput
    road: { x: -0.00, y: 5.28, w: 8., h: 3.84, rotate: 0, zIndex: 7 },

    // Semak & Bunga Kiri & Kanan Depan
    flowersLeft: { x: -0.07, y: 5.35, w: 3, h: 0.91, rotate: 0, zIndex: 12 },
    flowersRight: { x: 5.00, y: 5.36, w: 3, h: 0.91, rotate: 0, flipH: true, zIndex: 12 },

    // 3 Karakter Anak Berjalan Mengenakan Seragam Sekolah (Merah-Putih)
    charRafi: { x: 3.41, y: 5.28, w: 1.12, h: 2.72, rotate: 0, zIndex: 10 },
    charNaya: { x: 1.96, y: 5.18, w: 1.33, h: 2.94, rotate: 0, zIndex: 10 },
    charDanu: { x: 4.54, y: 4.67, w: 1.38, h: 3.48, rotate: 0, zIndex: 10 },
  },

  // ==========================================================
  // HALAMAN 9 (CERITA 1: BERBEDA KEINGINAN)
  // ==========================================================
  page09: {
    // Teks Narasi Cerita (Font: League Spartan, uk 18.4, letter-spacing -15)
    storyBox: { x: 0.73, y: 1.34, w: 6.55, h: 'auto', rotate: 0, zIndex: 15 },

    // Dedaunan Hias Atas Kiri & Kanan
    foliageLeft: { x: -0.28, y: -0.09, w: 2.88, h: 2.40, rotate: 0, zIndex: 14 },
    foliageRight: { x: 5.13, y: -0.03, w: 2.97, h: 2.48, rotate: 0, flipH: true, zIndex: 14 },

    // Gedung Sekolah di Belakang
    school: { x: -1.24, y: 4.36, w: 5.34, h: 2.13, rotate: 0, zIndex: 6 },

    // Pohon Rindang Kiri dengan Ayunan
    tree: { x: -0.86, y: 4.24, w: 2.70, h: 2.41, rotate: 0, zIndex: 7 },

    // Rumah Adat Kanan Belakang
    traditionalHouse: { x: 6.00, y: 3.84, w: 2.76, h: 2.28, rotate: 0, zIndex: 6 },

    // Orang Menumbuk di Depan Rumah Adat
    mortarActivity: { x: 6.67, y: 4.98, w: 1.43, h: 1.92, rotate: 0, zIndex: 7 },

    // Jalan Setapak Melengkung & Rumput
    road: { x: 0.00, y: 5.28, w: 8.00, h: 3.84, rotate: 0, zIndex: 5 },

    // 3 Karakter Anak (Naya Memohon, Rafi Bingung, Danu Berargumen)
    charNaya: { x: 0.42, y: 5.59, w: 1.11, h: 3.03, rotate: 0, zIndex: 10 },
    charRafi: { x: 1.56, y: 5.45, w: 1.56, h: 3.30, rotate: 0, zIndex: 10 },
    charDanu: { x: 2.64, y: 5.30, w: 1.73, h: 2.72, rotate: 0, zIndex: 10 },
  },

  // ==========================================================
  // MISI 01 / HALAMAN 10 (MISI 1: PEMECAHAN MASALAH)
  // ==========================================================
  mission01: {
    // Badge Judul MISI
    misi: { x: 3.02, y: 0.41, w: 2.18, h: 0.77, rotate: 0, zIndex: 15 },

    // Lampu Ide & Pengantar Masalah
    lampu: { x: 1.23, y: 1.10, w: 5.45, h: 1.1, rotate: 0, zIndex: 14 },

    // Dedaunan Hias Kanan Atas & Kiri
    foliageTopRight: { x: 5.65, y: -0, w: 2.46, h: 2.05, rotate: 0, zIndex: 12 },
    foliageTopLeft: { x: 0, y: 0, w: 2.46, h: 2.05, rotate: 0, flipH: true, zIndex: 12 },

    // Kartu Pertanyaan Kuning
    questionCard: { x: 2.07, y: 2.36, w: 4.07, h: 1.65, rotate: 0, zIndex: 13 },

    // Kartu Pilihan Jawaban (A, B, C)
    answerCard: { x: 1.42, y: 3.10, w: 5.31, h: 4.22, rotate: 0, zIndex: 14 },

    // Pagar Kayu Bawah Kiri & Kanan
    fenceLeft: { x: -0.07, y: 6.36, w: 2.28, h: 1.64, rotate: 0, zIndex: 6 },
    fenceRight: { x: 5.85, y: 6.51, w: 2.15, h: 1.55, rotate: 0, flipH: true, zIndex: 6 },

    // Semak Dedaunan & Bunga Bawah Kiri
    bushBottomLeft: { x: -0.3, y: 6.43, w: 2.53, h: 2.53, rotate: 0, zIndex: 8 },

    // Semak Bawah Kanan
    bushBottomRight: { x: 6.77, y: 6.86, w: 1.47, h: 1.14, rotate: 0, zIndex: 8 },
  }
};

// Aliases untuk kompatibilitas layout Misi 1
canvaLayouts.page10 = canvaLayouts.mission01;
canvaLayouts.misi01 = canvaLayouts.mission01;

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
