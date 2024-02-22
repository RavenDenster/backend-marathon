const express = require('express');
const app = express();
const port = 3000;

// root route
app.get('/', (req, res) => {
    res.send('Добро пожаловать на главную страницу!');
});

// about route
app.get('/about', (req, res) => {
    res.send('Страница о нас');
});

// contact route
app.get('/contact', (req, res) => {
    res.send('Страница контакты');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});