import { pagesData } from './data/pagesData.js';
import { renderPageHTML } from './components/pageRenderer.js';
import { audioService } from './services/audioService.js';
import { quizService } from './services/quizService.js';
import { getMissionById } from './data/missionsData.js';
import { renderMissionModalHTML, renderFeedbackRightHTML, renderFeedbackWrongHTML } from './components/missionModal.js';

let currentPageIndex = 0;
let isAudioSpeaking = false;
let cleanupAnimation = null;

document.addEventListener('DOMContentLoaded', () => {
  // Check initial hash for page number (#page-1, #page-2, #page-3)
  const hashMatch = window.location.hash.match(/page-(\d+)/i) || window.location.hash.match(/(\d+)/);
  if (hashMatch) {
    const pageNum = parseInt(hashMatch[1], 10);
    if (pageNum >= 1 && pageNum <= pagesData.length) {
      currentPageIndex = pageNum - 1;
    }
  }

  renderCurrentPage();

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      const currentPage = pagesData[currentPageIndex];
      if (currentPage?.hasMission && currentPage?.missionId) {
        openMissionModal(currentPage.missionId);
      } else if (currentPageIndex < pagesData.length - 1) {
        goToPage(currentPageIndex + 2, 'forward');
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentPageIndex > 0) {
        goToPage(currentPageIndex, 'backward');
      }
    }
  });

  // Listen to hash changes (e.g. browser back/forward)
  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/page-(\d+)/i) || window.location.hash.match(/(\d+)/);
    if (match) {
      const pageNum = parseInt(match[1], 10);
      const targetIndex = pageNum - 1;
      if (targetIndex >= 0 && targetIndex < pagesData.length && targetIndex !== currentPageIndex) {
        goToPage(pageNum, targetIndex > currentPageIndex ? 'forward' : 'backward');
      }
    }
  });
});

function goToPage(pageNumber, direction = 'forward') {
  const targetIndex = pageNumber - 1;
  if (targetIndex < 0 || targetIndex >= pagesData.length) return;

  // Stop TTS narration if active when changing page
  if (isAudioSpeaking) {
    audioService.stop();
    isAudioSpeaking = false;
  }

  currentPageIndex = targetIndex;
  window.location.hash = `#page-${pageNumber}`;
  renderCurrentPage(direction);
}

function renderCurrentPage(direction = '') {
  const stage = document.getElementById('page-stage');
  if (!stage) return;

  // Cancel prior animation frame loop if any
  if (cleanupAnimation) {
    cleanupAnimation();
    cleanupAnimation = null;
  }

  const pageData = pagesData[currentPageIndex];
  stage.innerHTML = renderPageHTML(pageData);

  const canvas = stage.querySelector('.page-canvas');
  if (canvas && direction) {
    canvas.classList.add(direction === 'forward' ? 'page-transition-forward' : 'page-transition-backward');
  }

  setupInteractions();
  cleanupAnimation = initFloatingCursorButtons();
}

