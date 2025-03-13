const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://192.168.0.101:3001'
  }));

const db = new sqlite3.Database('./feedback.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Подключено к базе данных SQLite.');
});

app.get('/feedback', (req, res) => {
  db.all('SELECT * FROM feedback', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при извлечении данных' });
    }
    res.json(rows);
  });
});

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Закрыто соединение с базой данных.');
    process.exit(0);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}/`);
});