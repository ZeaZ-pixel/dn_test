const {Router} = require('express');
const db = require('../config/db');
const router  = Router();

router.get('/', (req, res) => {
  try {
    const query = `SELECT * FROM products`;
    db.query(query, (err, result) => {
      if(err) {
        throw err;
      }
      res.status(200).json(result)
    })
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так' })
  }
});

router.get('/:id', (req, res) => {
  try {
    const query = `SELECT * FROM products WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
      if(err) {
        throw err;
      }
      res.status(200).json(result)
    })
  }catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так'})
  }
})

module.exports = router;