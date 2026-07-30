/* ============================================
   HRVICO — All JavaScript (Non-Module)
   ============================================ */

var HRVICO_API_BASE = "https://app.hrvico.com/back/api";
var HRVICO_APP_URL = "https://app.hrvico.com/back";

function getBlogImg(img) {
  if (!img) return "";
  if (img.startsWith('http')) return img;
  if (img.startsWith('/')) return HRVICO_APP_URL + img;
  if (img.startsWith('uploads/')) return HRVICO_APP_URL + '/' + img;
  return HRVICO_APP_URL + "/uploads/" + img;
}

document.addEventListener("DOMContentLoaded", () => {
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
  initBlogListing();
  initBlogDetail();
  initActiveMenu();

  // Auto-open demo modal if parameter is present in URL
  if (window.location.search.includes("demo=true")) {
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
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll("[data-animate]")
    .forEach((el) => observer.observe(el));

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );

  document
    .querySelectorAll("[data-stagger]")
    .forEach((el) => staggerObserver.observe(el));
}

/* ═══════════════════════════════════════════
   Navbar
   ═══════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".navbar__hamburger");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");

  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "";
    });

    mobileMenu.querySelectorAll(".navbar__link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  document.querySelectorAll(".navbar__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = navbar.offsetHeight + 20;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });
}

/* ═══════════════════════════════════════════
   Role Switcher
   ═══════════════════════════════════════════ */
function initRoleSwitcher() {
  const tabs = document.querySelectorAll(".role-tab");
  const contents = document.querySelectorAll(".role-content");

  if (!tabs.length || !contents.length) return;

  function switchRole(role) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.role === role));
    contents.forEach((c) =>
      c.classList.toggle("active", c.dataset.role === role),
    );
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchRole(tab.dataset.role));
  });

  // Init: first role
  if (tabs[0]) switchRole(tabs[0].dataset.role);
}

/* ═══════════════════════════════════════════
   Testimonials Carousel
   ═══════════════════════════════════════════ */
function initTestimonials() {
  const track = document.querySelector(".testimonials__track");
  const dots = document.querySelectorAll(".testimonials__dot");
  const slides = document.querySelectorAll(".testimonial-card");

  if (!track || !slides.length) return;

  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAuto();
    });
  });

  const carousel = document.querySelector(".testimonials__carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);
  }

  goTo(0);
  startAuto();
}

/* ═══════════════════════════════════════════
   FAQ Accordion
   ═══════════════════════════════════════════ */
function initFAQ() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const question = item.querySelector(".faq-item__question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((o) => {
        if (o !== item) o.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });
}

/* ═══════════════════════════════════════════
   Counter Animations
   ═══════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
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
    { threshold: 0.3 },
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.counter);
  const suffix = el.dataset.counterSuffix || "";
  const prefix = el.dataset.counterPrefix || "";
  const decimals = parseInt(el.dataset.counterDecimals || "0", 10);
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
  const switchToggle = document.querySelector(".pricing__toggle-switch");
  const pillToggleBtns = document.querySelectorAll(".pricing__toggle-btn");
  const monthlyLabel = document.querySelector(
    ".pricing__toggle-label--monthly",
  );
  const annualLabel = document.querySelector(".pricing__toggle-label--annual");

  let isAnnual = false; // Default to monthly view

  const activeBtn = document.querySelector(".pricing__toggle-btn.active");
  if (activeBtn) {
    isAnnual = activeBtn.dataset.type === "annual";
  }

  window.updatePricing = function () {
    if (switchToggle) {
      switchToggle.classList.toggle("annual", isAnnual);
    }
    if (monthlyLabel) monthlyLabel.classList.toggle("active", !isAnnual);
    if (annualLabel) annualLabel.classList.toggle("active", isAnnual);

    document.querySelectorAll(".pricing__toggle-btn").forEach((btn) => {
      const type = btn.dataset.type;
      const isActive =
        (type === "annual" && isAnnual) || (type === "monthly" && !isAnnual);
      btn.classList.toggle("active", isActive);
    });

    document.querySelectorAll(".pricing__grid, .pricing-page__grid").forEach((grid) => {
      grid.classList.toggle("annual", isAnnual);
    });

    document.querySelectorAll("[data-price-monthly]").forEach((el) => {
      el.textContent = isAnnual
        ? el.dataset.priceAnnual
        : el.dataset.priceMonthly;
      el.classList.remove("price-pop");
      void el.offsetWidth; // Force reflow
      el.classList.add("price-pop");
    });

    document.querySelectorAll("[data-price-period]").forEach((el) => {
      el.textContent = isAnnual
        ? el.dataset.periodAnnual
        : el.dataset.periodMonthly;
    });

    document.querySelectorAll("[data-price-subtext]").forEach((el) => {
      if (el.dataset.subtextAnnual && el.dataset.subtextMonthly) {
        el.textContent = isAnnual
          ? el.dataset.subtextAnnual
          : el.dataset.subtextMonthly;
      }
    });
  };

  // Initialize
  window.updatePricing();

  if (switchToggle) {
    switchToggle.addEventListener("click", () => {
      isAnnual = !isAnnual;
      window.updatePricing();
    });
  }

  document.querySelectorAll(".pricing__toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      isAnnual = btn.dataset.type === "annual";
      window.updatePricing();
    });
  });
}

/* ═══════════════════════════════════════════
   Feature Card Mouse Glow
   ═══════════════════════════════════════════ */
function initFeatureCardGlow() {
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty(
        "--mouse-x",
        ((e.clientX - rect.left) / rect.width) * 100 + "%",
      );
      card.style.setProperty(
        "--mouse-y",
        ((e.clientY - rect.top) / rect.height) * 100 + "%",
      );
    });
  });
}

