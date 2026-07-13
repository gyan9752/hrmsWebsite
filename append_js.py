import os

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\js\\main.js'

js_code = """
/* ═══════════════════════════════════════════
   BLOG API INTEGRATION
   ═══════════════════════════════════════════ */

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function initBlogListing() {
  const container = document.getElementById('blog-listing-container');
  if (!container) return;

  fetch(HRVICO_API_BASE + '/superadmin/blog')
    .then(res => res.json())
    .then(data => {
      if (data.success && data.data && data.data.length > 0) {
        container.innerHTML = '';
        data.data.forEach(blog => {
          if (blog.status !== 'published') return;

          const blogUrl = `blog-detail.html?id=${blog._id}`;
          
          const card = document.createElement('a');
          card.href = blogUrl;
          card.className = 'blog-card--horizontal';
          
          card.innerHTML = `
            <div class="blog-card__img-wrap">
              <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}" loading="lazy">
              <div class="blog-card__img-overlay"></div>
            </div>
            <div class="blog-card__body">
              <span class="blog-tag blog-tag--purple">${blog.categoryName || 'Blog'}</span>
              <h3 class="blog-card__title">${blog.title}</h3>
              <p class="blog-card__excerpt">${blog.shortDescription || ''}</p>
              <div class="blog-card__footer">
                <div class="blog-card__meta">
                  <span>${formatDate(blog.publishDate || blog.createdAt)}</span>
                </div>
                <span class="blog-card__read-link">
                  Read
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          `;
          container.appendChild(card);
        });
        
        if (container.innerHTML === '') {
          container.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0;">No published blogs found.</p>';
        }
      } else {
        container.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
      }
    })
    .catch(err => {
      console.error('Error fetching blogs:', err);
      container.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0; color: red;">Failed to load blogs. Please try again later.</p>';
    });
}

function initBlogDetail() {
  const titleEl = document.getElementById('blog-title');
  const breadcrumbEl = document.getElementById('breadcrumb-title');
  const imageEl = document.getElementById('blog-image');
  const dateEl = document.getElementById('blog-date');
  const contentEl = document.getElementById('blog-content');
  const sidebarEl = document.getElementById('sidebar-latest-blogs');

  if (!titleEl && !sidebarEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');

  // Load Main Content
  if (blogId && titleEl) {
    fetch(HRVICO_API_BASE + '/superadmin/blog/' + blogId)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const blog = data.data;
          
          document.title = (blog.metaTitle || blog.title) + " | HRVico";
          
          let metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
             metaDesc.setAttribute("content", blog.metaDescription || blog.shortDescription || "");
          }

          titleEl.textContent = blog.title;
          if (breadcrumbEl) breadcrumbEl.textContent = blog.title;
          
          if (dateEl) dateEl.textContent = formatDate(blog.publishDate || blog.createdAt);
          
          if (imageEl && blog.featuredImage) {
            imageEl.src = blog.featuredImage;
            imageEl.alt = blog.altTag || blog.title;
            imageEl.style.display = 'block';
          }
          
          if (contentEl) contentEl.innerHTML = blog.content || '<p>No content available.</p>';
        } else {
          titleEl.textContent = 'Blog Not Found';
          if (contentEl) contentEl.innerHTML = '<p>The requested blog post could not be found.</p>';
          if (breadcrumbEl) breadcrumbEl.textContent = 'Not Found';
        }
      })
      .catch(err => {
        console.error('Error fetching blog details:', err);
        titleEl.textContent = 'Error Loading Blog';
        if (contentEl) contentEl.innerHTML = '<p style="color: red;">Failed to load blog content. Please try again later.</p>';
        if (breadcrumbEl) breadcrumbEl.textContent = 'Error';
      });
  } else if (!blogId && titleEl) {
     titleEl.textContent = 'Blog Not Found';
     if (contentEl) contentEl.innerHTML = '<p>No blog ID provided.</p>';
     if (breadcrumbEl) breadcrumbEl.textContent = 'Not Found';
  }

  // Load Sidebar Latest Articles
  if (sidebarEl) {
    fetch(HRVICO_API_BASE + '/superadmin/blog')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          sidebarEl.innerHTML = '';
          const published = data.data.filter(b => b.status === 'published' && b._id !== blogId).slice(0, 5);
          
          if (published.length > 0) {
            published.forEach(blog => {
              const item = document.createElement('a');
              item.href = `blog-detail.html?id=${blog._id}`;
              item.className = 'blog-sidebar__list-item';
              item.innerHTML = `
                <div class="blog-sidebar__list-thumb">
                  <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}">
                </div>
                <div class="blog-sidebar__list-content">
                  <h4 class="blog-sidebar__list-title">${blog.title}</h4>
                  <span class="blog-sidebar__list-meta">${formatDate(blog.publishDate || blog.createdAt)}</span>
                </div>
              `;
              sidebarEl.appendChild(item);
            });
          } else {
            sidebarEl.innerHTML = '<p>No recent articles.</p>';
          }
        }
      })
      .catch(err => {
        console.error('Error fetching latest blogs for sidebar:', err);
        sidebarEl.innerHTML = '<p style="color: red;">Failed to load recent articles.</p>';
      });
  }
}
"""

with open(file_path, 'a', encoding='utf-8') as f:
    f.write(js_code)
print("Appended blog API integration to main.js")
