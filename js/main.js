/* ============================================================
   PORTFOLIO MAIN JS
   ============================================================ */

/* ── Active nav link ────────────────────────────────────── */
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-overlay a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') ||
        (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Nav: solid background on scroll (inner pages) ─────── */
(function navScroll() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  if (nav.classList.contains('solid')) return;  // already forced solid

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── Hamburger / mobile menu ────────────────────────────── */
(function mobileMenu() {
  const btn     = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('mobile-overlay');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  overlay.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
})();

/* ── Intersection Observer: fade-in elements ────────────── */
(function fadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => obs.observe(el));
})();

/* ── Photography Lightbox ───────────────────────────────── */
(function lightbox() {
  const box       = document.getElementById('lightbox');
  if (!box) return;

  const img       = box.querySelector('#lb-img');
  const caption   = box.querySelector('#lb-caption');
  const closeBtn  = box.querySelector('.lightbox-close');
  const prevBtn   = box.querySelector('.lightbox-prev');
  const nextBtn   = box.querySelector('.lightbox-next');

  let photos = [];
  let current = 0;

  function open(index) {
    current = index;
    img.src = photos[current].src;
    caption.textContent = photos[current].alt;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() { open((current - 1 + photos.length) % photos.length); }
  function next() { open((current + 1) % photos.length); }

  // Expose so renderPhotos() can call open()
  window.lbOpen  = open;
  window.lbSetPhotos = function(arr) { photos = arr; };

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn)  prevBtn.addEventListener('click', prev);
  if (nextBtn)  nextBtn.addEventListener('click', next);

  // Click outside image closes
  box.addEventListener('click', e => { if (e.target === box) close(); });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
})();
