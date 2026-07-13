import http.server
import socketserver
import urllib.request
import urllib.error
import os

PORT = 8000
API_TARGET = "https://app.hrvico.com"

class ProxyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/back/api'):
            target_url = API_TARGET + self.path
            req = urllib.request.Request(target_url)
            req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36')
            
            try:
                response = urllib.request.urlopen(req)
                self.send_response(response.status)
                for key, value in response.getheaders():
                    if key.lower() not in ['access-control-allow-origin', 'transfer-encoding']:
                        self.send_header(key, value)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(response.read())
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_error(500, str(e))
            return
            
        # Extensionless URL handling for local dev
        path_parts = self.path.split('?', 1)
        base_path = path_parts[0]
        query_string = '?' + path_parts[1] if len(path_parts) > 1 else ''
        
        if base_path != '/' and '.' not in base_path:
            potential_file = base_path.lstrip('/') + '.html'
            if os.path.exists(potential_file):
                self.path = base_path + '.html' + query_string
                
        return super().do_GET()

with socketserver.TCPServer(("", PORT), ProxyHandler) as httpd:
    print(f"Serving at port {PORT} with API proxy")
    httpd.serve_forever()
