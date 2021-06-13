//impotar librerias de NODE
const fs = require("fs");
const path = require("path");
const fileHound = require("fileHound");
// const readline = require("readline");
const indexModule = {};
// const marked = require('marked');

const getMdFiles = (file) => {
  let ext = path.extname(file).toLowerCase();
  return ext === ".md";
};

const fileRead = (router) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(router, "utf-8", (error, file) => {
      if (error) {
        rejects(error);
      }
      resolve(file);
    });
  });
};

// //leer contenido del archivo linea por linea
const extractLinksContent = (file) => {
  // console.log(file);
  const regexp = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  //realizar la busqueda de links
  return file.matchAll(regexp);
};

//leer Archivo
const fileReading = (router) => {
  return new Promise((resolve, rejects) => {
    fs.stat(router, (err, stats) => {
      if (err == null) {
        // console.log("ruta valida");
        const pathAbsolute = path.resolve(router).replace(/\\/g, "/"); //es relativo convertir en absolutos
        const statsFile = fs.statSync(pathAbsolute); //Ulilizamos stats para saber si es archivo o carpeta

        //si es archivo
        if (statsFile.isFile()) {
          if (getMdFiles(router)) {
            fileRead(router)
              .then((resultFileRead) => {
                let links = [];
                let index = 0;

                //extraer links y guardar en constante <url
                for (const url of extractLinksContent(resultFileRead)) {
                  const obj = {
                    //atributos del objeto
                    href: url[2],
                    text: url[1],
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

          // }
        }else if (statsFile.isDirectory()) {
          
          const files = fs.readdirSync(pathAbsolute);
          let directoryContent = [];
          //i el segundo parametro del foearch representa el indice
          files.forEach((arch, i) => {
            directoryContent[i] = fileReading(router + "/" + arch);

            //recursividad
          });
          resolve(directoryContent);
        }
      }
    });
  });
};

// //Validar los links con sus status
// const validateOption = links => {
//   //console.log("LINKS:", links);
//   return new Promise((resolve, reject) => {
//     let statusLinks = links.map(link => {
//       // links.map(link => {
//       return fetch(link.href).then(res => {
//         if (res.status === 200) {
//           link.status = res.status;
//           link.response = "O.K.";
//           //console.log("LINK O.K.", link.response);
//         } else if(res.status === 404) {
//           link.status = res.status;
//           link.response = res.statusText;
//           link.response = "FAIL";
//           //console.log("LINK FAIL", link.response);
//         }
//       });
//     });
//     Promise.all(statusLinks).then(res => {
//       resolve(links);
//       //console.log("VALIDATE:", links);
//     }).catch(err => {
//       links.status = null;
//       links.response = "FAIL";
//       resolve(links);
//       //console.log("catch:", links);
//     });
//   });
// };

// //Recibe ruta y verfica si es un archivo o directorio
// const mdlinks = (dirPath, options) => {
//   return new Promise((resolve, rejects) => {
//     if (options.validate === false && options.stats === false) {
//       FileOrDirectory(dirPath)
//         .then(resp => {
//           resolve(resp)
//         })
//         .catch(err => {
//           rejects(err)
//         })
//     }else if(options.validate===true && options.stats === false){
//       FileOrDirectory(dirPath).then(links => {
//         validateOption(links).then(res => {
//           resolve(res);
//         });
//       });

//     }

//   });
// };


indexModule.fileReading = fileReading;
module.exports = indexModule;
