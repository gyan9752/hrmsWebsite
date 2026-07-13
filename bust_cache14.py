import glob

html_files = glob.glob('c:\\Users\\Dell\\Documents\\hrms_website\\*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'href="css/blog-listing.css?v=4"' in content:
        new_content = content.replace('href="css/blog-listing.css?v=4"', 'href="css/blog-listing.css?v=5"')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
