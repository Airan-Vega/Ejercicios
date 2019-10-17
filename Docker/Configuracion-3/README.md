# docker-configuration-4

Ejercicio echo por compañeros de clase.

En este ejercicio vamos a realizar la configuracion 4 de la diapositiva 07.01.AWS II - Buenas prácticas del bloque de Introducción a sistemas y despliegue clásico de servidores. En esta configuración lo que hacemos es levantar un servidor nginx, conectar dicho servidor a un html, el html vuelve a generar la url de inicio y luego se hace una peticion a uno de los node que tenemos y nos devolvera un archivo JSON.

Con la terminal vamos al directorio donde esta nuestro docker-compose y ejecutamos los siguientes comandos:

Comando para construir el docker-compose: docker-compose build

Comando para levantar el docker-compose: docker-compose up
