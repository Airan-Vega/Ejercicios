/*-------En este archivo lo que hacemos es crear el controlador, que ejecuta la logica. ------------
----------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/

/*Requerimos el modelo de songs */
const SONGS = require('./song.model')


/*Exportamos todas las funciones que hemos creado, para poder usarlas despues en el archivo 
router */
module.exports = {
    /*Por EC6 de javascript un objeto se puede poner asi si la clave y el valor tienen el 
    mismo nombre*/
    createSong,
    readSong,
    updateSong,
    deleteSong 
}

/*Hacemos el Create */
function createSong(req, res){
    /*Creo un objeto con todos los datos del modelo de las canciones */
    let songs= {
        title: req.body.title,
        autor: req.body.autor,
        video: req.body.video,
        createdAt: Date.now()
    }
    /*Guardo el objeto songs dentro el objeto de tipo SONGS */
    let song = new SONGS(songs);

    /*Guardo los datos en la base de datos */
    song.save()
    .then(response => {
        return res.json(response);
    })
    .catch(error =>{
        return res.status(400).send(error);
    })
    
}

/*Hacemos el Read */
function readSong(req, res){

    SONGS.find()
    .then(response => {
        return res.json(response);
    })
    .catch(error => {
        return res.status(400).send(error);
    })  
}


/*Hacemo el Update */
function updateSong(req, res){

    SONGS.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
    .then(response =>{
        return res.json(response);
    })
    .catch(error => {
        return res.status(400).send(error);
    })
    
}

/*Hacemos el Delete */
function deleteSong(req, res){
    
    SONGS.findByIdAndDelete(req.params.id)
    .then(response =>{
        return res.json(response);
    })
    .catch(error => {
        return res.status(400).send(error);
    })
}
