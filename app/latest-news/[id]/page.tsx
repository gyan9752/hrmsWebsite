/* eslint-disable @next/next/no-img-element */
export const revalidate = 60;

import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { notFound } from 'next/navigation';
import {
  fetchAllBlogs,
  fetchAllCategories,
  fetchBlogBySlug,
  fetchDynamicBanner,
  getCleanBlogSlug,
  resolveImageUrl,
  cleanAuthorString,
  stripHtml,
} from '@/lib/api';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
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

const getCategoryName = (blog: any, allCategories: any[]) => {
  const catObj = blog.categoryId || blog.category || blog.Category;
  if (!catObj) return 'HR & Technology';
  if (typeof catObj === 'object') {
    return catObj.name || catObj.title || 'HR & Technology';
  }
  const catStr = String(catObj).trim();
  const found = allCategories.find((c) => String(c._id) === catStr || String(c.id) === catStr || c.slug === catStr);
  if (found) return found.name;
  if (/^[0-9a-fA-F]{24}$/.test(catStr)) return 'HR & Technology';
  return catStr;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) return { title: 'Article Not Found — HRVICO' };
  const blog = await fetchBlogBySlug(id);
  if (!blog) return { title: 'Article Not Found — HRVICO' };

  const title = (blog.metaTitle || blog.title || 'Latest News').replace(/\s*\|\s*HRVico.*$/i, '').trim();
  const description = blog.metaDescription || stripHtml(blog.shortDescription || blog.description || blog.content || '').slice(0, 160);
  const image = resolveImageUrl(blog.coverImage || blog.featureImage || blog.image);
  const url = `https://hrvico.com/latest-news/${encodeURIComponent(id)}`;

  return {
    title: `${title} — HRVICO`,
    description,
    keywords: blog.keywords ? blog.keywords.split(',') : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — HRVICO`,
      description,
      url,
      siteName: 'HRVico',
      type: 'article',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — HRVICO`,
      description,
      images: [image],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) notFound();
  const blog = await fetchBlogBySlug(id);
  if (!blog) notFound();

  const [allBlogs, allCategories, dynamicBannerData] = await Promise.all([
    fetchAllBlogs(),
    fetchAllCategories(),
    fetchDynamicBanner(),
  ]);

  const categoryName = getCategoryName(blog, allCategories);
  const latestNews = allBlogs
    .filter((b) => getCleanBlogSlug(b) !== getCleanBlogSlug(blog))
    .slice(0, 4);

  const currentUrl = `https://hrvico.com/latest-news/${getCleanBlogSlug(blog)}`;
  const finalMainImage = resolveImageUrl(
    blog.coverImage || blog.featureImage || blog.image || blog.imageUrl
  );
  const authorName = cleanAuthorString(blog.authorName || blog.author || blog.addedBy);

  const promoCard = dynamicBannerData
    ? {
        heading: dynamicBannerData.heading || dynamicBannerData.title || 'Grow Faster With HRVICO HRMS',
        shortDescription:
          dynamicBannerData.shortDescription ||
          dynamicBannerData.description ||
          'Automate attendance, payroll, leaves & employee management on a single platform.',
        buttonText: dynamicBannerData.buttonText || 'Go',
        relatedLink: dynamicBannerData.relatedLink || '/contact',
        imageUrl: resolveImageUrl(dynamicBannerData.featureImage || dynamicBannerData.image),
      }
    : {
        heading: 'Grow Faster With HRVICO HRMS',
        shortDescription: 'Automate attendance, payroll, leaves & employee management on a single platform.',
        buttonText: 'Book Demo',
        relatedLink: '/contact',
        imageUrl: null,
      };

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* HERO BANNER SECTION (EXACT NEWS LISTING THEME & CENTERED LAYOUT) */}
      <section className="section section--alt" style={{ paddingTop: '86px', paddingBottom: '40px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <Breadcrumb />
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '0', maxWidth: '900px', margin: '0 auto' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              {categoryName || 'LATEST NEWS'}
            </p>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0', lineHeight: 1.3 }}>
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE AND SIDEBAR CONTAINER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '32px 16px 60px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* LEFT ARTICLE CONTENT */}
          <div style={{ flex: '1 1 64%', minWidth: '300px' }}>
            <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', backgroundColor: '#f8fafc' }}>
              <img
                src={finalMainImage}
                alt={blog.title}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
              />
            </div>

            {/* DATE & AUTHOR */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', fontSize: '13px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{formatDate(blog.createdAt || blog.date)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#6C3FC5', fontWeight: 600 }}>By {authorName}</span>
              </div>
            </div>

            {/* RICH TEXT BODY */}
            {blog.content ? (
              <div
                className="blog-detail__content rich-text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <div className="blog-detail__content rich-text">
                <p>{blog.description || blog.shortDescription}</p>
              </div>
            )}

            {/* SHARE BUTTONS */}
            <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Share This Post
              </h2>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1877F2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1DA1F2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title)}%20${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0077b5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside style={{ flex: '1 1 32%', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* WIDGET 1: TOP 4 LATEST ARTICLES */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                Latest Articles
              </h3>
              {latestNews.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {latestNews.map((item: any, idx: number) => {
                    const itemSlug = getCleanBlogSlug(item) || idx;
                    return (
                      <Link
                        href={`/latest-news/${itemSlug}`}
                        key={itemSlug}
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

            {/* WIDGET 2: CATEGORIES FROM ADMIN CMS */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                Categories
              </h3>
              {allCategories.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '290px', overflowY: 'auto', paddingRight: '6px' }} className="custom-scrollbar">
                  {allCategories.map((cat: any) => (
                    <Link
                      href={`/latest-news/category/${encodeURIComponent(cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-'))}`}
                      key={cat._id || cat.name}
                      style={{ display: 'block', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '12px', textDecoration: 'none', backgroundColor: '#ffffff' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0, overflow: 'hidden' }}>
                          {cat.image || cat.coverImage || cat.icon ? (
                            <img src={resolveImageUrl(cat.image || cat.coverImage || cat.icon)} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C3FC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
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

            {/* WIDGET 3: DYNAMIC PROMOTION CARD FROM ADMIN CMS */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              {promoCard.imageUrl && (
                <a
                  href={promoCard.relatedLink}
                  target={promoCard.relatedLink.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{ display: 'block', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}
                >
                  <img
                    src={promoCard.imageUrl}
                    alt={promoCard.heading}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
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
                href={promoCard.relatedLink}
                target={promoCard.relatedLink.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)', color: '#ffffff', padding: '12px 20px', borderRadius: '9999px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108, 63, 197, 0.3)', transition: 'all 0.3s ease' }}
              >
                {promoCard.buttonText}
              </a>
            </div>

            {/* WIDGET 4: NEED HELP? CONTACT CARD */}
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
