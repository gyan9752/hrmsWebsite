
with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Fetch URL
content = content.replace('fetch(HRVICO_API_BASE + "/superadmin/blog")', 'fetch(HRVICO_API_BASE + "/superadmin/blog?limit=100")')

# 2. Add pagination state and modify renderBlogs
render_blogs_old = '''  function renderBlogs(blogsToRender) {
    if (featuredContainer) featuredContainer.innerHTML = "";
    if (trendingContainer) trendingContainer.innerHTML = "";
    gridContainer.innerHTML = "";

    if (blogsToRender.length === 0) {
      gridContainer.innerHTML =
        '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found for this category.</p>';
      return;
    }

    // Featured (1st)
    const featured = blogsToRender[0];'''

render_blogs_new = '''  let currentPage = 1;
  const blogsPerPage = 10;

  window.goToBlogPage = function(page) {
    currentPage = page;
    renderBlogs(window.currentBlogsToRender);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('blog-pagination');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(totalItems / blogsPerPage);
    if (totalPages <= 1) return;

    let html = '';
    
    // Prev
    html += `<button class="blog-pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToBlogPage(${currentPage - 1})">&laquo;</button>`;
    
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="blog-pagination-btn ${currentPage === i ? 'active' : ''}" onclick="goToBlogPage(${i})">${i}</button>`;
    }

    // Next
    html += `<button class="blog-pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToBlogPage(${currentPage + 1})">&raquo;</button>`;
    
    paginationContainer.innerHTML = html;
  }

  function renderBlogs(blogsToRender) {
    window.currentBlogsToRender = blogsToRender;
    if (featuredContainer) featuredContainer.innerHTML = "";
    if (trendingContainer) trendingContainer.innerHTML = "";
    gridContainer.innerHTML = "";

    if (blogsToRender.length === 0) {
      gridContainer.innerHTML =
        '<p style="text-align: center; width: 100%; padding: 40px 0;">No blogs found.</p>';
      renderPagination(0);
      return;
    }

    const startIndex = (currentPage - 1) * blogsPerPage;
    const paginatedBlogs = blogsToRender.slice(startIndex, startIndex + blogsPerPage);

    if (paginatedBlogs.length === 0) return;

    // Featured (1st)
    const featured = paginatedBlogs[0];'''

content = content.replace(render_blogs_old, render_blogs_new)

# 3. Update the slice calls in renderBlogs
content = content.replace('const trendings = blogsToRender.slice(1, 4);', 'const trendings = paginatedBlogs.slice(1, 4);')
content = content.replace('const gridBlogs = blogsToRender.slice(4);', 'const gridBlogs = paginatedBlogs.slice(4);')

# 4. Add call to renderPagination at the end of renderBlogs
end_of_render_blogs = '''            </div>
          </div>
        `;
        gridContainer.appendChild(card);
      });
    }
  }'''

end_of_render_blogs_new = '''            </div>
          </div>
        `;
        gridContainer.appendChild(card);
      });
    }
    renderPagination(blogsToRender.length);
  }'''

content = content.replace(end_of_render_blogs, end_of_render_blogs_new)

# Reset currentPage when filtering
content = content.replace('renderBlogs(allBlogs);', 'currentPage = 1; renderBlogs(allBlogs);')
content = content.replace('renderBlogs(filtered);', 'currentPage = 1; renderBlogs(filtered);')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
