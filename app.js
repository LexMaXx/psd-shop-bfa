/* ===== PSD SHOP — Main JS ===== */

let projects = [];
let activeProject = null;

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
    docs: ["АР", "КР", "ИОС", "ПОС", "ПБ", "Сметная документация", "Генплан", "ТЭП по корпусам"],
    docs_count: 16,
    image_count: 10,
    images: [
      { src: "assets/butlerova_1.jpg", thumb: "assets/thumb_butlerova_1.jpg" },
      { src: "assets/butlerova_2.jpg", thumb: "assets/thumb_butlerova_2.jpg" },
      { src: "assets/butlerova_3.jpg", thumb: "assets/thumb_butlerova_3.jpg" },
      { src: "assets/butlerova_4.jpg", thumb: "assets/thumb_butlerova_4.jpg" },
      { src: "assets/butlerova_5.jpg", thumb: "assets/thumb_butlerova_5.jpg" }
    ],
    description: "Реализованный жилой комплекс комфорт-класса в три очереди. Полный комплект ПСД с ТЭПами по каждому корпусу, генпланом и поэтажными планировками."
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
    docs: ["АР", "КР", "ИОС", "ПЗ+ТЭП", "Согласованные фасады", "Рендеры"],
    docs_count: 12,
    image_count: 12,
    images: [
      { src: "assets/pionerskaya_1.jpg", thumb: "assets/thumb_pionerskaya_1.jpg" },
      { src: "assets/pionerskaya_2.jpg", thumb: "assets/thumb_pionerskaya_2.jpg" },
      { src: "assets/pionerskaya_3.jpg", thumb: "assets/thumb_pionerskaya_3.jpg" },
      { src: "assets/pionerskaya_4.jpg", thumb: "assets/thumb_pionerskaya_4.jpg" },
      { src: "assets/pionerskaya_5.jpg", thumb: "assets/thumb_pionerskaya_5.jpg" }
    ],
    description: "Современный жилой комплекс с полным комплектом согласованных фасадов и рендеров. Удобная планировочная структура для адаптации под различные участки."
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
    docs: ["ПЗ+ТЭП", "Фасады", "Заключение ЭСП уч.247", "Заключение ЭСП уч.248", "Фото реализации"],
    docs_count: 4,
    image_count: 5,
    images: [
      { src: "assets/dudergof2_1.jpg", thumb: "assets/thumb_dudergof2_1.jpg" },
      { src: "assets/dudergof2_2.jpg", thumb: "assets/thumb_dudergof2_2.jpg" },
      { src: "assets/dudergof2_3.jpg", thumb: "assets/thumb_dudergof2_3.jpg" },
      { src: "assets/dudergof2_4.jpg", thumb: "assets/thumb_dudergof2_4.jpg" },
      { src: "assets/dudergof2_5.jpg", thumb: "assets/thumb_dudergof2_5.jpg" }
    ],
    description: "ЖК прошёл государственную строительную экспертизу по двум участкам. Заключения ЭСП входят в комплект документации. Объект реализован и введён в эксплуатацию."
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
    docs: ["ПЗ+ТЭП уч.269", "ПЗ+ТЭП уч.270", "Фасад 1", "Фасад 2", "Фасад 3"],
    docs_count: 5,
    image_count: 2,
    images: [
      { src: "assets/dudergof4_1.jpg", thumb: "assets/thumb_dudergof4_1.jpg" },
      { src: "assets/dudergof4_2.jpg", thumb: "assets/thumb_dudergof4_2.jpg" }
    ],
    description: "Четвёртая очередь жилого квартала на Дудергофском проспекте. Документация для двух участков, полный комплект фасадных решений."
  }
];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  projects = PROJECTS_DATA;
  renderCards('all');
  initHeader();
  initHeroThumbs();
  initReveal();
  initFilters();
  initBurger();
  updateHeroThumbBgs();
});

/* ===== HEADER ===== */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ===== HERO THUMBS ===== */
function updateHeroThumbBgs() {
  const thumbBtns = document.querySelectorAll('.hero-thumb');
  thumbBtns.forEach(btn => {
    btn.style.backgroundImage = `url('${btn.dataset.img}')`;
  });
}

