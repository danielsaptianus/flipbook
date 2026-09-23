// Page Renderer for the 3 A5 Landscape Pages
// Faithfully reproducing the exact visual designs from user mockups

export function renderPageHTML(pageData) {
  switch (pageData.type) {
    case 'cover':
      return renderCoverPage(pageData);
    case 'identity':
      return renderIdentityPage(pageData);
    case 'preface':
      return renderPrefacePage(pageData);
    default:
      return `<div class="page a5-page"><div class="page-inner"><p>Halaman tidak ditemukan</p></div></div>`;
  }
}

// -------------------------------------------------------------
// HALAMAN 0: COVER DEPAN
// -------------------------------------------------------------
function renderCoverPage(data) {
  const charsHTML = data.characters.map(c => `
    <div class="sahabat-pill ${c.borderClass}" data-char-id="${c.id}">
      <span class="char-icon">${c.icon}</span>
      <div class="char-info">
        <span class="char-name">${c.name}</span>
        <span class="char-origin">${c.origin}</span>
      </div>
    </div>
  `).join('');

  const housesHTML = data.houses.map(h => `
    <div class="cover-house-card" data-house-id="${h.id}" title="${h.fact}">
      <img src="${h.icon}" alt="${h.name}" class="house-thumb-icon" />
      <span class="house-name">${h.name}</span>
    </div>
  `).join('');

  return `
    <div class="page a5-page page-cover" data-page-id="0">
      <div class="page-inner cover-page-inner">
        <!-- Top Yellow Pill Badge -->
        <div class="cover-header">
          <div class="top-pill-badge">${data.badge}</div>
          <h1 class="cover-title-3d">${data.title}</h1>
          <div class="subtitle-pill-badge">
            <span class="book-ico">📖</span>
            <span>${data.subtitle}</span>
            <span class="star-ico">⭐</span>
          </div>
        </div>

        <!-- Middle Main Content -->
        <div class="cover-main-grid">
          <!-- Left Column: Big Illustration Card -->
          <div class="cover-left-card">
            <div class="illustration-frame">
              <img src="${data.coverArt}" alt="Ilustrasi Keberagaman Budaya" class="cover-main-img" />
              <div class="illustration-bottom-tag">
                <span class="handshake-icon">🤝</span>
                <span>${data.artPill}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Sahabat, Identitas, Inspirasi -->
          <div class="cover-right-card">
            <!-- Kenali Sahabat Barumu -->
            <div class="sub-card card-sahabat-box">
              <div class="card-badge-header">KENALI SAHABAT BARUMU:</div>
              <div class="sahabat-grid">
                ${charsHTML}
              </div>
            </div>

            <!-- Buku Ini Milik Input Box -->
            <div class="sub-card card-milik-box">
              <div class="card-milik-top">
                <span class="milik-title">✏️ Buku Ini Milik:</span>
                <span class="kelas-badge">Kelas Literasi SD</span>
              </div>
              <div class="milik-inputs">
                <div class="milik-row">
                  <span class="milik-label">Nama</span>
                  <input type="text" id="cover-input-name" class="cover-input" placeholder="Tulis namamu disini..." value="Naya Amanda" />
                </div>
                <div class="milik-cols">
                  <div class="milik-col-item">
                    <span class="milik-label">Kelas</span>
                    <input type="text" id="cover-input-class" class="cover-input" placeholder="Contoh: 4-A" value="Kelas 4 - Cendrawasih" />
                  </div>
                  <div class="milik-col-item">
                    <span class="milik-label">Sekolah</span>
                    <input type="text" id="cover-input-school" class="cover-input" placeholder="SD Nusantara" value="SD Negeri Nusantara 01" />
                  </div>
                </div>
              </div>
            </div>

            <!-- 3 Cerita Penuh Inspirasi Banner -->
            <div class="sub-card card-inspirasi-banner">
              <div class="inspirasi-left">
                <div class="trophy-row">
                  <span class="trophy-ico">🏆</span>
                  <span class="inspirasi-title">3 Cerita Penuh Inspirasi</span>
                </div>
                <div class="inspirasi-sub">Festival Sekolah, Gotong Royong, & Warisan Budaya</div>
              </div>
              <div class="badge-kuis-pill">3 Kuis</div>
            </div>
          </div>
        </div>

        <!-- Bottom Houses Bar -->
        <div class="cover-bottom-bar">
          <div class="cover-houses-list">
            ${housesHTML}
          </div>
          <button class="btn-start-reading" id="btn-cover-start">
            <span>Buka Halaman 1</span>
            <span class="arrow-ico">→</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// HALAMAN 1: IDENTITAS SISWA (Halaman 1 dari 8)
// -------------------------------------------------------------
function renderIdentityPage(data) {
  const charsSelectHTML = data.characters.map((c, i) => `
    <button type="button" class="char-select-btn ${i === 0 ? 'active' : ''}" data-char-id="${c.id}" data-char-name="${c.name}">
      <span class="char-sym">${c.icon}</span>
      <div class="char-text-col">
        <span class="c-name">${c.name}</span>
        <span class="c-orig">${c.origin}</span>
      </div>
    </button>
  `).join('');

  const housesCardsHTML = data.houses.map(h => `
    <div class="house-detail-card" data-house-id="${h.id}" title="${h.fact}">
      <img src="${h.icon}" alt="${h.name}" class="house-icon-small" />
      <div class="house-info-col">
        <span class="h-name">${h.name}</span>
        <span class="h-prov">${h.origin}</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="page a5-page page-identity" data-page-id="1">
      <div class="page-inner identity-page-inner">
        <!-- Spiral Binder Edge Decoration on Left -->
        <div class="notebook-spine-marks">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <!-- Header -->
        <div class="identity-header">
          <div class="identity-top-pill">${data.badge}</div>
          <h2 class="identity-title">${data.title}</h2>
          <p class="identity-sub">${data.subtitle}</p>
        </div>

        <!-- Main 2-Column Form Body -->
        <div class="identity-main-grid">
          <!-- Left Column: Inputs & Characters -->
          <div class="identity-left-col">
            <!-- Full Width Field: Nama Lengkap Siswa -->
            <div class="identity-field-card field-full">
              <div class="field-icon-box">💼</div>
              <div class="field-content-col">
                <label class="field-label" for="ident-input-name">NAMA LENGKAP SISWA</label>
                <input type="text" id="ident-input-name" class="ident-text-input" value="Naya Amanda" placeholder="Tulis nama lengkapmu..." />
              </div>
              <div class="check-badge-circle" title="Tersimpan">✔</div>
            </div>

            <!-- 2-Columns Field: Kelas & Sekolah -->
            <div class="identity-fields-row">
              <div class="identity-field-card field-half">
                <div class="field-icon-box">🎓</div>
                <div class="field-content-col">
                  <label class="field-label" for="ident-input-class">KELAS</label>
                  <input type="text" id="ident-input-class" class="ident-text-input" value="Kelas 4 - Cendrawasih" placeholder="Kelas..." />
                </div>
              </div>
              <div class="identity-field-card field-half">
                <div class="field-icon-box">🏢</div>
                <div class="field-content-col">
                  <label class="field-label" for="ident-input-school">SEKOLAH</label>
                  <input type="text" id="ident-input-school" class="ident-text-input" value="SD Negeri Nusantara 01" placeholder="Nama sekolah..." />
                </div>
              </div>
            </div>

            <!-- Karakter Sahabat Nusantara Selector -->
            <div class="char-selection-wrapper">
              <div class="char-selection-header">
                <span class="char-sec-title">👧 Pilih Karakter Sahabat Nusantara-mu:</span>
                <span class="char-selected-pill">Karakter Terpilih: <strong id="char-selected-label">Naya</strong></span>
              </div>
              <div class="char-buttons-row">
                ${charsSelectHTML}
              </div>
            </div>
          </div>

          <!-- Right Column: Tiket Cilik & Audio Guide -->
          <div class="identity-right-col">
            <div class="ticket-cilik-card">
              <div class="ticket-medal-circle">🎖️</div>
              <h3 class="ticket-title">Tiket Petualang Cilik</h3>
              <p class="ticket-desc">Jelajahi 4 Rumah Adat dan Temukan Pesan Indah Keberagaman!</p>
              <div class="ticket-status-pill">✔ Siap Belajar</div>
            </div>

            <button type="button" class="btn-guide-audio" id="btn-ident-audio" title="Dengarkan panduan audio">
              <div class="audio-btn-icon">🔊</div>
              <div class="audio-btn-text">
                <span class="audio-title">Dengarkan Petunjuk</span>
                <span class="audio-sub">Klik untuk panduan suara</span>
              </div>
            </button>
          </div>
        </div>

        <!-- 4 Rumah Adat Nusantara Section -->
        <div class="identity-houses-section">
          <div class="houses-section-header">
            <span class="houses-title">🏛️ Jelajahi 4 Rumah Adat Nusantara</span>
            <span class="houses-hint">Sentuh rumah untuk melihat asalnya!</span>
          </div>
          <div class="houses-grid-cards">
            ${housesCardsHTML}
          </div>
        </div>

        <!-- Footer Navigation Bar -->
        <div class="page-footer-bar">
          <button type="button" class="footer-nav-btn btn-home" id="btn-ident-cover">
            <span>⌂</span>
            <span>Cover Depan</span>
          </button>
          <div class="footer-center-pill">
            Halaman 1 dari 8 • Buku Cerita Interaktif
          </div>
          <div class="footer-nav-group">
            <button type="button" class="footer-nav-btn" id="btn-ident-prev">
              <span>← Kembali</span>
            </button>
            <button type="button" class="footer-nav-btn btn-highlight" id="btn-ident-next">
              <span>Mulai Petualangan →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// HALAMAN 2: KATA PENGANTAR (Halaman 2 dari 8)
// -------------------------------------------------------------
function renderPrefacePage(data) {
  const valuesHTML = data.values.map(v => `
    <div class="preface-val-card">
      <span class="val-icon">${v.icon}</span>
      <span class="val-label">${v.label}</span>
      <span class="val-highlight">${v.value}</span>
    </div>
  `).join('');

  return `
    <div class="page a5-page page-preface" data-page-id="2">
      <div class="page-inner preface-page-inner">
        <!-- Top Header -->
        <div class="preface-header-row">
          <div class="preface-header-left">
            <div class="preface-title-row">
              <span class="preface-book-ico">📖</span>
              <span class="preface-star">★</span>
              <span class="preface-main-heading">${data.badge}</span>
              <span class="preface-star">★</span>
            </div>
            <p class="preface-welcome-sub">${data.subtitle}</p>
          </div>
          <div class="preface-audio-ready-pill" id="badge-preface-audio">
            <span class="speaker-sound-wave">🔊</span>
            <span>Audio Siap</span>
          </div>
        </div>

        <!-- Main 2-Column Body -->
        <div class="preface-main-grid">
          <!-- Left Column: Artwork + Audio Button + Quote -->
          <div class="preface-left-col">
            <!-- Illustration Banner with Tag -->
            <div class="preface-art-box">
              <img src="${data.prefaceArt}" alt="Kata Pengantar Budaya Nusantara" class="preface-art-img" />
              <div class="preface-bhinneka-tag">
                <span class="flag-icon">🇮🇩</span>
                <span>Bhinneka Tunggal Ika</span>
              </div>
            </div>

            <!-- Audio Narrator Pill Button -->
            <button type="button" class="btn-preface-audio" id="btn-preface-play-audio">
              <div class="audio-circle-speaker">🔊</div>
              <div class="audio-meta-col">
                <span class="p-audio-title">Dengarkan Pengantar</span>
                <span class="p-audio-sub">Suara ramah Kak Bintang</span>
              </div>
            </button>

            <!-- Quote Box -->
            <div class="preface-quote-box">
              <span class="bulb-ico">💡</span>
              <p class="quote-text">"${data.quote}"</p>
            </div>
          </div>

          <!-- Right Column: Narrative Story Text & 3 Pillars -->
          <div class="preface-right-col">
            <div class="preface-narrative-content">
              <p>${data.paragraphs[0]}</p>
              <p class="bold-highlight">${data.paragraphs[1]}</p>
              <p>${data.paragraphs[2]}</p>
              <p class="cta-highlight">${data.paragraphs[3]}</p>
            </div>

            <!-- 3 Core Pillars -->
            <div class="preface-values-row">
              ${valuesHTML}
            </div>
          </div>
        </div>

        <!-- Footer Navigation Bar -->
        <div class="page-footer-bar">
          <div class="footer-nav-left-group">
            <button type="button" class="footer-nav-btn" id="btn-preface-prev">
              <span>← Buku Ini Milik</span>
            </button>
            <button type="button" class="footer-nav-btn btn-icon-square" id="btn-preface-home" title="Cover Depan">
              <span>⌂</span>
            </button>
          </div>
          <div class="footer-center-pill">
            <span class="bookmark-ico">🔖</span>
            <span>Halaman 2 dari 8 • Buku Cerita Interaktif</span>
          </div>
          <div class="footer-nav-group">
            <button type="button" class="footer-nav-btn btn-highlight" id="btn-preface-next">
              <span>Daftar Isi →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
