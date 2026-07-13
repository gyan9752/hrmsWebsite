import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the floating share links
content = re.sub(
    r'<a href=".*?twitter.*?".*?class="blog-detail__floating-btn blog-detail__floating-btn--share".*?>',
    r'<a href="#" id="share-x" target="_blank" rel="noopener noreferrer" class="blog-detail__floating-btn blog-detail__floating-btn--share" aria-label="Share on X">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?linkedin.*?".*?class="blog-detail__floating-btn blog-detail__floating-btn--linkedin".*?>',
    r'<a href="#" id="share-linkedin" target="_blank" rel="noopener noreferrer" class="blog-detail__floating-btn blog-detail__floating-btn--linkedin" aria-label="Share on LinkedIn">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?facebook.*?".*?class="blog-detail__floating-btn blog-detail__floating-btn--facebook".*?>',
    r'<a href="#" id="share-facebook" target="_blank" rel="noopener noreferrer" class="blog-detail__floating-btn blog-detail__floating-btn--facebook" aria-label="Share on Facebook">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?whatsapp.*?".*?class="blog-detail__floating-btn blog-detail__floating-btn--whatsapp".*?>',
    r'<a href="#" id="share-whatsapp" target="_blank" rel="noopener noreferrer" class="blog-detail__floating-btn blog-detail__floating-btn--whatsapp" aria-label="Share on WhatsApp">',
    content,
    flags=re.DOTALL
)

# And if there are similar ones higher up:
content = re.sub(
    r'<a href=".*?twitter.*?".*?class="blog-detail__share-btn".*?>',
    r'<a href="#" id="share-x-top" target="_blank" rel="noopener noreferrer" class="blog-detail__share-btn" aria-label="Share on X">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?linkedin.*?".*?class="blog-detail__share-btn".*?>',
    r'<a href="#" id="share-linkedin-top" target="_blank" rel="noopener noreferrer" class="blog-detail__share-btn" aria-label="Share on LinkedIn">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?facebook.*?".*?class="blog-detail__share-btn".*?>',
    r'<a href="#" id="share-facebook-top" target="_blank" rel="noopener noreferrer" class="blog-detail__share-btn" aria-label="Share on Facebook">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<a href=".*?whatsapp.*?".*?class="blog-detail__share-btn".*?>',
    r'<a href="#" id="share-whatsapp-top" target="_blank" rel="noopener noreferrer" class="blog-detail__share-btn" aria-label="Share on WhatsApp">',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blog-detail.html social links")
