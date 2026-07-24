import os
import glob
import re

dir_path = r'c:\Users\Dell\Documents\hrms_website'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

def get_links_html(file_name, is_mobile=False):
    # Determine which item should be active
    active_item = None
    if file_name == 'index.html':
        active_item = 'Home'
    elif file_name == 'features.html':
        active_item = 'Features'
    elif file_name == 'roles.html':
        active_item = 'Roles'
    elif file_name == 'pricing.html':
        active_item = 'Pricing'
    elif file_name == 'contact.html':
        active_item = 'Contact'
    elif file_name in ['blogs.html', 'blog-listing.html', 'blog-detail.html']:
        active_item = 'Blog'
        
    items = [
        ('Home', 'index.html'),
        ('Features', 'features.html'),
        ('Roles', 'roles.html'),
        ('Pricing', 'pricing.html'),
        ('Contact', 'contact.html'),
        ('Blog', 'blogs.html')
    ]
    
    html = ""
    for label, url in items:
        # Some existing pages had "active" or "navbar__link--active", we just standardize to "active"
        # as it was used in contact.html
        cls = "navbar__link active" if active_item == label else "navbar__link"
        html += f'          <a href="{url}" class="{cls}">{label}</a>\n'
        
    if is_mobile:
        html += '          <a href="#" class="btn btn--primary" onclick="openDemoModal(); return false;">Book a Demo</a>\n'
        
    return html.rstrip()

for file_path in html_files:
    file_name = os.path.basename(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace the navbar__links block
    desktop_pattern = r'(<div class="navbar__links">\s*).*?(</div>)'
    desktop_replacement = r'\g<1>' + get_links_html(file_name, False).replace('\\', '\\\\') + r'\n        \g<2>'
    content = re.sub(desktop_pattern, desktop_replacement, content, flags=re.DOTALL)
    
    # Replace the navbar__mobile-menu block
    mobile_pattern = r'(<div class="navbar__mobile-menu">\s*).*?(</div>)'
    # Note: For mobile menu, the original indent is 6 spaces.
    mobile_html = get_links_html(file_name, True)
    # Adjust indentation for mobile menu
    mobile_html = mobile_html.replace('          ', '      ')
    mobile_replacement = r'\g<1>' + mobile_html.replace('\\', '\\\\') + r'\n    \g<2>'
    content = re.sub(mobile_pattern, mobile_replacement, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navigation updated successfully in all HTML files.")