/* ═══════════════════════════════════════════
   Clean .html extension from URL bar (cosmetic only)
   ═══════════════════════════════════════════ */
function cleanHtmlExtensions() {
  // Hide .html from the browser URL bar without breaking navigation
  // Links still point to .html files — works on any server, local, nginx, etc.
  if (location.pathname.endsWith(".html")) {
    var clean = location.pathname.replace(/\.html$/, "");
    if (clean === "/index") clean = "/";
    history.replaceState(null, "", clean + location.search + location.hash);
  }
}

/* ═══════════════════════════════════════════
   Start Free Button — inject into navbar + demo modal
   ═══════════════════════════════════════════ */
function initStartFreeButton() {
  var onboardUrl = HRVICO_APP_URL + "/onboard-company";

  // 1. Desktop navbar — add "Start Free" before "Book a Demo"
  var desktopCta = document.querySelector(".navbar__cta.desktop-only");
  if (desktopCta) {
    var existingBtn = desktopCta.querySelector(".btn");
    if (existingBtn && !desktopCta.querySelector(".btn--start-free")) {
      var startFreeBtn = document.createElement("a");
      startFreeBtn.href = onboardUrl;
      startFreeBtn.className = "btn btn--primary btn--small btn--start-free";
      startFreeBtn.textContent = "Start Free";
      startFreeBtn.style.marginRight = "12px";
      desktopCta.insertBefore(startFreeBtn, existingBtn);
    }
  }

  // 2. Mobile menu — add "Start Free" before "Book a Demo"
  var mobileMenu = document.querySelector(".navbar__mobile-menu");
  if (mobileMenu) {
    var mobileDemo = mobileMenu.querySelector(".btn--primary");
    if (mobileDemo && !mobileMenu.querySelector(".btn--start-free")) {
      var mobileStartFree = document.createElement("a");
      mobileStartFree.href = onboardUrl;
      mobileStartFree.className = "btn btn--primary btn--start-free";
      mobileStartFree.textContent = "Start Free";
      mobileStartFree.style.marginBottom = "12px";
      mobileMenu.insertBefore(mobileStartFree, mobileDemo);
    }
  }

  // 3. Demo modal — add "Start Free" link below the form submit button
  var demoForm = document.getElementById("demoForm");
  if (demoForm && !demoForm.querySelector(".demo-start-free")) {
    var submitBtn = demoForm.querySelector(".demo-modal__submit");
    if (submitBtn) {
      var freeLink = document.createElement("p");
      freeLink.className = "demo-start-free";
      freeLink.style.cssText =
        "text-align: center; margin-top: 16px; font-size: 0.85rem; color: #666;";
      freeLink.innerHTML =
        'Want to get started right away? <a href="' +
        onboardUrl +
        '" style="color: var(--color-primary, #6c5ce7); font-weight: 700; text-decoration: none;">Start Free →</a>';
      submitBtn.parentNode.insertBefore(freeLink, submitBtn.nextSibling);
    }
  }
}

/* ═══════════════════════════════════════════
   Dynamic Pricing — Fetch from Backend
   ═══════════════════════════════════════════ */
