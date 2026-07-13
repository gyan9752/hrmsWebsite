import os

directory = r'c:\Users\Dell\Documents\hrms_website'

target1 = '<a href="#" class="btn btn--primary btn--small" onclick="openDemoModal(); return false;">Book a Demo</a>'
replacement1 = '<a href="pricing.html" class="btn btn--secondary btn--small">Start Free</a>\n          <a href="#" class="btn btn--primary btn--small" onclick="openDemoModal(); return false;">Book a Demo</a>'

target2 = '<a href="#" class="btn btn--primary" onclick="openDemoModal(); return false;">Book a Demo</a>'
replacement2 = '<a href="pricing.html" class="btn btn--secondary">Start Free</a>\n      <a href="#" class="btn btn--primary" onclick="openDemoModal(); return false;">Book a Demo</a>'

files_updated = 0
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We need to make sure we don't accidentally replace the mobile one twice if they are similar,
        # but target1 and target2 are distinct enough (btn--small vs no btn--small).
        
        # Some files might have slightly different spacing or we might have already updated them.
        # Check if replacement1 is already there to avoid duplicates
        if 'Start Free</a>' not in content:
            new_content = content.replace(target1, replacement1)
            new_content = new_content.replace(target2, replacement2)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filename}')
                files_updated += 1

print(f'Total HTML files updated with "Start Free" button: {files_updated}')
