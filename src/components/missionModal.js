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
      let statusIcon = opt.key;
      if (existingAnswer && existingAnswer.selected === opt.key) {
        statusClass = existingAnswer.isCorrect ? 'is-correct' : 'is-wrong';
        statusIcon = existingAnswer.isCorrect ? '✓' : '✗';
      }
      return `
        <button
          type="button"
          class="mission-option-btn mission-option-btn--${opt.key.toLowerCase()} ${statusClass}"
          data-key="${opt.key}"
          aria-label="Pilihan ${opt.key}: ${opt.text}"
        >
          <span class="mission-option-badge">${statusIcon}</span>
          <span class="mission-option-text">${opt.text}</span>
        </button>
      `;
    })
    .join('');

  return `
    <div id="mission-modal" class="mission-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="mission-dialog-title">
      <div class="mission-modal-container">
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

          <!-- Layer 10: Kartu Pilihan Jawaban Interaktif (A, B, C) -->
          <div class="mission-answers-container" style="${getCanvaStyle('mission01', 'answerCard')}">
            <div class="mission-options-list">
              ${optionsHTML}
            </div>
          </div>

          <!-- Layer 11: Tombol Lanjut ke Cerita di Bagian Bawah Modal -->
          <div class="mission-modal-bottom-bar">
            <button type="button" class="mission-back-story-btn" id="btn-return-story" aria-label="Kembali ke Cerita">
              <span>Kembali Membaca Cerita</span>
            </button>
          </div>

          <!-- Layer 12: Layer Feedback Interaktif (Jawaban Benar / Salah) -->
          <div id="mission-feedback-layer" class="mission-feedback-layer" aria-live="polite"></div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render HTML untuk Pop-up Jawaban Benar (Misi Berhasil)
 * @param {Object} missionData - Data misi
 * @returns {string} HTML string
 */
export function renderFeedbackRightHTML(missionData) {
  const assets = missionData.assets.feedbackRight || {
    popupFull: '/mission/misi-01/feedback/right/pop-up-jawaban-benar.png',
    btnContinue: '/mission/misi-01/feedback/right/lanjut-cerita.png'
  };

  return `
    <div class="feedback-modal-view feedback-modal-view--right" id="feedback-right-view">
      <!-- Full Composite Canvas Canva Pop-up Jawaban Benar -->
      <img
        src="${assets.popupFull}"
        alt="Jawaban Benar! Misi Berhasil!"
        class="feedback-bg-img"
        draggable="false"
      />

      <!-- Tombol Interaktif Lanjut Cerita -->
      <button
        type="button"
        class="feedback-action-btn feedback-action-btn--continue"
        id="btn-feedback-continue"
        style="${getCanvaStyle('missionFeedbackRight', 'continueBtn')}"
        aria-label="Lanjut Cerita"
        title="Lanjut Cerita"
      >
        <img
          src="${assets.btnContinue}"
          alt="Lanjut Cerita"
          class="feedback-action-btn-img"
          draggable="false"
        />
      </button>
    </div>
  `;
}

/**
 * Render HTML untuk Pop-up Jawaban Salah (Belum Tepat, Yuk Coba Lagi!)
 * @param {Object} missionData - Data misi
 * @returns {string} HTML string
 */
export function renderFeedbackWrongHTML(missionData) {
  const assets = missionData.assets.feedbackWrong || {
    popupFull: '/mission/misi-01/feedback/wrong/pop-up-jawaban-salah.png',
    btnRetry: '/mission/misi-01/feedback/wrong/coba-lagi.png'
  };

  return `
    <div class="feedback-modal-view feedback-modal-view--wrong" id="feedback-wrong-view">
      <!-- Full Composite Canvas Canva Pop-up Jawaban Salah -->
      <img
        src="${assets.popupFull}"
        alt="Jawaban Salah! Belum Tepat, Yuk Coba Lagi!"
        class="feedback-bg-img"
        draggable="false"
      />

      <!-- Tombol Interaktif Coba Lagi -->
      <button
        type="button"
        class="feedback-action-btn feedback-action-btn--retry"
        id="btn-feedback-retry"
        style="${getCanvaStyle('missionFeedbackWrong', 'retryBtn')}"
        aria-label="Coba Lagi"
        title="Coba Lagi"
      >
        <img
          src="${assets.btnRetry}"
          alt="Coba Lagi"
          class="feedback-action-btn-img"
          draggable="false"
        />
      </button>
    </div>
  `;
}
