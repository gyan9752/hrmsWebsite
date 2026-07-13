import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blogs.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The grid section starts at: <section class="blog-listing__grid" data-animate="fade-up">
# and ends at the closing </section>
# Let's replace the contents of this section.
content = re.sub(
    r'(<section class="blog-listing__grid" data-animate="fade-up">).*?(</section>)',
    r'\1\n      <div id="blog-listing-container">\n        <p style="text-align: center; width: 100%; padding: 40px 0;">Loading blogs...</p>\n      </div>\n    \2',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blogs.html")
