import os

directory = r'c:\Users\Dell\Documents\hrms_website'
target = '<script defer src="js/main.js"></script>'
replacement = '<script defer src="js/main.js?v=2"></script>'

files_updated = 0
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if target in content:
            new_content = content.replace(target, replacement)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            files_updated += 1

print(f'Updated {files_updated} files.')
