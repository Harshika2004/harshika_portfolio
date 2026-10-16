/**
 * Harshika Portfolio — Minimal Vanilla JavaScript
 * - Accessible mobile navigation toggle
 * - Instant lightbox for creative gallery (no animations)
 * - Copy email helper on Contact page
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('nav-open');
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Creative Gallery Lightbox (No animation)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxSub = document.getElementById('lightbox-sub');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    const galleryItems = document.querySelectorAll('.gallery-card');

    galleryItems.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.getAttribute('data-title') || (card.querySelector('.card-title') ? card.querySelector('.card-title').textContent : '');
        const medium = card.getAttribute('data-medium') || (card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent : '');

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || title;
          if (lightboxCaption) lightboxCaption.textContent = title;
          if (lightboxSub) lightboxSub.textContent = medium;
          lightbox.classList.add('open');
          lightbox.setAttribute('aria-hidden', 'false');
          if (lightboxClose) lightboxClose.focus();
        }
      });

      // Keyboard open on Enter / Space
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      if (lightboxImg) lightboxImg.src = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close when clicking overlay backdrop outside content
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  // 3. Copy Email Helper (on Contact page or cards)
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'harshika0525@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.borderColor = 'var(--accent)';
        copyBtn.style.color = 'var(--accent)';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2000);
      }).catch(() => {
        // Fallback if clipboard fails
        window.location.href = `mailto:${email}`;
      });
    });
  }
});
