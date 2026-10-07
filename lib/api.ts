export const HRVICO_API_BASE = "https://app.hrvico.com/back/api";
export const HRVICO_APP_URL = "https://app.hrvico.com/back";
export const BLOG_API_BASE = "https://blogb.hrvico.com/hrms-blogs/api";
export const BLOG_IMAGE_BASE = "https://blogb.hrvico.com";

export interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  content?: string;
  featureImage?: string;
  image?: string;
  imageUrl?: string;
  thumbnail?: string;
  coverImage?: string;
  authorName?: string;
  author?: string;
  addedBy?: string;
  addedByName?: string;
  categoryId?: { _id?: string; name?: string } | string;
  category?: { _id?: string; name?: string } | string;
  categoryName?: string;
  categorySlug?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  createdAt?: string;
  date?: string;
  altTag?: string;
}

export interface BlogCategory {
  _id?: string;
  id?: string;
  name: string;
  title?: string;
  slug?: string;
  description?: string;
  shortDescription?: string;
}

export interface PricingPlan {
  _id?: string;
  id?: string;
  name: string;
  planName?: string;
  subtitle?: string;
  priceMonthly: number;
  priceAnnual: number;
  badge?: string;
  isPopular?: boolean;
  popular?: boolean;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  sortOrder?: number;
}

export function getBlogImg(img?: string): string {
  if (!img) return "/assets/images/blogs_image_prev.webp";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/assets/") || img.startsWith("assets/")) return img.startsWith("/") ? img : `/${img}`;
  if (img.startsWith("/")) return `${BLOG_IMAGE_BASE}${img}`;
  if (img.startsWith("uploads/")) return `${BLOG_IMAGE_BASE}/${img}`;
  return `${BLOG_IMAGE_BASE}/uploads/${img}`;
}

export function cleanAuthorString(str?: any): string {
  if (!str) return "Garima Bansal";
  let text = String(str).replace(/^by\s+/i, "").trim();
  if (text.includes("@")) {
    text = text.split("@")[0];
  }

  const lower = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (lower.includes("garima")) return "Garima Bansal";
  if (lower.includes("radhika")) return "Radhika";

  let cleanText = text.replace(/[0-9]+/g, "").replace(/[._-]/g, " ").trim();
  if (/^[A-Za-z]+[bB]$/.test(cleanText) && cleanText.length > 3) {
    cleanText = cleanText.slice(0, -1);
  }

  cleanText = cleanText.replace(/\b\w/g, (c) => c.toUpperCase());
  return cleanText || "Garima Bansal";
}

