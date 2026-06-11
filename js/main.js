/* ============================================
   HRVICO — All JavaScript (Non-Module)
   ============================================ */

/* ─── API Configuration ─── */
var HRVICO_API_BASE = 'https://app.hrvico.com/back/api';
var HRVICO_APP_URL = 'https://app.hrvico.com';

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
  initDynamicPricing();
  initStartFreeButton();
  cleanHtmlExtensions();

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
   Clean .html extension from URL bar (cosmetic only)
   ═══════════════════════════════════════════ */
function cleanHtmlExtensions() {
  // Hide .html from the browser URL bar without breaking navigation
  // Links still point to .html files — works on any server, local, nginx, etc.
  if (location.pathname.endsWith('.html')) {
    var clean = location.pathname.replace(/\.html$/, '');
    if (clean === '/index') clean = '/';
    history.replaceState(null, '', clean + location.search + location.hash);
  }
}

/* ═══════════════════════════════════════════
   Start Free Button — inject into navbar + demo modal
   ═══════════════════════════════════════════ */
function initStartFreeButton() {
  var onboardUrl = HRVICO_APP_URL + '/onboard-company';

  // 1. Desktop navbar — add "Start Free" before "Book a Demo"
  var desktopCta = document.querySelector('.navbar__cta.desktop-only');
  if (desktopCta) {
    var existingBtn = desktopCta.querySelector('.btn');
    if (existingBtn && !desktopCta.querySelector('.btn--start-free')) {
      var startFreeBtn = document.createElement('a');
      startFreeBtn.href = onboardUrl;
      startFreeBtn.className = 'btn btn--outline btn--small btn--start-free';
      startFreeBtn.textContent = 'Start Free';
      startFreeBtn.style.cssText = 'border: 1.5px solid var(--color-primary, #6c5ce7); color: var(--color-primary, #6c5ce7); background: transparent; margin-right: 8px; border-radius: 8px; padding: 8px 18px; font-weight: 600; font-size: 0.88rem; text-decoration: none; transition: all 0.2s;';
      startFreeBtn.onmouseover = function() { this.style.background = 'var(--color-primary, #6c5ce7)'; this.style.color = '#fff'; };
      startFreeBtn.onmouseout = function() { this.style.background = 'transparent'; this.style.color = 'var(--color-primary, #6c5ce7)'; };
      desktopCta.insertBefore(startFreeBtn, existingBtn);
    }
  }

  // 2. Mobile menu — add "Start Free" before "Book a Demo"
  var mobileMenu = document.querySelector('.navbar__mobile-menu');
  if (mobileMenu) {
    var mobileDemo = mobileMenu.querySelector('.btn--primary');
    if (mobileDemo && !mobileMenu.querySelector('.btn--start-free')) {
      var mobileStartFree = document.createElement('a');
      mobileStartFree.href = onboardUrl;
      mobileStartFree.className = 'btn btn--outline btn--start-free';
      mobileStartFree.textContent = 'Start Free';
      mobileStartFree.style.cssText = 'border: 1.5px solid var(--color-primary, #6c5ce7); color: var(--color-primary, #6c5ce7); background: transparent; border-radius: 8px; padding: 10px 20px; font-weight: 600; text-decoration: none; text-align: center;';
      mobileMenu.insertBefore(mobileStartFree, mobileDemo);
    }
  }

  // 3. Demo modal — add "Start Free" link below the form submit button
  var demoForm = document.getElementById('demoForm');
  if (demoForm && !demoForm.querySelector('.demo-start-free')) {
    var submitBtn = demoForm.querySelector('.demo-modal__submit');
    if (submitBtn) {
      var freeLink = document.createElement('p');
      freeLink.className = 'demo-start-free';
      freeLink.style.cssText = 'text-align: center; margin-top: 16px; font-size: 0.85rem; color: #666;';
      freeLink.innerHTML = 'Want to get started right away? <a href="' + onboardUrl + '" style="color: var(--color-primary, #6c5ce7); font-weight: 700; text-decoration: none;">Start Free →</a>';
      submitBtn.parentNode.insertBefore(freeLink, submitBtn.nextSibling);
    }
  }
}

