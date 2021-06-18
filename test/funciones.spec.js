//importar funciones de md-links
const {
  getMdFiles,
  fileRead,
  fileReading,
  extractLinksContent,validateOption,statsValidateOption,
  statsOption,
} = require("../index.js");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const chalk = require("chalk");

jest.setTimeout(20000)



describe("probando funciones fileReading", () => {
  it("deberia retornar los texto de los archivos .md", () => {
    return fileReading("./test/pruebas/prueba.md").then((data) => {
      expect(data[0].text).toBe("md-links");
    });
  });

  it("deberia retornar lins de los archivos .md", () => {
    return fileReading("./test/pruebas/prueba.md").then((data) => {
      expect(data[0].href).toBe(
        "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg"
      );
    });
  });
  it("deberia retornar la ruta  del archivo.md donde se obtuvieron los links", () => {
    return fileReading("./test/pruebas/prueba.md").then((data) => {
      expect(data[0].file).toBe(
        "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md"
      );
    });
  });
});

describe("probando funciones getMdFile", () => {
  it("prueba getMdFile  prueba que si es un archivo .md ", () => {
    expect(getMdFiles("./test/pruebas/prueba.md")).toBe(true);
  });
  it("prueba getMdFile que no es un archivo md ", () => {
    expect(getMdFiles("./snuevo.txt")).toBe(false);
  });
});

describe("probando funciones statsOption", () => {
  it("statsOption deberia retornar total links de un archivo.md", () => {
    return statsOption([
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      },
    ]).then((data) => {
      expect(data.unique).toBe(1);
    });
  });

  it("statsOption deberia retornar total unique de un archivo.md", () => {
    return statsOption([
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      },
    ]).then((data) => {
      expect(data.total).toBe(2);
    });
  });
});

describe("probando funciones validateOption", () => {
  it("validateOption deberia retornar los links de los archivos md", () => {
    return validateOption([
      
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      }
      
    ]).then((data) => {
      expect(data[0].href).toBe('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg');
    });
  });
  it("validateOption deberia retornar los links", () => {
    return validateOption([
      
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      }
      
    ]).then((data) => {
      expect(data[0].text).toBe('md-links');
    });
  });
  it("validateOption deberia retornar los links", () => {
    return validateOption([
      
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      }
      
    ]).then((data) => {
      expect(data[0].file).toBe('C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md');
    });
  });
  it("validateOption deberia retornar los links", () => {
    return validateOption([
      
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      }
      
    ]).then((data) => {
      expect(data[0].status).toBe(200);
    });
  });
  it("validateOption deberia retornar los links", () => {
    return validateOption([
      
      {
        href: 'https://github.com/stevekane/promise-it-w.......ont-hurt',
        text: 'promise-it-wont-hurt',
        file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/proyectos/archivo/archivo.md'
      }
      
    ]).then((data) => {
      console.log(data);
      expect(data[0].status).toBe(404);
    });
  });
  it("validateOption deberia retornar el status", () => {
    return validateOption([
      
      {
        href: 'https://developers.googlecom/v8/.......',
        text: 'motor de JavaScript V8 de Chrome',
        file: 'C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/prueba2.md'
      }
      
    ]).then((data) => {
      
      expect(data[0].status).toBe(undefined);
    });
  });


  it("validateOption deberia retornar error", () => {
    return validateOption('./READMEPrueba').then((result) => {}).catch((err) => {
      expect(err.code).toBe(undefined);
      });
  })
  it("validateOption deberia retornar los links", () => {
    return validateOption([
      
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
      }
      
    ]).then((data) => {
      
      expect(data[0].response).toBe('O.K.');
    });
    
  });
  describe("probando funciones statsOption", () => {
    it("statsOption deberia retornar total", () => {
      return statsValidateOption([
        {
          href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          text: "md-links",
          file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
        },
      ]).then((data) => {
        expect(data.unique).toBe(1);
      });
    });
  
    it("statsOption deberia retornar unique", () => {
      return statsValidateOption([
        {
          href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          text: "md-links",
          file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
        },
      ]).then((data) => {
        expect(data.total).toBe(1);
      });
    });
    it("statsOption deberia retornar unique", () => {
      return statsValidateOption([
        {
          href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          text: "md-links",
          file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
        },
      ]).then((data) => {
        expect(data.broken).toBe(0);
      });
    });
  });
  
});

 describe("probando funciones fileRead", () => {
  it("fileRead deberia retornar contenido de", () => {
    return fileRead('./test/prueba3.md').then((data) => {
      console.log(data);
      expect(data).toBe('[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular.');
    });
  });

  it("fileRead deberia retornar error", () => {
    return fileRead('./READMEPrueba').then((result) => {}).catch((err) => {
      expect(err.code).toBe('ENOENT');

      });
  });
});

describe("probando funciones extractLinksContent", () => {
  it("probando funciones extractLinksContente", () => {
   
      expect(extractLinksContent("[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular.")).toBe([{RegExp, String, }]);
    });
  });

// describe("probando funciones extractLinksConten", () => {
// it("prueba  de extractLinksContent  ", () => {
//   expect(extractLinksContent("[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular.")).toBe( {});
// });
// });