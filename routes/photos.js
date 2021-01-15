'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// パラメーターの文字列を表示　XSS対応
// res.writeHead はエラーとなりました。
router.get('/:id', (req, res, next) => {
  res.header('Content-Type', 'text/plain; charset=utf-8');
  // res.render('photos', { title: 'PhotosPage', id: req.params.id });　うまく動かず。
  res.send(`Some photos: ${req.params.id}`);
});

module.exports = router;