const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Главная страница');
});

app.get('/about', (req, res) => {
  res.send('Страница о нас');
});

app.get('/contact', (req, res) => {
  res.send('Это страница контактов. Свяжитесь с нами по email@example.com');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
