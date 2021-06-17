//importar funciones de md-links
const { getMdFiles, fileRead,fileReading, extractLinksContent,statsOption } = require('../index.js');
const fs = require("fs");
const path = require("path");

describe("probando funciones fileReading", () => {
 
  it("deberia retornar links de los archivos .md", () => {

    return fileReading('./test/pruebas/prueba.md').then(data => {

      expect(data[0].text).toBe('md-links');
    });

  });
  

  it("deberia retornar lins de los archivos .md", () => {

    return fileReading('./test/pruebas/prueba.md').then(data => {
      
      expect(data[0].href).toBe('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg');
    });

  });
  
  
 
});

describe("probando funciones getMdFile", () => {

it('prueba getMdFile  prueba que si es un archivo .md ', () => {
  
    expect(getMdFiles('./test/pruebas/prueba.md')).toBe(true);
  });
  it('prueba getMdFile que no es un archivo md ', () => {
  
    expect(getMdFiles('./snuevo.txt')).toBe(false);
  });
  
});

describe("probando funciones statsOption  total y unique", () => {

  it("statsOption deberia retornar total", () => {

    return statsOption([
        {
          href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
          text: 'md-links',
          file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md'
        }
      ]).then(data => {
      console.log(data);
      expect(data.unique).toBe(1);
      
    });

  });

  it("statsOption deberia retornar unique", () => {

    return statsOption([
        {
          href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
          text: 'md-links',
          file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md'
        }
      ]).then(data => {
      console.log(data);
      expect(data.total).toBe(2);
      
    });

  });
});