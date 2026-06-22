/* ===================================================
   PSD SHOP — app.js v2
   =================================================== */

const PROJECTS_DATA = [
  {
    id: "butlerova",
    title: "ЖК Бутлерова",
    subtitle: "1, 2, 3 очереди строительства",
    type: "ЖК комфорт-класса",
    accent: "Флагманский объект",
    location: "Санкт-Петербург, ул. Бутлерова",
    floors: "17–23 этажа",
    apartments: "более 1 000",
    area_total: "92 500 м²",
    area_flat: "36 500 м²",
    sections: "9 секций",
    parking: "450 машиномест",
    commerce: "Встроенные помещения",
    class: "Комфорт",
    filter: ["all", "ЖК", "рендеры"],
    docs: ["АР","КР","ИОС","ПОС","ПБ","Сметная документация","Генплан","ТЭП по корпусам"],
    docs_count: 16, image_count: 10,
    images: [
      { src: "assets/butlerova_1.jpg", thumb: "assets/thumb_butlerova_1.jpg" },
      { src: "assets/butlerova_2.jpg", thumb: "assets/thumb_butlerova_2.jpg" },
      { src: "assets/butlerova_3.jpg", thumb: "assets/thumb_butlerova_3.jpg" },
      { src: "assets/butlerova_4.jpg", thumb: "assets/thumb_butlerova_4.jpg" },
      { src: "assets/butlerova_5.jpg", thumb: "assets/thumb_butlerova_5.jpg" }
    ]
  },
  {
    id: "pionerskaya",
    title: "ЖК Пионерская, 16",
    subtitle: "Городская жилая застройка",
    type: "ЖК / городская застройка",
    accent: "Витринный объект",
    location: "Санкт-Петербург, ул. Пионерская",
    floors: "12–16 этажей",
    apartments: "890 квартир",
    area_total: "56 300 м²",
    area_flat: "28 200 м²",
    sections: "5 секций",
    parking: "Подземный паркинг",
    commerce: "Коммерческие помещения",
    class: "Комфорт",
    filter: ["all", "ЖК", "рендеры"],
    docs: ["АР","КР","ИОС","ПЗ+ТЭП","Согласованные фасады","Рендеры"],
    docs_count: 12, image_count: 12,
    images: [
      { src: "assets/pionerskaya_1.jpg", thumb: "assets/thumb_pionerskaya_1.jpg" },
      { src: "assets/pionerskaya_2.jpg", thumb: "assets/thumb_pionerskaya_2.jpg" },
      { src: "assets/pionerskaya_3.jpg", thumb: "assets/thumb_pionerskaya_3.jpg" },
      { src: "assets/pionerskaya_4.jpg", thumb: "assets/thumb_pionerskaya_4.jpg" },
      { src: "assets/pionerskaya_5.jpg", thumb: "assets/thumb_pionerskaya_5.jpg" }
    ]
  },
  {
    id: "dudergof2",
    title: "Дудергофский, 2 очередь",
    subtitle: "Участки 247, 248 — ПСБ",
    type: "ЖК комфорт-класса",
    accent: "Прошёл экспертизу",
    location: "Санкт-Петербург, Дудергофский пр.",
    floors: "12–17 этажей",
    apartments: "620 квартир",
    area_total: "38 400 м²",
    area_flat: "22 100 м²",
    sections: "4 секции",
    parking: "Наземный и подземный",
    commerce: "Встроенные помещения",
    class: "Комфорт",
    filter: ["all", "ЖК", "экспертизу"],
    docs: ["ПЗ+ТЭП","Фасады","Заключение ЭСП уч.247","Заключение ЭСП уч.248","Фото реализации"],
    docs_count: 4, image_count: 5,
    images: [
      { src: "assets/dudergof2_1.jpg", thumb: "assets/thumb_dudergof2_1.jpg" },
      { src: "assets/dudergof2_2.jpg", thumb: "assets/thumb_dudergof2_2.jpg" },
      { src: "assets/dudergof2_3.jpg", thumb: "assets/thumb_dudergof2_3.jpg" },
      { src: "assets/dudergof2_4.jpg", thumb: "assets/thumb_dudergof2_4.jpg" },
      { src: "assets/dudergof2_5.jpg", thumb: "assets/thumb_dudergof2_5.jpg" }
    ]
  },
  {
    id: "dudergof4",
    title: "Дудергофский, 4 очередь",
    subtitle: "Участки 269, 270 — ПСБ",
    type: "ЖК комфорт-класса",
    accent: "2 участка",
    location: "Санкт-Петербург, Дудергофский пр.",
    floors: "10–14 этажей",
    apartments: "480 квартир",
    area_total: "29 700 м²",
    area_flat: "17 900 м²",
    sections: "3 секции",
    parking: "410 машиномест",
    commerce: "Торговые площади",
    class: "Комфорт",
    filter: ["all", "ЖК", "экспертизу"],
    docs: ["ПЗ+ТЭП уч.269","ПЗ+ТЭП уч.270","Фасад 1","Фасад 2","Фасад 3"],
    docs_count: 5, image_count: 2,
    images: [
      { src: "assets/dudergof4_1.jpg", thumb: "assets/thumb_dudergof4_1.jpg" },
      { src: "assets/dudergof4_2.jpg", thumb: "assets/thumb_dudergof4_2.jpg" }
    ]
  }
];

let projects = [];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  projects = PROJECTS_DATA;
  renderCards('all');
  initHeader();
  initScrollProgress();
  initHeroThumbs();
  initReveal();
  initCounters();
  initFilters();
  initBurger();
  initCardTilt();
  initHeroParallax();
});

/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