export function stripHtml(html?: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

export function slugify(text?: string): string {
  if (!text) return "";
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getCleanBlogSlug(blog: BlogPost): string {
  if (blog.slug && String(blog.slug).trim() !== "") {
    return String(blog.slug).trim();
  }
  return slugify(blog.title || "blog-post");
}

export const OFFICIAL_HRVICO_BLOGS: BlogPost[] = [
  {
    _id: "blog_hrvico_1",
    title: "Transforming Workforce Management with HRVICO HRMS 2026",
    slug: "transforming-workforce-management-with-hrvico-hrms-2026",
    category: "HR Technology",
    categoryName: "HR Technology",
    authorName: "Garima Bansal",
    createdAt: new Date().toISOString(),
    featureImage: "/assets/images/blog_payroll_automation.webp",
    shortDescription: "Discover how automating attendance, payroll, and appraisals transforms employee performance and operational productivity.",
    content: "<h2>Automate Your Core HR Operations</h2><p>In 2026, managing a modern workforce requires speed, accuracy, and unified visibility across departments. HRVICO HRMS provides 1-tap attendance clocking, automated tax & payroll calculations, and 360-degree appraisal cycles.</p><h3>Key Benefits:</h3><ul><li><strong>1-Tap GPS Attendance:</strong> Geofenced clock-in for remote and on-site staff.</li><li><strong>1-Click Payroll:</strong> Automated salary calculation with PF/ESIC deductions.</li><li><strong>Self-Service Portal:</strong> Employees can download payslips and apply for leave on mobile.</li></ul>"
  },
  {
    _id: "blog_hrvico_2",
    title: "Payroll Automation Best Practices for Growing Companies",
    slug: "payroll-automation-best-practices-for-growing-companies",
    category: "Payroll & Compliance",
    categoryName: "Payroll & Compliance",
    authorName: "Garima Bansal",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    featureImage: "/assets/images/blog_payroll_processing.webp",
    shortDescription: "Streamline monthly salary processing, automated tax calculations, and zero-error payslip generation.",
    content: "<h2>Eliminate Manual Payroll Errors</h2><p>Payroll calculation errors can lead to compliance penalties and employee dissatisfaction. HRVICO automates statutory deductions, salary slip generation, and direct bank transfer exports.</p>"
  },
  {
    _id: "blog_hrvico_3",
    title: "Optimizing Statutory Compliance: EPF, ESIC & Labor Laws",
    slug: "optimizing-statutory-compliance-epf-esic-and-labor-laws",
    category: "Compliance",
    categoryName: "Compliance",
    authorName: "HRVICO Legal Team",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    featureImage: "/assets/images/blog_epf_esic_compliance.webp",
    shortDescription: "Stay compliant with Indian labor laws, Professional Tax, EPF, and ESIC calculations with automated software.",
    content: "<h2>Seamless Labor Law Compliance</h2><p>Ensure full alignment with Indian statutory requirements. Generate ECR files, EPF challans, and ESIC reports with one click.</p>"
  },
  {
    _id: "blog_hrvico_4",
    title: "Future of HR Tech: AI & Biometric Face Attendance in India",
    slug: "future-of-hr-tech-ai-and-biometric-attendance-in-india",
    category: "HR Technology",
    categoryName: "HR Technology",
    authorName: "HRVICO Tech Team",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    featureImage: "/assets/images/blog_ai_hr.webp",
    shortDescription: "How artificial intelligence, GPS geofencing, and contactless facial recognition are replacing legacy punch cards.",
    content: "<h2>AI-Powered Attendance Management</h2><p>Contactless facial recognition combined with GPS geofencing eliminates buddy punching and ensures accurate shift clock-ins across all company branches.</p>"
  },
  {
    _id: "blog_hrvico_5",
    title: "Mastering Employee Retention & 360° Performance Appraisals",
    slug: "mastering-employee-retention-and-360-performance-appraisals",
    category: "Performance & Growth",
    categoryName: "Performance & Growth",
    authorName: "Radhika",
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    featureImage: "/assets/images/blog_performance_appraisals.webp",
    shortDescription: "Run transparent appraisal cycles, set actionable OKRs, and foster continuous feedback across teams.",
    content: "<h2>Drive Employee Performance</h2><p>Structured 360-degree feedback cycles align individual goals with corporate objectives, boosting employee retention and organizational growth.</p>"
  },
  {
    _id: "blog_hrvico_6",
    title: "Remote Onboarding & Hybrid Workforce Management Strategies",
    slug: "remote-onboarding-and-hybrid-workforce-management",
    category: "Workforce Strategy",
    categoryName: "Workforce Strategy",
    authorName: "Garima Bansal",
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    featureImage: "/assets/images/blog_remote_onboarding.webp",
    shortDescription: "Seamless digital document verification, virtual onboarding workflows, and remote team engagement.",
    content: "<h2>Effortless Remote Onboarding</h2><p>Onboard remote hires in minutes with digital document uploads, automated asset tracking, and instant team channel welcomes.</p>"
  }
];

export async function fetchAllBlogs(): Promise<BlogPost[]> {
  try {
    let res = await fetch(`${BLOG_API_BASE}/blogs`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      res = await fetch(`${BLOG_API_BASE}/getallblogs`, {
        next: { revalidate: 0 },
      });
    }
    if (res.ok) {
      const data = await res.json();
      const items = Array.isArray(data) ? data : data.data || data.blogs || [];
      const publishedOnly = items.filter((item: any) => {
        if (!item.status) return true;
        const st = String(item.status).toLowerCase().trim();
        return st === 'published' || st === 'show' || st === 'publish' || st === 'active';
      });
      return publishedOnly;
    }
  } catch (err) {
    console.warn("Error fetching live blogs, using fallback.");
  }
  return OFFICIAL_HRVICO_BLOGS;
}

export async function fetchAllCategories(): Promise<BlogCategory[]> {
  try {
    let res = await fetch(`${BLOG_API_BASE}/admin/categories/visible`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      res = await fetch(`${BLOG_API_BASE}/admin/categories`, {
        next: { revalidate: 60 },
      });
    }
    if (res.ok) {
      const data = await res.json();
      const items = Array.isArray(data) ? data : data.data || data.categories || [];
      if (items.length > 0) return items;
    }
  } catch (err) {
    console.warn("Error fetching categories.");
  }
  return [
    { _id: "cat_1", name: "HR Technology", slug: "hr-technology" },
    { _id: "cat_2", name: "Payroll & Compliance", slug: "payroll-compliance" },
    { _id: "cat_3", name: "Performance & Growth", slug: "performance-growth" },
    { _id: "cat_4", name: "Workforce Strategy", slug: "workforce-strategy" },
  ];
}

export async function fetchPromotions(): Promise<any[]> {
  try {
    let res = await fetch(`${BLOG_API_BASE}/dynamic-images`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      res = await fetch(`${BLOG_API_BASE}/dynamic-image/show`, {
        next: { revalidate: 0 },
      });
    }
    if (res.ok) {
      const data = await res.json();
      const items = Array.isArray(data) ? data : data.data || data.images || [];
      return items;
    }
  } catch (err) {
    console.warn("Error fetching promotions.");
  }
  return [];
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const target = String(slug).toLowerCase().trim();

  // Try direct single blog API first
  try {
    const res = await fetch(`${BLOG_API_BASE}/getsingleblogby/slug/${encodeURIComponent(target)}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      const item = data.data || data.blog || data;
      if (item && item.title) {
        if (item.status) {
          const st = String(item.status).toLowerCase().trim();
          if (st === 'draft' || st === 'hide') return null;
        }
        return item;
      }
    }
  } catch (err) {
    console.warn("Single blog by slug API failed, falling back to full list.");
  }

  const all = await fetchAllBlogs();
  const found = all.find((b) => {
    const s1 = getCleanBlogSlug(b).toLowerCase();
    const s2 = slugify(b.title || "");
    const id = String(b._id || b.id || "");
    return s1 === target || s2 === target || id === target;
  });

  if (found) return found;

  const fallbackFound = OFFICIAL_HRVICO_BLOGS.find((b) => {
    const s1 = getCleanBlogSlug(b).toLowerCase();
    const s2 = slugify(b.title || "");
    const id = String(b._id || b.id || "");
    return s1 === target || s2 === target || id === target;
  });

  return fallbackFound || null;
}

export async function fetchDynamicBanner(): Promise<any | null> {
  const promos = await fetchPromotions();
  return promos.length > 0 ? promos[0] : null;
}

export const resolveImageUrl = getBlogImg;
export const fetchBlogs = fetchAllBlogs;
export const fetchCategories = fetchAllCategories;