function initDynamicPricing() {
  var grid = document.getElementById("pricingGrid");
  if (!grid) return;

  function renderPlans(plansList) {
    var plans = (plansList || [])
      .filter(function (p) {
        return p.status === "Active";
      })
      .sort(function (a, b) {
        return (a.pricePerMonth || 0) - (b.pricePerMonth || 0);
      });

    if (plans.length === 0) {
      grid.innerHTML =
        '<div style="grid-column:1/-1;text-align:center;padding:40px 20px;"><p style="color:#64748b;font-size:0.95rem;">Plans are being updated. Please check back shortly.</p></div>';
      return;
    }

    var popularIndex = -1;
    plans.forEach(function (p, i) {
      if (p.plan && p.plan.toLowerCase().includes("standard")) {
        popularIndex = i;
      }
    });
    if (popularIndex === -1) {
      popularIndex = Math.min(2, plans.length - 1);
    }

    var cardsHTML = "";
    plans.forEach(function (plan, index) {
      var isPopular = index === popularIndex;
      var priceM = plan.pricePerMonth;
      var priceY = plan.pricePerYear || (priceM * 12);

      var priceDisplayMonthly =
        priceM === 0 || priceM === null
          ? "₹0"
          : "₹" + Number(priceM).toLocaleString("en-IN");

      var priceDisplayAnnual =
        priceY === 0 || priceY === null
          ? "₹0"
          : "₹" + Number(priceY).toLocaleString("en-IN");

      var periodMonthly = "/mo";
      var periodAnnual = "/yr";

      var subtextMonthly =
        priceM === 0 || priceM === null ? "free setup" : "billed monthly";

      var subtextAnnual =
        priceY === 0 || priceY === null ? "free setup" : "billed annually (₹" + Number(priceY).toLocaleString("en-IN") + "/yr)";

      var featuresHTML = "";
      if (plan.features && plan.features.length > 0) {
        plan.features.forEach(function (f) {
          var featureTitle = f.featuresName || f.name || f;
          featuresHTML +=
            '<div class="pricing-feature"><span class="pricing-feature__check">✔</span> ' +
            featureTitle +
            "</div>";
        });
      }

      var highlightText = plan.userLimit
        ? "Up to " + plan.userLimit + " Employees Included"
        : "Unlimited Employees Included";

      var ctaText =
        priceM === 0 || priceM === null ? "Start Free" : "Get Started";
      var ctaClass = isPopular
        ? "btn btn--primary pricing-card__cta"
        : "btn btn--light-grey pricing-card__cta";
      var cardClass = isPopular
        ? "pricing-card pricing-card--popular"
        : "pricing-card";

      if (isPopular) {
        cardsHTML += '<div class="' + cardClass + '">';
        cardsHTML +=
          '<div class="pricing-card__popular-header"><span class="popular-header__icon">🔥</span> Popular Choice</div>';
        cardsHTML += '<div class="pricing-card__body">';
      } else {
        cardsHTML += '<div class="' + cardClass + '">';
        cardsHTML += '<div class="pricing-card__inner">';
      }

      cardsHTML += '<h3 class="pricing-card__name">' + (plan.plan || plan.name) + "</h3>";
      cardsHTML +=
        '<p class="pricing-card__desc">Up to ' +
        (plan.userLimit || "∞") +
        " employees</p>";
      cardsHTML += '<div class="pricing-card__price">';
      cardsHTML +=
        '<span class="pricing-card__amount" data-price-monthly="' + priceDisplayMonthly + '" data-price-annual="' + priceDisplayAnnual + '">' + priceDisplayMonthly + "</span>";
      cardsHTML += '<span class="pricing-card__period" data-price-period data-period-monthly="' + periodMonthly + '" data-period-annual="' + periodAnnual + '">' + periodMonthly + "</span>";
      cardsHTML += "</div>";
      cardsHTML +=
        '<div class="pricing-card__price-subtext" data-price-subtext data-subtext-monthly="' + subtextMonthly + '" data-subtext-annual="' + subtextAnnual + '">' + subtextMonthly + "</div>";
      cardsHTML +=
        '<div class="pricing-card__features">' + featuresHTML + "</div>";
      cardsHTML +=
        '<div class="pricing-card__feature-highlight">' +
        highlightText +
        "</div>";

      if (priceM === 0 || priceM === null) {
        cardsHTML +=
          '<a href="' +
          HRVICO_APP_URL +
          '/onboard-company" class="' +
          ctaClass +
          '">' +
          ctaText +
          "</a>";
        cardsHTML +=
          '<span class="pricing-card__highlight-small">No Credit Card Required</span>';
      } else {
        cardsHTML +=
          '<a href="' +
          HRVICO_APP_URL +
          '/onboard-company" class="' +
          ctaClass +
          '">' +
          ctaText +
          "</a>";
      }

      cardsHTML += "</div></div>";
    });

    grid.innerHTML = cardsHTML;

    if (typeof window.updatePricing === "function") {
      window.updatePricing();
    }
  }

  fetch(HRVICO_API_BASE + "/superadmin/subscriptionPlan/getAllPlans", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      var plans = data.plans || data.data || [];
      if (!(data.success || data.status) || !Array.isArray(plans) || plans.length === 0) {
        throw new Error("Invalid or empty data from API");
      }
      renderPlans(plans);
    })
    .catch(function (err) {
      console.error("Failed to fetch pricing plans:", err);
      var fallbackPlans = [
        {"planId":"117807","plan":"Free","userLimit":"5","pricePerMonth":0,"pricePerYear":0,"pricing":[{"planType":"Monthly","price":0},{"planType":"Yearly","price":0}],"features":[{"featuresName":"Upto 5 Staff"},{"featuresName":"Employee Management"},{"featuresName":"Attendance Management"},{"featuresName":"Leave Management"},{"featuresName":"Holiday Calendar"},{"featuresName":"Reports & Analytics"}],"status":"Active"},
        {"planId":"537180","plan":"Basic Plan","userLimit":"25","pricePerMonth":999,"pricePerYear":11988,"pricing":[{"planType":"Monthly","price":999},{"planType":"Yearly","price":11988}],"features":[{"featuresName":"Upto 25 Employees"},{"featuresName":"Attendance Management"},{"featuresName":"Leave Management"},{"featuresName":"Employee Dashboard"},{"featuresName":"Holiday calendar"},{"featuresName":"Reports Analytics"},{"featuresName":"Texting Chat Box"},{"featuresName":"Manage Employee Documents"},{"featuresName":"Employee Management"}],"status":"Active"},
        {"planId":"551739","plan":"Standard Plan","userLimit":"50","pricePerMonth":1999,"pricePerYear":23988,"pricing":[{"planType":"Monthly","price":1999},{"planType":"Yearly","price":23988}],"features":[{"featuresName":"Upto 50 Employees"},{"featuresName":"Attendance Management"},{"featuresName":"Payroll Management"},{"featuresName":"Leave Management"},{"featuresName":"Reports & Analytics"},{"featuresName":"Document Management"},{"featuresName":"Mobile Dashboard App"},{"featuresName":"HR Automation"},{"featuresName":"Chat Box(Audio/Video)"},{"featuresName":"Employee Dashboard"},{"featuresName":"Holiday Calendar"},{"featuresName":"Manage Employee Documents"},{"featuresName":"Appraisals Management"},{"featuresName":"Reimbursement"}],"status":"Active"},
        {"planId":"739205","plan":"Premium Plan","userLimit":"100","pricePerMonth":3999,"pricePerYear":48000,"pricing":[{"planType":"Monthly","price":3999},{"planType":"Yearly","price":48000}],"features":[{"featuresName":"Up To 100 Employees"},{"featuresName":"Everything in Standard"},{"featuresName":"Multi-Branch Management"},{"featuresName":"HR Automation"},{"featuresName":"Priority Onboarding"},{"featuresName":"Job Management"},{"featuresName":"HR Automation"},{"featuresName":"Chat Box(Audio/Video)"},{"featuresName":"Payroll Management"},{"featuresName":"Website Health Monitoring"},{"featuresName":"Priority Support"}],"status":"Active"}
      ];
      renderPlans(fallbackPlans);
    });
}

/* ═══════════════════════════════════════════
   Demo Booking Modal
   ═══════════════════════════════════════════ */
var _demoOtpVerified = false;
var _demoVerifiedEmail = "";

