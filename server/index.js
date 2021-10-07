require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app =  express();

app.use(express.json());
app.use(cors());

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('database connected...')
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))