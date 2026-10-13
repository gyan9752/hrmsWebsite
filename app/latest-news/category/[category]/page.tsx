/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { notFound } from 'next/navigation';
import {
  fetchAllBlogs,
  fetchAllCategories,
  getCleanBlogSlug,
  resolveImageUrl,
  cleanAuthorString,
  slugify,
  BlogPost,
} from '@/lib/api';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ category: string }>;
  searchParams?: Promise<{ page?: string }>;
}

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

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const catSlug = resolvedParams?.category;
  if (!catSlug) return { title: 'Category — HRVICO Latest News' };

  const categories = await fetchAllCategories();
  const matchedCat = categories.find((c: any) => {
    const s = c.slug || slugify(c.name || '');
    return s.toLowerCase() === catSlug.toLowerCase() || slugify(c.name || '') === catSlug.toLowerCase();
  });

  const name = matchedCat?.name || catSlug.replace(/-/g, ' ');
  const description = matchedCat?.description || matchedCat?.shortDescription || `Explore latest news, software guides, and insights under ${name} category on HRVICO.`;
  const url = `https://hrvico.com/latest-news/category/${encodeURIComponent(catSlug)}`;

  return {
    title: `${name} Articles & News — HRVICO`,
    description,
    keywords: [name, `${name} HR news`, `${name} software articles`, 'HRVICO news category'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${name} Articles & News — HRVICO`,
      description,
      url,
      siteName: 'HRVico',
      type: 'website',
      images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} Articles & News — HRVICO`,
      description,
      images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
    },
  };
}

export default async function CategoryNewsPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const catSlug = resolvedParams?.category;
  if (!catSlug) notFound();

  const currentPage = Math.max(1, parseInt(resolvedSearchParams?.page || '1', 10));
  const ITEMS_PER_PAGE = 9;

  const [allBlogs, allCategories] = await Promise.all([
    fetchAllBlogs(),
    fetchAllCategories(),
  ]);

  const targetSlug = catSlug.toLowerCase().trim();
  const selectedCategory = allCategories.find((c: any) => {
    const s = c.slug || slugify(c.name || '');
    const id = String(c._id || c.id || '').toLowerCase();
    return s.toLowerCase() === targetSlug || slugify(c.name || '') === targetSlug || id === targetSlug;
  });

  const categoryDisplayName = selectedCategory?.name || catSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  // Filter blogs matching this category
  const filteredBlogs = allBlogs.filter((blog: BlogPost) => {
    const catObj: any = typeof blog.category === 'object' ? blog.category : null;
    const bCatName = (catObj?.name || blog.categoryName || (typeof blog.category === 'string' ? blog.category : '') || '').toLowerCase().trim();
    const bCatSlug = (catObj?.slug || blog.categorySlug || slugify(bCatName)).toLowerCase().trim();
    const bCatId = String(catObj?._id || blog.categoryId || '').toLowerCase().trim();

    if (selectedCategory && selectedCategory._id && String(selectedCategory._id).toLowerCase() === bCatId) return true;
    if (bCatSlug === targetSlug) return true;
    if (slugify(bCatName) === targetSlug) return true;
    if (bCatName && targetSlug.includes(slugify(bCatName))) return true;
    return false;
  });

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* HERO BANNER SECTION (THEME MATCHED) */}
      <section className="section section--alt" style={{ paddingTop: '86px', paddingBottom: '40px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <Breadcrumb />
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '16px', maxWidth: '850px', margin: '0 auto' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Category
            </p>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              {categoryDisplayName}{' '}
              <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #6C3FC5, #ff5a1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                News &amp; Articles
              </span>
            </h1>
            <p className="section-subtitle" style={{ fontSize: '1.1rem', color: '#64748b', margin: '0 auto', lineHeight: 1.6 }}>
              {selectedCategory?.shortDescription || selectedCategory?.description || `Explore latest news updates, expert guides, and industry articles under ${categoryDisplayName}.`}
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
                    {/* COVER IMAGE WITH FIXED ASPECT RATIO AND HOVER */}
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
                      {/* DATE & AUTHOR ROW */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {formatDate(news.createdAt || news.date)}
                        </span>
                        <span style={{ color: '#6C3FC5', fontWeight: 600 }}>By {author}</span>
                      </div>

                      {/* CARD TITLE */}
                      <Link href={`/latest-news/${encodeURIComponent(dynamicId)}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '12px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', lineHeight: 1.4, margin: 0, minHeight: '50px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {news.title || 'Latest News Update'}
                        </h2>
                      </Link>

                      {/* EXCERPT */}
                      <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px', minHeight: '66px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {news.shortDescription || news.metaDescription || (news.content ? news.content.replace(/<[^>]+>/g, '').slice(0, 140) : '')}
                      </p>

                      {/* READ FULL STORY GRADIENT BUTTON */}
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
                    href={`/latest-news/category/${catSlug}?page=${currentPage - 1}`}
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
                    href={`/latest-news/category/${catSlug}?page=${pageNum}`}
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
                    href={`/latest-news/category/${catSlug}?page=${currentPage + 1}`}
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
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              No Articles Found in "{categoryDisplayName}"
            </h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
              There are currently no published articles under this category.
            </p>
            <Link
              href="/latest-news"
              style={{
                background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)',
                color: '#ffffff',
                fontWeight: 700,
                padding: '12px 28px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'inline-block',
                boxShadow: '0 4px 20px rgba(108, 63, 197, 0.3)',
              }}
            >
              View All Latest News
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