/* ===== HEADER ===== */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== HERO PARALLAX ===== */
function initHeroParallax() {
  const img = document.getElementById('heroBg');
  if (!img) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      img.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, { passive: true });
}

/* ===== HERO THUMBS ===== */
function initHeroThumbs() {
  const thumbBtns = document.querySelectorAll('.hero-thumb');
  const heroBg = document.getElementById('heroBg');
  thumbBtns.forEach(btn => {
    btn.style.backgroundImage = `url('${btn.dataset.img}')`;
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      heroBg.style.opacity = '0';
      setTimeout(() => {
        heroBg.src = btn.dataset.img;
        heroBg.style.opacity = '1';
      }, 350);
    });
  });
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ===== ANIMATED COUNTERS ===== */
function initCounters() {
  const items = document.querySelectorAll('.number-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target.querySelector('.number-val');
      if (!el || el.dataset.animated) return;
      el.dataset.animated = '1';
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      animateCount(el, 0, target, 1800, prefix, suffix);
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  items.forEach(el => io.observe(el));
}

function animateCount(el, start, end, duration, prefix, suffix) {
  const startTime = performance.now();
  const isLarge = end > 999;
  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    const formatted = isLarge ? current.toLocaleString('ru-RU') : current;
    el.textContent = prefix + formatted + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ===== 3D CARD TILT ===== */
function initCardTilt() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.card');
    if (!card) { resetAllTilts(); return; }
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-10px) perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 60px rgba(26,34,38,.18)`;
  });
  document.addEventListener('mouseleave', resetAllTilts);
}

function resetAllTilts() {
  document.querySelectorAll('.card').forEach(c => {
    c.style.transform = '';
    c.style.boxShadow = '';
  });
}

/* ===== FILTERS ===== */
function initFilters() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderCards(chip.dataset.filter);
    });
  });
}

/* ===== RENDER CARDS ===== */
function renderCards(filter) {
  const grid = document.getElementById('grid');
  const filtered = projects.filter(p => p.filter.includes(filter));
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `card reveal${i === 1 ? ' delay-1' : i === 2 ? ' delay-2' : i === 3 ? ' delay-3' : ''}`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.images[0].src}" alt="${p.title}" loading="lazy" />
        <div class="card-badge"><span class="tag">${p.accent}</span></div>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.subtitle} · ${p.location}</p>
        <div class="card-meta">
          <div class="card-meta-item"><b>${p.floors}</b><span>этажность</span></div>
          <div class="card-meta-item"><b>${p.apartments}</b><span>квартир</span></div>
          <div class="card-meta-item"><b>${p.docs_count}</b><span>файлов ПСД</span></div>
          <div class="card-meta-item"><b>${p.image_count}</b><span>фото/рендеров</span></div>
        </div>
        <button class="card-btn" data-id="${p.id}">Подробнее о проекте</button>
      </div>`;
    card.querySelector('.card-btn').addEventListener('click', (e) => { e.stopPropagation(); openProjectById(p.id); });
    card.addEventListener('click', () => openProjectById(p.id));
    grid.appendChild(card);
  });
  initReveal();
}

/* ===== PROJECT MODAL ===== */
function openProjectById(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalMainImg').src = p.images[0].src;
  document.getElementById('modalThumbs').innerHTML = p.images.map((img, i) => `
    <button class="modal-thumb-btn ${i === 0 ? 'active' : ''}" onclick="setModalImg('${img.src}',this)">
      <img src="${img.thumb}" alt="" loading="lazy"/>
    </button>`).join('');
  document.getElementById('modalTag').textContent = p.accent;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalParams').innerHTML = [
    ['Местоположение', p.location], ['Класс', p.class],
    ['Этажность', p.floors], ['Общая площадь', p.area_total],
    ['Площадь квартир', p.area_flat], ['Число квартир', p.apartments],
    ['Секций', p.sections], ['Машиномест', p.parking],
    ['Коммерция', p.commerce]
  ].map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  document.getElementById('modalDocs').innerHTML = p.docs.map(d => `<li><span class="doc-check">✓</span>${d}</li>`).join('');
  document.getElementById('modalWhat').innerHTML = `
    <div class="what-item"><div class="wi-icon">📄</div>Лицензия на использование</div>
    <div class="what-item"><div class="wi-icon">📦</div>Комплект документации</div>
    <div class="what-item"><div class="wi-icon">🤝</div>Сопровождение адаптации</div>
    <div class="what-item"><div class="wi-icon">👷</div>Рекомендации проектировщиков</div>`;
  openModal('modal');
}

function setModalImg(src, btn) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ===== MODALS ===== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}
function openForm() {
  document.getElementById('formModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFormModal() {
  document.getElementById('formModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeFormModalOutside(e) {
  if (e.target === document.getElementById('formModal')) closeFormModal();
}

/* ===== FORM SUBMIT ===== */
function submitForm(e) {
  e.preventDefault();
  closeModal(); closeFormModal();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4200);
}

/* ===== BURGER ===== */
function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger?.addEventListener('click', () => nav.classList.toggle('open'));
}
function closeNav() {
  document.getElementById('nav')?.classList.remove('open');
}

/* ===== SMOOTH SCROLL ===== */
function smoothScroll(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

/* ===== ESC KEY ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeFormModal(); }
});

/* GLOBALS */
window.openProjectById = openProjectById;
window.openForm = openForm;
window.closeModal = closeModal;
window.closeFormModal = closeFormModal;
window.closeModalOutside = closeModalOutside;
window.closeFormModalOutside = closeFormModalOutside;
window.setModalImg = setModalImg;
window.submitForm = submitForm;
window.smoothScroll = smoothScroll;
window.closeNav = closeNav;
