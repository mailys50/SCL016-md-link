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
        } else if (statsFile.isDirectory()) {
          
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












//impotar librerias de NODE
const fs = require("fs");
const path = require("path");

const indexModule = {};

//Lee el contenido del archivo 
const fileRead = (pathAbsolute) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(pathAbsolute, "utf-8", (error, data) => {
      if (error) {
        rejects(error);
      }
      resolve(data);
    });
  });
};

// Encontrar los links del archivo
const getLinks = (file) => {
  //expresion regular para encontra los links
  const reg = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  return file.matchAll(reg);
};

//Recibe ruta y verfica si es un archivo o directorio
const mdlinks = (dirpath) => {
  return new Promise((resolve, rejects) => {
    fs.stat(dirpath, (err, stats) => {
      if (err) {
        console.log(err)
      }
      //Verfica si es un archivo
      if (stats.isFile()) {
        //traer contenido de los archivos
        fileRead(dirpath)
          .then((data) => {
            let links = [];
            let index = 0;
            //Recorre todos los links y  almacena los datos como un array de objetos
            for (const url of getLinks(data)) {
              const obj = {
                
                href: url[2],
                text: url[1],
                file: dirpath,
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
      } else if (stats.isDirectory()) {
        const files = fs.readdirSync(dirpath);
        // console.log(files);
      
      }

    });
  });
};

indexModule.mdlinks = mdlinks;
module.exports = indexModule;

// //without options
// if (!options.validate && !option.stats) {
//     mdLinks('${args[0]}',{validate: false}).then((linksArray)=> {
//         console.table(linksArray);
//     });
//     // opcion --validate
// }else if (options.validate && !options.stats) {
//     mdLinks('$ {args[0]}',{validate: true}).then((linksArray)=> {
//         console.table(linksArray); 
//     });
// // option stats 
    
// } else if (option.stats && !options.validate) {
//     mdLinks(`${args[0]}, {validate: true}`).then((linksArray) => {
//         const finalResume = resumeStatus(linksArray);
//         console.log (`total: ${finalResume.totalLinks} \nUnique: ${finalResume.uniqueLinks}`);
//         // le falta
//     })
    
// } else if (option.stats && options.validate) {
//     mdLinks(`${args[0]}, {validate: true}`).then((linksArray) => {
//         const finalResume = resumeStatus(linksArray)
//         console.log (`total: ${finalResume.totalLinks} \nUnique: ${finalResume.uniqueLinks}\nBroken: ${finalResume.brokenLinks}`);
    
// })
// };
    


// //FUNCION MADRE CON LAS OPCIONES DE MDLINKS

// const mdlinks = (path, options) => {
//     return new Promise((resolve, reject) => {
//       if (options.validate === true && options.stats === true) {
//         isFileOrDirectory(path).then(res => {
//           statsValidateOption(res)
//             .then(res => {
//               resolve(res);
//               //console.log("V+S:", res)
//               console.log(chalk.bold.white("VALIDATE + STATS RESULT:" + "\n"));
//             });
//         });
//       } else if (options.validate === false && options.stats === true) {
//         isFileOrDirectory(path).then(res => {
//           statsOption(res).then(res => {
//             resolve(res);
//             console.log(chalk.bold.white("STATS LINKS RESULT:" + "\n"));
//             //console.log("STATS", res);
//           });
//         });
//       } else if (options.validate === true && options.stats === false) {
//         isFileOrDirectory(path).then(links => {
//           validateOption(links).then(res => {
//             resolve(res);
//             console.log(chalk.bold.white("VALIDATE LINKS RESULT:" + "\n"));
//             //console.log("VALIDATE:", res);
//           });
//         });
//       } else if (options.validate === false && options.stats === false) {
//         isFileOrDirectory(path)
//           .then(res => {
//             resolve(res);
//             console.log(chalk.bold.white("LINKS SEARCH RESULT:" + "\n"));
//             //console.log("SIN OPCION:", res);
//           })
//           .catch(err => {
//             reject(err);
//             console.log(chalk.bold.red("Path not valid, please choose another one and choose an option: No option | --validate or --v | --stats or --s  | --validate --stats or --v --s"));
//           });
//       } else {
//         reject(
//           console.log("ruta no valida")
//         );
//       }
//     });
//   };
  




