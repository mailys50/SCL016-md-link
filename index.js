//impotar librerias de NODE
const fs = require("fs");
const path = require("path");
const readline = require("readline");
// const marked = require('marked');

const fileRead = (pathAbsolute) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(pathAbsolute, "utf-8", (error, archivo) => {
      if (error) {
        rejects(error);
      }
      resolve(archivo);
    });
  });
};

// //leer contenido del archivo linea por linea
const extraerLinksDelContenido = (file) => {
  // console.log(file);
  const regexp = /(https?:\/\/[^\s)]+)[^,). ]/g;
  //realizar la busqueda de links
  return file.matchAll(regexp);
};

//leer Archivo
const leerRuta = (router) => {
  return new Promise((resolve, rejects) => {
    fs.stat(router, (err) => {
      if (err == null) {
        // console.log("ruta valida");
        const pathAbsolute = path.resolve(router).replace(/\\/g, "/"); //es relativo convertir en absolutos
        const statsFile = fs.statSync(pathAbsolute); //Ulilizamos stats para saber si es archivo o carpeta

        //si es archivo
        if (statsFile.isFile()) {
          const exist = statsFile.isFile(pathAbsolute);
          if (exist) {
            //traer contenido de los archivos
            fileRead(pathAbsolute)
              .then((resultFileRead) => {
                let links = [];
                let index = 0;
                //extraer links y guardar en constante <url
                for (const url of extraerLinksDelContenido(resultFileRead)) {
                  const obj = {
                    //atributos del objeto
                    href: url[0],
                    text: resultFileRead,
                    file: pathAbsolute,
                  };
                  //llenar array con el obj
                  links[index] = obj;
                  index++;
                }
                resolve(links);
              })
              .catch((err) => {
                rejects(err);
              });
          }
        } else if (statsFile.isDirectory()) {
          const files = fs.readdirSync(pathAbsolute);
          // console.log(files);
          files.forEach((arch) => {
            //recursividad
            resolve(leerRuta(router + "/" + arch));
          });
        }
      }
    });
  });
};

leerRuta("./proyectos/carpetaProyecto")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {}); //leerRuta("./proyectos/carpetaProyecto");

var mdLinks = function mdLinks(path, options) {};
