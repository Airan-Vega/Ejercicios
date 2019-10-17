/*En este archivo, llamamos a los midleware que vayamos a usar y los exportamos para poder 
usarlos en otro lado.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- */
const express = require('express');
const app = express();
const cors = require('cors');
/*Traemos las rutas */
const routerV1 = require('./api/v1.0/router');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * Routing API V1.0
 */
app.use('/api/v1/', routerV1);


module.exports = app

/*--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- */