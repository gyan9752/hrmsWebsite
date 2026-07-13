import os
import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Widget 1: All Latest Articles
# It starts at: <div class="blog-sidebar__widget">\n          <h3 class="blog-sidebar__widget-title">All Latest Articles</h3>
# And ends before: <!-- Widget 2: Related Articles -->
content = re.sub(
    r'<!-- Widget 1: Latest News -->.*?<!-- Widget 2: Related Articles -->',
    r'<!-- Widget 1: Latest News -->\n        <div class="blog-sidebar__widget">\n          <h3 class="blog-sidebar__widget-title">All Latest Articles</h3>\n          <div class="blog-sidebar__list" id="sidebar-latest-blogs">\n            <p style="padding: 10px;">Loading latest articles...</p>\n          </div>\n        </div>\n\n        <!-- Widget 2: Related Articles -->',
    content,
    flags=re.DOTALL
)

# Fix Widget 2: Related Articles
content = re.sub(
    r'<!-- Widget 2: Related Articles -->.*?<!-- Widget 3: Categories -->',
    r'<!-- Widget 2: Related Articles -->\n        <div class="blog-sidebar__widget">\n          <h3 class="blog-sidebar__widget-title">Related Articles</h3>\n          <div class="blog-sidebar__list" id="sidebar-related-blogs">\n            <p style="padding: 10px;">Loading related articles...</p>\n          </div>\n        </div>\n\n        <!-- Widget 3: Categories -->',
    content,
    flags=re.DOTALL
)

# Fix Widget 3: Categories
# It starts at <!-- Widget 3: Categories --> and ends at </aside>
content = re.sub(
    r'<!-- Widget 3: Categories -->.*?</aside>',
    r'<!-- Widget 3: Categories -->\n        <div class="blog-sidebar__widget">\n          <h3 class="blog-sidebar__widget-title">Categories</h3>\n          <div class="blog-sidebar__list" id="sidebar-categories">\n            <p style="padding: 10px;">Loading categories...</p>\n          </div>\n        </div>\n      </aside>',
    content,
    flags=re.DOTALL
)

# Also fix the hero image to have an ID so we can update it
content = re.sub(
    r'<img src="assets/images/blog_hero_sme\.png" alt="Hero background">',
    r'<img src="assets/images/blog_hero_sme.png" alt="Hero background" id="blog-hero-image">',
    content
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blog-detail.html sidebar and hero image ID")
