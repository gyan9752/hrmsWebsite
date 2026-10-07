'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsClientProps {
  initialBlogs: any[];
  initialCategories: any[];
  categoryFilter?: string | null;
  currentPageNum?: number;
}

export default function NewsClient({
  initialBlogs,
  initialCategories,
  categoryFilter = null,
  currentPageNum = 1,
}: NewsClientProps) {
  const [blogs, setBlogs] = useState<any[]>(initialBlogs);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(currentPageNum);

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
    const syncFromStorage = () => {
      try {
        const storedBlogs = localStorage.getItem('mock_blogs');
        const storedCats = localStorage.getItem('mock_categories');

        let updatedBlogs = [...initialBlogs];
        if (storedBlogs) {
          const parsed = JSON.parse(storedBlogs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const serverIds = new Set(initialBlogs.map((b) => b._id || b.id || b.slug));
            const localOnly = parsed.filter((b: any) => !serverIds.has(b._id || b.id || b.slug));
            updatedBlogs = [...localOnly, ...initialBlogs];
          }
        }

        let updatedCats = [...initialCategories];
        if (storedCats) {
          const parsedCats = JSON.parse(storedCats);
          if (Array.isArray(parsedCats) && parsedCats.length > 0) {
            updatedCats = parsedCats;
          }
        }

        setBlogs(updatedBlogs);
        setCategories(updatedCats);
      } catch (err) {
        console.warn('Storage sync error:', err);
      }
    };

    syncFromStorage();

    window.addEventListener('blogs_changed', syncFromStorage);
    window.addEventListener('categories_changed', syncFromStorage);

    return () => {
      window.removeEventListener('blogs_changed', syncFromStorage);
      window.removeEventListener('categories_changed', syncFromStorage);
    };
  }, [initialBlogs, initialCategories]);

  // Filter Blogs
  const filteredBlogs = blogs.filter((blog) => {
    // Status check
    if (blog.status === 'hide' || blog.published === false) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const titleMatch = (blog.title || '').toLowerCase().includes(q);
      const descMatch = (blog.shortDescription || blog.description || '').toLowerCase().includes(q);
      if (!titleMatch && !descMatch) return false;
    }

    // Category filter
    if (activeCategory) {
      const catSlug = activeCategory.toLowerCase();
      const blogCat = (typeof blog.category === 'object' ? blog.category?.name : blog.category || blog.categoryName || '').toLowerCase();
      const blogCatSlug = (typeof blog.category === 'object' ? blog.category?.slug : blog.categorySlug || '').toLowerCase();

      if (!blogCat.includes(catSlug) && !blogCatSlug.includes(catSlug)) {
        return false;
      }
    }

    return true;
  });

  // Pagination
  const pageSize = 9;
  const totalPages = Math.ceil(filteredBlogs.length / pageSize) || 1;
  const pagedBlogs = filteredBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="bg-white min-h-screen flex flex-col" style={{ paddingTop: '75px' }}>
      {/* Hero Banner */}
      <div style={{ backgroundColor: '#0e1e38', color: '#ffffff', padding: '60px 16px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <p style={{ color: '#8B5CF6', fontWeight: 700, letterSpacing: '1.5px', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
            HRVICO INSIGHTS &amp; UPDATES
          </p>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, margin: '0 0 16px 0', color: '#ffffff' }}>
            Latest News &amp; Software Insights
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 32px', color: '#94a3b8', fontSize: '16px', lineHeight: 1.6 }}>
            Explore HR technology trends, workforce management strategies, payroll automation guides, and statutory compliance updates.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
            <input
              type="text"
              placeholder="Search news, guides, and HR topics..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                padding: '14px 20px 14px 44px',
                borderRadius: '9999px',
                border: '1px solid #334155',
                backgroundColor: '#1e293b',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '40px 16px 80px' }}>
        {/* Categories Bar */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px', scrollbarWidth: 'none' }}>
          <button
            onClick={() => {
              setActiveCategory(null);
              setCurrentPage(1);
            }}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: activeCategory === null ? '#6C3FC5' : '#f1f5f9',
              color: activeCategory === null ? '#ffffff' : '#475569',
              transition: 'all 0.2s',
            }}
          >
            All News
          </button>
          {categories.map((cat) => {
            const catSlug = cat.slug || cat.name?.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeCategory === catSlug || activeCategory === cat.name?.toLowerCase();
            return (
              <button
                key={cat._id || cat.name}
                onClick={() => {
                  setActiveCategory(catSlug);
                  setCurrentPage(1);
                }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backgroundColor: isActive ? '#6C3FC5' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#475569',
                  transition: 'all 0.2s',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Blog Cards Grid */}
        {pagedBlogs.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {pagedBlogs.map((blog) => {
              const blogSlug = blog.slug || blog._id || blog.id;
              const author = cleanAuthorString(blog.authorName || blog.author || blog.addedBy);
              const coverImg = resolveImageUrl(blog.coverImage || blog.featureImage || blog.image);
              const categoryName = typeof blog.category === 'object' ? blog.category?.name : blog.categoryName || blog.category || 'HR Insights';

              return (
                <article
                  key={blogSlug}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #f1f5f9',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className="blog-card"
                >
                  {/* Fixed 210px Image Height Container */}
                  <div className="blog-card-img-wrap" style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative', backgroundColor: '#f8fafc' }}>
                    <Link href={`/latest-news/${blogSlug}`}>
                      <img
                        src={coverImg}
                        alt={blog.title}
                        style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }}
                      />
                    </Link>
                    {categoryName && (
                      <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#ffffff', color: '#6C3FC5', fontWeight: 700, fontSize: '11px', padding: '4px 12px', borderRadius: '9999px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        {categoryName}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#94a3b8', marginBottom: '10px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {formatDate(blog.createdAt || blog.date)}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        {author}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 12px 0', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <Link href={`/latest-news/${blogSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, margin: '0 0 20px 0', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {blog.shortDescription || blog.description}
                    </p>

                    <Link
                      href={`/latest-news/${blogSlug}`}
                      style={{
                        color: '#6C3FC5',
                        fontWeight: 700,
                        fontSize: '13px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
            <p style={{ fontSize: '18px', fontWeight: 600 }}>No articles found.</p>
            <p style={{ fontSize: '14px', marginTop: '4px' }}>Try adjusting your search query or selected category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px' }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                backgroundColor: currentPage === 1 ? '#f1f5f9' : '#ffffff',
                color: currentPage === 1 ? '#94a3b8' : '#0f172a',
                fontWeight: 600,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: pageNum === currentPage ? 'none' : '1px solid #e2e8f0',
                  backgroundColor: pageNum === currentPage ? '#6C3FC5' : '#ffffff',
                  color: pageNum === currentPage ? '#ffffff' : '#0f172a',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {pageNum}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                backgroundColor: currentPage === totalPages ? '#f1f5f9' : '#ffffff',
                color: currentPage === totalPages ? '#94a3b8' : '#0f172a',
                fontWeight: 600,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
