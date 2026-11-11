import { pagesData } from './data/pagesData.js';
import { renderPageHTML } from './components/pageRenderer.js';
import { audioService } from './services/audioService.js';

document.addEventListener('DOMContentLoaded', () => {
  renderSinglePage();
  initFloatingCursorButtons();
});

function renderSinglePage() {
  const stage = document.getElementById('page-stage');
  if (!stage) return;

  const pageOne = pagesData[0];
  stage.innerHTML = renderPageHTML(pageOne);
}

/**
 * Floating cursor-reactive wave ("naik-turun" mengikuti kursor)
 * for the 4 bottom navigation buttons.
 */
function initFloatingCursorButtons() {
  const stage = document.getElementById('page-stage');
  const buttons = Array.from(document.querySelectorAll('.floating-nav-btn'));
  if (!stage || buttons.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pointer = {
    active: false,
    x: 0,
    y: 0
  };

  // Per-button smoothed animation state
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

  const updatePointer = (clientX, clientY) => {
    pointer.active = true;
    pointer.x = clientX;
    pointer.y = clientY;
  };

  window.addEventListener(
    'pointermove',
    (e) => {
      updatePointer(e.clientX, e.clientY);
    },
    { passive: true }
  );

  window.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  document.addEventListener('mouseleave', () => {
    pointer.active = false;
  });

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      audioService.playClickSound();
      states[idx].clickBounce = -10;
    });
  });

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const tick = (now) => {
    const t = now * 0.001;
    const stageRect = stage.getBoundingClientRect();
    const scaleRatio = stageRect.width / 800; // normalize motion relative to 800px stage
    const radius = Math.max(150, stageRect.width * 0.44);
    const maxLift = 24 * scaleRatio;
    const idleAmp = reducedMotion ? 0 : 4.5 * scaleRatio;

    for (const state of states) {
      // Resting center without current transform offset
      const rect = state.el.getBoundingClientRect();
      const baseCx = rect.left + rect.width * 0.5 - state.tx;
      const baseCy = rect.top + rect.height * 0.5 - state.ty;

      // Gentle idle up-and-down wave staggered per button
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
          // Cursor-driven lift ("naik") + subtle magnetic follow + wave bob
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

      // Decay click bounce impulse
      state.clickBounce *= 0.82;
      if (Math.abs(state.clickBounce) < 0.05) state.clickBounce = 0;
      targetTy += state.clickBounce * scaleRatio;

      // Smooth spring lerp
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

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
