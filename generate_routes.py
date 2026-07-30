import os
import urllib.request
import json
import shutil

API_URL = "https://app.hrvico.com/back/api/superadmin/blog?limit=100"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BLOG_DETAILS_DIR = os.path.join(BASE_DIR, 'blog-details')
TEMPLATE_PATH = os.path.join(BASE_DIR, 'blog-detail.html')

def main():
    print(f"Fetching blogs from {API_URL}...")
    req = urllib.request.Request(API_URL, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            blogs = data.get('data', [])
    except Exception as e:
        print(f"Failed to fetch API: {e}")
        return

    if not os.path.exists(BLOG_DETAILS_DIR):
        os.makedirs(BLOG_DETAILS_DIR)
        
    # Read the template html once
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        html_content = f.read()

    print(f"Generating static routes for {len(blogs)} blogs...")
    for blog in blogs:
        slug = blog.get('slug')
        if not slug:
            continue
            
        blog_dir = os.path.join(BLOG_DETAILS_DIR, slug)
        if not os.path.exists(blog_dir):
            os.makedirs(blog_dir)
            
        index_path = os.path.join(blog_dir, 'index.html')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"Created {index_path}")
        
    print("Done generating routes!")

if __name__ == '__main__':
    main()