/* ═══════════════════════════════════════════
   Dynamic Pricing — Fetch from Backend
   ═══════════════════════════════════════════ */
function initDynamicPricing() {
  var grid = document.getElementById('pricingGrid');
  if (!grid) return;

  fetch(HRVICO_API_BASE + '/superadmin/subscriptionPlan/getAllPlans?limit=50')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (!data.success || !data.plans || data.plans.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px 20px;"><p style="color:#64748b;font-size:0.95rem;">Plans are being updated. Please check back shortly.</p></div>';
        return;
      }

      var plans = data.plans
        .filter(function (p) { return p.status === 'Active'; })
        .sort(function (a, b) { return (a.pricePerMonth || 0) - (b.pricePerMonth || 0); });

      if (plans.length === 0) return;

      // Find the most popular plan (middle-ish or the one with most features)
      var popularIndex = Math.min(2, plans.length - 1);

      var cardsHTML = '';
      plans.forEach(function (plan, index) {
        var isPopular = index === popularIndex;
        var price = plan.pricePerMonth;
        var priceDisplay = price === 0 || price === null ? '₹0' : '₹' + Number(price).toLocaleString('en-IN');
        var period = price === 0 || price === null ? '/ 6 mo' : '/mo';
        var subtext = price === 0 || price === null ? 'free setup' : 'billed monthly';

        var featuresHTML = '';
        if (plan.features && plan.features.length > 0) {
          plan.features.forEach(function (f) {
            featuresHTML += '<div class="pricing-feature"><span class="pricing-feature__check">✔</span> ' + f.featuresName + '</div>';
          });
        }

        var highlightText = plan.userLimit
          ? 'Up to ' + plan.userLimit + ' Employees Included'
          : 'Unlimited Employees Included';

        var ctaText = price === 0 || price === null ? 'Start Free' : 'Get Started';
        var ctaClass = isPopular ? 'btn btn--primary pricing-card__cta' : 'btn btn--light-grey pricing-card__cta';
        var cardClass = isPopular ? 'pricing-card pricing-card--popular' : 'pricing-card';

        if (isPopular) {
          cardsHTML += '<div class="' + cardClass + '">';
          cardsHTML += '<div class="pricing-card__popular-header"><span class="popular-header__icon">🔥</span> Popular Choice</div>';
          cardsHTML += '<div class="pricing-card__body">';
        } else {
          cardsHTML += '<div class="' + cardClass + '">';
          cardsHTML += '<div class="pricing-card__inner">';
        }

        cardsHTML += '<h3 class="pricing-card__name">' + plan.plan + '</h3>';
        cardsHTML += '<p class="pricing-card__desc">Up to ' + (plan.userLimit || '∞') + ' employees</p>';
        cardsHTML += '<div class="pricing-card__price">';
        cardsHTML += '<span class="pricing-card__amount">' + priceDisplay + '</span>';
        cardsHTML += '<span class="pricing-card__period">' + period + '</span>';
        cardsHTML += '</div>';
        cardsHTML += '<div class="pricing-card__price-subtext">' + subtext + '</div>';
        cardsHTML += '<div class="pricing-card__features">' + featuresHTML + '</div>';
        cardsHTML += '<div class="pricing-card__feature-highlight">' + highlightText + '</div>';

        if (price === 0 || price === null) {
          cardsHTML += '<a href="' + HRVICO_APP_URL + '/onboard-company" class="' + ctaClass + '">' + ctaText + '</a>';
          cardsHTML += '<span class="pricing-card__highlight-small">No Credit Card Required</span>';
        } else {
          cardsHTML += '<a href="' + HRVICO_APP_URL + '/onboard-company" class="' + ctaClass + '">' + ctaText + '</a>';
        }

        cardsHTML += '</div></div>';
      });

      grid.innerHTML = cardsHTML;
    })
    .catch(function (err) {
      console.error('Failed to fetch pricing plans:', err);
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px 20px;"><p style="color:#64748b;font-size:0.95rem;">Unable to load plans. Please refresh the page.</p><button onclick="location.reload()" style="margin-top:12px;padding:8px 24px;border-radius:8px;border:none;background:#6366f1;color:#fff;font-weight:600;cursor:pointer;">Refresh</button></div>';
    });
}

