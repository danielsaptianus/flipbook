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
      <img src="${assets.bird}" alt="Burung Cenderawasih" class="layer layer-bird layer-bird-left" draggable="false" />
      <img src="${assets.bird}" alt="Burung Cenderawasih" class="layer layer-bird layer-bird-right" draggable="false" />

      <!-- Layer 5: Gunung di Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-mountain" draggable="false" />

      <!-- Layer 6: Hamparan Bukit & Padang Hijau -->
      <div class="layer layer-meadow-base" aria-hidden="true"></div>
      <img src="${assets.hills}" alt="" class="layer layer-hills" draggable="false" />

      <!-- Layer 7: Rumah Adat Nusantara (di atas bukit) -->
      <img src="${assets.houses[0].src}" alt="${assets.houses[0].alt}" class="layer layer-house layer-house-joglo" draggable="false" />
      <img src="${assets.houses[1].src}" alt="${assets.houses[1].alt}" class="layer layer-house layer-house-honai" draggable="false" />
      <img src="${assets.houses[2].src}" alt="${assets.houses[2].alt}" class="layer layer-house layer-house-julang" draggable="false" />
      <img src="${assets.houses[3].src}" alt="${assets.houses[3].alt}" class="layer layer-house layer-house-gadang" draggable="false" />

      <!-- Layer 8: Pohon & Bunga Rafflesia Kiri -->
      <img src="${assets.tree}" alt="" class="layer layer-tree" draggable="false" />
      <img src="${assets.flower}" alt="" class="layer layer-flower" draggable="false" />

      <!-- Layer 9: Judul Utama & Pita Subjudul -->
      <div class="layer layer-title-group">
        <h1 class="sr-only">${data.titleTop} ${data.titleBottom} - ${data.subtitleTop} ${data.subtitleBottom}</h1>
        <img src="${assets.titleArt}" alt="${data.titleTop} ${data.titleBottom}" class="title-art-img" draggable="false" />

        <div class="subtitle-ribbon-wrap">
          <img src="${assets.titleRibbon}" alt="" class="subtitle-ribbon-img" draggable="false" />
          <img src="${assets.subtitleArt}" alt="${data.subtitleTop} ${data.subtitleBottom}" class="subtitle-art-img" draggable="false" />
        </div>
      </div>

      <!-- Layer 10: 4 Karakter Anak Nusantara -->
      <img src="${assets.characters[0].src}" alt="${assets.characters[0].alt}" class="layer layer-char layer-char-sinta" draggable="false" />
      <img src="${assets.characters[1].src}" alt="${assets.characters[1].alt}" class="layer layer-char layer-char-naya" draggable="false" />
      <img src="${assets.characters[2].src}" alt="${assets.characters[2].alt}" class="layer layer-char layer-char-danu" draggable="false" />
      <img src="${assets.characters[3].src}" alt="${assets.characters[3].alt}" class="layer layer-char layer-char-rafi" draggable="false" />

      <!-- Layer 11: Dedaunan & Bunga Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-foliage" draggable="false" />

      <!-- Layer 12: Tombol Navigasi Floating (Audio, Home, Next) -->
      <nav class="floating-nav-dock floating-nav-dock--p1" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 13: Lingkaran Nomor Halaman (Kanan Bawah) -->
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
      <img src="${assets.mountain}" alt="" class="layer layer-p2-mountain" draggable="false" />

      <!-- Layer 5: Hamparan Bukit & Padang Hijau -->
      <div class="layer layer-p2-meadow-base" aria-hidden="true"></div>
      <img src="${assets.hills}" alt="" class="layer layer-p2-hills" draggable="false" />

      <!-- Layer 6: Rumah Adat Jawa Barat (terselip di belakang pohon) -->
      <img src="${assets.houseLeft}" alt="Rumah Adat Joglo" class="layer layer-p2-house-left" draggable="false" />

      <!-- Layer 7: Pohon Besar Kiri -->
      <img src="${assets.tree}" alt="" class="layer layer-p2-tree" draggable="false" />

      <!-- Layer 8: Rumah Adat Sumatra (Gadang) Kanan -->
      <img src="${assets.houseRight}" alt="Rumah Adat Gadang" class="layer layer-p2-house-right" draggable="false" />

      <!-- Layer 9: Batu & Rumput Berbunga Kanan Bawah -->
      <img src="${assets.rocks}" alt="" class="layer layer-p2-rocks" draggable="false" />

      <!-- Layer 10: Template Catatan & Teks Isi -->
      <div class="layer layer-p2-note-wrapper">
        <img src="${assets.noteFrame}" alt="" class="p2-note-frame-img" draggable="false" />
        <div class="p2-note-content">
          <h1 class="sr-only">${title}</h1>
          <img src="${assets.titleArt || '/pages/page-02/kata-pengantar.svg'}" alt="${title}" class="p2-note-title-img" draggable="false" />
          <div class="p2-note-body">
            <p>${bodyParagraphs[0]}</p>
            <p class="p2-note-closing">${bodyParagraphs[1]}</p>
          </div>
        </div>
      </div>

      <!-- Layer 11: Dedaunan & Bunga Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-p2-foliage" draggable="false" />

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

      <!-- Layer 3: Gunung Kanan -->
      <img src="${assets.mountain}" alt="" class="layer layer-p3-mountain" draggable="false" />

      <!-- Layer 4: Hamparan Bukit Hijau -->
      <div class="layer layer-p3-meadow-base" aria-hidden="true"></div>
      <img src="${assets.hills}" alt="" class="layer layer-p3-hills" draggable="false" />

      <!-- Layer 5: Buket Bunga Kiri & Kanan -->
      <img src="${assets.flower}" alt="" class="layer layer-p3-flower layer-p3-flower-left" draggable="false" />
      <img src="${assets.flower}" alt="" class="layer layer-p3-flower layer-p3-flower-right" draggable="false" />

      <!-- Layer 6: Template Catatan & Daftar Isi -->
      <div class="layer layer-p3-note-wrapper">
        <img src="${assets.noteFrame}" alt="" class="p3-note-frame-img" draggable="false" />
        <div class="p3-note-content">
          <h1 class="p3-note-title">${title}</h1>
          <ul class="p3-toc-list">
            ${itemsHTML}
          </ul>
        </div>
        <!-- Kupu-kupu Biru di pojok kanan atas bingkai -->
        <img src="${assets.butterfly}" alt="Kupu-kupu" class="layer-p3-butterfly" draggable="false" />
      </div>

      <!-- Layer 7: Dedaunan & Bunga Depan Bawah -->
      <img src="${assets.foliage}" alt="" class="layer layer-p3-foliage" draggable="false" />

      <!-- Layer 8: Tombol Navigasi Floating (Home, Next, Back) -->
      <nav class="floating-nav-dock floating-nav-dock--p3" id="floating-nav-dock" aria-label="Navigasi Halaman">
        ${controlsHTML}
      </nav>

      <!-- Layer 9: Lingkaran Nomor Halaman (Kanan Bawah) -->
      <div class="page-number-badge" aria-label="Halaman ${data.pageNumber}">
        <span>${data.pageNumber}</span>
      </div>
    </article>
  `;
}
