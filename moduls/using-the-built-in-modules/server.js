const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('Request received!');
//   res.end('Hello, World!');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('Request received!');

  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
