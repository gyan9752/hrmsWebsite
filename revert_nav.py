import os

directory = r'c:\Users\Dell\Documents\hrms_website'

target1 = '<a href="pricing.html" class="btn btn--secondary btn--small">Start Free</a>\n          '
replacement1 = ''

target2 = '<a href="pricing.html" class="btn btn--secondary">Start Free</a>\n      '
replacement2 = ''

files_updated = 0
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if target1 in content or target2 in content:
            new_content = content.replace(target1, replacement1)
            new_content = new_content.replace(target2, replacement2)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Reverted {filename}')
            files_updated += 1

print(f'Total HTML files reverted: {files_updated}')