function setupInteractions() {
  const stage = document.getElementById('page-stage');
  if (!stage) return;

  const nextBtn = stage.querySelector('.floating-nav-btn--next');
  const backBtn = stage.querySelector('.floating-nav-btn--back');
  const homeBtn = stage.querySelector('.floating-nav-btn--home');
  const audioBtn = stage.querySelector('.floating-nav-btn--audio');
  const kuisBtn = stage.querySelector('.floating-nav-btn--kuis');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const currentPage = pagesData[currentPageIndex];
      if (currentPage?.hasMission && currentPage?.missionId) {
        const answer = quizService.getAnswer(currentPage.missionId);
        if (!answer || !answer.isCorrect) {
          openMissionModal(currentPage.missionId);
          return;
        }
      }
      if (currentPageIndex < pagesData.length - 1) {
        goToPage(currentPageIndex + 2, 'forward');
      } else {
        showTemporaryNotice('Halaman berikutnya segera hadir!');
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (currentPageIndex > 0) {
        goToPage(currentPageIndex, 'backward');
      }
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      goToPage(1, 'backward');
    });
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      toggleAudioNarration(audioBtn);
    });
  }

  if (kuisBtn) {
    kuisBtn.addEventListener('click', () => {
      showTemporaryNotice('Kuis interaktif segera hadir!');
    });
  }

  // Interactive Table of Contents items on Page 3
  const tocItems = stage.querySelectorAll('.p3-toc-item');
  tocItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetPage = parseInt(item.dataset.targetPage, 10);
      if (targetPage <= pagesData.length) {
        goToPage(targetPage, targetPage > currentPageIndex + 1 ? 'forward' : 'backward');
      } else {
        showTemporaryNotice(`Halaman ${targetPage} segera hadir!`);
      }
    });
  });

  // Interactive Mission Trigger (misalnya tombol Misi 1 di Halaman 9)
  const missionTriggers = stage.querySelectorAll('[data-mission]');
  missionTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const missionId = btn.dataset.mission || 'misi-01';
      openMissionModal(missionId);
    });
  });

  // Interactive Mission Options on Page 10 (fallback jika dibuka langsung)
  const missionBtns = stage.querySelectorAll('.p10-option-btn');
  if (missionBtns.length > 0) {
    const existingAnswer = quizService.getAnswer(10);
    if (existingAnswer) {
      const selectedBtn = stage.querySelector(`.p10-option-btn[data-key="${existingAnswer.selected}"]`);
      if (selectedBtn) {
        selectedBtn.classList.add(existingAnswer.isCorrect ? 'is-correct' : 'is-wrong');
      }
    }

    missionBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.dataset.key;
        const isCorrect = quizService.submitAnswer(10, key, 'C');

        missionBtns.forEach((b) => b.classList.remove('is-correct', 'is-wrong'));
        btn.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

        if (isCorrect) {
          showTemporaryNotice('🎉 Luar biasa! Ketiga budaya tampil bersama!');
        } else {
          showTemporaryNotice('Coba pikirkan lagi solusi terbaik untuk semua sahabat ya!');
        }
      });
    });
  }

  // Interactive Button Cards on Page 4 (Kenali Tombol)
  const introBtns = stage.querySelectorAll('.p4-circle-btn');
  introBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      if (action === 'audio') {
        audioService.speak('Ini tombol Audio, digunakan untuk mendengarkan narasi suara cerita.');
      } else if (action === 'back') {
        goToPage(3, 'backward');
      } else if (action === 'next') {
        goToPage(5, 'forward');
      } else if (action === 'home') {
        goToPage(1, 'backward');
      } else if (action === 'kuis') {
        audioService.speak('Ini tombol Kuis, untuk menguji pemahaman budaya setelah membaca cerita.');
        showTemporaryNotice('Kuis interaktif segera hadir di Halaman 12!');
      } else if (action === 'games') {
        audioService.speak('Ini tombol Games, untuk memainkan permainan budaya nusantara yang seru.');
        showTemporaryNotice('Mini games interaktif segera hadir!');
      }
    });
  });
}