function openDemoModal() {
  const modal = document.getElementById("demoModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  // Reset to form state
  _demoOtpVerified = false;
  _demoVerifiedEmail = "";
  document.getElementById("demoFormState").style.display = "block";
  document.getElementById("demoSuccessState").style.display = "none";

  // Inject OTP state if not already present
  if (!document.getElementById("demoOtpState")) {
    var otpHTML =
      '<div class="demo-modal__form-state" id="demoOtpState" style="display: none;">' +
      '<div class="demo-modal__header">' +
      '<div class="demo-modal__logo"><img src="assets/images/hrvico-logo.svg?v=1.5" alt="HRvico Logo" class="demo-modal__logo-img" style="height: 36px; width: auto;"></div>' +
      '<h3 class="demo-modal__title">Verify Your Email</h3>' +
      '<p class="demo-modal__subtitle">We\'ve sent an OTP to <strong id="demoOtpEmail"></strong></p>' +
      "</div>" +
      '<div style="padding: 0 1.5rem 1.5rem;">' +
      '<div class="demo-modal__field"><label for="demoOtpInput">Enter OTP *</label>' +
      '<input type="text" id="demoOtpInput" placeholder="Enter 6-digit OTP" maxlength="6" style="text-align: center; font-size: 1.2rem; letter-spacing: 0.3em;" required></div>' +
      '<button type="button" class="btn btn--primary btn--large demo-modal__submit" id="demoOtpVerifyBtn" onclick="verifyDemoOtp()" style="width: 100%; margin-top: 1rem;">Verify & Submit</button>' +
      '<p style="text-align: center; margin-top: 1rem; font-size: 0.85rem; color: #888;">Didn\'t receive it? ' +
      '<button type="button" id="demoOtpResendBtn" onclick="resendDemoOtp()" style="background: none; border: none; color: #6c5ce7; cursor: pointer; font-weight: 600; font-size: 0.85rem;">Resend OTP</button></p>' +
      "</div></div>";
    var container = modal.querySelector(".demo-modal__container");
    var successState = document.getElementById("demoSuccessState");
    successState.insertAdjacentHTML("beforebegin", otpHTML);
  }
  document.getElementById("demoOtpState").style.display = "none";
}

function closeDemoModal() {
  const modal = document.getElementById("demoModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* Step 1: Submit form → send OTP to email */
function submitDemoForm(event) {
  event.preventDefault();

  var form = document.getElementById("demoForm");
  var submitBtn = form.querySelector(".demo-modal__submit");
  var email = form.querySelector('[name="email"]').value.trim();

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  var originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = "Sending OTP...";
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.7";

  fetch(HRVICO_API_BASE + "/Demo/send-demo-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result.success) {
        _demoVerifiedEmail = email;
        document.getElementById("demoFormState").style.display = "none";
        document.getElementById("demoOtpState").style.display = "block";
        document.getElementById("demoOtpEmail").textContent = email;
      } else {
        alert(result.message || "Failed to send OTP. Please try again.");
      }
    })
    .catch(function (err) {
      console.error("Send OTP error:", err);
      alert("Something went wrong. Please try again.");
    })
    .finally(function () {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    });
}

/* Step 2: Verify OTP */
function verifyDemoOtp() {
  var otpInput = document.getElementById("demoOtpInput");
  var verifyBtn = document.getElementById("demoOtpVerifyBtn");
  var otp = otpInput.value.trim();

  if (!otp || otp.length < 4) {
    alert("Please enter a valid OTP.");
    return;
  }

  verifyBtn.textContent = "Verifying...";
  verifyBtn.disabled = true;

  fetch(HRVICO_API_BASE + "/Demo/verify-demo-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: _demoVerifiedEmail, otp: otp }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result.success) {
        _demoOtpVerified = true;
        submitDemoRequest();
      } else {
        alert(result.message || "Invalid or expired OTP.");
      }
    })
    .catch(function (err) {
      console.error("Verify OTP error:", err);
      alert("Something went wrong. Please try again.");
    })
    .finally(function () {
      verifyBtn.textContent = "Verify & Submit";
      verifyBtn.disabled = false;
    });
}

/* Step 3: Submit demo request to backend */
function submitDemoRequest() {
  var form = document.getElementById("demoForm");
  var formData = new FormData(form);

  var payload = {
    fullName: formData.get("name"),
    email: _demoVerifiedEmail,
    phone: formData.get("phone"),
    companyName: formData.get("company"),
    companySize: formData.get("size") || "1-50",
    role: formData.get("role") || "Other",
    message: formData.get("message") || "",
  };

  fetch(HRVICO_API_BASE + "/Demo/create-demo-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result.success) {
        document.getElementById("demoOtpState").style.display = "none";
        document.getElementById("demoSuccessState").style.display = "block";
        form.reset();
      } else {
        alert(result.message || "Submission failed. Please try again.");
        // Go back to form if duplicate or error
        document.getElementById("demoOtpState").style.display = "none";
        document.getElementById("demoFormState").style.display = "block";
      }
    })
    .catch(function (err) {
      console.error("Demo request error:", err);
      alert("Something went wrong. Please try again.");
      document.getElementById("demoOtpState").style.display = "none";
      document.getElementById("demoFormState").style.display = "block";
    });
}

/* Resend OTP */
function resendDemoOtp() {
  if (!_demoVerifiedEmail) return;

  var resendBtn = document.getElementById("demoOtpResendBtn");
  resendBtn.textContent = "Sending...";
  resendBtn.disabled = true;

  fetch(HRVICO_API_BASE + "/Demo/send-demo-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: _demoVerifiedEmail }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result.success) {
        alert("OTP resent to " + _demoVerifiedEmail);
      } else {
        alert(
          result.message || "Could not resend OTP. Please wait and try again.",
        );
      }
    })
    .catch(function () {
      alert("Failed to resend OTP.");
    })
    .finally(function () {
      resendBtn.textContent = "Resend OTP";
      resendBtn.disabled = false;
    });
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDemoModal();
});

