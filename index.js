const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const { resolve } = require("path");



// // //Para verificar si un archivo o carpeta existe utiliza el método stat del módulo fs:
const validateRouter = (router) => {
  return new Promise((resolve, rejects) => {
    fs.stat(router, function (err) {
      if (err == null) {
        resolve(true);
      } else if (err.code == "ENOENT") {
        resolve(false);
      } else {
        rejects(err); // ocurrió algún error
      }
    });
  });
};

const verifTypeRouter = (router) => {

    fs.lstat(router, (err, stats) => {
      if (stats.isFile()) {
        return router;
      }
      if (stats.isDirectory()) {
        return router;  //sincrono y directo
      }
      if (err) 
      rejects(err);
    });
  
};

 const fileRead = (router) => {
   return new Promise((resolve, rejects) =>{
    fs.readFile(router, 'utf-8', (error, archivo) => {
      if (error) {
        rejects (error);
      }
      resolve(archivo); //extraer md
    });
    
   })
  
};

  const verifExtencion = (router) => {
    return new Promise((resolve, rejects) => {
        const extencion= path.extname(router);
  if(extencion == '.md'){
    resolve(true)
  }else{
    rejects(error);
  }

    })

}
const detectarLinks = (arcchivo) => {
  const regexp =   '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
  return  archivo.matchAll(regexp);
}












const mdLinks = (router) => {
  validateRouter(router).then((valid) => {
    if (valid) {
      if (path.isAbsolute(router)) {
        verifTypeRouter(router).then((routerType) => {
          if (routerType) {
            verifExtencion(router).then((extMd)=>{
              if(extMd){
                fileRead(router).then((textArchivo) => {
                  if (textArchivo) {
                    detectarLinks()
                  }
                }) 
              }
            })
          } else {
            
          }
        
        });
      }
    
    } else {
    
    }
  });
}



module.exports = (router) => {
  mdLinks(path);
};