/* ═══════════════════════════════════════════
   Demo Booking Modal
   ═══════════════════════════════════════════ */
var _demoOtpVerified = false;
var _demoVerifiedEmail = '';

function openDemoModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Reset to form state
  _demoOtpVerified = false;
  _demoVerifiedEmail = '';
  document.getElementById('demoFormState').style.display = 'block';
  document.getElementById('demoSuccessState').style.display = 'none';

  // Inject OTP state if not already present
  if (!document.getElementById('demoOtpState')) {
    var otpHTML = '<div class="demo-modal__form-state" id="demoOtpState" style="display: none;">'
      + '<div class="demo-modal__header">'
      + '<div class="demo-modal__logo"><img src="assets/images/hrvico-logo.svg?v=1.5" alt="HRvico Logo" class="demo-modal__logo-img" style="height: 36px; width: auto;"></div>'
      + '<h3 class="demo-modal__title">Verify Your Email</h3>'
      + '<p class="demo-modal__subtitle">We\'ve sent an OTP to <strong id="demoOtpEmail"></strong></p>'
      + '</div>'
      + '<div style="padding: 0 1.5rem 1.5rem;">'
      + '<div class="demo-modal__field"><label for="demoOtpInput">Enter OTP *</label>'
      + '<input type="text" id="demoOtpInput" placeholder="Enter 6-digit OTP" maxlength="6" style="text-align: center; font-size: 1.2rem; letter-spacing: 0.3em;" required></div>'
      + '<button type="button" class="btn btn--primary btn--large demo-modal__submit" id="demoOtpVerifyBtn" onclick="verifyDemoOtp()" style="width: 100%; margin-top: 1rem;">Verify & Submit</button>'
      + '<p style="text-align: center; margin-top: 1rem; font-size: 0.85rem; color: #888;">Didn\'t receive it? '
      + '<button type="button" id="demoOtpResendBtn" onclick="resendDemoOtp()" style="background: none; border: none; color: #6c5ce7; cursor: pointer; font-weight: 600; font-size: 0.85rem;">Resend OTP</button></p>'
      + '</div></div>';
    var container = modal.querySelector('.demo-modal__container');
    var successState = document.getElementById('demoSuccessState');
    successState.insertAdjacentHTML('beforebegin', otpHTML);
  }
  document.getElementById('demoOtpState').style.display = 'none';
}

function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* Step 1: Submit form → send OTP to email */
function submitDemoForm(event) {
  event.preventDefault();

  var form = document.getElementById('demoForm');
  var submitBtn = form.querySelector('.demo-modal__submit');
  var email = form.querySelector('[name="email"]').value.trim();

  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  var originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Sending OTP...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';

  fetch(HRVICO_API_BASE + '/Demo/send-demo-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result.success) {
        _demoVerifiedEmail = email;
        document.getElementById('demoFormState').style.display = 'none';
        document.getElementById('demoOtpState').style.display = 'block';
        document.getElementById('demoOtpEmail').textContent = email;
      } else {
        alert(result.message || 'Failed to send OTP. Please try again.');
      }
    })
    .catch(function (err) {
      console.error('Send OTP error:', err);
      alert('Something went wrong. Please try again.');
    })
    .finally(function () {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    });
}

