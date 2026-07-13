import urllib.request

req = urllib.request.Request('https://app.hrvico.com/back/api/superadmin/blog', method='OPTIONS')
req.add_header('Origin', 'http://localhost:8000')
req.add_header('Access-Control-Request-Method', 'GET')

try:
    response = urllib.request.urlopen(req)
    print("OPTIONS status code:", response.status)
    print("Headers:", response.headers)
except Exception as e:
    print("Error:", e)
