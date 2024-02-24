const express = require('express');
const app = express();
// import {requestLogger, errorHandler, authenticate} from './middlewares.js'
const middleware = require('./middlewares');
const {requestLogger, errorHandler, authenticate} = middleware;

app.use(requestLogger); // логгируем все запросы

app.get('/', (req, res) => {
    res.send('Главная страница');
});

// маршрут где используется middleware для аутентификации
app.get('/secure', authenticate, (req, res) => {
  res.send('Authenticated!');
});

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong');
  next(err);
});

app.use(errorHandler); //  обрабатываем ошибки

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
