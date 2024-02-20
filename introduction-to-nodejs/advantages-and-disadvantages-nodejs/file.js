
const axios = require('axios');

const start = Date.now();
const makeRequest = async () => {
  try {
    for (let i = 1; i <= 10; i++) {
      const response = await axios.get('http://example.com');
      console.log(`Request ${i} status: ${response.status} `, Date.now()-start);
    }
  } catch (error) {
    console.error(error);
  }
};

makeRequest();

// в видео к этому заданию создают http сервер, но как по мне лучше демонстрируется эффективность 
// при множестве запросов при помощи axios, в консоле видна скорость обработки запросов, есть раличные
// библиотеки, которые используют многопоточку например crypto, также можно продемонстрировать
// эффективность при помощи простого веб сервера (ниже) и отправить множество запросов при помощи
// например setTimeout

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
