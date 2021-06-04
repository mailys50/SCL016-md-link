
const fs = require("fs");
const path = require("path");
const readline = require('readline');
// const marked = require('marked');
const { inflateRawSync } = require("zlib");

//leer archivo
const getLinks = (router) => {
  
  const readInterface = readline.createInterface({
      input: fs.createReadStream(router),
      output: process.stdout,
      console: false
  });
  readInterface.on('line', function(line) {
    console.log(line);
    const regexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
    
    
     return  router.matchAll(regexp);

});

}


getLinks('./README1.md');

const detectarLinks = (archivo) => {
  const regexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
  return  archivo.matchAll(regexp);
}
console.log(detectarLinks('./README1.md'));


// // // //Para verificar si un archivo o carpeta existe utiliza el método stat del módulo fs:
// const validateRouter = (router) => {
//   return new Promise((resolve, rejects) => {
//     fs.stat(router, function (err) {
//       if (err == null) {
//         resolve(true);
//       } else if (err.code == "ENOENT") {
//         resolve(false);
//       } else {
//         rejects(err); // ocurrió algún error
//       }
//     });
//   });
// };

// const verifTypeRouter = (router) => {

//     fs.lstat(router, (err, stats) => {
//       if (stats.isFile()) {
//         return router;
//       }
//       if (stats.isDirectory()) {
//         return router;  //sincrono y directo
//       }
//       if (err) 
//       rejects(err);
//     });
  
// };

//  const fileRead = (router) => {
//    return new Promise((resolve, rejects) =>{
//     fs.readFile(router, 'utf-8', (error, archivo) => {
//       if (error) {
//         rejects (error);
//       }
//       resolve(archivo); //extraer md
//     });
    
//    })
  
// };

//   const verifExtencion = (router) => {
//     return new Promise((resolve, rejects) => {
//         const extencion= path.extname(router);
//   if(extencion == '.md'){
//     resolve(true)
//   }else{
//     rejects(error);
//   }

//     })

// }
// const detectarLinks = (arcchivo) => {
//   const regexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
//   return  archivo.matchAll(regexp);
// }

// const getLinks = (router) => {
//   const readInterface = readline.createInterface({
//       input: fs.createReadStream('/README.md'),
//       output: process.stdout,
//       console: false
//   });

// }


// module.exports = (router) => {
//   mdLinks(path);
// };

// //extraer links sin funcionar


// var extractLinks = (array) => {
//   console.log(array);
//   let linkArray = [];
//   linkArray.forEach((file) => {
//     const readFiles = fs.readFileSync(file, 'utf-8');
//     const renderer = new marked.Renderer();

//     renderer.link = (href, __, text) => {
//       linkArray.push({
//         href: href,
//         text: text.substring(0, 50),
//         file: file
//       });
//     };

//     marked(readFiles, {
//       renderer: renderer
//     });
//   });
//   return linkArray;
// };

//obtener url
// var url = window.location.href
// console.log(url)
// }