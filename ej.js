const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const chalk = require("chalk");

// let totalLinks = 0;
// let uniqueLinks = 0;
// let brokenLinks = 0;
const mdLinks = require('./index.js');
// //Validar los links con sus status

// validateOption('READMEPRUEBA.md').then((result) => {
//   console.log("resultadi" + result);
//   }).catch((err) => {
//     console.log("errar"+ err.code);
//   });

// const statsValidateOption = (links) => {
//   return new Promise((resolve, reject) => {
//     validateOption(links)
//       .then((link) => {
//         let allLinks = link.map((link) => link.href);
//         let statusLinks = links.map((link) => link.response);
//         let totalLinks = allLinks.length;
//         uniqueLinks = [...new Set(allLinks)];
//         brokenLinks += statusLinks.toString().match(/FAIL/g);
//         let statsResult = {
//           total: totalLinks,
//           unique: uniqueLinks.length,
//           broken: brokenLinks.length,
//         };
//         if (brokenLinks === 0) {
//           statsResult = {
//             total: totalLinks,
//             unique: uniqueLinks.length,
//             broken: 0,
//           };
//           resolve(statsResult);
//         } else {
//           brokenLinks = statusLinks.toString().match(/FAIL/g).length;
//           let statsResult = {
//             total: totalLinks,
//             unique: uniqueLinks.length,
//             broken: brokenLinks,
//           };
//           resolve(statsResult);
//         }
//       })
//       .catch((err) => {
//         reject(err);
//         console.log(chalk.bold.red("ERROR VALIDATE STATS OPTION. TRY AGAIN"));
//       });
//   });
//  };


  
//   mdLinks.mdLinks(router, options)
//     .then((file) => {
//             console.log("esto es file"+ file);
//        })
//     .catch(err => console.log('esto es error', err));

//     console-log(mdLinks.mdLinks('C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md', "--validate"));



// const fileRead = (router) => {
//   return new Promise((resolve, rejects) => {
//     fs.readFile(router, "utf-8", (error, file) => {
//       if (error) {
//         rejects(error);
//       }
//       resolve(file);
//     });
//   });
// };




// fileRead('READMEPRUEBA').then((result) => {
// console.log(result);
// }).catch((err) => {
//   console.log(err.code);
// // });

let file='[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular.';
const extractLinksContent = (file) => {
  console.log("file" + file);
  const regexp = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  //realizar la busqueda de links
  return file.matchAll(regexp);
  
};
console.log("soy file.math"+ file.matchAll(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g))
 console.log(extractLinksContent('[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular.'));



