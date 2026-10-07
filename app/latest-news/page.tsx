/* eslint-disable @next/next/no-img-element */
export const revalidate = 60;

import React from 'react';
import Link from 'next/link';
import {
  fetchAllBlogs,
  fetchAllCategories,
  getCleanBlogSlug,
  resolveImageUrl,
  cleanAuthorString,
} from '@/lib/api';

export const metadata = {
  title: 'Latest News & Software Updates — HRVICO',
  description: 'Discover workforce insights, HR technology updates, payroll automation strategies, and industry news from HRVico experts.',
  keywords: ['HRVICO news', 'HR technology updates', 'payroll automation blogs', 'workforce management news', 'HR software trends'],
  alternates: {
    canonical: 'https://hrvico.com/latest-news',
  },
  openGraph: {
    title: 'Latest News & Software Updates — HRVICO',
    description: 'Discover workforce insights, HR technology updates, payroll automation strategies, and industry news from HRVico experts.',
    url: 'https://hrvico.com/latest-news',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest News & Software Updates — HRVICO',
    description: 'Discover workforce insights, HR technology updates, payroll automation strategies, and industry news from HRVico experts.',
    images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
  },
};

const formatDate = (dateString: any) => {
  if (!dateString) return 'Recent';
  try {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch (e) {
    return 'Recent';
  }
};

interface PageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function NewsListingPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Math.max(1, parseInt(resolvedSearchParams?.page || '1', 10));
  const ITEMS_PER_PAGE = 9;

  const [allBlogs, allCategories] = await Promise.all([
    fetchAllBlogs(),
    fetchAllCategories(),
  ]);

  const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = allBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white min-h-screen flex flex-col" style={{ paddingTop: '75px' }}>
      {/* BREADCRUMB STRIP */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 16px' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: '13px', fontWeight: 500, color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ color: '#6C3FC5', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span>Home</span>
            </Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <span style={{ color: '#0f172a', fontWeight: 700 }}>Latest News</span>
          </nav>
        </div>
      </div>

      {/* HERO BANNER SECTION (MATCHES FEATURES / ROLES THEME) */}
      <section className="section section--alt" style={{ paddingTop: '50px', paddingBottom: '40px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '16px' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>Latest News &amp; Updates</p>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              Workforce Insights &amp;{' '}
              <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #6C3FC5, #ff5a1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                HR Technology
              </span>
            </h1>
            <p className="section-subtitle" style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
              Discover workforce insights, HR technology updates, payroll automation strategies, and industry news from HRVico experts.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN NEWS GRID CONTAINER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 16px 64px', width: '100%' }}>
        {paginatedBlogs.length > 0 ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
              {paginatedBlogs.map((news: any, index: number) => {
                const dynamicId = getCleanBlogSlug(news) || news._id || news.id || index;
                const imageSource = news.featureImage || news.coverImage || news.image || news.imageUrl || news.thumbnail;
                const finalImage = resolveImageUrl(imageSource);
                const imageAlt = news.title || 'News Image';
                const author = cleanAuthorString(news.authorName || news.author || news.addedBy);

                return (
                  <article
                    key={dynamicId}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #f1f5f9',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* COVER IMAGE WITH FIXED ASPECT RATIO */}
                    <div className="blog-card-img-wrap" style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Link href={`/latest-news/${encodeURIComponent(dynamicId)}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                        <img
                          src={finalImage}
                          alt={imageAlt}
                          className="blog-card-img"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Link>
                    </div>

                    {/* CARD BODY CONTENT */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      {/* DATE & AUTHOR ROW IMMEDIATELY BELOW IMAGE */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                        <span>📅 {formatDate(news.createdAt || news.date)}</span>
                        <span style={{ color: '#6C3FC5', fontWeight: 600 }}>By {author}</span>
                      </div>

                      {/* CARD TITLE (FIXED 2-LINE MIN HEIGHT FOR CONSISTENCY) */}
                      <Link href={`/latest-news/${encodeURIComponent(dynamicId)}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '12px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', lineHeight: 1.4, margin: 0, minHeight: '50px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {news.title || 'Latest News Update'}
                        </h2>
                      </Link>

                      {/* EXCERPT (FIXED 3-LINE MIN HEIGHT FOR CONSISTENCY) */}
                      <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px', minHeight: '66px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {news.shortDescription || news.metaDescription || (news.content ? news.content.replace(/<[^>]+>/g, '').slice(0, 140) : '')}
                      </p>

                      {/* READ FULL STORY GRADIENT BUTTON (ALIGNED AT BOTTOM) */}
                      <Link
                        href={`/latest-news/${encodeURIComponent(dynamicId)}`}
                        style={{
                          background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)',
                          color: '#ffffff',
                          fontWeight: 700,
                          padding: '10px 22px',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginTop: 'auto',
                          width: 'fit-content',
                          boxShadow: '0 4px 20px rgba(108, 63, 197, 0.3)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <span>Read Full Story</span>
                        <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px' }}>
                {currentPage > 1 && (
                  <Link
                    href={`/latest-news?page=${currentPage - 1}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#ffffff',
                      color: '#475569',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    ← Previous
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={`/latest-news?page=${pageNum}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: pageNum === currentPage ? '1px solid #6C3FC5' : '1px solid #cbd5e1',
                      backgroundColor: pageNum === currentPage ? '#6C3FC5' : '#ffffff',
                      color: pageNum === currentPage ? '#ffffff' : '#475569',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    {pageNum}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link
                    href={`/latest-news?page=${currentPage + 1}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#ffffff',
                      color: '#475569',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>No News Found</h2>
            <p style={{ color: '#64748b' }}>Check back later for more updates from our team.</p>
          </div>
        )}
      </div>
    </div>
  );
}
