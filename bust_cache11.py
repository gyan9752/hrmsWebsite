import glob

html_files = glob.glob('c:\\Users\\Dell\\Documents\\hrms_website\\*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'href="css/blog-listing.css"' in content:
        new_content = content.replace('href="css/blog-listing.css"', 'href="css/blog-listing.css?v=2"')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    elif 'href="css/blog-listing.css?v=' in content:
        import re
        new_content = re.sub(r'href="css/blog-listing\.css\?v=\d+"', 'href="css/blog-listing.css?v=3"', content)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
