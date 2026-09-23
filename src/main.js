import { PageFlip } from 'page-flip';
import { pagesData } from './data/pagesData.js';
import { renderPageHTML } from './components/pageRenderer.js';
import { audioService } from './services/audioService.js';

let flipBook = null;
let currentPageIndex = 0;
let isPrefaceAudioPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
  initFlipbook();
  initIdentitySync();
  initHouseCardsInteraction();
  initAudioGuides();
  initTopBarControls();
  initKeyboardNav();
});

// -------------------------------------------------------------
// 1. INISIALISASI FLIPBOOK (A5 LANDSCAPE)
// -------------------------------------------------------------
function initFlipbook() {
  const container = document.getElementById('flipbook-container');
  if (!container) return;

  // Render 3 Halaman A5
  const pagesHTML = pagesData.map(page => renderPageHTML(page)).join('');
  container.innerHTML = pagesHTML;

  // Dimensi standar A5 Landscape: 980 x 690 (Rasio ~1.419)
  flipBook = new PageFlip(container, {
    width: 980,
    height: 690,
    size: 'fixed',
    maxShadowOpacity: 0.45,
    showCover: false,
    mobileScrollSupport: true,
    usePortrait: true,
    startPage: 0,
    clickEventForward: true,
    disableFlipByClick: true // mencegah klik form/tombol terpicu flip tidak sengaja
  });

  flipBook.loadFromHTML(document.querySelectorAll('.page'));
  window.flipBook = flipBook;

  // Event listener saat halaman berhasil dibalik
  flipBook.on('flip', (e) => {
    currentPageIndex = e.data;
    audioService.playPageTurnSound();

    // Hentikan suara jika berpindah halaman
    if (isPrefaceAudioPlaying && currentPageIndex !== 2) {
      stopPrefaceAudio();
    }
  });

  // Pasang listener navigasi di dalam masing-masing halaman
  attachPageNavigation();
}

// -------------------------------------------------------------
// 2. NAVIGASI ANTAR HALAMAN
// -------------------------------------------------------------
function attachPageNavigation() {
  // Halaman 0: Cover
  const btnCoverStart = document.getElementById('btn-cover-start');
  if (btnCoverStart) {
    btnCoverStart.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(1);
    });
  }

  // Halaman 1: Identitas
  const btnIdentCover = document.getElementById('btn-ident-cover');
  if (btnIdentCover) {
    btnIdentCover.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(0);
    });
  }

  const btnIdentPrev = document.getElementById('btn-ident-prev');
  if (btnIdentPrev) {
    btnIdentPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(0);
    });
  }

  const btnIdentNext = document.getElementById('btn-ident-next');
  if (btnIdentNext) {
    btnIdentNext.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(2);
    });
  }

  // Halaman 2: Kata Pengantar
  const btnPrefacePrev = document.getElementById('btn-preface-prev');
  if (btnPrefacePrev) {
    btnPrefacePrev.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(1);
    });
  }

  const btnPrefaceHome = document.getElementById('btn-preface-home');
  if (btnPrefaceHome) {
    btnPrefaceHome.addEventListener('click', (e) => {
      e.stopPropagation();
      goToPage(0);
    });
  }

  const btnPrefaceNext = document.getElementById('btn-preface-next');
  if (btnPrefaceNext) {
    btnPrefaceNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast('📖 Halaman 3 (Daftar Isi) akan hadir pada update berikutnya!');
    });
  }
}

function goToPage(index) {
  if (!flipBook) return;
  flipBook.flip(index);
}

// -------------------------------------------------------------
// 3. SINKRONISASI DATA IDENTITAS SISWA & PILIH KARAKTER
// -------------------------------------------------------------
function initIdentitySync() {
  const coverName = document.getElementById('cover-input-name');
  const coverClass = document.getElementById('cover-input-class');
  const coverSchool = document.getElementById('cover-input-school');

  const identName = document.getElementById('ident-input-name');
  const identClass = document.getElementById('ident-input-class');
  const identSchool = document.getElementById('ident-input-school');

  // Load dari localStorage jika ada
  const saved = localStorage.getItem('flipbook_student_identity');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.name) {
        if (coverName) coverName.value = data.name;
        if (identName) identName.value = data.name;
      }
      if (data.class) {
        if (coverClass) coverClass.value = data.class;
        if (identClass) identClass.value = data.class;
      }
      if (data.school) {
        if (coverSchool) coverSchool.value = data.school;
        if (identSchool) identSchool.value = data.school;
      }
      if (data.char) {
        selectCharacter(data.char, false);
      }
    } catch (err) {
      console.warn('Gagal membaca data identitas:', err);
    }
  }

  const saveIdentity = () => {
    const data = {
      name: (identName ? identName.value : coverName?.value) || 'Naya Amanda',
      class: (identClass ? identClass.value : coverClass?.value) || 'Kelas 4 - Cendrawasih',
      school: (identSchool ? identSchool.value : coverSchool?.value) || 'SD Negeri Nusantara 01',
      char: getSelectedChar()
    };
    localStorage.setItem('flipbook_student_identity', JSON.stringify(data));
  };

  // Sync Name
  if (coverName && identName) {
    coverName.addEventListener('input', () => {
      identName.value = coverName.value;
      saveIdentity();
    });
    identName.addEventListener('input', () => {
      coverName.value = identName.value;
      saveIdentity();
    });
  }

  // Sync Class
  if (coverClass && identClass) {
    coverClass.addEventListener('input', () => {
      identClass.value = coverClass.value;
      saveIdentity();
    });
    identClass.addEventListener('input', () => {
      coverClass.value = identClass.value;
      saveIdentity();
    });
  }

  // Sync School
  if (coverSchool && identSchool) {
    coverSchool.addEventListener('input', () => {
      identSchool.value = coverSchool.value;
      saveIdentity();
    });
    identSchool.addEventListener('input', () => {
      coverSchool.value = identSchool.value;
      saveIdentity();
    });
  }

  // Karakter Sahabat Nusantara
  document.querySelectorAll('.char-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const charId = btn.getAttribute('data-char-id');
      const charName = btn.getAttribute('data-char-name');
      selectCharacter(charId, true, charName);
    });
  });
}

