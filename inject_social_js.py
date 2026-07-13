import os

file_path = 'c:\\Users\\Dell\\Documents\\hrms_website\\js\\main.js'

js_code = """
  // Set Social Links
  const shareX = document.getElementById('share-x');
  const shareLinkedin = document.getElementById('share-linkedin');
  const shareFacebook = document.getElementById('share-facebook');
  const shareWhatsapp = document.getElementById('share-whatsapp');

  const shareXTop = document.getElementById('share-x-top');
  const shareLinkedinTop = document.getElementById('share-linkedin-top');
  const shareFacebookTop = document.getElementById('share-facebook-top');
  const shareWhatsappTop = document.getElementById('share-whatsapp-top');

  function updateSocialLinks(blogTitle) {
      const currentUrl = encodeURIComponent(window.location.href);
      const encodedTitle = encodeURIComponent(blogTitle);

      const xUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`;
      const liUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodedTitle}`;
      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
      const waUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${currentUrl}`;

      if(shareX) shareX.href = xUrl;
      if(shareLinkedin) shareLinkedin.href = liUrl;
      if(shareFacebook) shareFacebook.href = fbUrl;
      if(shareWhatsapp) shareWhatsapp.href = waUrl;

      if(shareXTop) shareXTop.href = xUrl;
      if(shareLinkedinTop) shareLinkedinTop.href = liUrl;
      if(shareFacebookTop) shareFacebookTop.href = fbUrl;
      if(shareWhatsappTop) shareWhatsappTop.href = waUrl;
  }
"""

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will inject this inside initBlogDetail() where we set titleEl.textContent = blog.title;
target = 'titleEl.textContent = blog.title;'
if target in content:
    new_content = content.replace(target, target + '\n' + js_code + '\n          updateSocialLinks(blog.title);\n')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated main.js with social links")
else:
    print("Could not find target string in main.js")
