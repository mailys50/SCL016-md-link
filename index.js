// module.exports = () => {
//   // ...
// };
//leer archivo de un directorio de forma sincrona
const fs = require ('fs');
//funcion asincrona recibe un collback
const read = fs.readdir('./', (error, files) => {
  if (error) {
    throw error;
  }
  // process.stdout.write(file.toString());
  console.log(files);

//leer archivo
var archivo = fs.readFile('./proyectos/proyectoUno.txt', 'UTF-8', (error, archivo) => {
  // const read = fs.readdir('./', (error, files) => {
    if (error) {
      throw error;
    }
    // process.stdout.write(file.toString());
    console.log(archivo);
  });  
  console.log('contenido del archivo...');
});  
  
  


    