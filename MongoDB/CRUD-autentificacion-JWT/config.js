/*En este archivo, recueramos todos los datos que tenemos en el archivo .env y los exportamos
para poder usarlos en otros archivos
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- */

module.exports = {
    production: {
        db: process.env.MONGODB_URI,
        port: 3001,
        SECRET_TOKEN: process.env.SECRET_TOKEN,
        SECRET_REFRESH_TOKEN: process.env.SECRET_REFRESH_TOKEN,
        ClientIDGoogle: process.env.ClientIDGoogle,
        ClientSecretGoogle: process.env.ClientSecretGoogle
    },
    development: {
        db: process.env.MONGODB_URI,
        port: 3001,
        SECRET_TOKEN: process.env.SECRET_TOKEN,
        SECRET_REFRESH_TOKEN: process.env.SECRET_REFRESH_TOKEN,
        ClientIDGoogle: process.env.ClientIDGoogle,
        ClientSecretGoogle: process.env.ClientSecretGoogle
    }
}

/*------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
---------------------------------------------------------------------------------------------  */