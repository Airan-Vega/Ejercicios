/*-------En este archivo lo que hacemos es crear el controlador, que ejecuta la logica. ------------
----------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/


/*Exportamos todas las funciones que hemos creado, para poder usarlas despues en el archivo 
router */
module.exports = {
    /*Por EC6 de javascript un objeto se puede poner asi si la clave y el valor tienen el 
    mismo nombre*/
   
    getOne

    /*Tambien podriamos haberlo puesto asi si la clave y el valor lo queremos con distintos nombres */
    //a: getOne
}

/*Ir a buscar un tweet concreto, usando su id. */
function getOne(req, res) {
    var db = {
        hora:Date.now()
    }
    return res.json(db);
}