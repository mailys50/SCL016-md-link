[
    {
      "href":"https://www.google.com",
      "text":"Google",
      "file":"README.MD"
    },
    {	
      "href":"https://www.Wikipedia.com",
      "text":"Wikipedia",
      "file":"README.MD"
    }
    ]
    
  
  
  
  const path= require ("path");
   
  const detectarLinks = (archivo) => {
      path = process.argv[2];
      const reguexp =   /(https?:\/\/[^\s)]+)[^,). ]/g;
     return  archivo.matchAll(reguexp);
      
    }
  
   
  
  console.log(detectarLinks('./README.md'));
  
  
  
  
   // let data='';
      // mdLinks(path)
      // .then(file => {
      //     data =file.match(regex)
      //     console.log(data.length);
      //     return console.log(data);
      // })
  
  
  
  
  
  
  
      // const fs = require('fs');
  
  // let absolutePath = path.resolve(ruta);
  
  //leer archivo
  
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
  
  // //leer archivo linea por linea
  const lecturaDeArchivosPorLinea = (file) => {
    // console.log(file);
    const regexp = /(https?:\/\/[^\s)]+)[^,). ]/g;
  
    return file.matchAll(regexp);
  };
  
  //leer Archivo
  function leerRuta(router) {
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
              fileRead(pathAbsolute)
                .then((result) => {
                  let links=[];
                  let index=0;
                  for (const url of lecturaDeArchivosPorLinea(result)) {
                    
                    const obj = {
                      href: url[0],
                      text: result,
                      file: pathAbsolute,
                    };
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
            files.map((arch) => {
              resolve(leerRuta(router + "/" + arch));
            });
            // lecturaDeArchivos(router);
            // fileRead(pathAbsolute);
          }
          // else if (err.code == "ENOENT") {
          //   console.log("la ruta no es valida");
          // } else {
          //   console.log(err); // ocurrió algún error
          // }
        }
      });
    });
  }
  // console.log(fileRead('C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/carpetaProyecto/segundaCarpeta/carpetaDos.md'));
  leerRuta("./proyectos/carpetaProyecto")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {}); //leerRuta("./proyectos/carpetaProyecto");
  // leerRuta("./proyectos/carpetaProyecto").then((result) => {
  //   console.log(result);
  // }).catch((err) => {
  //   console.log(err);
  // });
  
  var mdLinks = function mdLinks(path, options) {};
  
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
  