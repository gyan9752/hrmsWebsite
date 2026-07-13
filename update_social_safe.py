import re

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\blog-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the top share buttons
content = re.sub(
    r'<a href="https://twitter\.com/intent/tweet\?text=[^"]+"([^>]*)class="blog-detail__share-btn"([^>]*)>',
    r'<a href="#" id="share-x-top" \1class="blog-detail__share-btn"\2>',
    content
)

content = re.sub(
    r'<a href="https://www\.linkedin\.com/shareArticle\?mini=true[^"]+"([^>]*)class="blog-detail__share-btn"([^>]*)>',
    r'<a href="#" id="share-linkedin-top" \1class="blog-detail__share-btn"\2>',
    content
)

content = re.sub(
    r'<a href="https://www\.facebook\.com/sharer/sharer\.php\?u=[^"]+"([^>]*)class="blog-detail__share-btn"([^>]*)>',
    r'<a href="#" id="share-facebook-top" \1class="blog-detail__share-btn"\2>',
    content
)

content = re.sub(
    r'<a href="https://api\.whatsapp\.com/send\?text=[^"]+"([^>]*)class="blog-detail__share-btn"([^>]*)>',
    r'<a href="#" id="share-whatsapp-top" \1class="blog-detail__share-btn"\2>',
    content
)

# Replace the floating share buttons
content = re.sub(
    r'<a href="https://twitter\.com/intent/tweet\?text=[^"]+"(\s*[^>]*)class="blog-detail__floating-btn blog-detail__floating-btn--share"([^>]*)>',
    r'<a href="#" id="share-x" \1class="blog-detail__floating-btn blog-detail__floating-btn--share"\2>',
    content
)

content = re.sub(
    r'<a href="https://www\.linkedin\.com/shareArticle\?mini=true[^"]+"(\s*[^>]*)class="blog-detail__floating-btn blog-detail__floating-btn--linkedin"([^>]*)>',
    r'<a href="#" id="share-linkedin" \1class="blog-detail__floating-btn blog-detail__floating-btn--linkedin"\2>',
    content
)

content = re.sub(
    r'<a href="https://www\.facebook\.com/sharer/sharer\.php\?u=[^"]+"(\s*[^>]*)class="blog-detail__floating-btn blog-detail__floating-btn--facebook"([^>]*)>',
    r'<a href="#" id="share-facebook" \1class="blog-detail__floating-btn blog-detail__floating-btn--facebook"\2>',
    content
)

content = re.sub(
    r'<a href="https://api\.whatsapp\.com/send\?text=[^"]+"(\s*[^>]*)class="blog-detail__floating-btn blog-detail__floating-btn--whatsapp"([^>]*)>',
    r'<a href="#" id="share-whatsapp" \1class="blog-detail__floating-btn blog-detail__floating-btn--whatsapp"\2>',
    content
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated blog-detail.html social links correctly")
