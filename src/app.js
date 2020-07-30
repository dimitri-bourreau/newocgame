const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(function (req, res) {
  return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
