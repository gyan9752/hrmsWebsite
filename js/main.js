/* ============================================
   HRVICO — All JavaScript (Non-Module)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavbar();
  initRoleSwitcher();
  initTestimonials();
  initFAQ();
  initCounters();
  initPricingToggle();
  initFeatureCardGlow();
  initCookiesBanner();

  // Auto-open demo modal if parameter is present in URL
  if (window.location.search.includes('demo=true')) {
    setTimeout(openDemoModal, 300);
  }
});

/* ═══════════════════════════════════════════
   Scroll Animations
   ═══════════════════════════════════════════ */
function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('[data-stagger]').forEach((el) => staggerObserver.observe(el));
}

/* ═══════════════════════════════════════════
   Navbar
   ═══════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = navbar.offsetHeight + 20;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
}

/* ═══════════════════════════════════════════
   Role Switcher
   ═══════════════════════════════════════════ */
function initRoleSwitcher() {
  const tabs = document.querySelectorAll('.role-tab');
  const contents = document.querySelectorAll('.role-content');

  if (!tabs.length || !contents.length) return;

  function switchRole(role) {
    tabs.forEach((t) => t.classList.toggle('active', t.dataset.role === role));
    contents.forEach((c) => c.classList.toggle('active', c.dataset.role === role));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => switchRole(tab.dataset.role));
  });

  // Init: first role
  if (tabs[0]) switchRole(tabs[0].dataset.role);
}

/* ═══════════════════════════════════════════
   Testimonials Carousel
   ═══════════════════════════════════════════ */
function initTestimonials() {
  const track = document.querySelector('.testimonials__track');
  const dots = document.querySelectorAll('.testimonials__dot');
  const slides = document.querySelectorAll('.testimonial-card');

  if (!track || !slides.length) return;

  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
  });

  const carousel = document.querySelector('.testimonials__carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  }

  goTo(0);
  startAuto();
}

/* ═══════════════════════════════════════════
   FAQ Accordion
   ═══════════════════════════════════════════ */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const question = item.querySelector('.faq-item__question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach((o) => { if (o !== item) o.classList.remove('open'); });
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ═══════════════════════════════════════════
   Counter Animations
   ═══════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.counter);
  const suffix = el.dataset.counterSuffix || '';
  const prefix = el.dataset.counterPrefix || '';
  const decimals = parseInt(el.dataset.counterDecimals || '0', 10);
  const duration = 2000;
  const startTime = performance.now();

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = easeOutExpo(progress) * target;

    let formatted = value.toFixed(decimals);
    if (decimals === 0) {
      formatted = Math.round(value).toLocaleString();
    }

    el.textContent = prefix + formatted + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ═══════════════════════════════════════════
   Pricing Toggle
   ═══════════════════════════════════════════ */
