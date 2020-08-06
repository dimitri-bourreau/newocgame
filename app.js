const express = require('express');
const path = require('path');

const { checkWidthAndHeight } = require('./helpers/in-url-board-game-dimensions');

const app = express();
const port = process.env.port || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/:width?/:height?', (req, res, next) => {
  if (
    typeof req.params.width !== 'undefined' &&
    typeof req.params.height !== 'undefined'
  ) {
    const { width, height } = req.params;
    const valuesPasses = checkWidthAndHeight(width, height);
    if (valuesPasses) return res.render('pages/index', { width, height });
    return next();
  }
  return res.render('pages/index');
});

app.use(function (req, res) {
  return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