function toggleAudioNarration(audioBtn) {
  if (isAudioSpeaking) {
    audioService.stop();
    isAudioSpeaking = false;
    audioBtn.classList.remove('is-playing');
    return;
  }

  const currentPage = pagesData[currentPageIndex];
  let textToRead = '';

  if (currentPage.type === 'cover-page-01') {
    textToRead = `${currentPage.titleTop} ${currentPage.titleBottom}. ${currentPage.subtitleTop} ${currentPage.subtitleBottom}. Selamat datang di buku interaktif keberagaman budaya Indonesia!`;
  } else if (currentPage.type === 'content-page-02') {
    textToRead = `${currentPage.title}. ${currentPage.bodyParagraphs.join(' ')}`;
  } else if (currentPage.type === 'content-page-03') {
    textToRead = `Daftar Isi. Cover halaman 1, Kata Pengantar halaman 2, Daftar Isi halaman 3, Kenali Tombol halaman 4, Petunjuk Penggunaan halaman 5, Cerita 1 Tiga Warna di Festival Sekolah halaman 7.`;
  } else if (currentPage.type === 'content-page-04') {
    textToRead = `Kenali Tombol. Audio untuk mendengarkan suara narasi. Kembali untuk halaman sebelumnya. Lanjut untuk halaman berikutnya. Kuis untuk membuka kuis interaktif. Home untuk kembali ke halaman utama. Games untuk bermain mini games.`;
  } else if (currentPage.type === 'content-page-05') {
    textToRead = `${currentPage.title}. ${currentPage.bodyParagraphs.map(p => p.replace(/<[^>]*>/g, '')).join(' ')}`;
  } else if (currentPage.type === 'content-page-06') {
    textToRead = `Yuk, Kita Mulai! Petualang Ceritanya! Kenalkan para sahabat nusantara: Naya dari Jawa Barat, Rafi dari Sumatera Barat, Sinta dari Jawa Tengah, dan Danu dari Papua. Mari berpetualang bersama!`;
  } else if (currentPage.type === 'content-page-07') {
    textToRead = `Cerita 1. Tiga Warna di Festival Sekolah. Nilai: Toleransi. Bersama para sahabat nusantara: Rafi dari Sumatera Barat, Naya dari Jawa Barat, dan Danu dari Papua di festival sekolah!`;
  } else if (currentPage.type === 'content-page-08') {
    textToRead = currentPage.bodyParagraphs && currentPage.bodyParagraphs.length > 0
      ? currentPage.bodyParagraphs.join(' ')
      : `Hari ini sekolah Naya mengadakan Festival Budaya Indonesia. Setiap kelompok menampilkan budaya dari beberapa daerah. Naya memakai pakaian adat Sunda dan membawa gambar Rumah Julang Ngapak. Rafi memakai pakaian adat Minangkabau dan membawa gambar Rumah Gadang. Danu membawa gambar Rumah Honai dari Papua. Mereka bertiga satu kelompok. Awalnya mereka sangat bersemangat.`;
  } else if (currentPage.type === 'content-page-09') {
    textToRead = currentPage.bodyParagraphs && currentPage.bodyParagraphs.length > 0
      ? currentPage.bodyParagraphs.join(' ')
      : `Naya berkata, "Kita tampilkan budaya Jawa Barat saja, ya." Rafi menggeleng. "Aku juga ingin mengenalkan Rumah Gadang." Danu menambahkan, "Aku ingin kalian mengenal Rumah Honai." Tidak ada yang mau mengalah.`;
  } else if (currentPage.type === 'content-page-10') {
    textToRead = currentPage.bodyParagraphs && currentPage.bodyParagraphs.length > 0
      ? `${currentPage.title}. ${currentPage.bodyParagraphs.join(' ')}`
      : `Mereka memilih tampil bersama. Guru tersenyum dan berkata, "Setiap budaya itu unik." Naya mengenalkan Rumah Julang Ngapak. Rafi mengenalkan Rumah Gadang. Danu mengenalkan Rumah Honai.`;
  } else if (currentPage.type === 'content-page-11') {
    textToRead = currentPage.bodyParagraphs && currentPage.bodyParagraphs.length > 0
      ? `${currentPage.title}. ${currentPage.bodyParagraphs.join(' ')}`
      : `Naya membagikan klepon, kue bulat berisi gula merah. Rafi berseru, "Di kampungku namanya onde-onde!" Kue yang sama punya nama berbeda di tiap daerah. Itu salah satu keragaman budaya yang patut kita syukuri. Indonesia punya banyak suku, bahasa, pakaian, dan makanan. Semuanya membuat Indonesia kaya.`;
  }

  isAudioSpeaking = true;
  audioBtn.classList.add('is-playing');

  audioService.speak(textToRead, () => {
    isAudioSpeaking = false;
    audioBtn.classList.remove('is-playing');
  });
}

function showTemporaryNotice(message) {
  const existing = document.querySelector('.floating-notice-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'floating-notice-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(22, 39, 61, 0.92);
    color: #ffffff;
    font-family: var(--font-title);
    font-size: 0.95rem;
    font-weight: 700;
    padding: 10px 22px;
    border-radius: 999px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease, transform 0.25s ease;
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(4px)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-4px)';
    setTimeout(() => toast.remove(), 260);
  }, 2200);
}

