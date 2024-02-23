const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
