# Markdown Links

Esta libreria fue creada usando Node.js,  función de leer y analizar archivos en formato Markdown desde el input de un archivo hasta un directorio. Extrae links de los archivos y los verifica el status de los links y saca estadísticas cómo total de links, links que no funcionan y unicos.

## Indice
* [1.Plan de Acción](#1-Plan-de-Acción)
* [2.Instalacion de Node.js](#1-Diagrama-de-flujo)
* [2.Diagrama de flujo](#1-Diagrama-de-flujo)
***
## 2. Plan de Acción
### paso 1:
* planificación en git 
* descargar Node.js
* analisis del proyecto
* crear un diagrama de flujo del recorrido de debería hacer el programa para cumplir con los objetivos de este, y asi identificar las funciones necesarias.
* buscar y probar las funciones.
* implementar test
* Unir organizar funciones, crear función md-links

## 2. Descarga e instalacón de NODE.js
Instalación de Node.js
La instalación de Node.js es tan sencilla como ir a la página web del proyecto, [Descargar](https://nodejs.org/en/) el instalador para nuestro sistema operativo y ejecutar este.
Una vez finalizada la instalación de Node.js se puede abrir una terminal, donde puedes:
 comprobar la versión instalada escribiendo en la terminal el comando node --version. También se puede comprobar la versión de npm, el gestor de paquetes que utiliza Node.js, escribiendo el comando npm --version. Al igual que el caso anterior debería aparecer el número de versión. 

## 2. Diagrama de flujo
<img src= "./img/diagrama de flujo.png" alt="titulo" width="200"/>

## Guía de Uso e Instalación
### Instalación
Con el comando npm i @mailys50/md-links podemos instalar directamente.

La publicación de md-linksen npm.
Docs oficiales de npm install acá.
npm i @mailys50/md-links

### Como usar
En el archivo JS:

const mdlinks = require("md-links");
Cómo llamar a libreria desde la terminal:
--validate
node cli.js nombre del archivo o carpeta 