function initHeroThumbs() {
  const thumbBtns = document.querySelectorAll('.hero-thumb');
  const heroBg = document.getElementById('heroBg');
  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      heroBg.style.opacity = '0';
      setTimeout(() => {
        heroBg.src = btn.dataset.img;
        heroBg.style.opacity = '1';
      }, 300);
    });
  });
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ===== SMOOTH SCROLL ===== */
function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
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
    card.className = 'card reveal';
    if (i === 1) card.classList.add('delay-1');
    if (i === 2) card.classList.add('delay-2');
    if (i === 3) card.classList.add('delay-3');
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.images[0].src}" alt="${p.title}" loading="lazy" />
        <div class="card-badge"><span class="tag">${p.accent}</span></div>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.subtitle} · ${p.location}</p>
        <div class="card-meta">
          <div class="card-meta-item">
            <b>${p.floors}</b>
            <span>этажность</span>
          </div>
          <div class="card-meta-item">
            <b>${p.apartments}</b>
            <span>квартир</span>
          </div>
          <div class="card-meta-item">
            <b>${p.docs_count}</b>
            <span>файлов ПСД</span>
          </div>
          <div class="card-meta-item">
            <b>${p.image_count}</b>
            <span>фото/рендеров</span>
          </div>
        </div>
        <button class="card-btn" data-id="${p.id}">Подробнее о проекте</button>
      </div>
    `;
    card.querySelector('.card-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openProjectById(p.id);
    });
    card.addEventListener('click', () => openProjectById(p.id));
    grid.appendChild(card);
  });
  // re-observe reveals in grid
  initReveal();
}

/* ===== PROJECT MODAL ===== */
function openProjectById(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  activeProject = p;

  // Gallery
  document.getElementById('modalMainImg').src = p.images[0].src;
  const thumbsEl = document.getElementById('modalThumbs');
  thumbsEl.innerHTML = p.images.map((img, i) => `
    <button class="modal-thumb-btn ${i === 0 ? 'active' : ''}" onclick="setModalImg('${img.src}', this)">
      <img src="${img.thumb}" alt="" loading="lazy" />
    </button>
  `).join('');

  // Header
  document.getElementById('modalTag').textContent = p.accent;
  document.getElementById('modalTitle').textContent = p.title;

  // Params table
  document.getElementById('modalParams').innerHTML = `
    <tr><td>Местоположение</td><td>${p.location}</td></tr>
    <tr><td>Класс</td><td>${p.class}</td></tr>
    <tr><td>Этажность</td><td>${p.floors}</td></tr>
    <tr><td>Общая площадь</td><td>${p.area_total}</td></tr>
    <tr><td>Площадь квартир</td><td>${p.area_flat}</td></tr>
    <tr><td>Число квартир</td><td>${p.apartments}</td></tr>
    <tr><td>Количество секций</td><td>${p.sections}</td></tr>
    <tr><td>Машиномест</td><td>${p.parking}</td></tr>
    <tr><td>Коммерция</td><td>${p.commerce}</td></tr>
  `;

  // Docs
  document.getElementById('modalDocs').innerHTML = p.docs.map(d =>
    `<li><span class="doc-check">✓</span> ${d}</li>`
  ).join('');

  // What buyer gets
  document.getElementById('modalWhat').innerHTML = `
    <div class="what-item"><div class="wi-icon">📄</div>Лицензия на использование</div>
    <div class="what-item"><div class="wi-icon">📦</div>Комплект документации</div>
    <div class="what-item"><div class="wi-icon">🤝</div>Сопровождение адаптации</div>
    <div class="what-item"><div class="wi-icon">👷</div>Рекомендации проектировщиков</div>
  `;

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setModalImg(src, btn) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

/* ===== LEAD FORM MODAL ===== */
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
  closeModal();
  closeFormModal();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ===== BURGER ===== */
function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

/* ===== ESC KEY ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeFormModal(); }
});

/* ===== EXPOSE GLOBALS ===== */
window.openProjectById = openProjectById;
window.openForm = openForm;
window.scrollTo = scrollTo;
window.submitForm = submitForm;
window.closeModal = closeModal;
window.closeFormModal = closeFormModal;
window.closeModalOutside = closeModalOutside;
window.closeFormModalOutside = closeFormModalOutside;
window.setModalImg = setModalImg;
