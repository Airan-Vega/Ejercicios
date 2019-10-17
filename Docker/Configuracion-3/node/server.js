const express = require('express');
const app = express();
const cors=require('cors');
const port=process.env.PORT;
console.log(port);

app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
 res.send({message: 'Server listen on port'+ port})
})
app.listen(port);