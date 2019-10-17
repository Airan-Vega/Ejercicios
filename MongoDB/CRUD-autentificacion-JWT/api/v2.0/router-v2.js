/*-------En este archivo lo que hacemos es crear las rutas que se usaran en la url. ----------------
----------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/


/*Router() lo que hace es crearme un objeto de tipo router, para que yo pueda modificarlo despues */
const router = require('express').Router();

/*Lo que hacemos aqui es ejecutar el require de lo que hemos exportado del archivo 
controller.js. */
const controller = require('./controller-v2');

/*Al objeto router le ponemos un metodo post (porque creamos datos) y le decimos que cuando 
pongamos la route: /createUser, me ejecute la funcion createUser que esta en el archivo controller */
/*La url que usaremos en el postman es localhost:3000/api/test */

router.get('/test-v2', controller.getOne);




/*Exportamos todo lo que se ha guardado en la constante router, para que se pueda usar en el archivo
index.js */
module.exports = router;