/* Step 2: Verify OTP */
function verifyDemoOtp() {
  var otpInput = document.getElementById('demoOtpInput');
  var verifyBtn = document.getElementById('demoOtpVerifyBtn');
  var otp = otpInput.value.trim();

  if (!otp || otp.length < 4) {
    alert('Please enter a valid OTP.');
    return;
  }

  verifyBtn.textContent = 'Verifying...';
  verifyBtn.disabled = true;

  fetch(HRVICO_API_BASE + '/Demo/verify-demo-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: _demoVerifiedEmail, otp: otp })
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result.success) {
        _demoOtpVerified = true;
        submitDemoRequest();
      } else {
        alert(result.message || 'Invalid or expired OTP.');
      }
    })
    .catch(function (err) {
      console.error('Verify OTP error:', err);
      alert('Something went wrong. Please try again.');
    })
    .finally(function () {
      verifyBtn.textContent = 'Verify & Submit';
      verifyBtn.disabled = false;
    });
}

/* Step 3: Submit demo request to backend */
function submitDemoRequest() {
  var form = document.getElementById('demoForm');
  var formData = new FormData(form);

  var payload = {
    fullName: formData.get('name'),
    email: _demoVerifiedEmail,
    phone: formData.get('phone'),
    companyName: formData.get('company'),
    companySize: formData.get('size') || '1-50',
    role: formData.get('role') || 'Other',
    message: formData.get('message') || '',
  };

  fetch(HRVICO_API_BASE + '/Demo/create-demo-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result.success) {
        document.getElementById('demoOtpState').style.display = 'none';
        document.getElementById('demoSuccessState').style.display = 'block';
        form.reset();
      } else {
        alert(result.message || 'Submission failed. Please try again.');
        // Go back to form if duplicate or error
        document.getElementById('demoOtpState').style.display = 'none';
        document.getElementById('demoFormState').style.display = 'block';
      }
    })
    .catch(function (err) {
      console.error('Demo request error:', err);
      alert('Something went wrong. Please try again.');
      document.getElementById('demoOtpState').style.display = 'none';
      document.getElementById('demoFormState').style.display = 'block';
    });
}

