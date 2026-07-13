import glob
import re

old_addr = "Office A-125, Sector 16A, Noida, Uttar Pradesh, India"
new_addr = "NX-ONE, Tech Zone IV, Plot No 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318"

old_url = "https://maps.google.com/?q=Office+A-125,+Sector+16A,+Noida,+Uttar+Pradesh,+India"
new_url = "https://maps.google.com/?q=NX-ONE,+Tech+Zone+IV,+Plot+No+17,+Tech+Zone+IV,+Amrapali+Dream+Valley,+Greater+Noida,+Uttar+Pradesh+201318"

files = glob.glob('c:\\Users\\Dell\\Documents\\hrms_website\\*.html')
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Standard replacement
    content = content.replace(old_addr, new_addr)
    content = content.replace(old_url, new_url)

    # Fix nested <a> tags that were accidentally created in contact.html / about.html
    nested_a = f'<a href="{new_url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;"><a href="{new_url}" class="footer__link" target="_blank" rel="noopener noreferrer">{new_addr}</a></a>'
    fixed_a = f'<a href="{new_url}" class="footer__link" target="_blank" rel="noopener noreferrer">{new_addr}</a>'
    content = content.replace(nested_a, fixed_a)
    
    nested_a2 = f'<a href="{new_url}" target="_blank" rel="noopener noreferrer"><a href="{new_url}" class="footer__link" target="_blank" rel="noopener noreferrer">{new_addr}</a></a>'
    content = content.replace(nested_a2, fixed_a)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