/**
 * Floating cursor-reactive wave ("naik-turun" mengikuti kursor)
 * for the bottom navigation buttons.
 */
function initFloatingCursorButtons() {
  const stage = document.getElementById('page-stage');
  const buttons = Array.from(document.querySelectorAll('.floating-nav-btn'));
  if (!stage || buttons.length === 0) return null;

  let isRunning = true;
  let rafId = null;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pointer = {
    active: false,
    x: 0,
    y: 0
  };

  const states = buttons.map((el, index) => ({
    el,
    index,
    tx: 0,
    ty: 0,
    scale: 1,
    rot: 0,
    shadowY: 6,
    shadowBlur: 10,
    clickBounce: 0
  }));

  const onPointerMove = (e) => {
    pointer.active = true;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  };

  const onPointerLeave = () => {
    pointer.active = false;
  };

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('mouseleave', onPointerLeave);

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      audioService.playClickSound();
      states[idx].clickBounce = -10;
    });
  });

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const tick = (now) => {
    if (!isRunning) return;

    const t = now * 0.001;
    const stageRect = stage.getBoundingClientRect();
    const scaleRatio = stageRect.width / 800;
    const radius = Math.max(150, stageRect.width * 0.44);
    const maxLift = 24 * scaleRatio;
    const idleAmp = reducedMotion ? 0 : 4.5 * scaleRatio;

    for (const state of states) {
      const rect = state.el.getBoundingClientRect();
      const baseCx = rect.left + rect.width * 0.5 - state.tx;
      const baseCy = rect.top + rect.height * 0.5 - state.ty;

      const idleWave = Math.sin(t * 2.4 + state.index * 0.95) * idleAmp;

      let targetTx = 0;
      let targetTy = idleWave;
      let targetScale = 1;
      let targetRot = 0;
      let targetShadowY = 6;
      let targetShadowBlur = 10;

      if (pointer.active && !reducedMotion) {
        const dx = pointer.x - baseCx;
        const dy = pointer.y - baseCy;
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          const proximity = Math.pow(1 - dist / radius, 1.5);
          const cursorLift = -proximity * maxLift;
          const followX = clamp(dx * 0.14 * proximity, -14 * scaleRatio, 14 * scaleRatio);
          const followY = clamp(dy * 0.11 * proximity, -12 * scaleRatio, 10 * scaleRatio);

          targetTx = followX;
          targetTy = idleWave * (1 - proximity * 0.35) + cursorLift + followY;
          targetScale = 1 + proximity * 0.16;
          targetRot = clamp(dx * 0.045 * proximity, -6, 6);
          targetShadowY = 6 + proximity * 14;
          targetShadowBlur = 10 + proximity * 12;
        }
      }

      state.clickBounce *= 0.82;
      if (Math.abs(state.clickBounce) < 0.05) state.clickBounce = 0;
      targetTy += state.clickBounce * scaleRatio;

      const ease = 0.16;
      state.tx += (targetTx - state.tx) * ease;
      state.ty += (targetTy - state.ty) * ease;
      state.scale += (targetScale - state.scale) * ease;
      state.rot += (targetRot - state.rot) * ease;
      state.shadowY += (targetShadowY - state.shadowY) * ease;
      state.shadowBlur += (targetShadowBlur - state.shadowBlur) * ease;

      state.el.style.setProperty('--tx', `${state.tx.toFixed(2)}px`);
      state.el.style.setProperty('--ty', `${state.ty.toFixed(2)}px`);
      state.el.style.setProperty('--scale', state.scale.toFixed(4));
      state.el.style.setProperty('--rot', `${state.rot.toFixed(2)}deg`);
      state.el.style.setProperty('--shadow-y', `${state.shadowY.toFixed(1)}px`);
      state.el.style.setProperty('--shadow-blur', `${state.shadowBlur.toFixed(1)}px`);
    }

    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);

  return () => {
    isRunning = false;
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerleave', onPointerLeave);
    document.removeEventListener('mouseleave', onPointerLeave);
  };
}

/**
 * Membuka Pop-up Modal Misi Interaktif
 * @param {string} missionId - ID misi (misal: 'misi-01')
 */
