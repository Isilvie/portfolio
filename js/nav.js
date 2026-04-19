/**
 * Injects the shared <nav> and mobile overlay into every page.
 * Called after CONFIG is loaded.
 */
/**
 * Shared navigation injected into all pages
 * Handles active page highlighting + mobile menu
 */

function renderNav() {
  const pages = [
    { href: 'index.html',       label: 'Home' },
    { href: 'films.html',       label: 'Films' },
    { href: 'photography.html', label: 'Photography' },
    { href: 'videography.html', label: 'Videography' },
    { href: 'about.html',       label: 'About' }
  ];

  // Normalize current page (handles /, /index.html, etc.)
  let currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  /**
   * Build desktop nav
   */
  const desktopLinks = pages.map(page => {
    const isActive = page.href === currentPage;
    return `
      <li>
        <a href="${page.href}" class="${isActive ? 'active' : ''}">
          ${page.label}
        </a>
      </li>
    `;
  }).join('');

  /**
   * Build mobile nav
   */
  const mobileLinks = pages.map(page => {
    const isActive = page.href === currentPage;
    return `
      <a href="${page.href}" class="${isActive ? 'active' : ''}">
        ${page.label}
      </a>
    `;
  }).join('');

  /**
   * Inject brand name
   */
  const brand = document.getElementById('nav-name-link');
  if (brand && typeof CONFIG !== 'undefined') {
    brand.textContent = CONFIG.name;
    brand.href = 'index.html';
  }

  /**
   * Inject desktop links
   */
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.innerHTML = desktopLinks;
  }

  /**
   * Inject mobile links
   */
  const mobileOverlay = document.getElementById('mobile-overlay');
  if (mobileOverlay) {
    mobileOverlay.innerHTML = mobileLinks;
  }

  /**
   * Mobile menu toggle (if your hamburger exists)
   */
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
    });

    // Close menu when clicking a link
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        hamburger.classList.remove('open');
        mobileOverlay.classList.remove('open');
      }
    });
  }
}