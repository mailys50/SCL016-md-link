//impotar librerias de NODE
const fs = require("fs");
const path = require("path");
// const readline = require("readline");
const indexModule = {};
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
  const regexp =/(https?:\/\/[^\s)]+)[^,). ]/g;

  //realizar la busqueda de links
  return file.matchAll(regexp);
};
const extraerTextLinks = (file) => {
  // console.log(file);
  const regexptext = /\[([^\]]+)]/g;

  //realizar la busqueda de links
  return file.matchAll(regexptext);
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
                // let texts =[];
                //extraer links y guardar en constante <url
                for (const url of extraerLinksDelContenido(resultFileRead)) {
                  for (const text of extraerTextLinks(resultFileRead)) {
                    const obj = {
                      //atributos del objeto
                      href: url[0],
                      text: text[0],
                      file: pathAbsolute,
                    };
                    //llenar array con el obj
                    links[index] = obj;
                    index++;
                  }
                }
                // console.log(links);
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


indexModule.fileRead = fileRead;
indexModule.extraerLinksDelContenido = extraerLinksDelContenido;
indexModule.leerRuta = leerRuta;
module.exports = indexModule;
