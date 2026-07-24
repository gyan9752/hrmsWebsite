import os
import re

dir_path = r'c:\Users\Dell\Documents\hrms_website'
index_path = os.path.join(dir_path, 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    index_html = f.read()

# Regular expressions to extract the sections and their comments
features_regex = re.compile(r'(\s*<!--[^>]*FEATURE PILLARS[^>]*-->\s*<section class="section section--alt features" id="features">.*?</section>)', re.DOTALL)
roles_regex = re.compile(r'(\s*<!--[^>]*ROLE SWITCHER[^>]*-->\s*<section class="section role-switcher" id="roles">.*?</section>)', re.DOTALL)

# Find them
features_match = features_regex.search(index_html)
roles_match = roles_regex.search(index_html)

if not features_match or not roles_match:
    print("Could not find sections using Regex. Try another pattern.")
    # let's fallback to manual splitting
    pass
else:
    features_block = features_match.group(1)
    roles_block = roles_match.group(1)

    # For features.html, we want to replace all <section> elements between nav and footer with just the features block.
    # Actually, a simpler way: copy index_html, but remove all sections we don't want.
    # What sections exist? hero, social-proof, pain-points, dashboard-preview, how-it-works, testimonials, pricing(commented out), faq.
    
    # Let's find everything from the end of </nav> to the start of <footer class="footer"> or <!-- FOOTER -->
    nav_end = index_html.find('</nav>') + 6
    footer_start = index_html.find('<!-- ═══════════════════════════════════════\n       FOOTER')
    if footer_start == -1:
        footer_start = index_html.find('<footer class="footer">')

    header_part = index_html[:nav_end]
    footer_part = index_html[footer_start:]

    features_html_content = header_part + features_block + "\n" + footer_part
    roles_html_content = header_part + roles_block + "\n" + footer_part
    
    # For index.html, remove features and roles
    new_index_html = index_html.replace(features_block, '').replace(roles_block, '')

    # Write them out
    with open(os.path.join(dir_path, 'features.html'), 'w', encoding='utf-8') as f:
        f.write(features_html_content)
        
    with open(os.path.join(dir_path, 'roles.html'), 'w', encoding='utf-8') as f:
        f.write(roles_html_content)

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(new_index_html)

    print("Successfully created features.html and roles.html and updated index.html")

# Now update navigation in all HTML files
import glob
html_files = glob.glob(os.path.join(dir_path, '*.html'))

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace href="#features" and href="index.html#features" with href="features.html"
    content = content.replace('href="#features"', 'href="features.html"')
    content = content.replace('href="index.html#features"', 'href="features.html"')
    
    # Replace href="#roles" and href="index.html#roles" with href="roles.html"
    content = content.replace('href="#roles"', 'href="roles.html"')
    content = content.replace('href="index.html#roles"', 'href="roles.html"')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated links in all HTML files.")