/* ═══════════════════════════════════════════
   Cookies Consent Manager (EU GDPR Standard)
   ═══════════════════════════════════════════ */
function initCookiesBanner() {
  // Define Global CookieConsent API
  window.CookieConsent = {
    getPreferences: function () {
      var saved = localStorage.getItem("cookiePreferences");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          /* */
        }
      }
      if (localStorage.getItem("cookiesAccepted") === "true") {
        return { necessary: true, analytics: true, marketing: true };
      }
      return null;
    },
    hasConsented: function (category) {
      var prefs = this.getPreferences();
      if (!prefs) return false;
      if (category === "necessary") return true;
      return !!prefs[category];
    },
    showSettings: function () {
      /* no-op — cookie icon removed */
    },
  };

  // Already consented — don't show anything
  if (window.CookieConsent.getPreferences() !== null) return;

  // Create banner (first visit only, no floating icon)
  var banner = document.createElement("div");
  banner.className = "cookies-banner";
  banner.id = "cookiesBanner";
  banner.innerHTML =
    "" +
    '<div class="cookies-banner__body">' +
    '  <div class="cookies-banner__header">' +
    '    <h4 class="cookies-banner__title">' +
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:middle;">' +
    '        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.877 0 1.73-.113 2.545-.328a1.002 1.002 0 00.707-.723 1 1 0 00-.312-1.013 3.518 3.518 0 01-1.123-2.909c.148-1.579 1.4-2.884 2.977-3.085A3.498 3.498 0 0121 17.41a1.002 1.002 0 001.077-.293 1 1 0 00.171-1.082C21.431 14.28 21.05 12.185 21 12c0-5.523-4.477-10-10-10zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 1a1 1 0 110 2 1 1 0 010-2zm-8 5a1 1 0 110 2 1 1 0 010-2zm7 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>' +
    "      </svg>" +
    "      Cookie Consent" +
    "    </h4>" +
    "  </div>" +
    '  <p class="cookies-banner__text">' +
    '    We use cookies to improve your experience on our website. By clicking "Accept All", you agree to our use of all cookies. You can customize your settings or read our <a href="/privacy" class="cookies-banner__link">Privacy Policy</a>.' +
    "  </p>" +
    '  <div class="cookies-banner__preferences" id="cookiesPreferences" style="display:none;">' +
    '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Necessary Cookies</span><p class="cookies-preference-item__desc">Required for basic website functions. Cannot be disabled.</p></div><label class="cookies-switch"><input type="checkbox" checked disabled><span class="cookies-slider round"></span></label></div>' +
    '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Analytics Cookies</span><p class="cookies-preference-item__desc">Help us understand how visitors interact with our website.</p></div><label class="cookies-switch"><input type="checkbox" id="cookiesOptAnalytics"><span class="cookies-slider round"></span></label></div>' +
    '    <div class="cookies-preference-item"><div class="cookies-preference-item__info"><span class="cookies-preference-item__title">Marketing Cookies</span><p class="cookies-preference-item__desc">Allow personalized advertising and campaign tracking.</p></div><label class="cookies-switch"><input type="checkbox" id="cookiesOptMarketing"><span class="cookies-slider round"></span></label></div>' +
    "  </div>" +
    '  <div class="cookies-banner__actions">' +
    '    <div class="cookies-banner__actions-row" id="cookiesActionsMain">' +
    '      <button class="btn btn--secondary btn--small cookies-banner__btn" id="rejectCookiesBtn">Reject All</button>' +
    '      <button class="cookies-banner__btn-link" id="customizeCookiesBtn">Customize</button>' +
    '      <button class="btn btn--primary btn--small cookies-banner__btn" id="acceptAllCookiesBtn">Accept All</button>' +
    "    </div>" +
    '    <div class="cookies-banner__actions-row" id="cookiesActionsSave" style="display:none;">' +
    '      <button class="btn btn--secondary btn--small cookies-banner__btn" id="savePrefsCancelBtn">Back</button>' +
    '      <button class="btn btn--primary btn--small cookies-banner__btn" id="savePrefsConfirmBtn">Save Settings</button>' +
    "    </div>" +
    "  </div>" +
    "</div>";
  document.body.appendChild(banner);

  var saveConsent = function (prefs) {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.remove("show");
  };

  document
    .getElementById("acceptAllCookiesBtn")
    .addEventListener("click", function () {
      saveConsent({ necessary: true, analytics: true, marketing: true });
    });

  document
    .getElementById("rejectCookiesBtn")
    .addEventListener("click", function () {
      saveConsent({ necessary: true, analytics: false, marketing: false });
    });

  var preferencesDiv = document.getElementById("cookiesPreferences");
  var mainActions = document.getElementById("cookiesActionsMain");
  var saveActions = document.getElementById("cookiesActionsSave");

  document
    .getElementById("customizeCookiesBtn")
    .addEventListener("click", function () {
      preferencesDiv.style.display = "flex";
      mainActions.style.display = "none";
      saveActions.style.display = "flex";
    });

  document
    .getElementById("savePrefsCancelBtn")
    .addEventListener("click", function () {
      preferencesDiv.style.display = "none";
      mainActions.style.display = "flex";
      saveActions.style.display = "none";
    });

  document
    .getElementById("savePrefsConfirmBtn")
    .addEventListener("click", function () {
      saveConsent({
        necessary: true,
        analytics: document.getElementById("cookiesOptAnalytics").checked,
        marketing: document.getElementById("cookiesOptMarketing").checked,
      });
    });

  // Show banner after short delay
  setTimeout(function () {
    banner.classList.add("show");
  }, 400);
}