function selectCharacter(charId, save = true, charName = '') {
  document.querySelectorAll('.char-select-btn').forEach(b => {
    const isCurrent = b.getAttribute('data-char-id') === charId;
    b.classList.toggle('active', isCurrent);
    if (isCurrent && !charName) {
      charName = b.getAttribute('data-char-name');
    }
  });

  const label = document.getElementById('char-selected-label');
  if (label && charName) {
    label.textContent = charName;
  }

  if (save) {
    const saved = localStorage.getItem('flipbook_student_identity');
    let obj = saved ? JSON.parse(saved) : {};
    obj.char = charId;
    localStorage.setItem('flipbook_student_identity', JSON.stringify(obj));
    showToast(`✨ Sahabat terpilih: ${charName}!`);
  }
}

function getSelectedChar() {
  const activeBtn = document.querySelector('.char-select-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-char-id') : 'naya';
}

// -------------------------------------------------------------
// 4. INTERAKSI KARTU RUMAH ADAT
// -------------------------------------------------------------
function initHouseCardsInteraction() {
  const modal = document.getElementById('modal-house-detail');
  const btnClose = document.getElementById('btn-close-house-modal');
  const btnGotIt = document.getElementById('btn-modal-got-it');
  const modalTitle = document.getElementById('modal-house-name');
  const modalIcon = document.getElementById('modal-house-icon');
  const modalProv = document.getElementById('modal-house-prov');
  const modalFact = document.getElementById('modal-house-fact');

  const openHouseModal = (houseId) => {
    const house = pagesData[0].houses.find(h => h.id === houseId);
    if (!house) return;

    if (modalTitle) modalTitle.textContent = house.name;
    if (modalIcon) modalIcon.src = house.icon;
    if (modalProv) modalProv.textContent = `📍 Asal: ${house.origin}`;
    if (modalFact) modalFact.textContent = house.fact;

    if (modal) modal.classList.add('show');
  };

  const closeHouseModal = () => {
    if (modal) modal.classList.remove('show');
  };

  if (btnClose) btnClose.addEventListener('click', closeHouseModal);
  if (btnGotIt) btnGotIt.addEventListener('click', closeHouseModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHouseModal();
    });
  }

  // Cover houses
  document.querySelectorAll('.cover-house-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const hid = card.getAttribute('data-house-id');
      openHouseModal(hid);
    });
  });

  // Identity houses
  document.querySelectorAll('.house-detail-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const hid = card.getAttribute('data-house-id');
      openHouseModal(hid);
    });
  });
}

// -------------------------------------------------------------
// 5. AUDIO PANDUAN & NARASI
// -------------------------------------------------------------
function initAudioGuides() {
  // Panduan Halaman Identitas
  const btnIdentAudio = document.getElementById('btn-ident-audio');
  if (btnIdentAudio) {
    btnIdentAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = pagesData[1].audioText;
      audioService.speak(text);
      showToast('🔊 Membacakan petunjuk identitas...');
    });
  }

  // Narasi Halaman Kata Pengantar
  const btnPrefaceAudio = document.getElementById('btn-preface-play-audio');
  if (btnPrefaceAudio) {
    btnPrefaceAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPrefaceAudioPlaying) {
        stopPrefaceAudio();
      } else {
        playPrefaceAudio();
      }
    });
  }
}

function playPrefaceAudio() {
  const btn = document.getElementById('btn-preface-play-audio');
  const text = pagesData[2].audioText;

  isPrefaceAudioPlaying = true;
  if (btn) btn.classList.add('playing');

  audioService.speak(text, () => {
    stopPrefaceAudio();
  });
  showToast('🔊 Membacakan Kata Pengantar...');
}

function stopPrefaceAudio() {
  const btn = document.getElementById('btn-preface-play-audio');
  isPrefaceAudioPlaying = false;
  if (btn) btn.classList.remove('playing');
  audioService.stop();
}

// -------------------------------------------------------------
// 6. TOP BAR CONTROLS (SFX & FULLSCREEN)
// -------------------------------------------------------------
function initTopBarControls() {
  // SFX Toggle
  const btnSfx = document.getElementById('btn-toggle-sfx');
  const labelSfx = document.getElementById('label-sfx');
  if (btnSfx && labelSfx) {
    btnSfx.addEventListener('click', () => {
      const isMuted = audioService.toggleSfx();
      labelSfx.textContent = isMuted ? 'Suara: Hening' : 'Suara: Aktif';
      showToast(isMuted ? '🔇 Efek suara dinonaktifkan' : '🔔 Efek suara diaktifkan');
    });
  }

  // Fullscreen
  const btnFs = document.getElementById('btn-fullscreen');
  if (btnFs) {
    btnFs.addEventListener('click', toggleFullscreen);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

// -------------------------------------------------------------
// 7. KEYBOARD NAVIGATION
// -------------------------------------------------------------
function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    // Jangan trigger jika user sedang mengetik di input
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
      return;
    }

    if (e.key === 'ArrowRight') {
      if (flipBook) flipBook.flipNext();
    } else if (e.key === 'ArrowLeft') {
      if (flipBook) flipBook.flipPrev();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  });
}

// -------------------------------------------------------------
// 8. TOAST NOTIFICATION UTILITY
// -------------------------------------------------------------
function showToast(msg) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}
