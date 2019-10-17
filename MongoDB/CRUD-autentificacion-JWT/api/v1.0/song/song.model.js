/*En este archivo lo que hacemos es crear el modelo que conecta con la base de datos de mongo db.
----------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/

/*Instalamos la libreria mongoose de mongo db (npm i mongoose) y la requerimos. Lo que hacemos
es crear un objeto de tipo mongoose */
const mongoose = require('mongoose');

/*Aqui lo que estamos haciendo es crear un esquema */
/*Con mongoose.Schema creamos los atributos que va a tener la tabla de mi base de datos */
var songSchema = mongoose.Schema({

    /*Ponemos los atributos de la tabla songs y le damos validaciones a cada atributo*/

    title: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    createdAt: Number,

});


/*Aqui lo que estamos haciendo es crear un modelo */
/*Introducimos el songSchema dentro de la tabla songs.
song debe ser en singular ya que mongo db te lo pone y busca en plural */
var SONGS = mongoose.model('songs', songSchema);


/*Exportamos el modelo songs*/
module.exports = SONGS;