/* ═══════════════════════════════════════════
   BLOG API INTEGRATION
   ═══════════════════════════════════════════ */

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function initBlogListing() {
  const filterContainer = document.getElementById("category-filters-container");
  const featuredContainer = document.getElementById("featured-blog-container");
  const trendingContainer = document.getElementById("trending-blogs-container");
  const gridContainer = document.getElementById("blog-listing-container");

  if (!gridContainer) return;

  // 1. Fetch Categories
  if (filterContainer) {
    fetch(HRVICO_API_BASE + "/superadmin/blogCategory/blog-categories")
      .then((res) => res.json())
      .then((data) => {
        if ((data.success || data.status) && data.data) {
          filterContainer.innerHTML =
            '<button class="blog-filter-btn active" data-category="all">All</button>';
          data.data.forEach((cat) => {
            const btn = document.createElement("button");
            btn.className = "blog-filter-btn";
            btn.setAttribute("data-category", cat._id); // use ID for filtering
            btn.textContent = cat.name;
            filterContainer.appendChild(btn);
          });
          attachFilterEvents();
        }
      })
      .catch(console.error);
  }

  // 2. Fetch Blogs
  let allBlogs = [];

  function processBlogsData(data) {
    const rawData = data.data || data.blogs || data;
    if ((data.success || data.status) && Array.isArray(rawData) && rawData.length > 0) {
      allBlogs = rawData.filter((b) => b.published === true || b.status === "published" || b.status === "show");
      allBlogs.sort(
        (a, b) =>
          new Date(b.publishDate || b.createdAt) -
          new Date(a.publishDate || a.createdAt),
      );
      currentPage = 1;
      renderBlogs(allBlogs);
      return true;
    }
    return false;
  }

  fetch(HRVICO_API_BASE + "/superadmin/blog?limit=100")
    .then((res) => res.json())
    .then((data) => {
      if (!processBlogsData(data)) {
        gridContainer.innerHTML =
          '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
      }
    })
    .catch((err) => {
      console.warn("Primary blog fetch failed, trying direct endpoint...", err);
      // Secondary fallback fetch directly from app.hrvico.com
      fetch("https://app.hrvico.com/back/api/superadmin/blog?limit=100")
        .then((res) => res.json())
        .then((data) => {
          if (!processBlogsData(data)) {
            gridContainer.innerHTML =
              '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
          }
        })
        .catch((err2) => {
          console.error("Error fetching blogs:", err2);
          // Graceful fallback blog
          allBlogs = [
            {
              _id: "6a548712e484dbfda09e4dad",
              title: "Best Hrms",
              slug: "best hrms software",
              shortDescription: "Discover how AI-driven HRMS platforms automate payroll, attendance, leave management, and employee workflows.",
              content: "Full blog content",
              featuredImage: "1783924497147-lvd2krcatl.png",
              publishDate: "2026-06-09T00:00:00.000Z",
              status: "published"
            }
          ];
          currentPage = 1;
          renderBlogs(allBlogs);
        });
    });

  function attachFilterEvents() {
    const btns = filterContainer.querySelectorAll(".blog-filter-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const catId = btn.getAttribute("data-category");
        if (catId === "all") {
          currentPage = 1; renderBlogs(allBlogs);
        } else {
          const filtered = allBlogs.filter(
            (b) => b.category && (b.category === catId || b.category._id === catId),
          );
          currentPage = 1; renderBlogs(filtered);
        }
      });
    });
  }

  let currentPage = 1;
  const blogsPerPage = 10;

  window.goToBlogPage = function(page) {
    currentPage = page;
    renderBlogs(window.currentBlogsToRender);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('blog-pagination');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(totalItems / blogsPerPage);
    if (totalPages <= 1) return;

    let html = '';
    
    // Prev
    html += `<button class="blog-pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToBlogPage(${currentPage - 1})">&laquo;</button>`;
    
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="blog-pagination-btn ${currentPage === i ? 'active' : ''}" onclick="goToBlogPage(${i})">${i}</button>`;
    }

    // Next
    html += `<button class="blog-pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToBlogPage(${currentPage + 1})">&raquo;</button>`;
    
    paginationContainer.innerHTML = html;
  }

  function renderBlogs(blogsToRender) {
    window.currentBlogsToRender = blogsToRender;
    const featuredContainer = document.getElementById("featured-blog-container");
    const trendingContainer = document.getElementById("trending-blogs-container");
    const gridContainer = document.getElementById("blog-listing-container");
    
    if (featuredContainer) featuredContainer.innerHTML = "";
    if (trendingContainer) trendingContainer.innerHTML = "";
    if (gridContainer) gridContainer.innerHTML = "";

    if (blogsToRender.length === 0) {
      if (gridContainer) gridContainer.innerHTML =
        '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
      renderPagination(0);
      return;
    }

    const startIndex = (currentPage - 1) * blogsPerPage;
    const paginatedBlogs = blogsToRender.slice(startIndex, startIndex + blogsPerPage);

    if (paginatedBlogs.length === 0) return;

    if (gridContainer) {
      paginatedBlogs.forEach((blog) => {
        const catName = blog.categoryId
          ? blog.categoryId.name
          : (blog.category && blog.category.name) || blog.categoryName || (typeof blog.category === "string" ? blog.category : "Blog");
        
        const card = document.createElement("a");
        card.href = `/blog-details/${blog.slug}`;
        card.className = "scriza-card";

        card.innerHTML = `
          <img class="scriza-card__img" src="${getBlogImg(blog.featureImage || (blog.featureImage || blog.featuredImage))}" alt="${blog.altTag || blog.title}" loading="lazy">
          <div class="scriza-card__body">
            <span class="scriza-card__tag">${catName}</span>
            <div class="scriza-card__title">${blog.title}</div>
            <p class="scriza-card__excerpt">${blog.shortDescription || ""}</p>
            <div class="scriza-card__footer">
              <div class="scriza-card__meta">
                <span>${formatDate(blog.publishDate || blog.createdAt)}</span>
              </div>
              <span class="scriza-card__read-link">
                Read
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </div>
        `;
        gridContainer.appendChild(card);
      });
    }

    renderPagination(blogsToRender.length);
  }
}

function initBlogDetail() {
  const titleEl = document.getElementById("blog-title");
  const breadcrumbEl = document.getElementById("breadcrumb-title");
  const imageEl = document.getElementById("blog-image");
  const heroImageEl = document.getElementById("blog-hero-image");
  const dateEl = document.getElementById("blog-date");
  const contentEl = document.getElementById("blog-content");

  const sidebarLatestEl = document.getElementById("sidebar-latest-blogs");
  const sidebarRelatedEl = document.getElementById("sidebar-related-blogs");
  const sidebarCategoriesEl = document.getElementById("sidebar-categories");

  if (!titleEl && !sidebarLatestEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  let blogId = urlParams.get("slug") || urlParams.get("id");
  if (!blogId && window.location.pathname.includes("/blog-details/")) {
    const parts = window.location.pathname.split("/").filter(p => p);
    blogId = decodeURIComponent(parts[parts.length - 1]);
  }

  // Load Main Content
  if (blogId && titleEl) {
    fetch(HRVICO_API_BASE + "/superadmin/blog/" + encodeURIComponent(blogId), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const blog = data.data || data;
        if (blog && (blog._id || blog.id || blog.slug || blog.title)) {

          document.title = (blog.metaTitle || blog.title) + " | HRVico";

          let metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute(
              "content",
              blog.metaDescription || blog.shortDescription || "",
            );
          }

          titleEl.textContent = blog.title;

          const shareX = document.getElementById("share-x");
          const shareLinkedin = document.getElementById("share-linkedin");
          const shareFacebook = document.getElementById("share-facebook");
          const shareWhatsapp = document.getElementById("share-whatsapp");

          const shareXTop = document.getElementById("share-x-top");
          const shareLinkedinTop =
            document.getElementById("share-linkedin-top");
          const shareFacebookTop =
            document.getElementById("share-facebook-top");
          const shareWhatsappTop =
            document.getElementById("share-whatsapp-top");

          function updateSocialLinks(blogTitle) {
            const currentUrl = encodeURIComponent(window.location.href);
            const encodedTitle = encodeURIComponent(blogTitle);

            const xUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`;
            const liUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodedTitle}`;
            const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            const waUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${currentUrl}`;

            if (shareX) shareX.href = xUrl;
            if (shareLinkedin) shareLinkedin.href = liUrl;
            if (shareFacebook) shareFacebook.href = fbUrl;
            if (shareWhatsapp) shareWhatsapp.href = waUrl;

            if (shareXTop) shareXTop.href = xUrl;
            if (shareLinkedinTop) shareLinkedinTop.href = liUrl;
            if (shareFacebookTop) shareFacebookTop.href = fbUrl;
            if (shareWhatsappTop) shareWhatsappTop.href = waUrl;
          }

          updateSocialLinks(blog.title);

          if (breadcrumbEl) breadcrumbEl.textContent = blog.title;
          if (dateEl)
            dateEl.textContent = formatDate(blog.publishDate || blog.createdAt);

          if (imageEl) {
            const fallbackSrc = "assets/images/blogs_image_prev.webp";
            if ((blog.featureImage || blog.featuredImage)) {
              imageEl.src = getBlogImg((blog.featureImage || blog.featuredImage));
              imageEl.alt = blog.altTag || blog.title;
              imageEl.style.display = "block";
              imageEl.onerror = function () {
                this.onerror = null;
                this.src = fallbackSrc;
              };
            } else {
              imageEl.src = fallbackSrc;
              imageEl.alt = blog.title;
              imageEl.style.display = "block";
            }
          }

          if (heroImageEl && (blog.featureImage || blog.featuredImage)) {
            heroImageEl.src = getBlogImg((blog.featureImage || blog.featuredImage));
            heroImageEl.alt = blog.altTag || blog.title;
          }

          if (contentEl)
            contentEl.innerHTML =
              blog.content || "<p>No content available.</p>";

          // Populate Tag Pill
          const tagPill = document.getElementById("blog-tag-pill");
          if (tagPill && blog.category && blog.category.name) {
            tagPill.textContent = blog.category.name;
            tagPill.style.display = "inline-block";
          } else if (tagPill) {
            tagPill.textContent = "General";
            tagPill.style.display = "inline-block";
          }

          // Populate Author
          const authorItem = document.getElementById("blog-author-item");
          const authorEl = document.getElementById("blog-author");
          if (authorItem && authorEl) {
            let authorText = "Admin";
            if (typeof blog.author === 'string') {
              authorText = blog.author;
            } else if (blog.author && blog.author.name) {
              authorText = blog.author.name;
            } else if (blog.author && blog.author.email) {
              authorText = blog.author.email;
            }
            authorEl.textContent = authorText;
            authorItem.style.display = "flex";
          }

          // Now fetch sidebar blogs using the current blog's category
          fetchSidebarBlogs(blog);
        } else {
          titleEl.textContent = "Blog Not Found";
          if (contentEl)
            contentEl.innerHTML =
              "<p>The requested blog post could not be found.</p>";
        }
      })
      .catch((err) => {
        console.error("Error fetching blog details:", err);
        titleEl.textContent = "Error Loading Blog";
        if (contentEl)
          contentEl.innerHTML =
            '<p style="color: red;">Failed to load blog content. Please try again later.</p>';
      });
  } else if (sidebarLatestEl || sidebarRelatedEl || sidebarCategoriesEl) {
    fetchSidebarBlogs(null);
  }

  function fetchSidebarBlogs(currentBlog) {
    if (sidebarLatestEl || sidebarRelatedEl) {
      fetch(HRVICO_API_BASE + "/superadmin/blog?limit=100", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          const rawList = data.data || data.blogs || data;
          if ((data.success || data.status) && Array.isArray(rawList)) {
            // Remove the strict exclusion of the current blog so that sections populate even with 1 blog
            const published = rawList.filter((b) => b.published === true || b.status === "published" || b.status === "show");
            published.sort(
              (a, b) =>
                new Date(b.publishDate || b.createdAt) -
                new Date(a.publishDate || a.createdAt),
            );

            // Latest Articles
            if (sidebarLatestEl) {
              sidebarLatestEl.innerHTML = "";
              const latest = published.slice(0, 4); // Show up to 4 latest
              if (latest.length > 0) {
                latest.forEach((blog) => {
                  sidebarLatestEl.innerHTML += `
                    <a href="/blog-details/${blog.slug}" class="blog-sidebar__list-item">
                      <div class="blog-sidebar__list-thumb">
                        <img src="${getBlogImg((blog.featureImage || blog.featuredImage)) || "assets/images/blogs_image_prev.webp"}" alt="${blog.altTag || blog.title}" onerror="this.onerror=null; this.src='assets/images/blogs_image_prev.webp';">
                      </div>
                      <div class="blog-sidebar__list-content">
                        <h4 class="blog-sidebar__list-title">${blog.title}</h4>
                        <span class="blog-sidebar__list-meta">${formatDate(blog.publishDate || blog.createdAt)}</span>
                      </div>
                    </a>
                  `;
                });
              } else {
                sidebarLatestEl.innerHTML =
                  '<p style="padding:10px;">No recent articles found.</p>';
              }
            }


          }
        })
        .catch(console.error);
    }
  }

  // Load Sidebar Categories
  if (sidebarCategoriesEl) {
    fetch(HRVICO_API_BASE + "/superadmin/blogCategory/blog-categories")
      .then((res) => res.json())
      .then((data) => {
        if ((data.success || data.status) && data.data) {
          sidebarCategoriesEl.innerHTML = "";
          data.data.forEach((cat) => {
            const count = cat.posts || 0;
            const imgHtml = cat.image
              ? `<img src="${getBlogImg(cat.image)}" alt="${cat.altTag || cat.name}">`
              : "";
            sidebarCategoriesEl.innerHTML += `
              <a href="blogs.html?category=${cat._id}" class="blog-sidebar__category-item">
                <div class="blog-sidebar__category-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                </div>
                <div class="blog-sidebar__category-text">
                  <h4 class="blog-sidebar__category-title">${cat.name}</h4>
                  <p class="blog-sidebar__category-subtitle">Articles in ${cat.name}</p>
                </div>
                <div class="blog-sidebar__category-count">
                  ${count} Post${count !== 1 ? 's' : ''}
                </div>
              </a>
            `;
          });
          if (data.data.length === 0) {
            sidebarCategoriesEl.innerHTML =
              '<p style="padding:10px;">No categories found.</p>';
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        sidebarCategoriesEl.innerHTML =
          '<p style="padding:10px; color: red;">Failed to load categories.</p>';
      });
  }

  // Load Promotion Widget
  const promotionWidget = document.getElementById("sidebar-promotion-widget");
  if (promotionWidget) {
    fetch(HRVICO_API_BASE + "/superadmin/promotion/slug/independence-day-offer")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const promo = data.data;
          const titleEl = document.getElementById("promotion-title");
          if (titleEl) titleEl.textContent = promo.title;
          
          const imgEl = document.getElementById("promotion-image");
          if (imgEl) {
            imgEl.src = getBlogImg(promo.featureImage);
            imgEl.alt = promo.featureAlt || promo.title;
          }
          
          const linkEl = document.getElementById("promotion-link");
          if (linkEl) {
            linkEl.href = promo.relatedLink || "#";
          }
          
          promotionWidget.style.display = "block";
        }
      })
      .catch(console.error);
  }
}

