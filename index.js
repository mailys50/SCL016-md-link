// const fs = require('fs');

// let absolutePath = path.resolve(ruta);

// //leer archivo
// const readTheFile = (ruta) =>{
// return new Promise ((resolve,rejects) => {
//     fs.readFile(ruta, 'utf8', (err, data) => {
//         if (err){
//           rejects(err);
//         } else{
//             resolve(data);

//         }

//         })
//     })
// }

// const extraerExtMd = (dir) => {
//   return new Promise ((resolve,rejects) => {
//   fs.readdir(dir, ( files))

//   console.log(files)
//   const listMd =files.filter(file => file.includes('.md'));
//   if (listMd.length == 0) {
//     rejects('no se encontro archivo .md');
//   }else{
//     resolve(listMd);
//   }
// });
// };

// //recursividad
// function factorial(n) {
//   if (n<=1) return 1;
//   return n* factorial(n-1);
// }

// extraerExtMd('./README.md')
// .then((resultado)=>{
//   console.log(resultado);
// })
// // const readline = require('readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // String.prototype.matchAll()
// module.exports = (ruta) => {
//    return readTheFile(ruta);
// };

const fs = require("fs");
const path = require("path");
const readline = require("readline");
// const marked = require('marked');

// //si es archivo
// let router = "./proyectos";
// const unArchivo = (router) => statsFile.isFile();
// const unDirectorio = (router) => statsFile.isDirectory();
// const pathAbsolute = (router) => path.resolve(router); //es relativo convertir en absolutos
// const statsFile = (router) => fs.statSync(pathAbsolute);

// //leer archivo linea por linea
const lecturaDeArchivosPorLinea = (router) => {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(router),
    output: process.stdout,
    console: false,
  });

//   //escuchar el 'line'evento
  readInterface.on("line", function (line) {
    const regexp = "^https?://[w-]+(.[w-]+)+[/#?]?.*$";
    return router.matchAll(regexp);
  });
};

// //leer Archivo
// const leerArchivos = (router) => {
//   fs.stat(router, (err) => {
//     if (err == null) {
//       console.log("ruta valida");
//       //Ulilizamos stats para saber si es archivo o carpeta
//       if (router == unArchivo()) {
//         const exist = statsFile.isFile(pathAbsolute);
//         if (exist) {
//           //es relativo convertir en absolutos
//           let pathAbsolute = path.resolve(router);
//           //Ulilizamos stats para saber si es archivo o carpeta
//           const statsFile = fs.statSync(pathAbsolute);
//           // console.log(pathAbsolute);
//           lecturaDeArchivosPorLinea(router);
//         } //si es carpeta
//       } else if (router == unDirectorio()) {
//         if (unDirectorio < 0) {
//           console.log(router);
//           let directorioRestante = leerArchivos - 1;
//           const files = fs.readdirSync(pathAbsolute);
          
//         }
//         console.log(leerArchivos);
//         if (files) {
//           fileRead(pathAbsolute);
//         }
//         else if(archivo<0) {
//           files.map((file) => {
//             leerArchivos(router + "/" + file);
//             console.log(files);
//           })
//         }
       
//       }
//       // lecturaDeArchivos(router);
//       fileRead(pathAbsolute);
//     }
//   });
// };

//leer Archivo
const leerArchivos = (router) => {
  fs.stat(router, (err) => {
    if (err == null) {
      console.log("ruta valida");
      const pathAbsolute = path.resolve(router); //es relativo convertir en absolutos
      const statsFile = fs.statSync(pathAbsolute); //Ulilizamos stats para saber si es archivo o carpeta

      //si es archivo
      if (statsFile.isFile()) {
        //console.log("statsFile", statsFile.isFile());
        const exist = statsFile.isFile(pathAbsolute);
        if (exist) {
          //es relativo convertir en absolutos
          const pathAbsolute = path.resolve(router);
          //Ulilizamos stats para saber si es archivo o carpeta
          const statsFile = fs.statSync(pathAbsolute);
          // console.log(pathAbsolute);
          lecturaDeArchivosPorLinea(router);

        } //si es carpeta
      } else if (statsFile.isDirectory()) {
        const files = fs.readdirSync(pathAbsolute);

        files.map((files) => {
          leerArchivos(router + "/" + files);
          console.log(files);
        });
      }
      // lecturaDeArchivos(router);
      // fileRead(pathAbsolute);
    } else if (err.code == "ENOENT") {
      console.log("la ruta no es valida");
    } else {
      console.log(err); // ocurrió algún error
    }
   });
};

leerArchivos("./proyectos");

var mdLinks = function mdLinks(path, options) {};

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

// //   const verifExtencion = (pathAbsolute) => {
// //     return new Promise((resolve, rejects) => {
// //         const extencion= path.extname(pathAbsolute);
// //   if(extencion == '.md'){
// //     resolve(true)
// //   }else{
// //     rejects(error);
// //   }

// //     })

// // }

// // const detectarLinks = (arcchivo) => {
// //   const regexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
// //   return  archivo.matchAll(regexp);
// // }

// // const lecturaDeArchivos = (router) => {
// //   const readInterface = readline.createInterface({
// //       input: fs.createReadStream('/README.md'),
// //       output: process.stdout,
// //       console: false
// //   });

// // }

// // module.exports = (router) => {
// //   mdLinks(path);
// // };

// // //extraer links sin funcionar

// // var extractLinks = (array) => {
// //   console.log(array);
// //   let linkArray = [];
// //   linkArray.forEach((file) => {
// //     const readFiles = fs.readFileSync(file, 'utf-8');
// //     const renderer = new marked.Renderer();

// //     renderer.link = (href, __, text) => {
// //       linkArray.push({
// //         href: href,
// //         text: text.substring(0, 50),
// //         file: file
// //       });
// //     };

// //     marked(readFiles, {
// //       renderer: renderer
// //     });
// //   });
// //   return linkArray;
// // };

// //obtener url
// // var url = window.location.href
// // console.log(url)
// // }

// // const detectarLinks = (archivo) => {
// //   const reguexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
// //   return  archivo.matchAll(reguexp);
// // }
// // console.log(detectarLinks('./proyectos'));
// // // // //Para verificar si un archivo o carpeta existe utiliza el método stat del módulo fs:
// // const validateRouter = (router) => {
// //   return new Promise((resolve, rejects) => {
// //     fs.stat(router, function (err) {
// //       if (err == null && router == path.isAbsolute(router)) {
// //         console.log("ruta valida");
// //     } else if (err.code == "ENOENT") {
// //       console.log("la ruta no es valida");
// //     }  else {
// //         rejects(err); // ocurrió algún error
// //       }
// //     });
// //   });
// // };

// //Sofi, solo con eso me funcionó myFile = path.resolve(myFile); para pasar a absoluta y no me salen dobles los /

// // myFile = path.resolve(myFile);