function initPricingToggle() {
  const switchToggle = document.querySelector('.pricing__toggle-switch');
  const pillToggleBtns = document.querySelectorAll('.pricing__toggle-btn');
  const monthlyLabel = document.querySelector('.pricing__toggle-label--monthly');
  const annualLabel = document.querySelector('.pricing__toggle-label--annual');
  const grids = document.querySelectorAll('.pricing__grid, .pricing-page__grid');

  let isAnnual = true; // Default to annual

  if (switchToggle) {
    isAnnual = switchToggle.classList.contains('annual');
  } else if (pillToggleBtns.length > 0) {
    const activeBtn = document.querySelector('.pricing__toggle-btn.active');
    if (activeBtn) {
      isAnnual = activeBtn.dataset.type === 'annual';
    }
  } else {
    return;
  }

  const updatePricing = () => {
    // 1. Update old switch if exists
    if (switchToggle) {
      switchToggle.classList.toggle('annual', isAnnual);
    }
    if (monthlyLabel) monthlyLabel.classList.toggle('active', !isAnnual);
    if (annualLabel) annualLabel.classList.toggle('active', isAnnual);

    // 2. Update new pill buttons if exist
    pillToggleBtns.forEach(btn => {
      const type = btn.dataset.type;
      const isActive = (type === 'annual' && isAnnual) || (type === 'monthly' && !isAnnual);
      btn.classList.toggle('active', isActive);
    });

    // 3. Update grids
    grids.forEach(grid => grid.classList.toggle('annual', isAnnual));

    // 4. Update data-price-monthly elements with micro-animation pop
    document.querySelectorAll('[data-price-monthly]').forEach((el) => {
      el.textContent = isAnnual ? el.dataset.priceAnnual : el.dataset.priceMonthly;
      el.classList.remove('price-pop');
      void el.offsetWidth; // Force reflow
      el.classList.add('price-pop');
    });

    // 5. Update billed period subtexts if they exist
    document.querySelectorAll('[data-price-period]').forEach((el) => {
      el.textContent = isAnnual ? el.dataset.periodAnnual : el.dataset.periodMonthly;
    });
  };

  // Initialize
  updatePricing();

  if (switchToggle) {
    switchToggle.addEventListener('click', () => {
      isAnnual = !isAnnual;
      updatePricing();
    });
  }

  pillToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      isAnnual = (btn.dataset.type === 'annual');
      updatePricing();
    });
  });
}


/* ═══════════════════════════════════════════
   Feature Card Mouse Glow
   ═══════════════════════════════════════════ */
function initFeatureCardGlow() {
  document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    });
  });
}

/* ═══════════════════════════════════════════
   Demo Booking Modal
   ═══════════════════════════════════════════ */
function openDemoModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Reset to form state
  document.getElementById('demoFormState').style.display = 'block';
  document.getElementById('demoSuccessState').style.display = 'none';
}

