const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});

// это простой http сервер на nodejs. Он определяет два маршрута для корневой странице
// и about 

// может показаться, что flask намного проще, чем node и в принципе так и есть)
// не только за счёт декораторов, их можно и в node юзать, если накатить nest.js
// просто flask не создан для больших и сложных проектов в отличае от node и 
// того же django. Ну а в целом синтаксис другой, но структра кода похожа ибо разные
// технологии реализуют одну задачу 