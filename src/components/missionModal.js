import { getCanvaStyle } from '../data/canvaLayout.js';

/**
 * Render HTML untuk Pop-up Modal Misi Interaktif
 * @param {Object} missionData - Data misi dari missionsData.js
 * @param {Object|null} existingAnswer - Jawaban siswa sebelumnya { selected, isCorrect }
 * @returns {string} HTML string
 */
export function renderMissionModalHTML(missionData, existingAnswer = null) {
  const { assets, question, options = [] } = missionData;

  const optionsHTML = options
    .map((opt) => {
      let statusClass = '';
      if (existingAnswer && existingAnswer.selected === opt.key) {
        statusClass = existingAnswer.isCorrect ? 'is-correct' : 'is-wrong';
      }
      return `
        <button
          type="button"
          class="p10-option-btn mission-option-btn mission-option-btn--${opt.key.toLowerCase()} ${statusClass}"
          data-key="${opt.key}"
          aria-label="Pilihan ${opt.key}: ${opt.text}"
        >
          <span class="p10-option-indicator">${opt.key}</span>
          <span class="sr-only">${opt.text}</span>
        </button>
      `;
    })
    .join('');

  return `
    <div id="mission-modal" class="mission-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="mission-dialog-title">
      <div class="mission-modal-container">
        <!-- Tombol Tutup / Kembali Modal (Pojok Kanan Atas) -->
        <button type="button" class="mission-modal-close-btn" id="btn-close-mission" aria-label="Tutup Pop-up Misi">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Canvas Misi Rasio 1:1 Berbasis Canva Calibrated Layout -->
        <div class="mission-modal-canvas" id="mission-canvas">
          <!-- Layer 1: Background Misi -->
          <img src="${assets.background}" alt="" class="layer layer-p10-bg" draggable="false" />

          <!-- Layer 2: Dedaunan Hias Atas Kanan -->
          <img src="${assets.foliageTop}" alt="" class="layer layer-p10-foliage-top-right" style="${getCanvaStyle('mission01', 'foliageTopRight')}" draggable="false" />

          <!-- Layer 3: Dedaunan Hias Atas Kiri (flipH: true) -->
          <img src="${assets.foliageTop}" alt="" class="layer layer-p10-foliage-top-left" style="${getCanvaStyle('mission01', 'foliageTopLeft')}" draggable="false" />

          <!-- Layer 4: Pagar Kayu Bawah Kiri & Kanan -->
          <img src="${assets.fence}" alt="" class="layer layer-p10-fence layer-p10-fence-left" style="${getCanvaStyle('mission01', 'fenceLeft')}" draggable="false" />
          <img src="${assets.fence}" alt="" class="layer layer-p10-fence layer-p10-fence-right" style="${getCanvaStyle('mission01', 'fenceRight')}" draggable="false" />

          <!-- Layer 5: Semak Dedaunan Bawah Kiri -->
          <img src="${assets.bushBottomLeft}" alt="" class="layer layer-p10-bush-left" style="${getCanvaStyle('mission01', 'bushBottomLeft')}" draggable="false" />

          <!-- Layer 6: Semak Bunga Bawah Kanan -->
          <img src="${assets.bushBottomRight}" alt="" class="layer layer-p10-bush-right" style="${getCanvaStyle('mission01', 'bushBottomRight')}" draggable="false" />

          <!-- Layer 7: Badge Judul MISI -->
          <img src="${assets.misiBadge}" alt="Misi" class="layer layer-p10-misi" style="${getCanvaStyle('mission01', 'misi')}" draggable="false" />

          <!-- Layer 8: Lampu Ide & Pengantar Masalah -->
          <img src="${assets.lampuHeader}" alt="Pengantar Masalah" class="layer layer-p10-lampu" style="${getCanvaStyle('mission01', 'lampu')}" draggable="false" />

          <!-- Layer 9: Template Kartu Pertanyaan -->
          <div class="layer layer-p10-question-wrapper" style="${getCanvaStyle('mission01', 'questionCard')}">
            <img src="${assets.questionCard}" alt="${question}" class="p10-question-img" draggable="false" />
            <h2 id="mission-dialog-title" class="sr-only">${question}</h2>
          </div>

          <!-- Layer 10: Template Kartu Pilihan Jawaban Interaktif (A, B, C) -->
          <div class="layer layer-p10-answer-wrapper" style="${getCanvaStyle('mission01', 'answerCard')}">
            <img src="${assets.answerCard}" alt="Pilihan Jawaban" class="p10-answer-img" draggable="false" />
            <div class="p10-options-grid mission-options-grid">
              ${optionsHTML}
            </div>
          </div>

          <!-- Layer 11: Tombol Lanjut ke Cerita di Bagian Bawah Modal -->
          <div class="mission-modal-bottom-bar">
            <button type="button" class="mission-back-story-btn" id="btn-return-story" aria-label="Kembali ke Cerita">
              <span>Kembali Membaca Cerita</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
