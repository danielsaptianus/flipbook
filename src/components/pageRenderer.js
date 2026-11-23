import { getCanvaStyle } from '../data/canvaLayout.js';

export function renderPageHTML(pageData) {
  if (pageData.type === 'cover-page-01') {
    return renderPage01(pageData);
  }
  if (pageData.type === 'content-page-02') {
    return renderPage02(pageData);
  }
  if (pageData.type === 'content-page-03') {
    return renderPage03(pageData);
  }
  if (pageData.type === 'content-page-04') {
    return renderPage04(pageData);
  }
  if (pageData.type === 'content-page-05') {
    return renderPage05(pageData);
  }
  if (pageData.type === 'content-page-06') {
    return renderPage06(pageData);
  }
  if (pageData.type === 'content-page-07') {
    return renderPage07(pageData);
  }
  if (pageData.type === 'content-page-08') {
    return renderPage08(pageData);
  }
  if (pageData.type === 'content-page-09') {
    return renderPage09(pageData);
  }
  if (pageData.type === 'content-page-10') {
    return renderPage10(pageData);
  }
  return `<div class="page-canvas"><p>Halaman tidak ditemukan</p></div>`;
}

function renderControlsHTML(controls) {
  return controls
    .map(
      (btn, index) => `
      <button
        type="button"
        id="${btn.id}"
        class="floating-nav-btn floating-nav-btn--${btn.action}"
        data-action="${btn.action}"
        data-index="${index}"
        aria-label="${btn.label}"
        title="${btn.label}"
      >
        <img src="${btn.icon}" alt="" class="floating-nav-icon" draggable="false" />
      </button>
    `
    )
    .join('');
}