function initActiveMenu() {
  let currentPath = window.location.pathname.split("/").pop() || "index";
  currentPath = currentPath.replace(".html", "");

  const navLinks = document.querySelectorAll(".navbar__link");

  navLinks.forEach((link) => {
    link.style.fontWeight = "normal";
    link.classList.remove("navbar__link--active");
  });

  navLinks.forEach((link) => {
    let href = link.getAttribute("href");
    if (!href) return;

    let hrefClean = href
      .split("#")[0]
      .replace(".html", "")
      .replace(/^\.\//, "");
    if (hrefClean === "") hrefClean = "index";

    let isMatch = false;

    if (hrefClean === currentPath) {
      isMatch = true;
    } else if (currentPath.includes("blog") && hrefClean.includes("blog")) {
      isMatch = true;
    }

    if (isMatch && !href.includes("#")) {
      link.style.fontWeight = "bold";
    }
  });

  const sections = [];
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes("#")) {
      let hrefClean = href
        .split("#")[0]
        .replace(".html", "")
        .replace(/^\.\//, "");
      if (hrefClean === "") hrefClean = "index";

      if (hrefClean === currentPath) {
        const id = href.split("#")[1];
        if (id) {
          const section = document.getElementById(id);
          if (section) {
            sections.push({ link, section });
          }
        }
      }
    }
  });

  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sections.forEach((s) => (s.link.style.fontWeight = "normal"));
            const activeSection = sections.find(
              (s) => s.section.id === entry.target.id,
            );
            if (activeSection) {
              activeSection.link.style.fontWeight = "bold";
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((s) => observer.observe(s.section));
  }
}
