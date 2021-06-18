//impotar librerias de NODE
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const chalk = require("chalk");

let totalLinks = 0;
let uniqueLinks = 0;
let brokenLinks = 0;

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
  const regexp = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  //realizar la busqueda de links
  return file.matchAll(regexp);
};

//leer Archivo
const fileReading = (router) => {
  return new Promise((resolve, rejects) => {
    fs.stat(router, (err, stats) => {
      if (err == null) {
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
          } else {
            resolve(0);
          }
        } else if (statsFile.isDirectory()) {
          const files = fs.readdirSync(pathAbsolute);
          let directoryContent = [];
          files.forEach((arch, i) => {
            directoryContent[i] = fileReading(router + "/" + arch);
          });
          Promise.all(directoryContent)
            .then((resultado) => {
              return resultado.reduce((acc, val) => acc.concat(val), []);
            })

            .then((resu) => {
              resolve(resu.filter((val) => typeof val === "object"));
            })
            .catch((error) => {
              recject(error);
            });
        }
      }
    });
  });
};

//estadisticasTOTAL y UNIQUES
const statsOption = (links) => {
  return new Promise((resolve) => {
    let allLinks = links.map((link) => link.href);
    totalLinks += allLinks.length;
    uniqueLinks += [...new Set(allLinks)].length;
    let statsResult = {
      total: totalLinks,
      unique: uniqueLinks,
    };
    resolve(statsResult);
  });
};

// //Validar los links con sus status
const validateOption = (links) => {
  return new Promise((resolve) => {
    let statusLinks = links.map((link) => {
      return fetch(link.href).then((res) => {
        if (res.status === 200) {
          link.status = res.status;
          link.response = "O.K.";
        } else if (res.status === 404) {
          link.status = res.status;
          link.response = res.statusText;
          link.response = "FAIL";
        }
      });
    });
    Promise.all(statusLinks)
      .then((res) => {
        resolve(links);
      })
      .catch((err) => {
        links.status = null;
        links.response = "FAIL";
        resolve(links);
      });
  });
};

const statsValidateOption = (links) => {
  return new Promise((resolve, reject) => {
    validateOption(links)
      .then((link) => {
        let allLinks = link.map((link) => link.href);
        let statusLinks = links.map((link) => link.response);
        let totalLinks = allLinks.length;
        uniqueLinks = [...new Set(allLinks)];
        brokenLinks += statusLinks.toString().match(/FAIL/g);
        let statsResult = {
          total: totalLinks,
          unique: uniqueLinks.length,
          broken: brokenLinks.length,
        };
        if (brokenLinks === 0) {
          statsResult = {
            total: totalLinks,
            unique: uniqueLinks.length,
            broken: 0,
          };
          resolve(statsResult);
        } else {
          brokenLinks = statusLinks.toString().match(/FAIL/g).length;
          let statsResult = {
            total: totalLinks,
            unique: uniqueLinks.length,
            broken: brokenLinks,
          };
          resolve(statsResult);
        }
      })
      .catch((err) => {
        reject(err);
        console.log(chalk.bold.red("ERROR VALIDATE STATS OPTION. TRY AGAIN"));
      });
  });
};

const mdLinks = (router, options) => {
  return new Promise((resolve, rejects) => {
    if (options.validate === false && options.stats === false) {
      fileReading(router)
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          rejects(err);
        });
    } else if (options.validate === false && options.stats === true) {
      fileReading(router).then((links) => {
        statsOption(links).then((res) => {
          resolve(res);
        });
      });
    } else if (options.validate === true && options.stats === false) {
      fileReading(router).then((links) => {
        validateOption(links).then((res) => {
          resolve(res);
        });
      });
    } else if (options.validate === true && options.stats === true) {
      fileReading(router).then((res) => {
        statsValidateOption(res).then((res) => {
          resolve(res);
        });
      });
    }
  });
};

module.exports = {
  mdLinks,
  getMdFiles,
  fileRead,
  fileReading,
  extractLinksContent,
  statsOption,
  validateOption,
  statsValidateOption,
};