function renderPage01(data) {
  const { assets, controls } = data;
  const controlsHTML = renderControlsHTML(controls);

  return `
    <article class="page-01-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${data.titleTop} ${data.titleBottom}">
      <!-- Layer 1: Background Langit -->
      <img src="${assets.background}" alt="" class="layer layer-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Atas -->
      <img src="${assets.light}" alt="" class="layer layer-light" draggable="false" />

      <!-- Layer 3: Awan Mega Mendung -->
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tl" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tr" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-ml" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-mr" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-l" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-r" draggable="false" />

      <!-- Layer 4: Burung Cenderawasih Kiri & Kanan -->
      <img src="${assets.bird}" alt="Burung Cenderawasih" class="layer layer-bird layer-bird-left" style="${getCanvaStyle('page01', 'birdLeft')}" draggable="false" />
      <img src="${assets.bird}" alt="Burung Cenderawasih" class="layer layer-bird layer-bird-right" style="${getCanvaStyle('page01', 'birdRight')}" draggable="false" />

      <!-- Layer 5: Gunung di Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-mountain" style="${getCanvaStyle('page01', 'mountain')}" draggable="false" />

      <!-- Layer 6: Hamparan Bukit & Padang Hijau -->
      <img src="${assets.hills}" alt="" class="layer layer-hills" style="${getCanvaStyle('page01', 'hills')}" draggable="false" />

      <!-- Layer 7: Rumah Adat Nusantara (di atas bukit) -->
      <img src="${assets.houses[0].src}" alt="${assets.houses[0].alt}" class="layer layer-house layer-house-joglo" style="${getCanvaStyle('page01', 'joglo')}" draggable="false" />
      <img src="${assets.houses[1].src}" alt="${assets.houses[1].alt}" class="layer layer-house layer-house-honai" style="${getCanvaStyle('page01', 'honai')}" draggable="false" />
      <img src="${assets.houses[2].src}" alt="${assets.houses[2].alt}" class="layer layer-house layer-house-julang" style="${getCanvaStyle('page01', 'julang')}" draggable="false" />
      <img src="${assets.houses[3].src}" alt="${assets.houses[3].alt}" class="layer layer-house layer-house-gadang" style="${getCanvaStyle('page01', 'gadang')}" draggable="false" />

      <!-- Layer 8: Pohon Kiri -->
      <img src="${assets.tree}" alt="" class="layer layer-tree" style="${getCanvaStyle('page01', 'tree')}" draggable="false" />

      <!-- Layer 9: Judul Utama -->
      <img
        src="${assets.titleArt}"
        alt="${data.titleTop} ${data.titleBottom}"
        class="layer layer-title-art"
        style="${getCanvaStyle('page01', 'title')}"
        draggable="false"
      />

      <!-- Layer 10: Pita Emas Subjudul -->
      <img
        src="${assets.titleRibbon}"
        alt=""
        class="layer layer-ribbon-art"
        style="${getCanvaStyle('page01', 'ribbon')}"
        draggable="false"
      />

      <!-- Layer 11: Teks Subjudul -->
      <img
        src="${assets.subtitleArt}"
        alt="${data.subtitleTop} ${data.subtitleBottom}"
        class="layer layer-subtitle-art"
        style="${getCanvaStyle('page01', 'subtitle')}"
        draggable="false"
      />

      <!-- Layer 11: 4 Karakter Anak Nusantara -->
      <img src="${assets.characters[0].src}" alt="${assets.characters[0].alt}" class="layer layer-char layer-char-sinta" style="${getCanvaStyle('page01', 'charSinta')}" draggable="false" />
      <img src="${assets.characters[1].src}" alt="${assets.characters[1].alt}" class="layer layer-char layer-char-naya" style="${getCanvaStyle('page01', 'charNaya')}" draggable="false" />
      <img src="${assets.characters[2].src}" alt="${assets.characters[2].alt}" class="layer layer-char layer-char-danu" style="${getCanvaStyle('page01', 'charDanu')}" draggable="false" />
      <img src="${assets.characters[3].src}" alt="${assets.characters[3].alt}" class="layer layer-char layer-char-rafi" style="${getCanvaStyle('page01', 'charRafi')}" draggable="false" />

      <!-- Layer 12: Dedaunan & Semak Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-foliage" style="${getCanvaStyle('page01', 'foliage')}" draggable="false" />

      <!-- Layer 13: Bunga Rafflesia Kiri Bawah (Di depan semak) -->
      <img src="${assets.flower}" alt="" class="layer layer-flower" style="${getCanvaStyle('page01', 'flower')}" draggable="false" />

      <!-- Layer 14: Tombol Navigasi Floating (Audio, Home, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p1" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 15: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage02(data) {
  const { assets, controls, title, bodyParagraphs } = data;
  const controlsHTML = renderControlsHTML(controls);

  return `
    <article class="page-02-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit -->
      <img src="${assets.background}" alt="" class="layer layer-p2-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Atas -->
      <img src="${assets.light}" alt="" class="layer layer-p2-light" draggable="false" />

      <!-- Layer 3: Awan Mega Mendung -->
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tl" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tr" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-ml" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-mr" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-l" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-r" draggable="false" />

      <!-- Layer 4: Gunung di Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-p2-mountain" style="${getCanvaStyle('page02', 'mountain')}" draggable="false" />

      <!-- Layer 5: Hamparan Bukit & Padang Hijau -->
      <img src="${assets.hills}" alt="" class="layer layer-p2-hills" style="${getCanvaStyle('page02', 'hills')}" draggable="false" />

      <!-- Layer 6: Rumah Adat Jawa Barat (terselip di belakang pohon) -->
      <img src="${assets.houseLeft}" alt="Rumah Adat Joglo" class="layer layer-p2-house-left" style="${getCanvaStyle('page02', 'houseLeft')}" draggable="false" />

      <!-- Layer 7: Pohon Besar Kiri -->
      <img src="${assets.tree}" alt="" class="layer layer-p2-tree" style="${getCanvaStyle('page02', 'tree')}" draggable="false" />

      <!-- Layer 8: Rumah Adat Sumatra (Gadang) Kanan -->
      <img src="${assets.houseRight}" alt="Rumah Adat Gadang" class="layer layer-p2-house-right" style="${getCanvaStyle('page02', 'houseRight')}" draggable="false" />

      <!-- Layer 9: Batu & Rumput Berbunga Kanan Bawah -->
      <img src="${assets.rocks}" alt="" class="layer layer-p2-rocks" style="${getCanvaStyle('page02', 'rocks')}" draggable="false" />

      <!-- Layer 10: Template Catatan & Teks Isi -->
      <div class="layer layer-p2-note-wrapper" style="${getCanvaStyle('page02', 'noteFrame')}">
        <img src="${assets.noteFrame}" alt="" class="p2-note-frame-img" draggable="false" />
        <div class="p2-note-content">
          <img src="${assets.titleArt || '/pages/page-02/kata-pengantar.svg'}" alt="${title}" class="p2-note-title-img" draggable="false" />
          <div class="p2-note-body">
            <p>${bodyParagraphs[0]}</p>
            <p class="p2-note-closing">${bodyParagraphs[1]}</p>
          </div>
        </div>
      </div>

      <!-- Layer 11: Dedaunan & Bunga Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-p2-foliage" style="${getCanvaStyle('page02', 'foliage')}" draggable="false" />

      <!-- Layer 12: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p2" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 13: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage03(data) {
  const { assets, controls, title, items } = data;
  const controlsHTML = renderControlsHTML(controls);

  const itemsHTML = items
    .map(
      (item) => `
      <li class="p3-toc-item" data-target-page="${item.page}">
        <span class="p3-toc-title">${item.title}</span>
        <span class="p3-toc-leader" aria-hidden="true"></span>
        <span class="p3-toc-page">${item.page}</span>
      </li>
    `
    )
    .join('');

  return `
    <article class="page-03-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit -->
      <img src="${assets.background}" alt="" class="layer layer-p3-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Atas -->
      <img src="${assets.light}" alt="" class="layer layer-light" draggable="false" />

      <!-- Layer 3: Awan Mega Mendung -->
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tl" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tr" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-ml" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-mr" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-l" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-r" draggable="false" />

      <!-- Layer 4: Gunung Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-p3-mountain" style="${getCanvaStyle('page03', 'mountain')}" draggable="false" />

      <!-- Layer 5: Hamparan Bukit Hijau -->
      <img src="${assets.hills}" alt="" class="layer layer-p3-hills" style="${getCanvaStyle('page03', 'hills')}" draggable="false" />

      <!-- Layer 6: Buket Bunga Kiri & Kanan -->
      <img src="${assets.flower}" alt="" class="layer layer-p3-flower layer-p3-flower-left" style="${getCanvaStyle('page03', 'flowerLeft')}" draggable="false" />
      <img src="${assets.flower}" alt="" class="layer layer-p3-flower layer-p3-flower-right" style="${getCanvaStyle('page03', 'flowerRight')}" draggable="false" />

      <!-- Layer 7: Template Catatan & Daftar Isi -->
      <div class="layer layer-p3-note-wrapper" style="${getCanvaStyle('page03', 'noteFrame')}">
        <img src="${assets.noteFrame}" alt="" class="p3-note-frame-img" draggable="false" />
        <div class="p3-note-content">
          <h1 class="p3-note-title">${title}</h1>
          <ul class="p3-toc-list">
            ${itemsHTML}
          </ul>
        </div>
      </div>

      <!-- Layer 8: Kupu-kupu Biru di pojok kanan atas bingkai -->
      <img src="${assets.butterfly}" alt="Kupu-kupu" class="layer layer-p3-butterfly" style="${getCanvaStyle('page03', 'butterfly')}" draggable="false" />

      <!-- Layer 9: Dedaunan & Bunga Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-p3-foliage" style="${getCanvaStyle('page03', 'foliage')}" draggable="false" />

      <!-- Layer 10: Tombol Navigasi Floating (Home, Next, Back) -->
      <nav class="floating-nav-dock floating-nav-dock--p3" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 11: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage04(data) {
  const { assets, controls, title, buttons } = data;
  const controlsHTML = renderControlsHTML(controls);

  const buttonsHTML = buttons
    .map(
      (btn) => `
      <div class="p4-btn-cell" data-action="${btn.action}">
        <button
          type="button"
          class="p4-circle-btn p4-circle-btn--${btn.action}"
          data-action="${btn.action}"
          aria-label="${btn.label}: ${btn.desc}"
          title="${btn.desc}"
        >
          <img src="${btn.icon}" alt="" class="p4-circle-btn-img" draggable="false" />
        </button>
        <span class="p4-btn-label">${btn.label}</span>
      </div>
    `
    )
    .join('');

  return `
    <article class="page-04-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit -->
      <img src="${assets.background}" alt="" class="layer layer-p4-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Atas -->
      <img src="${assets.light}" alt="" class="layer layer-light" draggable="false" />

      <!-- Layer 3: Awan Mega Mendung -->
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tl" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tr" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-ml" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-mr" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-l" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-r" draggable="false" />

      <!-- Layer 4: Gunung Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-p4-mountain" style="${getCanvaStyle('page04', 'mountain')}" draggable="false" />

      <!-- Layer 5: Hamparan Bukit Hijau -->
      <img src="${assets.hills}" alt="" class="layer layer-p4-hills" style="${getCanvaStyle('page04', 'hills')}" draggable="false" />

      <!-- Layer 6: Rumah Honai Kiri -->
      <img src="${assets.houseLeft}" alt="Rumah Adat Honai" class="layer layer-p4-house-left" style="${getCanvaStyle('page04', 'houseLeft')}" draggable="false" />

      <!-- Layer 7: Rumah Gadang Kanan -->
      <img src="${assets.houseRight}" alt="Rumah Adat Gadang" class="layer layer-p4-house-right" style="${getCanvaStyle('page04', 'houseRight')}" draggable="false" />

      <!-- Layer 8: Rumput Bunga Kiri & Kanan -->
      <img src="${assets.flowers}" alt="" class="layer layer-p4-flowers layer-p4-flowers-left" style="${getCanvaStyle('page04', 'flowersLeft')}" draggable="false" />
      <img src="${assets.flowers}" alt="" class="layer layer-p4-flowers layer-p4-flowers-right" style="${getCanvaStyle('page04', 'flowersRight')}" draggable="false" />

      <!-- Layer 9: Template Kartu Tombol -->
      <div class="layer layer-p4-card-wrapper" style="${getCanvaStyle('page04', 'cardFrame')}">
        <img src="${assets.cardFrame}" alt="${title}" class="p4-card-frame-img" draggable="false" />
        <h1 class="sr-only">${title}</h1>

        <!-- 2x3 Grid of Buttons -->
        <div class="p4-buttons-grid">
          ${buttonsHTML}
        </div>
      </div>

      <!-- Layer 10: Mahkota Ornamen Bali di atas kartu -->
      <img src="${assets.crown}" alt="${title}" class="layer layer-p4-crown" style="${getCanvaStyle('page04', 'crown')}" draggable="false" />

      <!-- Layer 11: Dedaunan & Semak Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-p4-foliage" style="${getCanvaStyle('page04', 'foliage')}" draggable="false" />

      <!-- Layer 12: Tombol Navigasi Floating (Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p4" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 13: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage05(data) {
  const { assets, controls, title, bodyParagraphs } = data;
  const controlsHTML = renderControlsHTML(controls);

  return `
    <article class="page-05-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit -->
      <img src="${assets.background}" alt="" class="layer layer-p5-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Atas -->
      <img src="${assets.light}" alt="" class="layer layer-light" draggable="false" />

      <!-- Layer 3: Awan Mega Mendung -->
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tl" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-tr" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-ml" draggable="false" />
      <img src="${assets.cloudDark}" alt="" class="layer layer-cloud layer-cloud-dark-mr" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-l" draggable="false" />
      <img src="${assets.cloudLight}" alt="" class="layer layer-cloud layer-cloud-light-r" draggable="false" />

      <!-- Layer 4: Gunung Kanan (posisi sama seperti halaman sebelumnya) -->
      <img src="${assets.mountain}" alt="" class="layer layer-p5-mountain" style="${getCanvaStyle('page05', 'mountain')}" draggable="false" />

      <!-- Layer 5: Hamparan Bukit Hijau (posisi sama seperti halaman sebelumnya) -->
      <img src="${assets.hills}" alt="" class="layer layer-p5-hills" style="${getCanvaStyle('page05', 'hills')}" draggable="false" />

      <!-- Layer 6: Rumah Adat Kiri (Julang Ngapak) -->
      <img src="${assets.houseLeft}" alt="Rumah Adat Julang Ngapak" class="layer layer-p5-house-left" style="${getCanvaStyle('page05', 'houseLeft')}" draggable="false" />

      <!-- Layer 7: Pohon Besar Kiri -->
      <img src="${assets.tree}" alt="Pohon Rindang" class="layer layer-p5-tree" style="${getCanvaStyle('page05', 'tree')}" draggable="false" />

      <!-- Layer 8: Rumah Joglo Kanan -->
      <img src="${assets.houseRight}" alt="Rumah Joglo Jawa" class="layer layer-p5-house-right" style="${getCanvaStyle('page05', 'houseRight')}" draggable="false" />

      <!-- Layer 9: Karakter Anak Perempuan Kanan -->
      <img src="${assets.character}" alt="Karakter Anak Perempuan" class="layer layer-p5-character" style="${getCanvaStyle('page05', 'character')}" draggable="false" />

      <!-- Layer 10: Rumput Bunga Kiri & Kanan (posisi sama seperti halaman sebelumnya) -->
      <img src="${assets.flowers}" alt="" class="layer layer-p5-flowers layer-p5-flowers-left" style="${getCanvaStyle('page05', 'flowersLeft')}" draggable="false" />
      <img src="${assets.flowers}" alt="" class="layer layer-p5-flowers layer-p5-flowers-right" style="${getCanvaStyle('page05', 'flowersRight')}" draggable="false" />

      <!-- Layer 11: Template Banner Judul "PETUNJUK PENGGUNAAN" -->
      <div class="layer layer-p5-banner-wrapper" style="${getCanvaStyle('page05', 'titleBanner')}">
        <img src="${assets.titleBanner}" alt="${title}" class="p5-banner-img" draggable="false" />
        <h1 class="sr-only">${title}</h1>
      </div>

      <!-- Layer 12: Template Bingkai Catatan Petunjuk & Isi Teks -->
      <div class="layer layer-p5-note-wrapper" style="${getCanvaStyle('page05', 'noteCard')}">
        <img src="${assets.noteCard}" alt="" class="p5-note-frame-img" draggable="false" />
        <div class="p5-note-content">
          <p class="p5-note-p">${bodyParagraphs[0]}</p>
          <p class="p5-note-p">${bodyParagraphs[1]}</p>
          <p class="p5-note-p">${bodyParagraphs[2]}</p>
        </div>
      </div>

      <!-- Layer 13: Dedaunan & Semak Depan Bawah (posisi sama seperti halaman sebelumnya) -->
      <img src="${assets.foliage}" alt="" class="layer layer-p5-foliage" style="${getCanvaStyle('page05', 'foliage')}" draggable="false" />

      <!-- Layer 14: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p5" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 15: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage06(data) {
  const { assets, controls, title, characters } = data;
  const controlsHTML = renderControlsHTML(controls);

  return `
    <article class="page-06-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit Cerah -->
      <img src="${assets.background}" alt="" class="layer layer-p6-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Mentari -->
      <img src="${assets.light}" alt="" class="layer layer-p6-light" draggable="false" />

      <!-- Layer 3: Matahari & Awan Lucu Kanan Atas -->
      <img src="${assets.sun}" alt="Matahari & Awan" class="layer layer-p6-sun" style="${getCanvaStyle('page06', 'sun')}" draggable="false" />

      <!-- Layer 4: Hamparan Bukit Hijau -->
      <img src="${assets.hills}" alt="" class="layer layer-p6-hills" style="${getCanvaStyle('page06', 'hills')}" draggable="false" />

      <!-- Layer 5: Rumah Adat di Atas Bukit -->
      <img src="${assets.houseGadang}" alt="Rumah Gadang" class="layer layer-p6-house layer-p6-gadang" style="${getCanvaStyle('page06', 'houseGadang')}" draggable="false" />
      <img src="${assets.houseHonai}" alt="Rumah Honai" class="layer layer-p6-house layer-p6-honai" style="${getCanvaStyle('page06', 'houseHonai')}" draggable="false" />
      <img src="${assets.houseJulang}" alt="Rumah Julang Ngapak" class="layer layer-p6-house layer-p6-julang" style="${getCanvaStyle('page06', 'houseJulang')}" draggable="false" />
      <img src="${assets.houseJateng}" alt="Rumah Adat Joglo" class="layer layer-p6-house layer-p6-jateng" style="${getCanvaStyle('page06', 'houseJateng')}" draggable="false" />

      <!-- Layer 6: Kolam Air & Bebatuan Kiri -->
      <img src="${assets.pond}" alt="" class="layer layer-p6-pond" style="${getCanvaStyle('page06', 'pond')}" draggable="false" />
      <img src="${assets.rocks}" alt="" class="layer layer-p6-rocks" style="${getCanvaStyle('page06', 'rocks')}" draggable="false" />

      <!-- Layer 7: Alat Musik Tradisional Kanan (Angklung & Kolintang) -->
      <img src="${assets.angklung}" alt="Angklung" class="layer layer-p6-music layer-p6-angklung" style="${getCanvaStyle('page06', 'angklung')}" draggable="false" />
      <img src="${assets.gamelan}" alt="Gamelan / Kolintang" class="layer layer-p6-music layer-p6-gamelan" style="${getCanvaStyle('page06', 'gamelan')}" draggable="false" />

      <!-- Layer 8: Dahan Pohon Rindang Kiri Atas -->
      <img src="${assets.tree}" alt="Pohon Rindang" class="layer layer-p6-tree" style="${getCanvaStyle('page06', 'tree')}" draggable="false" />

      <!-- Layer 9: Kawanan Kupu-kupu Biru -->
      <img src="${assets.butterflies}" alt="" class="layer layer-p6-butterflies" style="${getCanvaStyle('page06', 'butterflies')}" draggable="false" />

      <!-- Layer 10: Judul Utama -->
      <img src="${assets.title}" alt="${title}" class="layer layer-p6-title" style="${getCanvaStyle('page06', 'title')}" draggable="false" />
      <h1 class="sr-only">${title}</h1>

      <!-- Layer 11: 4 Karakter Sahabat Nusantara -->
      <img src="${assets.charNaya}" alt="Naya (Jawa Barat)" class="layer layer-p6-char layer-p6-char-naya" style="${getCanvaStyle('page06', 'charNaya')}" draggable="false" />
      <img src="${assets.charRafi}" alt="Rafi (Sumatera Barat)" class="layer layer-p6-char layer-p6-char-rafi" style="${getCanvaStyle('page06', 'charRafi')}" draggable="false" />
      <img src="${assets.charSinta}" alt="Sinta (Jawa tengah)" class="layer layer-p6-char layer-p6-char-sinta" style="${getCanvaStyle('page06', 'charSinta')}" draggable="false" />
      <img src="${assets.charDanu}" alt="Danu (Papua)" class="layer layer-p6-char layer-p6-char-danu" style="${getCanvaStyle('page06', 'charDanu')}" draggable="false" />

      <!-- Layer 12: Rumput Daun Depan Bawah -->
      <img src="${assets.grass}" alt="" class="layer layer-p6-grass" style="${getCanvaStyle('page06', 'grass')}" draggable="false" />

      <!-- Layer 13: Kartu Nama 4 Karakter -->
      <div class="layer layer-p6-name-badge layer-p6-name-naya" style="${getCanvaStyle('page06', 'nameNaya')}">
        <img src="${assets.nameBadge}" alt="" class="p6-name-badge-bg" draggable="false" />
        <div class="p6-name-badge-text">
          <span class="p6-name-title">${characters[0].name}</span>
          <span class="p6-name-origin">${characters[0].origin}</span>
        </div>
      </div>
      <div class="layer layer-p6-name-badge layer-p6-name-rafi" style="${getCanvaStyle('page06', 'nameRafi')}">
        <img src="${assets.nameBadge}" alt="" class="p6-name-badge-bg" draggable="false" />
        <div class="p6-name-badge-text">
          <span class="p6-name-title">${characters[1].name}</span>
          <span class="p6-name-origin">${characters[1].origin}</span>
        </div>
      </div>
      <div class="layer layer-p6-name-badge layer-p6-name-sinta" style="${getCanvaStyle('page06', 'nameSinta')}">
        <img src="${assets.nameBadge}" alt="" class="p6-name-badge-bg" draggable="false" />
        <div class="p6-name-badge-text">
          <span class="p6-name-title">${characters[2].name}</span>
          <span class="p6-name-origin">${characters[2].origin}</span>
        </div>
      </div>
      <div class="layer layer-p6-name-badge layer-p6-name-danu" style="${getCanvaStyle('page06', 'nameDanu')}">
        <img src="${assets.nameBadge}" alt="" class="p6-name-badge-bg" draggable="false" />
        <div class="p6-name-badge-text">
          <span class="p6-name-title">${characters[3].name}</span>
          <span class="p6-name-origin">${characters[3].origin}</span>
        </div>
      </div>

      <!-- Layer 14: Bunga-bunga Depan Bawah -->
      <img src="${assets.flowers}" alt="" class="layer layer-p6-flowers" style="${getCanvaStyle('page06', 'flowers')}" draggable="false" />

      <!-- Layer 15: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p6" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 16: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage07(data) {
  const { assets, controls, title, subtitle, characters } = data;
  const controlsHTML = renderControlsHTML(controls);

  return `
    <article class="page-07-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title} - ${subtitle}">
      <!-- Layer 1: Background Langit Cerah -->
      <img src="${assets.background}" alt="" class="layer layer-p7-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Mentari -->
      <img src="${assets.light}" alt="" class="layer layer-light layer-p7-light" draggable="false" />

      <!-- Layer 3: Awan-awan -->
      <img src="${assets.clouds}" alt="" class="layer layer-p7-clouds layer-p7-clouds-left" style="${getCanvaStyle('page07', 'cloudsLeft')}" draggable="false" />
      <img src="${assets.clouds}" alt="" class="layer layer-p7-clouds layer-p7-clouds-right" style="${getCanvaStyle('page07', 'cloudsRight')}" draggable="false" />

      <!-- Layer 4: Burung-burung Terbang Kiri -->
      <img src="${assets.birds}" alt="" class="layer layer-p7-birds" style="${getCanvaStyle('page07', 'birds')}" draggable="false" />

      <!-- Layer 5: Rumah Gadang Kiri (Belakang Pohon) -->
      <img src="${assets.houseGadang}" alt="Rumah Gadang" class="layer layer-p7-gadang" style="${getCanvaStyle('page07', 'houseGadang')}" draggable="false" />

      <!-- Layer 6: Rumah Julang Ngapak Tengah Kiri -->
      <img src="${assets.houseJulang}" alt="Rumah Julang Ngapak" class="layer layer-p7-julang" style="${getCanvaStyle('page07', 'houseJulang')}" draggable="false" />

      <!-- Layer 7: Gedung Sekolah Kanan -->
      <img src="${assets.school}" alt="Sekolah" class="layer layer-p7-school" style="${getCanvaStyle('page07', 'school')}" draggable="false" />

      <!-- Layer 8: Pohon Besar Rindang Kiri -->
      <img src="${assets.tree}" alt="Pohon Rindang" class="layer layer-p7-tree" style="${getCanvaStyle('page07', 'tree')}" draggable="false" />

      <!-- Layer 9: Ayunan Ranting Kanan Atas -->
      <img src="${assets.swing}" alt="Ayunan Ranting" class="layer layer-p7-swing" style="${getCanvaStyle('page07', 'swing')}" draggable="false" />

      <!-- Layer 10: Hamparan Rumput Taman -->
      <img src="${assets.garden}" alt="" class="layer layer-p7-garden" style="${getCanvaStyle('page07', 'garden')}" draggable="false" />

      <!-- Layer 11: Bebatuan Kiri Bawah -->
      <img src="${assets.rocks}" alt="" class="layer layer-p7-rocks" style="${getCanvaStyle('page07', 'rocks')}" draggable="false" />

      <!-- Layer 12: Papan Kayu -->
      <img src="${assets.signpost}" alt="" class="layer layer-p7-signpost" style="${getCanvaStyle('page07', 'signpost')}" draggable="false" />

      <!-- Layer 13: Judul Utama (Cerita 1: Tiga Warna di Festival Sekolah - Toleransi) -->
      <img src="${assets.title}" alt="${title} - ${subtitle}" class="layer layer-p7-title" style="${getCanvaStyle('page07', 'title')}" draggable="false" />
      <h1 class="sr-only">${title} (${subtitle})</h1>

      <!-- Layer 14: 3 Karakter Anak Nusantara -->
      <img src="${assets.charRafi}" alt="Rafi (Sumatera Barat)" class="layer layer-p7-char layer-p7-char-rafi" style="${getCanvaStyle('page07', 'charRafi')}" draggable="false" />
      <img src="${assets.charNaya}" alt="Naya (Jawa Barat)" class="layer layer-p7-char layer-p7-char-naya" style="${getCanvaStyle('page07', 'charNaya')}" draggable="false" />
      <img src="${assets.charDanu}" alt="Danu (Papua)" class="layer layer-p7-char layer-p7-char-danu" style="${getCanvaStyle('page07', 'charDanu')}" draggable="false" />

      <!-- Layer 15: 3 Lencana Nama Karakter -->
      <div class="layer layer-p7-name-badge layer-p7-name-rafi" style="${getCanvaStyle('page07', 'nameRafi')}">
        <img src="${assets.nameBadge}" alt="" class="p7-name-badge-bg" draggable="false" />
        <div class="p7-name-badge-text">
          <span class="p7-name-title">${characters[0].name}</span>
          <span class="p7-name-origin">${characters[0].origin}</span>
        </div>
      </div>
      <div class="layer layer-p7-name-badge layer-p7-name-naya" style="${getCanvaStyle('page07', 'nameNaya')}">
        <img src="${assets.nameBadge}" alt="" class="p7-name-badge-bg" draggable="false" />
        <div class="p7-name-badge-text">
          <span class="p7-name-title">${characters[1].name}</span>
          <span class="p7-name-origin">${characters[1].origin}</span>
        </div>
      </div>
      <div class="layer layer-p7-name-badge layer-p7-name-danu" style="${getCanvaStyle('page07', 'nameDanu')}">
        <img src="${assets.nameBadge}" alt="" class="p7-name-badge-bg" draggable="false" />
        <div class="p7-name-badge-text">
          <span class="p7-name-title">${characters[2].name}</span>
          <span class="p7-name-origin">${characters[2].origin}</span>
        </div>
      </div>

      <!-- Layer 16: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p7" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 17: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage08(data) {
  const { assets, controls, title, bodyParagraphs = [] } = data;
  const controlsHTML = renderControlsHTML(controls);

  const paragraphsHTML = bodyParagraphs
    .map((paragraph) => `<p class="p8-story-p">${paragraph}</p>`)
    .join('');

  return `
    <article class="page-08-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit Lembut -->
      <img src="${assets.background}" alt="" class="layer layer-p8-bg" draggable="false" />

      <!-- Layer 2: Efek Cahaya Mentari -->
      <img src="${assets.light}" alt="" class="layer layer-light layer-p8-light" draggable="false" />

      <!-- Layer 3: Awan Cerah Kiri & Kanan Atas -->
      <img src="${assets.clouds}" alt="" class="layer layer-p8-clouds layer-p8-clouds-left" style="${getCanvaStyle('page08', 'cloudsLeft')}" draggable="false" />
      <img src="${assets.clouds}" alt="" class="layer layer-p8-clouds layer-p8-clouds-right" style="${getCanvaStyle('page08', 'cloudsRight')}" draggable="false" />

      <!-- Layer 4: Gedung Sekolah Dasar -->
      <img src="${assets.school}" alt="Gedung Sekolah" class="layer layer-p8-school" style="${getCanvaStyle('page08', 'school')}" draggable="false" />

      <!-- Layer 5: Pohon Rindang Kanan -->
      <img src="${assets.tree}" alt="Pohon Rindang" class="layer layer-p8-tree" style="${getCanvaStyle('page08', 'tree')}" draggable="false" />

      <!-- Layer 6: Jalanan & Hamparan Rumput -->
      <img src="${assets.road}" alt="" class="layer layer-p8-road" style="${getCanvaStyle('page08', 'road')}" draggable="false" />

      <!-- Layer 7: 3 Karakter Sahabat Berseragam Sekolah (Rafi, Naya, Danu) -->
      <img src="${assets.charRafi}" alt="Rafi Berseragam Sekolah" class="layer layer-p8-char layer-p8-char-rafi" style="${getCanvaStyle('page08', 'charRafi')}" draggable="false" />
      <img src="${assets.charNaya}" alt="Naya Berseragam Sekolah" class="layer layer-p8-char layer-p8-char-naya" style="${getCanvaStyle('page08', 'charNaya')}" draggable="false" />
      <img src="${assets.charDanu}" alt="Danu Berseragam Sekolah" class="layer layer-p8-char layer-p8-char-danu" style="${getCanvaStyle('page08', 'charDanu')}" draggable="false" />

      <!-- Layer 8: Bunga & Semak Depan Kiri & Kanan -->
      <img src="${assets.flowers}" alt="" class="layer layer-p8-flowers layer-p8-flowers-left" style="${getCanvaStyle('page08', 'flowersLeft')}" draggable="false" />
      <img src="${assets.flowers}" alt="" class="layer layer-p8-flowers layer-p8-flowers-right" style="${getCanvaStyle('page08', 'flowersRight')}" draggable="false" />

      <!-- Layer 9: Teks Narasi Cerita (League Spartan) -->
      <div class="layer layer-p8-story-wrapper" style="${getCanvaStyle('page08', 'storyBox')}">
        <div class="p8-story-card">
          ${paragraphsHTML}
        </div>
      </div>

      <!-- Layer 10: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p8" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 11: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage09(data) {
  const { assets, controls, title, bodyParagraphs = [] } = data;
  const controlsHTML = renderControlsHTML(controls);

  const paragraphsHTML = bodyParagraphs
    .map((paragraph) => `<p class="p9-story-p">${paragraph}</p>`)
    .join('');

  return `
    <article class="page-09-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Langit Lembut & Lapangan -->
      <img src="${assets.background}" alt="" class="layer layer-p9-bg" draggable="false" />

      <!-- Layer 2: Dedaunan Hias Atas Kiri & Kanan -->
      <img src="${assets.foliageLeft}" alt="" class="layer layer-p9-foliage layer-p9-foliage-left" style="${getCanvaStyle('page09', 'foliageLeft')}" draggable="false" />
      <img src="${assets.foliageRight}" alt="" class="layer layer-p9-foliage layer-p9-foliage-right" style="${getCanvaStyle('page09', 'foliageRight')}" draggable="false" />

      <!-- Layer 3: Gedung Sekolah di Belakang -->
      <img src="${assets.school}" alt="Gedung Sekolah" class="layer layer-p9-school" style="${getCanvaStyle('page09', 'school')}" draggable="false" />

      <!-- Layer 4: Pohon Rindang Kiri -->
      <img src="${assets.tree}" alt="Pohon Rindang" class="layer layer-p9-tree" style="${getCanvaStyle('page09', 'tree')}" draggable="false" />

      <!-- Layer 5: Rumah Adat Kanan Belakang -->
      <img src="${assets.traditionalHouse}" alt="Rumah Adat" class="layer layer-p9-house" style="${getCanvaStyle('page09', 'traditionalHouse')}" draggable="false" />

      <!-- Layer 6: Jalan Setapak & Rumput -->
      <img src="${assets.road}" alt="" class="layer layer-p9-road" style="${getCanvaStyle('page09', 'road')}" draggable="false" />

      <!-- Layer 7: Kegiatan Menumbuk Padi di Depan Rumah Adat -->
      <img src="${assets.mortarActivity}" alt="Menumbuk Padi" class="layer layer-p9-mortar" style="${getCanvaStyle('page09', 'mortarActivity')}" draggable="false" />

      <!-- Layer 8: 3 Karakter Sahabat (Naya, Rafi, Danu) -->
      <img src="${assets.charNaya}" alt="Naya" class="layer layer-p9-char layer-p9-char-naya" style="${getCanvaStyle('page09', 'charNaya')}" draggable="false" />
      <img src="${assets.charRafi}" alt="Rafi" class="layer layer-p9-char layer-p9-char-rafi" style="${getCanvaStyle('page09', 'charRafi')}" draggable="false" />
      <img src="${assets.charDanu}" alt="Danu" class="layer layer-p9-char layer-p9-char-danu" style="${getCanvaStyle('page09', 'charDanu')}" draggable="false" />

      <!-- Layer 9: Semak & Bunga Depan Kiri & Kanan -->
      <img src="${assets.flowersLeft}" alt="" class="layer layer-p9-flowers layer-p9-flowers-left" style="${getCanvaStyle('page09', 'flowersLeft')}" draggable="false" />
      <img src="${assets.flowersRight}" alt="" class="layer layer-p9-flowers layer-p9-flowers-right" style="${getCanvaStyle('page09', 'flowersRight')}" draggable="false" />

      <!-- Layer 10: Teks Narasi Cerita (League Spartan) -->
      <div class="layer layer-p9-story-wrapper" style="${getCanvaStyle('page09', 'storyBox')}">
        <div class="p9-story-card">
          ${paragraphsHTML}
        </div>
      </div>

      <!-- Layer 11: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p9" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 12: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}

function renderPage10(data) {
  const { assets, controls, title, question, options = [] } = data;
  const controlsHTML = renderControlsHTML(controls);

  const optionsHTML = options
    .map(
      (opt) => `
      <button
        type="button"
        class="p10-option-btn p10-option-btn--${opt.key.toLowerCase()}"
        data-key="${opt.key}"
        aria-label="Pilihan ${opt.key}: ${opt.text}"
      >
        <span class="p10-option-indicator">${opt.key}</span>
        <span class="sr-only">${opt.text}</span>
      </button>
    `
    )
    .join('');

  return `
    <article class="page-10-canvas page-canvas" data-page="${data.pageNumber}" aria-label="Halaman ${data.pageNumber}: ${title}">
      <!-- Layer 1: Background Tekstur Lembut -->
      <img src="${assets.background}" alt="" class="layer layer-p10-bg" draggable="false" />

      <!-- Layer 2: Dedaunan Hias Pojok Kanan Atas -->
      <img src="${assets.foliageTop}" alt="" class="layer layer-p10-foliage-top" style="${getCanvaStyle('page10', 'foliageTop')}" draggable="false" />

      <!-- Layer 3: Pagar Kayu Bawah Kiri -->
      <img src="${assets.fence}" alt="" class="layer layer-p10-fence" style="${getCanvaStyle('page10', 'fence')}" draggable="false" />

      <!-- Layer 4: Semak Dedaunan Bawah Kiri -->
      <img src="${assets.bushBottomLeft}" alt="" class="layer layer-p10-bush-left" style="${getCanvaStyle('page10', 'bushBottomLeft')}" draggable="false" />

      <!-- Layer 5: Semak Bunga Bawah Kanan -->
      <img src="${assets.bushBottomRight}" alt="" class="layer layer-p10-bush-right" style="${getCanvaStyle('page10', 'bushBottomRight')}" draggable="false" />

      <!-- Layer 6: Banner Judul MISI & Lampu Ide -->
      <div class="layer layer-p10-header-wrapper" style="${getCanvaStyle('page10', 'headerBanner')}">
        <img src="${assets.misiBadge}" alt="Misi" class="p10-misi-img" draggable="false" />
        <div class="p10-lampu-container">
          <img src="${assets.lampuHeader}" alt="" class="p10-lampu-img" draggable="false" />
          <h1 class="p10-header-title">MISI 1</h1>
        </div>
      </div>

      <!-- Layer 7: Template Kartu Pertanyaan -->
      <div class="layer layer-p10-question-wrapper" style="${getCanvaStyle('page10', 'questionCard')}">
        <img src="${assets.questionCard}" alt="${question}" class="p10-question-img" draggable="false" />
        <h2 class="sr-only">${question}</h2>
      </div>

      <!-- Layer 8: Template Kartu Pilihan Jawaban Interaktif -->
      <div class="layer layer-p10-answer-wrapper" style="${getCanvaStyle('page10', 'answerCard')}">
        <img src="${assets.answerCard}" alt="Pilihan Jawaban" class="p10-answer-img" draggable="false" />
        <div class="p10-options-grid">
          ${optionsHTML}
        </div>
      </div>

      <!-- Layer 9: Tombol Navigasi Floating (Audio, Home, Back, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p10" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 10: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}
