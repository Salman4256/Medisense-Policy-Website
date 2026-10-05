/**
 * MediSense Privacy Policy & Legal Governance Portal
 * Client-Side Interactivity, Search, Theme Management & Scrollspy
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgress();
  initScrollspy();
  initSearch();
  initCopyAnchors();
  initFaqAccordion();
  initMobileMenu();
  initDeletionGenerator();
});

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('medisense_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const target = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('medisense_theme', target);
  });
}

/* --------------------------------------------------------------------------
   Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* --------------------------------------------------------------------------
   Scrollspy & Table of Contents
   -------------------------------------------------------------------------- */
function initScrollspy() {
  const sections = document.querySelectorAll('.policy-section');
  const tocLinks = document.querySelectorAll('.toc-link');
  if (!sections.length || !tocLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Live Policy Search & Filter
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('policy-search');
  const clearBtn = document.getElementById('search-clear');
  const resultsBadge = document.getElementById('search-results-badge');
  const sections = document.querySelectorAll('.policy-section');

  if (!searchInput || !sections.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length > 0) {
      if (clearBtn) clearBtn.style.display = 'inline-flex';
    } else {
      if (clearBtn) clearBtn.style.display = 'none';
      if (resultsBadge) resultsBadge.style.display = 'none';
      sections.forEach(sec => sec.style.display = 'block');
      return;
    }

    let matchCount = 0;

    sections.forEach(sec => {
      const text = sec.textContent.toLowerCase();
      if (text.includes(query)) {
        sec.style.display = 'block';
        matchCount++;
      } else {
        sec.style.display = 'none';
      }
    });

    if (resultsBadge) {
      resultsBadge.style.display = 'inline-block';
      resultsBadge.textContent = `${matchCount} section${matchCount === 1 ? '' : 's'} found`;
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      if (resultsBadge) resultsBadge.style.display = 'none';
      sections.forEach(sec => sec.style.display = 'block');
      searchInput.focus();
    });
  }
}

/* --------------------------------------------------------------------------
   Copy Anchor Link to Clipboard
   -------------------------------------------------------------------------- */
function initCopyAnchors() {
  const copyButtons = document.querySelectorAll('.copy-anchor-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const anchorId = btn.getAttribute('data-target');
      const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Direct section link copied to clipboard!');
      }).catch(() => {
        showToast('Link: ' + url);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   FAQ Accordions
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close other items
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when clicking link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   Interactive Deletion Request Generator (on data-deletion.html)
   -------------------------------------------------------------------------- */
function initDeletionGenerator() {
  const form = document.getElementById('deletion-request-form');
  if (!form) return;

  const emailInput = document.getElementById('del-user-email');
  const reasonSelect = document.getElementById('del-reason');
  const notesInput = document.getElementById('del-notes');
  const outputBox = document.getElementById('deletion-preview-box');
  const copyBtn = document.getElementById('copy-del-request');
  const mailtoBtn = document.getElementById('send-del-mailto');

  function updatePreview() {
    const email = emailInput?.value.trim() || '[Your Registered Email]';
    const reason = reasonSelect?.value || 'Account Closure / Data Purge';
    const notes = notesInput?.value.trim() || 'Please permanently delete my MediSense account, authentication record, and all associated personal and health data stored in the cloud PostgreSQL database.';

    const bodyText = `To: MediSense Privacy & Security Team (raghavan.cs23@krct.ac.in)
Subject: [DATA DELETION REQUEST] MediSense App Account Deletion

Dear MediSense Privacy Team,

I am writing to formally request the complete and permanent deletion of my MediSense account and all associated personal health data in accordance with Google Play Store User Data Policies and applicable privacy regulations.

Account Identification:
- Registered Email Address: ${email}
- Reason for Deletion: ${reason}
- Additional Instructions: ${notes}

I understand that this action is irreversible and will permanently wipe:
1. My Supabase authentication profile and canonical User UUID
2. Cloud-synchronized health profiles, vital records, and clinical histories
3. Medication schedules and adherence history logs
4. Scheduled doctor appointments
5. Disease prediction history and Explainable AI logs
6. AI Assistant conversation logs and any transmitted query media

Please confirm once the cloud-side data purge has been completed.

Sincerely,
MediSense User`;

    if (outputBox) outputBox.value = bodyText;

    if (mailtoBtn) {
      const encodedSubject = encodeURIComponent('[DATA DELETION REQUEST] MediSense App Account Deletion');
      const encodedBody = encodeURIComponent(bodyText);
      mailtoBtn.href = `mailto:raghavan.cs23@krct.ac.in?subject=${encodedSubject}&body=${encodedBody}`;
    }
  }

  [emailInput, reasonSelect, notesInput].forEach(elem => {
    elem?.addEventListener('input', updatePreview);
  });

  updatePreview();

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!outputBox) return;
      navigator.clipboard.writeText(outputBox.value).then(() => {
        showToast('Email template copied to clipboard! Paste it into your email client.');
      });
    });
  }
}
