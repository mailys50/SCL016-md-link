const {mdLinks } = require('../index.js');
const fs = require("fs");
const path = require("path");
describe("probando función mdLinks", () => {
   //testeando H01 USUARIO INGRESA RUTA
   it("deberia ser una function", () => {
    expect(typeof mdLinks).toBe('function');
   
  });

  // test("deberia retornar los links de una ruta de un Directorio", () => {

  //   return mdLinks('./test/pruebas/prueba.md','undefined').then(res =>
  //     expect(res).toEqual(
  //       [
          
  //         {
  //           href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
  //           text: 'md-links',
  //           file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivoCarpetaDos.md'
  //         }
  //       ]
  //     )
  //   );
  // })
    
      
 });

