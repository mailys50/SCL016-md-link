# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Criterios de aceptación adicionales](#4-criterios-de-aceptación-adicionales)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Recomendaciones generales](#6-recomendaciones-generales)
* [7. Recursos y temas relacionados](#7-recursos-y-temas-relacionados)
* [8. Checklist](#8-checklist)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.









![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

[leer el flujo de archivos línea por línea](https://stackabuse.com/reading-a-file-line-by-line-in-node-js)
Como es un módulo no nativo, debemos asegurarnos de haber inicializado el proyecto npm de manera adecuada npm inity luego instalarlo:

[markdown-to-html](https://www.npmjs.com/package/markdown-to-html)
$ npm install --save line-reader
$ npm i markdown-to-html -g

Para obtener la URL actual, aprovecharemos el Locationobjeto y recuperaremos su hrefpropiedad:

var url = window.location.href
console.log(url)


Algunas líneas típicas de shebang:

#!/bin/sh- Ejecute el archivo utilizando el shell Bourne , o un shell compatible, que se supone que está en el directorio / bin.
#!/bin/bash- Ejecuta el archivo usando el shell Bash
#!/usr/bin/env python3- Ejecutar con un intérprete de Python , usando la ruta de búsqueda del programa env para encontrarlo
#!/bin/false- No hacer nada, pero devolver un estado de salida distinto de cero , lo que indica falla. Se utiliza para evitar la ejecución independiente de un archivo de script destinado a ejecutarse en un contexto específico, como por el .comando de sh / bash, sourcede csh / tcsh o como un archivo .profile, .cshrc o .login.
Las líneas Shebang pueden incluir opciones específicas que se pasan al intérprete. Sin embargo, las implementaciones varían en el comportamiento de análisis de las opciones; para la portabilidad, solo se debe especificar una opción sin ningún espacio en blanco incrustado. A continuación, se encuentran más pautas de portabilidad.



Cree el archivo que se cargará cuando su módulo sea requerido por otra aplicación
En el archivo, agregue una función como propiedad del exportsobjeto. Esto hará que la función esté disponible para otro código:

exportaciones.printMsg = function () {
  console.log ("Este es un mensaje del paquete de demostración");
}
Prueba tu módulo
Publique su paquete en npm:

Para paquetes privados y paquetes sin ámbito , use npm publish.
Para paquetes públicos con ámbito , usenpm publish --access public
En la línea de comando, cree un nuevo directorio de prueba fuera del directorio de su proyecto.

directorio de prueba mkdir
Cambie al nuevo directorio:

cd / ruta / a / directorio-de-prueba
En el directorio de prueba, instale su módulo:

npm install <your-module-name>
En el directorio de prueba, cree un test.jsarchivo que requiera su módulo y llame a su módulo como método.

En la línea de comando, ejecute node test.js. Debería aparecer el mensaje enviado a console.log.

Recursos
[Hacer ejecutable el archivo de línea de comandos de JavaScript](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)


En la mayoría de los casos, no se permite la ejecución de archivos nuevos. Como estamos creando un script de línea de comandos de NodeJS que se ejecutará , necesitamos modificar sus permisos de archivo. En un sistema * nix, puede hacerlo de la siguiente manera:
chmod + x cli.js           # Hacer que el archivo sea ejecutable
Ahora, agreguemos algo de código a nuestro archivo de secuencia de comandos. Crearemos un Hello World simple que también imprimirá los argumentos proporcionados.