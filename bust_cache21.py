import os
import glob

html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('js/main.js?v=24', 'js/main.js?v=25')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {file}")
