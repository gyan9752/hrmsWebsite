import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\js\\main.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace everything from `function initBlogListing()` to the end of the file.
new_functions = """function initBlogListing() {
  const filterContainer = document.getElementById('category-filters-container');
  const featuredContainer = document.getElementById('featured-blog-container');
  const trendingContainer = document.getElementById('trending-blogs-container');
  const gridContainer = document.getElementById('blog-listing-container');

  if (!gridContainer) return;

  // 1. Fetch Categories
  if (filterContainer) {
    fetch(HRVICO_API_BASE + '/superadmin/blogCategory/blog-categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          filterContainer.innerHTML = '<button class="blog-filter-btn active" data-category="all">All</button>';
          data.data.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'blog-filter-btn';
            btn.setAttribute('data-category', cat._id); // use ID for filtering
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
  fetch(HRVICO_API_BASE + '/superadmin/blog')
    .then(res => res.json())
    .then(data => {
      if (data.success && data.data && data.data.length > 0) {
        allBlogs = data.data.filter(b => b.status === 'published');
        // Sort by date descending
        allBlogs.sort((a, b) => new Date(b.publishDate || b.createdAt) - new Date(a.publishDate || a.createdAt));
        
        renderBlogs(allBlogs);
      } else {
        gridContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
        if (featuredContainer) featuredContainer.innerHTML = '';
        if (trendingContainer) trendingContainer.innerHTML = '';
      }
    })
    .catch(err => {
      console.error('Error fetching blogs:', err);
      gridContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0; color: red;">Failed to load blogs. Please try again later.</p>';
    });

  function attachFilterEvents() {
    const btns = filterContainer.querySelectorAll('.blog-filter-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const catId = btn.getAttribute('data-category');
        if (catId === 'all') {
          renderBlogs(allBlogs);
        } else {
          const filtered = allBlogs.filter(b => b.category && b.category._id === catId);
          renderBlogs(filtered);
        }
      });
    });
  }

  function renderBlogs(blogsToRender) {
    if (featuredContainer) featuredContainer.innerHTML = '';
    if (trendingContainer) trendingContainer.innerHTML = '';
    gridContainer.innerHTML = '';

    if (blogsToRender.length === 0) {
      gridContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found for this category.</p>';
      return;
    }

    // Featured (1st)
    const featured = blogsToRender[0];
    if (featuredContainer && featured) {
      const catName = featured.category ? featured.category.name : (featured.categoryName || 'Blog');
      featuredContainer.innerHTML = `
        <a href="blog-detail.html?id=${featured._id}" class="blog-card--featured">
          <div class="blog-card__img-wrap">
            <img src="${featured.featuredImage || ''}" alt="${featured.altTag || featured.title}" loading="eager">
          </div>
          <div class="blog-card__overlay"></div>
          <div class="blog-card__content">
            <span class="blog-tag blog-tag--purple">${catName}</span>
            <h2 class="blog-card__title">${featured.title}</h2>
            <p class="blog-card__excerpt">${featured.shortDescription || ''}</p>
            <div class="blog-card__meta">
              <span>${formatDate(featured.publishDate || featured.createdAt)}</span>
              <span class="blog-card__meta-dot"></span>
              <span>4 Min Read</span>
            </div>
            <span class="blog-card__cta">
              Read Article
              <svg class="blog-card__cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      `;
    }

    // Trending (2nd to 4th)
    const trendings = blogsToRender.slice(1, 4);
    if (trendingContainer && trendings.length > 0) {
      trendings.forEach((blog, i) => {
        const colors = ['orange', 'blue', 'teal'];
        const color = colors[i % colors.length];
        const catName = blog.category ? blog.category.name : (blog.categoryName || 'Blog');
        
        const card = document.createElement('a');
        card.href = `blog-detail.html?id=${blog._id}`;
        card.className = 'blog-card--small';
        card.innerHTML = `
          <div class="blog-card__img-wrap">
            <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}" loading="lazy">
          </div>
          <div class="blog-card__overlay"></div>
          <div class="blog-card__content">
            <span class="blog-tag blog-tag--${color}">${catName}</span>
            <h3 class="blog-card__title">${blog.title}</h3>
            <div class="blog-card__meta">
              <span>${formatDate(blog.publishDate || blog.createdAt)}</span>
              <span class="blog-card__meta-dot"></span>
              <span>5 Min Read</span>
            </div>
          </div>
        `;
        trendingContainer.appendChild(card);
      });
    }

    // Grid (5th onwards)
    const gridBlogs = blogsToRender.slice(4);
    if (gridBlogs.length > 0) {
      gridBlogs.forEach(blog => {
        const catName = blog.category ? blog.category.name : (blog.categoryName || 'Blog');
        const card = document.createElement('a');
        card.href = `blog-detail.html?id=${blog._id}`;
        card.className = 'blog-card--horizontal';
        
        card.innerHTML = `
          <div class="blog-card__img-wrap">
            <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}" loading="lazy">
            <div class="blog-card__img-overlay"></div>
          </div>
          <div class="blog-card__body">
            <span class="blog-tag blog-tag--purple">${catName}</span>
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
        gridContainer.appendChild(card);
      });
    }
  }
}

function initBlogDetail() {
  const titleEl = document.getElementById('blog-title');
  const breadcrumbEl = document.getElementById('breadcrumb-title');
  const imageEl = document.getElementById('blog-image');
  const heroImageEl = document.getElementById('blog-hero-image');
  const dateEl = document.getElementById('blog-date');
  const contentEl = document.getElementById('blog-content');
  
  const sidebarLatestEl = document.getElementById('sidebar-latest-blogs');
  const sidebarRelatedEl = document.getElementById('sidebar-related-blogs');
  const sidebarCategoriesEl = document.getElementById('sidebar-categories');

  if (!titleEl && !sidebarLatestEl) return;

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

          const shareX = document.getElementById('share-x');
          const shareLinkedin = document.getElementById('share-linkedin');
          const shareFacebook = document.getElementById('share-facebook');
          const shareWhatsapp = document.getElementById('share-whatsapp');

          const shareXTop = document.getElementById('share-x-top');
          const shareLinkedinTop = document.getElementById('share-linkedin-top');
          const shareFacebookTop = document.getElementById('share-facebook-top');
          const shareWhatsappTop = document.getElementById('share-whatsapp-top');

          function updateSocialLinks(blogTitle) {
              const currentUrl = encodeURIComponent(window.location.href);
              const encodedTitle = encodeURIComponent(blogTitle);

              const xUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`;
              const liUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodedTitle}`;
              const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
              const waUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${currentUrl}`;

              if(shareX) shareX.href = xUrl;
              if(shareLinkedin) shareLinkedin.href = liUrl;
              if(shareFacebook) shareFacebook.href = fbUrl;
              if(shareWhatsapp) shareWhatsapp.href = waUrl;

              if(shareXTop) shareXTop.href = xUrl;
              if(shareLinkedinTop) shareLinkedinTop.href = liUrl;
              if(shareFacebookTop) shareFacebookTop.href = fbUrl;
              if(shareWhatsappTop) shareWhatsappTop.href = waUrl;
          }

          updateSocialLinks(blog.title);

          if (breadcrumbEl) breadcrumbEl.textContent = blog.title;
          if (dateEl) dateEl.textContent = formatDate(blog.publishDate || blog.createdAt);
          
          if (imageEl && blog.featuredImage) {
            imageEl.src = blog.featuredImage;
            imageEl.alt = blog.altTag || blog.title;
            imageEl.style.display = 'block';
          }
          if (heroImageEl && blog.featuredImage) {
            heroImageEl.src = blog.featuredImage;
            heroImageEl.alt = blog.altTag || blog.title;
          }
          
          if (contentEl) contentEl.innerHTML = blog.content || '<p>No content available.</p>';
        } else {
          titleEl.textContent = 'Blog Not Found';
          if (contentEl) contentEl.innerHTML = '<p>The requested blog post could not be found.</p>';
        }
      })
      .catch(err => {
        console.error('Error fetching blog details:', err);
        titleEl.textContent = 'Error Loading Blog';
        if (contentEl) contentEl.innerHTML = '<p style="color: red;">Failed to load blog content. Please try again later.</p>';
      });
  }

  // Load Sidebar Latest and Related Articles
  if (sidebarLatestEl || sidebarRelatedEl) {
    fetch(HRVICO_API_BASE + '/superadmin/blog')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          const published = data.data.filter(b => b.status === 'published' && b._id !== blogId);
          published.sort((a, b) => new Date(b.publishDate || b.createdAt) - new Date(a.publishDate || a.createdAt));
          
          // Latest Articles (first 3)
          if (sidebarLatestEl) {
            sidebarLatestEl.innerHTML = '';
            const latest = published.slice(0, 3);
            if (latest.length > 0) {
              latest.forEach(blog => {
                sidebarLatestEl.innerHTML += `
                  <a href="blog-detail.html?id=${blog._id}" class="blog-sidebar__list-item">
                    <div class="blog-sidebar__list-thumb">
                      <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}">
                    </div>
                    <div class="blog-sidebar__list-content">
                      <h4 class="blog-sidebar__list-title">${blog.title}</h4>
                      <span class="blog-sidebar__list-meta">${formatDate(blog.publishDate || blog.createdAt)}</span>
                    </div>
                  </a>
                `;
              });
            } else {
              sidebarLatestEl.innerHTML = '<p style="padding:10px;">No recent articles.</p>';
            }
          }

          // Related Articles (next 2)
          if (sidebarRelatedEl) {
            sidebarRelatedEl.innerHTML = '';
            const related = published.slice(3, 5);
            if (related.length > 0) {
              related.forEach(blog => {
                sidebarRelatedEl.innerHTML += `
                  <a href="blog-detail.html?id=${blog._id}" class="blog-sidebar__list-item">
                    <div class="blog-sidebar__list-thumb">
                      <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}">
                    </div>
                    <div class="blog-sidebar__list-content">
                      <h4 class="blog-sidebar__list-title">${blog.title}</h4>
                      <span class="blog-sidebar__list-meta">${formatDate(blog.publishDate || blog.createdAt)}</span>
                    </div>
                  </a>
                `;
              });
            } else {
              // fallback if not enough blogs
              const fallback = published.slice(0, 2);
              if (fallback.length > 0) {
                 fallback.forEach(blog => {
                  sidebarRelatedEl.innerHTML += `
                    <a href="blog-detail.html?id=${blog._id}" class="blog-sidebar__list-item">
                      <div class="blog-sidebar__list-thumb">
                        <img src="${blog.featuredImage || ''}" alt="${blog.altTag || blog.title}">
                      </div>
                      <div class="blog-sidebar__list-content">
                        <h4 class="blog-sidebar__list-title">${blog.title}</h4>
                        <span class="blog-sidebar__list-meta">${formatDate(blog.publishDate || blog.createdAt)}</span>
                      </div>
                    </a>
                  `;
                });
              } else {
                 sidebarRelatedEl.innerHTML = '<p style="padding:10px;">No related articles.</p>';
              }
            }
          }
        }
      })
      .catch(console.error);
  }

  // Load Sidebar Categories
  if (sidebarCategoriesEl) {
    fetch(HRVICO_API_BASE + '/superadmin/blogCategory/blog-categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          sidebarCategoriesEl.innerHTML = '';
          data.data.forEach(cat => {
            const count = cat.posts || 0;
            const imgHtml = cat.image ? `<img src="${cat.image}" alt="${cat.altTag || cat.name}">` : '';
            sidebarCategoriesEl.innerHTML += `
              <a href="blogs.html?category=${cat._id}" class="blog-sidebar__list-item">
                <div class="blog-sidebar__list-thumb">
                  ${imgHtml}
                </div>
                <div class="blog-sidebar__list-content">
                  <h4 class="blog-sidebar__list-title">${cat.name}</h4>
                  <span class="blog-sidebar__list-meta">${count} Article${count !== 1 ? 's' : ''}</span>
                </div>
              </a>
            `;
          });
          if (data.data.length === 0) {
            sidebarCategoriesEl.innerHTML = '<p style="padding:10px;">No categories found.</p>';
          }
        }
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        sidebarCategoriesEl.innerHTML = '<p style="padding:10px; color: red;">Failed to load categories.</p>';
      });
  }
}
"""

content = re.sub(r'function initBlogListing\(\) \{.*$', new_functions, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated js/main.js logic")
