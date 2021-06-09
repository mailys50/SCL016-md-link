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