// // module.exports = () => {
// //   // ...
// // };
//leer archivo de un directorio de forma sincrona
const fs = require("fs");
//funcion asincrona recibe un collback
const fileReadDirect = (router) => {
  fs.readdir(router, (error, files) => {
    if (error) {
      throw error;
    }
    console.log(files);
  });
};
fileReadDirect("./");

//leer archivo
const fileRead = (router, encode) => {
  fs.readFile(router, encode, (error, archivo) => {
    if (error) {
      throw error;
    }
    console.log(archivo);
  });
  console.log("contenido del archivo...");
};

fileRead("./proyectos/proyectoUno.txt", "UTF-8");



// //Para verificar si un archivo o carpeta existe utiliza el método stat del módulo fs:

// var fs = require("fs");
const validateRouter = (router) =>{
fs.stat(router, function (err) {
  if (err == null) {
    console.log("ruta valida");
  } else if (err.code == "ENOENT") {
    console.log("la ruta no es valida");
  } else {
    console.log(err); // ocurrió algún error
  }
});
}
validateRouter("./proyectos/proyectoUno.txt");
validateRouter("./proyectos/proyectoU.txt");