const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>404 Not Found</h1>');
    } else {
      let contentType = 'text/html';
      if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.jpg')) {
        contentType = 'image/jpeg';
      }

      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