function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function submitDemoForm(event) {
  event.preventDefault();

  var form = document.getElementById('demoForm');
  var submitBtn = form.querySelector('.demo-modal__submit');
  var formData = new FormData(form);

  // Build payload for FormSubmit.co
  var data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    'Company Size': formData.get('size') || 'Not specified',
    'Role': formData.get('role') || 'Not specified',
    message: formData.get('message') || 'No message',
    _subject: 'HRVICO Demo Request from ' + formData.get('company'),
    _replyto: formData.get('email'),
    _template: 'table',
    _captcha: 'false',
    _autoresponse: 'Thank you for your interest in HRVICO! Our sales executive will reach out to you within 2 business hours.'
  };

  // Show loading state
  var originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Sending...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';

  // Send via FormSubmit.co (free email delivery for static sites)
  fetch('https://formsubmit.co/ajax/satyam@scriza.in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) { return response.json(); })
  .then(function(result) {
    console.log('FormSubmit response:', result);
    if (result.success) {
      document.getElementById('demoFormState').style.display = 'none';
      document.getElementById('demoSuccessState').style.display = 'block';
      form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  })
  .catch(function(error) {
    console.error('Form submission error:', error);
    alert('Something went wrong. Please try again or email us directly at satyam@scriza.in');
  })
  .finally(function() {
    submitBtn.innerHTML = originalHTML;
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDemoModal();
});

/* ═══════════════════════════════════════════
   Cookies Consent Manager (EU GDPR Standard)
   ═══════════════════════════════════════════ */
function initCookiesBanner() {
  // Define Global CookieConsent API
  window.CookieConsent = {
    getPreferences: function() {
      const saved = localStorage.getItem('cookiePreferences');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing cookie preferences', e);
        }
      }
      // Check legacy accept key (assume full acceptance if they previously accepted)
      if (localStorage.getItem('cookiesAccepted') === 'true') {
        return { necessary: true, analytics: true, marketing: true };
      }
      return null;
    },
    hasConsented: function(category) {
      const prefs = this.getPreferences();
      if (!prefs) return false;
      if (category === 'necessary') return true;
      return !!prefs[category];
    },
    showSettings: function() {
      const banner = document.getElementById('cookiesBanner');
      const trigger = document.getElementById('cookiesSettingsTrigger');
      if (banner) {
        // Pre-fill toggles with current settings
        const prefs = this.getPreferences() || { necessary: true, analytics: false, marketing: false };
        const analyticsInput = document.getElementById('cookiesOptAnalytics');
        const marketingInput = document.getElementById('cookiesOptMarketing');
        if (analyticsInput) analyticsInput.checked = !!prefs.analytics;
        if (marketingInput) marketingInput.checked = !!prefs.marketing;

        // Display preferences panel and save buttons
        const preferencesDiv = document.getElementById('cookiesPreferences');
        const mainActions = document.getElementById('cookiesActionsMain');
        const saveActions = document.getElementById('cookiesActionsSave');
        if (preferencesDiv) preferencesDiv.style.display = 'flex';
        if (mainActions) mainActions.style.display = 'none';
        if (saveActions) saveActions.style.display = 'flex';

        banner.classList.add('show');
      }
      if (trigger) {
        trigger.classList.remove('show');
      }
    },
    hideSettings: function() {
      const banner = document.getElementById('cookiesBanner');
      const trigger = document.getElementById('cookiesSettingsTrigger');
      if (banner) {
        banner.classList.remove('show');
      }
      // Show floating trigger button once user has chosen consent preferences
      if (trigger && this.getPreferences() !== null) {
        setTimeout(() => {
          trigger.classList.add('show');
        }, 400);
      }
    }
  };

  // Create & Append Floating Cookie Settings trigger button
  const trigger = document.createElement('button');
  trigger.className = 'cookies-settings-trigger';
  trigger.id = 'cookiesSettingsTrigger';
  trigger.setAttribute('aria-label', 'Cookie Settings');
  trigger.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.877 0 1.73-.113 2.545-.328a1.002 1.002 0 00.707-.723 1 1 0 00-.312-1.013 3.518 3.518 0 01-1.123-2.909c.148-1.579 1.4-2.884 2.977-3.085A3.498 3.498 0 0121 17.41a1.002 1.002 0 001.077-.293 1 1 0 00.171-1.082C21.431 14.28 21.05 12.185 21 12c0-5.523-4.477-10-10-10zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 1a1 1 0 110 2 1 1 0 010-2zm-8 5a1 1 0 110 2 1 1 0 010-2zm7 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
    </svg>
  `;
  document.body.appendChild(trigger);

  trigger.addEventListener('click', () => {
    window.CookieConsent.showSettings();
  });

  // Create & Append Banner Element
  const banner = document.createElement('div');
  banner.className = 'cookies-banner';
  banner.id = 'cookiesBanner';
  banner.innerHTML = `
    <div class="cookies-banner__body">
      <div class="cookies-banner__header">
        <h4 class="cookies-banner__title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle;">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.877 0 1.73-.113 2.545-.328a1.002 1.002 0 00.707-.723 1 1 0 00-.312-1.013 3.518 3.518 0 01-1.123-2.909c.148-1.579 1.4-2.884 2.977-3.085A3.498 3.498 0 0121 17.41a1.002 1.002 0 001.077-.293 1 1 0 00.171-1.082C21.431 14.28 21.05 12.185 21 12c0-5.523-4.477-10-10-10zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 1a1 1 0 110 2 1 1 0 010-2zm-8 5a1 1 0 110 2 1 1 0 010-2zm7 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          </svg>
          Cookie Consent
        </h4>
      </div>
      <p class="cookies-banner__text">
        We use cookies to improve your experience on our website. By clicking "Accept All", you agree to our use of all cookies. You can customize your settings or read our <a href="privacy.html" class="cookies-banner__link">Privacy Policy</a>.
      </p>
      
      <div class="cookies-banner__preferences" id="cookiesPreferences" style="display: none;">
        <div class="cookies-preference-item">
          <div class="cookies-preference-item__info">
            <span class="cookies-preference-item__title">Necessary Cookies</span>
            <p class="cookies-preference-item__desc">Required for basic website functions, security, and preferences. Cannot be disabled.</p>
          </div>
          <label class="cookies-switch">
            <input type="checkbox" checked disabled>
            <span class="cookies-slider round"></span>
          </label>
        </div>
        <div class="cookies-preference-item">
          <div class="cookies-preference-item__info">
            <span class="cookies-preference-item__title">Analytics Cookies</span>
            <p class="cookies-preference-item__desc">Enable us to monitor traffic patterns, analyze behaviors, and optimize page performance.</p>
          </div>
          <label class="cookies-switch">
            <input type="checkbox" id="cookiesOptAnalytics">
            <span class="cookies-slider round"></span>
          </label>
        </div>
        <div class="cookies-preference-item">
          <div class="cookies-preference-item__info">
            <span class="cookies-preference-item__title">Marketing Cookies</span>
            <p class="cookies-preference-item__desc">Allow personalized advertising and campaign efficiency tracking.</p>
          </div>
          <label class="cookies-switch">
            <input type="checkbox" id="cookiesOptMarketing">
            <span class="cookies-slider round"></span>
          </label>
        </div>
      </div>
      
      <div class="cookies-banner__actions">
        <div class="cookies-banner__actions-row" id="cookiesActionsMain">
          <button class="btn btn--secondary btn--small cookies-banner__btn" id="rejectCookiesBtn">Reject All</button>
          <button class="cookies-banner__btn-link" id="customizeCookiesBtn">Customize</button>
          <button class="btn btn--primary btn--small cookies-banner__btn" id="acceptAllCookiesBtn">Accept All</button>
        </div>
        <div class="cookies-banner__actions-row" id="cookiesActionsSave" style="display: none;">
          <button class="btn btn--secondary btn--small cookies-banner__btn" id="savePrefsCancelBtn">Back</button>
          <button class="btn btn--primary btn--small cookies-banner__btn" id="savePrefsConfirmBtn">Save Settings</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  // Helper function to save choice
  const saveConsent = (prefs) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookiesAccepted', 'true'); // Legacy key compatibility
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }));
    window.CookieConsent.hideSettings();
  };

  // Button Action Listeners
  document.getElementById('acceptAllCookiesBtn').addEventListener('click', () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  });

  document.getElementById('rejectCookiesBtn').addEventListener('click', () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  });

  const customizeBtn = document.getElementById('customizeCookiesBtn');
  const preferencesDiv = document.getElementById('cookiesPreferences');
  const mainActions = document.getElementById('cookiesActionsMain');
  const saveActions = document.getElementById('cookiesActionsSave');

  customizeBtn.addEventListener('click', () => {
    // Show preference panels
    preferencesDiv.style.display = 'flex';
    mainActions.style.display = 'none';
    saveActions.style.display = 'flex';
    
    // Fill switches with active consent states
    const currentPrefs = window.CookieConsent.getPreferences() || { necessary: true, analytics: false, marketing: false };
    document.getElementById('cookiesOptAnalytics').checked = !!currentPrefs.analytics;
    document.getElementById('cookiesOptMarketing').checked = !!currentPrefs.marketing;
  });

  document.getElementById('savePrefsCancelBtn').addEventListener('click', () => {
    // Go back to main options
    preferencesDiv.style.display = 'none';
    mainActions.style.display = 'flex';
    saveActions.style.display = 'none';
  });

  document.getElementById('savePrefsConfirmBtn').addEventListener('click', () => {
    const prefs = {
      necessary: true,
      analytics: document.getElementById('cookiesOptAnalytics').checked,
      marketing: document.getElementById('cookiesOptMarketing').checked
    };
    saveConsent(prefs);
  });

  // Check state on load
  const savedPreferences = window.CookieConsent.getPreferences();
  if (savedPreferences === null) {
    // Show banner with delay for entry transition
    setTimeout(() => {
      banner.classList.add('show');
    }, 400);
  } else {
    // Already accepted/selected preferences, show the widget button
    trigger.classList.add('show');
  }
}

