/**
 * MingalarMate — Shared Vanilla JavaScript
 * Version 1.0 (Static, zero dependencies, accessible)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initCurrentYear();
});

/**
 * Mobile Navigation Toggle
 * Handles accessible opening/closing of the mobile navigation drawer.
 */
function initMobileNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!navToggle || !siteNav) {
    return;
  }

  // Toggle button click listener
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    setNavState(!isExpanded);
  });

  // Close navigation when a navigation link is clicked (useful on mobile view)
  const navLinks = siteNav.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        setNavState(false);
      }
    });
  });

  // Close when pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setNavState(false);
      navToggle.focus();
    }
  });

  // Close if window is resized beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navToggle.getAttribute('aria-expanded') === 'true') {
      setNavState(false);
    }
  });

  function setNavState(isOpen) {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      siteNav.classList.add('is-open');
    } else {
      siteNav.classList.remove('is-open');
    }
  }
}

/**
 * Populate dynamic current year if footer has a year placeholder
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
