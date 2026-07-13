import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace sidebar latest news items
content = re.sub(
    r'<div class="blog-sidebar__list">.*?</div>',
    r'<div class="blog-sidebar__list" id="sidebar-latest-blogs">\n              <p>Loading latest articles...</p>\n            </div>',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated sidebar")
