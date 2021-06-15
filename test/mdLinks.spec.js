 
//importar funciones de md-links
const mdLinks = require('../index.js');

//paths para testear
// let filePath = "archivoDos.md";
// let dirPath=;

// let options = ;

describe("probando función mdLinks", () => {
  //testeando H01 USUARIO INGRESA RUTA
  it("deberia ser una objeto", () => {
    expect(typeof mdLinks).toBe('object');
   
  });

  it("deberia retornar los links de una ruta que es un Directorio", () => {
    expect.assertions(1);
    console.log(expect.assertions(0));
    return mdLinks.mdLinks('C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos','undefined').then(res =>
      expect(res).toEqual(
        [
          {
            href: 'https://github.com/workshopper/learnyounode',
            text: 'learnyounode',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivo/archivo.md'
          },
          {
            href: 'https://github.com/workshopper/how-to-npm',
            text: 'how-to-npm',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivo/archivo.md'
          },
          {
            href: 'https://github.com/stevekane/promise-it-w.......ont-hurt',
            text: 'promise-it-wont-hurt',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivo/archivo.md'
          },
          {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivoCarpetaDos.md'
          },
          {
            href: 'https://nodejs.org/',
            text: 'Node.js',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivoCarpetaDos.md'
          },
          {
            href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
            text: 'md-links',
            file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivoCarpetaDos.md'
          }
        ]
      )
    );
  })
      console.log('es directorio');
      
  });


  it("deberia retornar que es un archivo con el path TESTE.md", () => {
    console.log('es archivo');
  });
  //testeando H02 ES UN ARCHIVO
  it("deberia retornar ERR se el archivo NO es .md", () => {
    console.log('no es archivo .md');
  });
  it("deberia retornar el archivo .md", () => {
    console.log('es archivo .md');
  });
  //testeando H03 LEE EL ARCHIVO Y RETORNA RUTA Y LINKS
  it("deberia retornar ERR se NO hay links retorna mensaje “no hay links”", () => {
    console.log('no es archivo .md');
  });
  it("deberia retornar se hay links retorna los links", () => {
    console.log('es archivo .md');
  });
  //testeando H04 VALIDATE
  it("deberia retornar OK para los links que estan bien en el archivo .md", () => {
    console.log('OK');
  });
  it("retornar FAIL para los links que estan rotos en el archivo .md", () => {
    console.log('FAIL');
  });
  //testeando H05 STATS
  it("deberia retornar cuantos links hay en total el archivo .md", () => {
    console.log("TOTAL");
  });
  it("deberia retornar cuantos links son únicos el archivo .md", () => {
    console.log('UNIQUE');
  });
