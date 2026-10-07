'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsDetailClientProps {
  initialBlog: any;
  initialBlogs: any[];
  initialCategories: any[];
  initialBannerData: any;
}

export default function NewsDetailClient({
  initialBlog,
  initialBlogs,
  initialCategories,
  initialBannerData,
}: NewsDetailClientProps) {
  const [blog, setBlog] = useState<any>(initialBlog);
  const [blogs, setBlogs] = useState<any[]>(initialBlogs);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [promoBanner, setPromoBanner] = useState<any>(initialBannerData);

  const resolveImageUrl = (url: any) => {
    if (!url || typeof url !== 'string') return '/assets/images/blogs_image_prev.webp';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/assets/') || url.startsWith('assets/')) return url.startsWith('/') ? url : `/${url}`;
    if (url.startsWith('/uploads/')) return `https://blogb.hrvico.com${url}`;
    if (url.startsWith('uploads/')) return `https://blogb.hrvico.com/${url}`;
    if (url.startsWith('/')) return url;
    return `https://blogb.hrvico.com/uploads/${url.replace(/^\/uploads\//, '')}`;
  };

  const formatDate = (dateString: any) => {
    if (!dateString) return 'Recent';
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return 'Recent';
    }
  };

  const cleanAuthorString = (str?: any): string => {
    if (!str) return 'Garima Bansal';
    let text = String(str).replace(/^by\s+/i, '').trim();
    if (text.includes('@')) {
      text = text.split('@')[0];
    }
    return text || 'Garima Bansal';
  };

  // Sync with Admin Dashboard localStorage on mount & on live admin updates
  useEffect(() => {
    const syncFromAdminStorage = () => {
      try {
        const storedBlogs = localStorage.getItem('mock_blogs');
        const storedCats = localStorage.getItem('mock_categories');
        const storedPromos = localStorage.getItem('mock_promotions');
        const storedDynImgs = localStorage.getItem('mock_dynamic_images');

        // Sync Blogs
        if (storedBlogs) {
          const parsed = JSON.parse(storedBlogs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const serverIds = new Set(initialBlogs.map((b) => b._id || b.id || b.slug));
            const localOnly = parsed.filter((b: any) => !serverIds.has(b._id || b.id || b.slug));
            const combinedBlogs = [...localOnly, ...initialBlogs];
            setBlogs(combinedBlogs);

            // Re-find active blog if updated
            const targetSlug = initialBlog?.slug || initialBlog?._id || initialBlog?.id;
            const updatedBlog = combinedBlogs.find((b: any) => b.slug === targetSlug || b._id === targetSlug || b.id === targetSlug);
            if (updatedBlog) setBlog(updatedBlog);
          }
        }

        // Sync Categories from Admin (ONLY show admin categories)
        if (storedCats) {
          const parsedCats = JSON.parse(storedCats);
          if (Array.isArray(parsedCats) && parsedCats.length > 0) {
            setCategories(parsedCats);
          }
        }

        // Sync Promo Banner from Admin
        let activePromo = initialBannerData;
        if (storedPromos) {
          const parsedPromos = JSON.parse(storedPromos);
          if (Array.isArray(parsedPromos) && parsedPromos.length > 0) {
            activePromo = parsedPromos.find((p: any) => p.status === 'show' || p.published === true) || parsedPromos[0];
          }
        } else if (storedDynImgs) {
          const parsedDyn = JSON.parse(storedDynImgs);
          if (Array.isArray(parsedDyn) && parsedDyn.length > 0) {
            activePromo = parsedDyn[0];
          }
        }
        if (activePromo) setPromoBanner(activePromo);
      } catch (err) {
        console.warn('Admin storage sync error:', err);
      }
    };

    syncFromAdminStorage();

    window.addEventListener('blogs_changed', syncFromAdminStorage);
    window.addEventListener('categories_changed', syncFromAdminStorage);
    window.addEventListener('promotions_changed', syncFromAdminStorage);

    return () => {
      window.removeEventListener('blogs_changed', syncFromAdminStorage);
      window.removeEventListener('categories_changed', syncFromAdminStorage);
      window.removeEventListener('promotions_changed', syncFromAdminStorage);
    };
  }, [initialBlog, initialBlogs, initialCategories, initialBannerData]);

  const author = cleanAuthorString(blog?.authorName || blog?.author || blog?.addedBy);
  const coverImg = resolveImageUrl(blog?.coverImage || blog?.featureImage || blog?.image);
  const categoryName = typeof blog?.category === 'object' ? blog?.category?.name : blog?.categoryName || blog?.category || 'HR Insights';

  const topLatest = blogs.filter((b: any) => (b.slug || b._id || b.id) !== (blog?.slug || blog?._id || blog?.id)).slice(0, 4);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://hrvico.com/latest-news/${encodeURIComponent(blog?.slug || '')}`;

  const promoCard = promoBanner
    ? {
        heading: promoBanner.heading || promoBanner.title || promoBanner.altText || 'Grow Faster With HRVICO HRMS',
        shortDescription: promoBanner.shortDescription || promoBanner.description || 'Automate attendance, payroll, leaves & employee management on a single platform.',
        buttonText: promoBanner.buttonText || 'Go',
        relatedLink: promoBanner.relatedLink || '/contact',
        imageUrl: resolveImageUrl(promoBanner.featureImage || promoBanner.coverImage || promoBanner.image),
      }
    : {
        heading: 'Grow Faster With HRVICO HRMS',
        shortDescription: 'Automate attendance, payroll, leaves & employee management on a single platform.',
        buttonText: 'Book Demo',
        relatedLink: '/contact',
        imageUrl: '/assets/images/blog_payroll_automation.webp',
      };

  return (
    <div className="bg-white min-h-screen flex flex-col" style={{ paddingTop: '75px' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 16px' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: '13px', fontWeight: 500, color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#6C3FC5', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span>Home</span>
            </Link>
            <span style={{ color: '#94a3b8' }}>&gt;</span>
            <Link href="/latest-news" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
              Latest News
            </Link>
            <span style={{ color: '#94a3b8' }}>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 700, maxWidth: '450px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {blog?.title}
            </span>
          </nav>
        </div>
      </div>

      {/* HERO BANNER SECTION (EXACT NEWS LISTING THEME & CENTERED LAYOUT) */}
      <section className="section section--alt" style={{ paddingTop: '50px', paddingBottom: '40px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '0', maxWidth: '900px', margin: '0 auto' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              {categoryName || 'LATEST NEWS'}
            </p>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0', lineHeight: 1.3 }}>
              {blog?.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#64748b', fontWeight: 500, marginTop: '12px' }}>
              <span>📅 {formatDate(blog?.createdAt || blog?.date)}</span>
              <span>•</span>
              <span style={{ color: '#6C3FC5', fontWeight: 600 }}>By {cleanAuthorString(blog?.authorName || blog?.author || blog?.addedBy)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '32px 16px 60px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Main Post */}
          <div style={{ flex: '1 1 64%', minWidth: '300px' }}>
            {/* 100% FREE SIZE COVER IMAGE */}
            <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', backgroundColor: '#f8fafc' }}>
              <img
                src={coverImg}
                alt={blog?.title || 'Blog Cover Image'}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', fontSize: '13px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📅</span>
                <span>{formatDate(blog?.createdAt || blog?.date)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#6C3FC5', fontWeight: 600 }}>By {author}</span>
              </div>
            </div>

            {blog?.content ? (
              <div
                className="blog-detail__content rich-text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <div className="blog-detail__content rich-text">
                <p>{blog?.description || blog?.shortDescription}</p>
              </div>
            )}

            {/* Share Buttons */}
            <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Share This Post
              </h2>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(blog?.title || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1877F2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(blog?.title || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1DA1F2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog?.title || '')}%20${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog?.title || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0077b5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ flex: '1 1 32%', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Top 4 Latest Articles */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                Latest Articles
              </h3>
              {topLatest.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {topLatest.map((item: any, idx: number) => {
                    const itemSlug = item.slug || item._id || item.id || idx;
                    return (
                      <Link
                        key={itemSlug}
                        href={`/latest-news/${itemSlug}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
                      >
                        <div style={{ width: '52px', height: '52px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, background: '#f8fafc' }}>
                          <img
                            src={resolveImageUrl(item.coverImage || item.featureImage || item.image)}
                            alt={item.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', margin: 0, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {item.title}
                          </h4>
                          <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', margin: 0 }}>
                            {formatDate(item.createdAt || item.date)}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>No related articles found.</p>
              )}
            </div>

            {/* Categories from Live Admin */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                Categories
              </h3>
              {categories.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '290px', overflowY: 'auto', paddingRight: '6px' }}>
                  {categories.map((cat: any) => (
                    <Link
                      key={cat._id || cat.slug || cat.name}
                      href={`/latest-news/category/${encodeURIComponent(cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-'))}`}
                      style={{ display: 'block', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '12px', textDecoration: 'none', backgroundColor: '#ffffff' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0, overflow: 'hidden' }}>
                          {cat.image || cat.coverImage || cat.icon ? (
                            <img src={resolveImageUrl(cat.image || cat.coverImage || cat.icon)} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <span>📁</span>
                          )}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {cat.name}
                          </h4>
                          <p style={{ fontSize: '11px', color: '#94a3b8', margin: '2px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            Articles in {cat.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>No categories found.</p>
              )}
            </div>

            {/* Dynamic Promotional Banner Card from Live Admin */}
            {promoCard && (
              <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                {promoCard.imageUrl && (
                  <a
                    href={promoCard.relatedLink || '/contact'}
                    target={promoCard.relatedLink?.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    style={{ display: 'block', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}
                  >
                    <img
                      src={promoCard.imageUrl}
                      alt={promoCard.heading}
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                    />
                  </a>
                )}
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                  {promoCard.heading}
                </h4>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px', lineHeight: 1.5 }}>
                  {promoCard.shortDescription}
                </p>
                <a
                  href={promoCard.relatedLink || '/contact'}
                  target={promoCard.relatedLink?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{ display: 'block', width: '100%', background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)', color: '#ffffff', padding: '12px 20px', borderRadius: '9999px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108, 63, 197, 0.3)', transition: 'all 0.3s ease' }}
                >
                  {promoCard.buttonText}
                </a>
              </div>
            )}

            {/* Need Help promo card */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Need Help?
              </h4>
              <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px', lineHeight: 1.5 }}>
                Talk to our HR tech experts and get a free project audit today.
              </p>
              <a
                href="https://wa.me/919116011899"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)', color: '#ffffff', padding: '12px 20px', borderRadius: '9999px', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108, 63, 197, 0.3)', transition: 'all 0.3s ease' }}
              >
                CONTACT US NOW
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
