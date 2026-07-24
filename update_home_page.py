import os

dir_path = r'c:\Users\Dell\Documents\hrms_website'
index_path = os.path.join(dir_path, 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    index_html = f.read()

nav_end = index_html.find('</nav>') + 6
footer_start = index_html.find('<!-- ═══════════════════════════════════════\n       FOOTER')
if footer_start == -1:
    footer_start = index_html.find('<footer class="footer">')

header_part = index_html[:nav_end]
footer_part = index_html[footer_start:]

new_body = """
  <!-- ═══════════════════════════════════════
       HERO
       ═══════════════════════════════════════ -->
  <section class="hero" id="hero">
    <div class="hero__bg">
      <div class="hero__bg-gradient"></div>
      <div class="hero__bg-grid"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
    </div>

    <div class="container">
      <div class="hero__content">
        <div class="hero__eyebrow" data-animate="fade-up">
          <span class="hero__eyebrow-icon">✨</span>
          Transform Your HR Operations
        </div>

        <h1 class="hero__title" data-animate="fade-up">
          Empower Your Workforce with<br>
          <span class="gradient-text">Intelligent</span> HR Management
        </h1>

        <p class="hero__subtitle" data-animate="fade-up">
          The all-in-one professional HRMS platform designed to streamline payroll, automate attendance, and elevate employee experiences.
        </p>

        <div class="hero__ctas" data-animate="fade-up">
          <a href="#" class="btn btn--primary btn--large" onclick="openDemoModal(); return false;">
            Book a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="features.html" class="btn btn--secondary btn--large">
            Explore Platform
          </a>
        </div>

        <div class="hero__dashboard" data-animate="scale-in">
          <img class="my-image-set" src="assets/images/Group 237586 1.png"
            alt="HRVICO Dashboard Overview" loading="eager">
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       SOCIAL PROOF
       ═══════════════════════════════════════ -->
  <section class="social-proof" data-animate="fade-in">
    <div class="container">
      <p class="social-proof__label">Trusted by industry leaders worldwide</p>
    </div>

    <div class="container">
      <div class="social-proof__stats" data-stagger>
        <div class="social-proof__stat">
          <div class="social-proof__stat-value" data-counter="500" data-counter-suffix="+">0</div>
          <div class="social-proof__stat-label">Companies</div>
        </div>
        <div class="social-proof__stat">
          <div class="social-proof__stat-value" data-counter="50000" data-counter-suffix="+">0</div>
          <div class="social-proof__stat-label">Employees Managed</div>
        </div>
        <div class="social-proof__stat">
          <div class="social-proof__stat-value" data-counter="99.9" data-counter-suffix="%" data-counter-decimals="1">0
          </div>
          <div class="social-proof__stat-label">Uptime</div>
        </div>
        <div class="social-proof__stat">
          <div class="social-proof__stat-value" data-counter="4.9" data-counter-suffix="★" data-counter-decimals="1">0
          </div>
          <div class="social-proof__stat-label">User Rating</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       THE HRVICO ADVANTAGE (Using pain-points css)
       ═══════════════════════════════════════ -->
  <section class="section pain-points" id="advantage">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <p class="section-eyebrow">Why HRVICO</p>
        <h2 class="section-title">The <span class="gradient-text">Advantage</span> of a Unified Platform</h2>
        <p class="section-subtitle">Experience seamless operations, eliminate manual tasks, and make data-driven decisions effortlessly.</p>
      </div>

      <div class="pain-points__grid" data-stagger>
        <div class="pain-card">
          <div class="pain-card__icon">⚡</div>
          <h3 class="pain-card__title">Automated Workflows</h3>
          <p class="pain-card__desc">Free your HR team from repetitive tasks. Automate attendance tracking, payroll calculations, and leave approvals seamlessly.</p>
        </div>

        <div class="pain-card">
          <div class="pain-card__icon">🛡️</div>
          <h3 class="pain-card__title">Unmatched Security</h3>
          <p class="pain-card__desc">Your data is secured with enterprise-grade encryption. Ensure compliance and protect sensitive employee information at all times.</p>
        </div>

        <div class="pain-card">
          <div class="pain-card__icon">📈</div>
          <h3 class="pain-card__title">Actionable Analytics</h3>
          <p class="pain-card__desc">Leverage real-time dashboards to gain insights into attendance trends, performance metrics, and workforce distribution.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       PLATFORM CAPABILITIES
       ═══════════════════════════════════════ -->
  <section class="section section--alt dashboard-preview" id="capabilities">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <p class="section-eyebrow">Platform Capabilities</p>
        <h2 class="section-title">Everything You Need to <span class="gradient-text">Succeed</span></h2>
        <p class="section-subtitle">From onboarding to offboarding, discover a comprehensive suite of tools built for modern enterprises.</p>
      </div>

      <div class="dashboard-preview__visual" data-animate="scale-in">
        <div class="dashboard-preview__glow"></div>
        <img class="dashboard-preview__image" src="assets/images/Powerful Analytics at Your Fingertips.png"
          alt="HRVICO comprehensive workforce analytics dashboard" loading="lazy">
      </div>
      
      <div style="text-align: center; margin-top: 40px;" data-animate="fade-up">
        <a href="features.html" class="btn btn--secondary btn--large">See All Features →</a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       BUILT FOR EVERY ROLE
       ═══════════════════════════════════════ -->
  <section class="section how-it-works" id="roles-teaser">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <p class="section-eyebrow">Multi-Role Architecture</p>
        <h2 class="section-title">Designed for <span class="gradient-text">Every Role</span></h2>
        <p class="section-subtitle">A tailored experience whether you are managing the entire organization or simply checking your payslip.</p>
      </div>

      <div class="how-it-works__steps" data-stagger>
        <div class="step-card" style="text-align: center;">
          <div class="step-card__icon" style="margin: 0 auto 1.5rem;">🏢</div>
          <h3 class="step-card__title">Super Admin</h3>
          <p class="step-card__desc">Complete command center for multi-company management and platform oversight.</p>
        </div>

        <div class="step-card" style="text-align: center;">
          <div class="step-card__icon" style="margin: 0 auto 1.5rem;">👔</div>
          <h3 class="step-card__title">Admin</h3>
          <p class="step-card__desc">Powerful automation for payroll, attendance, and complete employee lifecycle management.</p>
        </div>

        <div class="step-card" style="text-align: center;">
          <div class="step-card__icon" style="margin: 0 auto 1.5rem;">👤</div>
          <h3 class="step-card__title">Employee</h3>
          <p class="step-card__desc">Intuitive self-service portal for one-tap attendance, leave requests, and payslips.</p>
        </div>
      </div>

      <div class="how-it-works__cta" data-animate="fade-up">
        <a href="roles.html" class="btn btn--primary btn--large">
          View Role Capabilities
        </a>
      </div>
    </div>
  </section>
"""

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(header_part + "\n" + new_body + "\n" + footer_part)

print("index.html updated successfully with new content.")
