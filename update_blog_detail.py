import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace breadcrumb title
content = re.sub(
    r'<span( class="blog-detail__breadcrumbs-separator")?>/</span>\s*<span>(.*?)</span>',
    r'<span\1>/</span>\n        <span id="breadcrumb-title">Loading...</span>',
    content,
    count=1
)

# Replace main title
content = re.sub(
    r'<h1 class="blog-detail__banner-title"(.*?)>.*?</h1>',
    r'<h1 class="blog-detail__banner-title" id="blog-title"\1>Loading...</h1>',
    content
)

# Replace featured image
content = re.sub(
    r'<div class="blog-detail__featured-image-wrap">\s*<img src=".*?alt=".*?">\s*</div>',
    r'<div class="blog-detail__featured-image-wrap" id="blog-image-container">\n          <img src="" alt="" id="blog-image" style="display: none;">\n        </div>',
    content
)

# Replace date
content = re.sub(
    r'<div class="blog-detail__meta-item">.*?<rect x="3".*?</div>',
    r'<div class="blog-detail__meta-item">\n              <span class="blog-detail__meta-icon">\n                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\n                  stroke-linecap="round" stroke-linejoin="round">\n                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />\n                  <line x1="16" y1="2" x2="16" y2="6" />\n                  <line x1="8" y1="2" x2="8" y2="6" />\n                  <line x1="3" y1="10" x2="21" y2="10" />\n                </svg>\n              </span>\n              <span id="blog-date">...</span>\n            </div>',
    content,
    flags=re.DOTALL
)

# Replace rich-text content
# Find everything between <div class="blog-detail__content"> and the end of the div
content = re.sub(
    r'<div class="blog-detail__content">.*?</div>\s*</article>',
    r'<div class="blog-detail__content" id="blog-content">\n            <p>Loading content...</p>\n          </div>\n        </article>',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blog-detail.html")
