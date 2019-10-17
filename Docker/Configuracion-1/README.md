# docker-configuration-1
En este ejercicio vamos a realizar la configuracion 1 de la diapositiva 07.01.AWS II - Buenas prácticas del bloque de Introducción a sistemas y despliegue clásico de servidores. En esta configuración lo que hacemos es levantar un servidor nginx y al conectarnos a el mostrar el contenido de un html.

Con la terminal vamos al directorio donde esta nuestro dockerfile y ejecutamos los siguientes comandos:

Comando para construir el contenedor de docker:

docker build -t "nombre del contenedor" "."

Comando para arrancar el contenedor y crear la imagen:

docker run -p "puerto mi maquina:puerto imagen" "nombre del contenedor"
