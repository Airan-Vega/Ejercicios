/*-------En este archivo lo que hacemos es crear las rutas que se usaran en la url. ----------------
----------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/


/*Router() lo que hace es crearme un objeto de tipo router, para que yo pueda modificarlo despues */
const router = require('express').Router();

/*Lo que hacemos aqui es ejecutar el require de lo que hemos exportado del archivo 
controller.js. */
const songController = require('./song/song.controller');
const userController = require('./user/user.controller');
const refreshToken = require('../../helpers/jwt');
const auth = require('../../midlewares/auth');

/*Al objeto router le ponemos un metodo post (porque creamos datos) y le decimos que cuando 
pongamos la route: /createUser, me ejecute la funcion createUser que esta en el archivo controller */
/*La url que usaremos en el postman es localhost:3001/api/test */

/**
 * Songs
 */
/*Al añadirle el auth.authAll, le estamos añadiendo el midleware que se encuentra en el archivo auth. Lo que hace 
este midleware es que todos los usuarios autentificado puedan acceder a las urls de los endpoint, es decir,
que solo los usuarios autentificados podran crear, ver, actualizar y eliminar canciones */
router.post('/songs', auth.authAll,songController.createSong);
router.get('/songs', songController.readSong);
router.patch('/songs/:id', auth.authAll,songController.updateSong);
router.delete('/songs/:id', auth.authAll,songController.deleteSong);


/**
 * Auth
 */
router.post('/sign', userController.signUp);
router.post('/login', userController.logIn);
router.post('/refresh-token', refreshToken.refreshToken);


/**
 * Auth Google
 */
router.post('/auth/google', auth.authGoogle, userController.loginOrSignUpWithGoogle);


/*Exportamos todo lo que se ha guardado en la constante router, para que se pueda usar en el archivo
index.js */
module.exports = router;