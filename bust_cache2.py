import os
import glob

html_files = glob.glob('c:\\Users\\Dell\\Documents\\hrms_website\\*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'js/main.js?v=2' in content:
        new_content = content.replace('js/main.js?v=2', 'js/main.js?v=3')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    elif 'js/main.js' in content and 'js/main.js?v=' not in content:
        new_content = content.replace('js/main.js', 'js/main.js?v=3')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
