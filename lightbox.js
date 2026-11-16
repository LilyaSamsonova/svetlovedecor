
(() => {
  const image = document.querySelector('#product-image');
  if (!image) return;

  const style = document.createElement('style');
  style.textContent = `
    #product-image { cursor: zoom-in; }

    .sv-lightbox {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgba(15, 15, 15, .96);
      color: white;
    }

    .sv-lightbox.open { display: flex; }

    .sv-lightbox img {
      display: block;
      max-width: calc(100vw - 100px);
      max-height: calc(100dvh - 100px);
      width: auto;
      height: auto;
      object-fit: contain;
      user-select: none;
    }

    .sv-lightbox button {
      position: absolute;
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.12);
      color: white;
      font-size: 32px;
      cursor: pointer;
    }

    .sv-lightbox .close {
      top: 20px;
      right: 20px;
    }

    .sv-lightbox .prev {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .sv-lightbox .next {
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .sv-lightbox .counter {
      position: absolute;
      bottom: 24px;
      font: 14px Manrope, sans-serif;
      letter-spacing: .08em;
    }

    @media (max-width: 600px) {
      .sv-lightbox img {
        max-width: calc(100vw - 24px);
        max-height: calc(100dvh - 120px);
      }

      .sv-lightbox .prev { left: 8px; }
      .sv-lightbox .next { right: 8px; }

      .sv-lightbox .prev,
      .sv-lightbox .next {
        width: 44px;
        height: 44px;
        background: rgba(0,0,0,.4);
      }
    }
    
/* Исправление кнопок полноэкранной галереи */
.sv-lightbox button {
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
  padding: 0 !important;
  min-width: 48px !important;
  min-height: 48px !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  line-height: 1 !important;
  text-align: center !important;
  -webkit-appearance: none;
  appearance: none;
}

@media (max-width: 600px) {
  .sv-lightbox .prev,
  .sv-lightbox .next {
    width: 44px !important;
    height: 44px !important;
    min-width: 44px !important;
    min-height: 44px !important;
    border-radius: 50% !important;
  }

  .sv-lightbox .prev {
    left: 12px !important;
  }

  .sv-lightbox .next {
    right: 12px !important;
  }

  .sv-lightbox .close {
    top: 20px !important;
    right: 20px !important;
  }
}

.sv-lightbox button {
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 50% !important;
  flex: none !important;
  line-height: 1 !important;
}

.sv-lightbox .prev,
.sv-lightbox .next {
  width: 44px !important;
  height: 44px !important;
  min-width: 44px !important;
  min-height: 44px !important;
  max-width: 44px !important;
  max-height: 44px !important;
}

.sv-lightbox .close {
  width: 48px !important;
  height: 48px !important;
}

.sv-lightbox button svg {
  display: block !important;
  width: 24px !important;
  height: 24px !important;
  fill: none !important;
  stroke: currentColor !important;
  stroke-width: 2.2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
  pointer-events: none;
}

.sv-lightbox button[hidden] {
  display: none !important;
}

  `;
  document.head.append(style);

  const box = document.createElement('div');
  box.className = 'sv-lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Просмотр фотографий');

  box.innerHTML = `
    
(() => {
  const image = document.querySelector('#product-image');
  if (!image) return;

  const style = document.createElement('style');
  style.textContent = `
    #product-image { cursor: zoom-in; }

    .sv-lightbox {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgba(15, 15, 15, .96);
      color: white;
    }

    .sv-lightbox.open { display: flex; }

    .sv-lightbox img {
      display: block;
      max-width: calc(100vw - 100px);
      max-height: calc(100dvh - 100px);
      width: auto;
      height: auto;
      object-fit: contain;
      user-select: none;
    }

    .sv-lightbox button {
      position: absolute;
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.12);
      color: white;
      font-size: 32px;
      cursor: pointer;
    }

    .sv-lightbox .close {
      top: 20px;
      right: 20px;
    }

    .sv-lightbox .prev {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .sv-lightbox .next {
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .sv-lightbox .counter {
      position: absolute;
      bottom: 24px;
      font: 14px Manrope, sans-serif;
      letter-spacing: .08em;
    }

    @media (max-width: 600px) {
      .sv-lightbox img {
        max-width: calc(100vw - 24px);
        max-height: calc(100dvh - 120px);
      }

      .sv-lightbox .prev { left: 8px; }
      .sv-lightbox .next { right: 8px; }

      .sv-lightbox .prev,
      .sv-lightbox .next {
        width: 44px;
        height: 44px;
        background: rgba(0,0,0,.4);
      }
    }
    
/* Исправление кнопок полноэкранной галереи */
.sv-lightbox button {
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
  padding: 0 !important;
  min-width: 48px !important;
  min-height: 48px !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  line-height: 1 !important;
  text-align: center !important;
  -webkit-appearance: none;
  appearance: none;
}

@media (max-width: 600px) {
  .sv-lightbox .prev,
  .sv-lightbox .next {
    width: 44px !important;
    height: 44px !important;
    min-width: 44px !important;
    min-height: 44px !important;
    border-radius: 50% !important;
  }

  .sv-lightbox .prev {
    left: 12px !important;
  }

  .sv-lightbox .next {
    right: 12px !important;
  }

  .sv-lightbox .close {
    top: 20px !important;
    right: 20px !important;
  }
}
  `;
  document.head.append(style);

  const box = document.createElement('div');
  box.className = 'sv-lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Просмотр фотографий');

  box.innerHTML = `
    <button class="close" aria-label="Закрыть">×</button>
    <button class="prev" aria-label="Предыдущее фото">‹</button>
    <img alt="Фотография композиции">
    <button class="next" aria-label="Следующее фото">›</button>
    <div class="counter"></div>
  `;

  document.body.append(box);

  const large = box.querySelector('img');
  const counter = box.querySelector('.counter');
  let current = 0;
  let previousFocus = null;
  let previousOverflow = '';

  function photos() {
    const thumbs = [
      ...document.querySelectorAll('.thumbnails img')
    ];
    return thumbs.length
      ? thumbs.map(img => img.src)
      : [image.src];
  }

  function show(index) {
    const list = photos();
    if (!list.length) return;

    current = (index + list.length) % list.length;
    large.src = list[current];
    large.alt = image.alt;
    counter.textContent =
      `${current + 1} / ${list.length}`;

    box.querySelector('.prev').hidden = list.length < 2;
    box.querySelector('.next').hidden = list.length < 2;
  }

  function open() {
    const list = photos();
    current = Math.max(0, list.indexOf(image.src));
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    show(current);
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    box.querySelector('.close').focus();
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = previousOverflow;
    previousFocus?.focus?.();
  }

  function move(step) {
    show(current + step);
  }

document.querySelector('.product-photo-frame')
  ?.addEventListener('click', e => {
    if (e.target.closest('.gallery-arrow')) return;
    open();
  });


  box.querySelector('.close').addEventListener('click', close);
  box.querySelector('.prev').addEventListener('click', () => move(-1));
  box.querySelector('.next').addEventListener('click', () => move(1));

  box.addEventListener('click', e => {
    if (e.target === box) close();
  });

  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;

    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') move(-1);
    if (e.key === 'ArrowRight') move(1);

    if (e.key === 'Tab') {
      const controls = [
        ...box.querySelectorAll('button:not([hidden])')
      ];
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  let startX = null;

  box.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  box.addEventListener('touchend', e => {
    if (startX === null) return;

    const delta = e.changedTouches[0].clientX - startX;

    if (Math.abs(delta) > 40) {
      move(delta > 0 ? -1 : 1);
    }

    startX = null;
  }, { passive: true });
})();
    <div class="counter"></div>
  `;

  document.body.append(box);

  const large = box.querySelector('img');
  const counter = box.querySelector('.counter');
  let current = 0;
  let previousFocus = null;
  let previousOverflow = '';

  function photos() {
    const thumbs = [
      ...document.querySelectorAll('.thumbnails img')
    ];
    return thumbs.length
      ? thumbs.map(img => img.src)
      : [image.src];
  }

  function show(index) {
    const list = photos();
    if (!list.length) return;

    current = (index + list.length) % list.length;
    large.src = list[current];
    large.alt = image.alt;
    counter.textContent =
      `${current + 1} / ${list.length}`;

    box.querySelector('.prev').hidden = list.length < 2;
    box.querySelector('.next').hidden = list.length < 2;
  }

  function open() {
    const list = photos();
    current = Math.max(0, list.indexOf(image.src));
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    show(current);
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    box.querySelector('.close').focus();
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = previousOverflow;
    previousFocus?.focus?.();
  }

  function move(step) {
    show(current + step);
  }

document.querySelector('.product-photo-frame')
  ?.addEventListener('click', e => {
    if (e.target.closest('.gallery-arrow')) return;
    open();
  });


  box.querySelector('.close').addEventListener('click', close);
  box.querySelector('.prev').addEventListener('click', () => move(-1));
  box.querySelector('.next').addEventListener('click', () => move(1));

  box.addEventListener('click', e => {
    if (e.target === box) close();
  });

  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;

    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') move(-1);
    if (e.key === 'ArrowRight') move(1);

    if (e.key === 'Tab') {
      const controls = [
        ...box.querySelectorAll('button:not([hidden])')
      ];
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  let startX = null;

  box.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  box.addEventListener('touchend', e => {
    if (startX === null) return;

    const delta = e.changedTouches[0].clientX - startX;

    if (Math.abs(delta) > 40) {
      move(delta > 0 ? -1 : 1);
    }

    startX = null;
  }, { passive: true });
})();