/* Resend OTP */
function resendDemoOtp() {
  if (!_demoVerifiedEmail) return;

  var resendBtn = document.getElementById('demoOtpResendBtn');
  resendBtn.textContent = 'Sending...';
  resendBtn.disabled = true;

  fetch(HRVICO_API_BASE + '/Demo/send-demo-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: _demoVerifiedEmail })
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result.success) {
        alert('OTP resent to ' + _demoVerifiedEmail);
      } else {
        alert(result.message || 'Could not resend OTP. Please wait and try again.');
      }
    })
    .catch(function () {
      alert('Failed to resend OTP.');
    })
    .finally(function () {
      resendBtn.textContent = 'Resend OTP';
      resendBtn.disabled = false;
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
    getPreferences: function () {
      var saved = localStorage.getItem('cookiePreferences');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* */ }
      }
      if (localStorage.getItem('cookiesAccepted') === 'true') {
        return { necessary: true, analytics: true, marketing: true };
      }
      return null;
    },
    hasConsented: function (category) {
      var prefs = this.getPreferences();
      if (!prefs) return false;
      if (category === 'necessary') return true;
      return !!prefs[category];
    },
    showSettings: function () { /* no-op — cookie icon removed */ }
  };

  // Already consented — don't show anything
  if (window.CookieConsent.getPreferences() !== null) return;

  // Create banner (first visit only, no floating icon)
  var banner = document.createElement('div');
  banner.className = 'cookies-banner';
  banner.id = 'cookiesBanner';
  banner.innerHTML = ''
    + '<div class="cookies-banner__body">'
    + '  <div class="cookies-banner__header">'
    + '    <h4 class="cookies-banner__title">'
    + '      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:middle;">'
    + '        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.877 0 1.73-.113 2.545-.328a1.002 1.002 0 00.707-.723 1 1 0 00-.312-1.013 3.518 3.518 0 01-1.123-2.909c.148-1.579 1.4-2.884 2.977-3.085A3.498 3.498 0 0121 17.41a1.002 1.002 0 001.077-.293 1 1 0 00.171-1.082C21.431 14.28 21.05 12.185 21 12c0-5.523-4.477-10-10-10zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 1a1 1 0 110 2 1 1 0 010-2zm-8 5a1 1 0 110 2 1 1 0 010-2zm7 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>'
    + '      </svg>'
    + '      Cookie Consent'
    + '    </h4>'
    + '  </div>'
    + '  <p class="cookies-banner__text">'
    + '    We use cookies to improve your experience on our website. By clicking "Accept All", you agree to our use of all cookies. You can customize your settings or read our <a href="/privacy" class="cookies-banner__link">Privacy Policy</a>.'
    + '  </p>'
    + '  <div class="cookies-banner__preferences" id="cookiesPreferences" style="display:none;">'
    + '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Necessary Cookies</span><p class="cookies-preference-item__desc">Required for basic website functions. Cannot be disabled.</p></div><label class="cookies-switch"><input type="checkbox" checked disabled><span class="cookies-slider round"></span></label></div>'
    + '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Analytics Cookies</span><p class="cookies-preference-item__desc">Help us understand how visitors interact with our website.</p></div><label class="cookies-switch"><input type="checkbox" id="cookiesOptAnalytics"><span class="cookies-slider round"></span></label></div>'
    + '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Marketing Cookies</span><p class="cookies-preference-item__desc">Allow personalized advertising and campaign tracking.</p></div><label class="cookies-switch"><input type="checkbox" id="cookiesOptMarketing"><span class="cookies-slider round"></span></label></div>'
    + '  </div>'
    + '  <div class="cookies-banner__actions">'
    + '    <div class="cookies-banner__actions-row" id="cookiesActionsMain">'
    + '      <button class="btn btn--secondary btn--small cookies-banner__btn" id="rejectCookiesBtn">Reject All</button>'
    + '      <button class="cookies-banner__btn-link" id="customizeCookiesBtn">Customize</button>'
    + '      <button class="btn btn--primary btn--small cookies-banner__btn" id="acceptAllCookiesBtn">Accept All</button>'
    + '    </div>'
    + '    <div class="cookies-banner__actions-row" id="cookiesActionsSave" style="display:none;">'
    + '      <button class="btn btn--secondary btn--small cookies-banner__btn" id="savePrefsCancelBtn">Back</button>'
    + '      <button class="btn btn--primary btn--small cookies-banner__btn" id="savePrefsConfirmBtn">Save Settings</button>'
    + '    </div>'
    + '  </div>'
    + '</div>';
  document.body.appendChild(banner);

  var saveConsent = function (prefs) {
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookiesAccepted', 'true');
    banner.classList.remove('show');
  };

  document.getElementById('acceptAllCookiesBtn').addEventListener('click', function () {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  });

  document.getElementById('rejectCookiesBtn').addEventListener('click', function () {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  });

  var preferencesDiv = document.getElementById('cookiesPreferences');
  var mainActions = document.getElementById('cookiesActionsMain');
  var saveActions = document.getElementById('cookiesActionsSave');

  document.getElementById('customizeCookiesBtn').addEventListener('click', function () {
    preferencesDiv.style.display = 'flex';
    mainActions.style.display = 'none';
    saveActions.style.display = 'flex';
  });

  document.getElementById('savePrefsCancelBtn').addEventListener('click', function () {
    preferencesDiv.style.display = 'none';
    mainActions.style.display = 'flex';
    saveActions.style.display = 'none';
  });

  document.getElementById('savePrefsConfirmBtn').addEventListener('click', function () {
    saveConsent({
      necessary: true,
      analytics: document.getElementById('cookiesOptAnalytics').checked,
      marketing: document.getElementById('cookiesOptMarketing').checked
    });
  });

  // Show banner after short delay
  setTimeout(function () { banner.classList.add('show'); }, 400);
}

