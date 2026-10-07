import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBlogBySlug, getBlogImg, cleanAuthorString, stripHtml } from '@/lib/api';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: 'Article Not Found — HRVICO',
    };
  }

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || stripHtml(blog.shortDescription || blog.description || blog.content).slice(0, 160);
  const image = getBlogImg(blog.featureImage || blog.image || blog.coverImage);

  const url = `https://hrvico.com/blog-details/${encodeURIComponent(params.slug)}`;

  return {
    title: `${title} — HRVICO Blog`,
    description,
    keywords: blog.keywords ? blog.keywords.split(',') : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    notFound();
  }

  const author = cleanAuthorString(blog.authorName || blog.author || blog.addedBy);
  const img = getBlogImg(blog.featureImage || blog.image || blog.coverImage);
  const categoryName = typeof blog.category === 'object' ? blog.category?.name : blog.categoryName || blog.category || 'HR Insights';

  return (
    <main className="subpage">
      <header className="subpage__header" style={{ padding: '48px 0 32px', background: '#fafafa', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '1100px', textAlign: 'center' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#ff5a1f', textDecoration: 'none', fontWeight: 600 }}>Home</Link> /{' '}
            <Link href="/blogs" style={{ color: '#ff5a1f', textDecoration: 'none', fontWeight: 600 }}>Blogs</Link> /{' '}
            <span style={{ color: '#0f172a', fontWeight: 500 }}>{blog.title}</span>
          </div>

          <span
            style={{
              display: 'inline-block',
              background: '#fff4f0',
              color: '#ff5a1f',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '6px 16px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            {categoryName}
          </span>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0e2a46', lineHeight: '1.25', marginBottom: '20px', letterSpacing: '-0.5px' }}>
            {blog.title}
          </h1>
        </div>
      </header>

      <section className="container" style={{ maxWidth: '1100px', paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="blog-detail-grid">
          {/* Main Content */}
          <article className="blog-article-card">
            <img
              src={img}
              alt={blog.altTag || blog.title}
              className="blog-feature-image"
            />

            <div
              className="blog-rich-content"
              dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.shortDescription || blog.description || ''}</p>` }}
            />
          </article>

          {/* Sidebar Widget */}
          <aside className="blog-sidebar">
            <div className="promo-card">
              <img
                src="/assets/images/blogs_image_prev.webp"
                alt="HRVICO HRMS Promotion"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
              />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0e2a46', marginBottom: '8px' }}>
                Grow Faster With HRVICO HRMS
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '18px', lineHeight: '1.6' }}>
                Automate attendance, payroll, statutory compliance & employee management on a single unified platform.
              </p>
              <a
                href="/?demo=true"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'block',
                  backgroundColor: '#ff5a1f',
                  borderColor: '#ff5a1f',
                  color: '#ffffff',
                  fontWeight: 700,
                  padding: '12px 20px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(255, 90, 31, 0.25)',
                }}
              >
                Book Free Consultation
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Embedded CSS for Rich Text Content & Responsive Layout */}
      <style>{`
        .blog-detail-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .blog-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        .blog-article-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        @media (max-width: 600px) {
          .blog-article-card {
            padding: 20px;
          }
        }

        .blog-feature-image {
          width: 100%;
          max-height: 420px;
          border-radius: 16px;
          margin-bottom: 32px;
          object-fit: cover;
        }

        .blog-rich-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #334155;
        }

        .blog-rich-content h1,
        .blog-rich-content h2,
        .blog-rich-content h3,
        .blog-rich-content h4 {
          color: #0e2a46;
          font-weight: 800;
          margin: 28px 0 14px 0;
          line-height: 1.3;
        }

        .blog-rich-content h2 { font-size: 1.65rem; }
        .blog-rich-content h3 { font-size: 1.35rem; }

        .blog-rich-content p {
          margin-bottom: 16px;
        }

        .blog-rich-content ul,
        .blog-rich-content ol {
          padding-left: 24px;
          margin: 16px 0;
        }

        .blog-rich-content li {
          margin-bottom: 8px;
        }

        .blog-rich-content blockquote {
          border-left: 4px solid #ff5a1f;
          background: #fff4f0;
          padding: 16px 20px;
          margin: 24px 0;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #0e2a46;
        }

        .blog-rich-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 20px 0;
        }

        .promo-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          position: sticky;
          top: 100px;
        }
      `}</style>
    </main>
  );
}
