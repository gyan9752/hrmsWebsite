import os
import shutil
import re

src = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-listing.html'
dest = 'c:\\Users\\Dell\\Documents\\hrms_website\\blogs.html'

shutil.copyfile(src, dest)

with open(dest, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace static category filters with an empty container
content = re.sub(
    r'<div class="blog-listing__filters" data-animate="fade-up">.*?</div>',
    r'<div class="blog-listing__filters" data-animate="fade-up" id="category-filters-container">\n        <button class="blog-filter-btn active" data-category="all">All</button>\n      </div>',
    content,
    flags=re.DOTALL
)

# 2. Replace static featured blog content with an empty container
content = re.sub(
    r'<!-- LEFT: Large Featured Blog Card -->.*?<!-- RIGHT: Stack of 3 Smaller Overlay Cards -->',
    r'<!-- LEFT: Large Featured Blog Card -->\n      <div id="featured-blog-container" style="width: 100%;">\n        <p style="padding: 20px;">Loading featured blog...</p>\n      </div>\n\n      <!-- RIGHT: Stack of 3 Smaller Overlay Cards -->',
    content,
    flags=re.DOTALL
)

# 3. Replace the right stack of 3 smaller cards with an empty container
content = re.sub(
    r'<!-- RIGHT: Stack of 3 Smaller Overlay Cards -->.*?<!-- ── THREE COLUMN STORIES GRID ── -->',
    r'<!-- RIGHT: Stack of 3 Smaller Overlay Cards -->\n      <div class="blog-listing__side-stack" id="trending-blogs-container">\n        <p style="padding: 20px;">Loading trending blogs...</p>\n      </div>\n    </section>\n\n    <!-- ── THREE COLUMN STORIES GRID ── -->',
    content,
    flags=re.DOTALL
)

# 4. Replace the static grid with an empty container
content = re.sub(
    r'<section class="blog-listing__grid" data-animate="fade-up">.*?</section>',
    r'<section class="blog-listing__grid" data-animate="fade-up">\n      <div id="blog-listing-container">\n        <p style="text-align: center; width: 100%; padding: 40px 0;">Loading more blogs...</p>\n      </div>\n    </section>',
    content,
    flags=re.DOTALL
)

with open(dest, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blogs.html")
