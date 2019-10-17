const api = require('./api');

const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',api);

app.listen(3000, err =>{
  if(err) return console.log(err);
  console.log('server ok')
});