function openMissionModal(missionId = 'misi-01') {
  const missionData = getMissionById(missionId);
  if (!missionData) return;

  const modalRoot = document.getElementById('mission-modal-root');
  if (!modalRoot) return;

  const existingAnswer = quizService.getAnswer(missionId);
  modalRoot.innerHTML = renderMissionModalHTML(missionData, existingAnswer);

  const backdrop = document.getElementById('mission-modal');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    backdrop?.classList.add('is-open');
  });

  // Pre-decode gambar feedback jawaban agar saat muncul tidak ada lag / freeze
  const preloadImg = (src) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  };
  preloadImg(missionData.assets?.feedbackRight?.popupFull || '/mission/misi-01/feedback/right/pop-up-jawaban-benar.png');
  preloadImg(missionData.assets?.feedbackWrong?.popupFull || '/mission/misi-01/feedback/wrong/pop-up-jawaban-salah.png');

  const returnStoryBtn = document.getElementById('btn-return-story');

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    backdrop?.classList.remove('is-open');
    setTimeout(() => {
      modalRoot.innerHTML = '';
    }, 280);
  };

  returnStoryBtn?.addEventListener('click', closeModal);

  // Klik di luar container untuk menutup modal
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // Tutup dengan tombol ESC
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', handleKeydown);
    }
  };
  window.addEventListener('keydown', handleKeydown);

  // Handle pilihan interaktif A, B, C di dalam modal
  const optionBtns = backdrop.querySelectorAll('.mission-option-btn');
  optionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.key;
      const isCorrect = quizService.submitAnswer(missionId, key, missionData.correctAnswer);

      // Reset semua status visual opsi
      optionBtns.forEach((b) => {
        b.classList.remove('is-correct', 'is-wrong');
        const bBadge = b.querySelector('.mission-option-badge');
        if (bBadge) bBadge.textContent = b.dataset.key;
      });

      // Tandai tombol yang dipilih
      btn.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
      const badge = btn.querySelector('.mission-option-badge');
      if (badge) {
        badge.textContent = isCorrect ? '✓' : '✗';
      }

      if (isCorrect) {
        showTemporaryNotice(missionData.feedback?.correct || '🎉 Luar biasa! Solusi terbaik!');

        // Tampilkan pop-up Jawaban Benar (Misi Berhasil) setelah selebrasi
        setTimeout(() => {
          const feedbackLayer = backdrop.querySelector('#mission-feedback-layer');
          if (feedbackLayer) {
            feedbackLayer.innerHTML = renderFeedbackRightHTML(missionData);
            feedbackLayer.classList.add('is-active');

            // Handle klik tombol "Lanjut Cerita"
            const continueBtn = feedbackLayer.querySelector('#btn-feedback-continue');
            continueBtn?.addEventListener('click', (ev) => {
              ev.stopPropagation();
              closeModal();
              showTemporaryNotice('🎉 Hebat! Kamu telah menyelesaikan Misi 1!');
              goToPage(10, 'forward');
            });
          }
        }, 650);
      } else {
        showTemporaryNotice(missionData.feedback?.wrong || 'Coba pikirkan lagi ya!');

        // Tampilkan pop-up Jawaban Salah (Belum Tepat, Yuk Coba Lagi!)
        setTimeout(() => {
          const feedbackLayer = backdrop.querySelector('#mission-feedback-layer');
          if (feedbackLayer) {
            feedbackLayer.innerHTML = renderFeedbackWrongHTML(missionData);
            feedbackLayer.classList.add('is-active');

            // Handle klik tombol "Coba Lagi"
            const retryBtn = feedbackLayer.querySelector('#btn-feedback-retry');
            retryBtn?.addEventListener('click', (ev) => {
              ev.stopPropagation();
              feedbackLayer.classList.remove('is-active');
              feedbackLayer.innerHTML = '';
              // Reset status tombol opsi agar siswa dapat mencoba lagi
              optionBtns.forEach((b) => {
                b.classList.remove('is-correct', 'is-wrong');
                const bBadge = b.querySelector('.mission-option-badge');
                if (bBadge) bBadge.textContent = b.dataset.key;
              });
            });
          }
        }, 650);
      }
    });
  });
}
