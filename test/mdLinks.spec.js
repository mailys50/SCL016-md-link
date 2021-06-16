//importar funciones de md-links
const {mdLinks, getMdFiles, fileRead,fileReading, extractLinksContent,statsOption } = require('../index.js');
const fs = require("fs");
const path = require("path");

describe("probando función mdLinks", () => {
  //testeando H01 USUARIO INGRESA RUTA
  it("deberia ser una function", () => {
    expect(typeof mdLinks).toBe('function');
   
  });

  it("deberia retornar links de los archivos .md", () => {

    return fileReading('./test/pruebas/prueba.md').then(data => {
      console.log(data);
      expect(data[0].href).toBe('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg');
    });

  });
  it("statsOption deberia retornar total", () => {

    return statsOption('./test/pruebas/prueba.md').then(data => {
      
      expect(data[0].total).toBe(1);
      console.log(data);
    });

  });

  it("deberia retornar lins de los archivos .md", () => {

    return fileReading('./test/pruebas/prueba.md').then(data => {
      console.log(data);
      expect(data[0].href).toBe('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg');
    });

  });
  it('prueba getMdFile  prueba que si es un archivo .md ', () => {
  
    expect(getMdFiles('./test/pruebas/prueba.md')).toBe(true);
  });
  it('prueba getMdFile que no es un archivo md ', () => {
  
    expect(getMdFiles('./snuevo.txt')).toBe(false);
  });
  
  
 
// describe('fileRead', () => {
//   it('Debería agregar total y,', () => {
//   return statsOption().then((statsResult) => {
//     console.log(statsOption())
//   expect(statsResult._data.total).toBe('comprar pan')
//   })
//   });
//   })

// // describe('delteNote', () => {
// // it('Debería poder eliminar una nota con id: 5828258218', () => {
// // return deleteNote('5828258218').then((comment) => {
// // expect(comment).toBe(undefined)
// // })
// // });
// // })



// const firebasemock = require('firebase-mock');
// const mockauth = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
// mockauth.autoFlush();

// global.firebase = firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   () => null,
//   () => mockauth,
//   () => mockfirestore
// );



// import { signIn } from '../src/lib/index.js';

// describe('probando signIn', () => {
//   it('Debería poder iniciar sesion', () => {
//     return signIn('juan@gmail.com', '123456').then((user) => {
//         expect(user.email).toBe('juan@gmail.com')
//       })
//   });
// })







//   test('statsOption prepara un estado valido', () => {
//     expect.hasAssertions();
//     statsOption(state => {
//       console.log(stat);
//       expect(validateState(stat)).toBeTruthy();
//     });
//     return waitOnState();
//   });

//   test("deberia retornar los links de una ruta de un Directorio", () => {
//     expect.
//     return mdLinks('./test/pruebas/prueba.md','undefined').then(res =>
//       expect(res).toEqual(
//         [
          
//           {
//             href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//             text: 'md-links',
//             file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivoCarpetaDos.md'
//           }
//         ]
//       )
//     );
//   })
    
      
 });

