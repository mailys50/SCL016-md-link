const { mdLinks } = require("../index.js");
const fs = require("fs");
const path = require("path");
jest.setTimeout(20000);

describe("probando función mdLinks", () => {
  //testeando H01 USUARIO INGRESA RUTA
  it("deberia ser una function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("deberia retornar los links de una ruta de un Directorio", () => {
    mdLinks("./test/prueba", { validate: false, stats: false }).then((res) =>
      expect(res).toEqual([
        {
          href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          text: "md-links",
          file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
        },
      ])
    );
  });
  it("deberia retornar valores de href,text,file,status,response de un directorio", () => {
    mdLinks("./test/prueba", { validate: true, stats: false }).then((res) =>
      expect(res).toEqual([
        {
          href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          text: "md-links",
          file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
          status: 200,
          response: "O.K.",
        },
      ])
    );
  });
  it("deberia retornar los totale, unique y broken de un directorio ", () => {
    mdLinks("./test/prueba", { validate: true, stats: true }).then((res) =>
      expect(res).toEqual({ total: 1, unique: 1, broken: 0 })
    );
  });
  it("deberia retornar el total de los links y los unique de una ruta de un Directorio", () => {
    mdLinks("./test/prueba.prueba.md", { validate: false, stats: true }).then(
      (res) => expect(res).toEqual({ total: 1, unique: 1 })
    );
  });
  it("deberia retornar los links de una ruta de un archivo", () => {
    mdLinks("./test/prueba.prueba.md", { validate: false, stats: false }).then(
      (res) =>
        expect(res).toEqual([
          {
            href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
            text: "md-links",
            file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
          },
        ])
    );
  });
  it("deberia retornar valores de href,text,file,status,response de un directorio", () => {
    mdLinks("./test/prueba.prueba.md", { validate: true, stats: false }).then(
      (res) =>
        expect(res).toEqual([
          {
            href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
            text: "md-links",
            file: "C:/Users/Juan Becerra/Desktop/MD_LINKS/SCL016-md-link/test/pruebas/prueba.md",
            status: 200,
            response: "O.K.",
          },
        ])
    );
  });
  it("deberia retornar los totales, unique y broken de un archivo ", () => {
    mdLinks("./test/prueba.prueba.md", { validate: true, stats: true }).then(
      (res) => expect(res).toEqual({ total: 1, unique: 1, broken: 0 })
    );
  });
  it("deberia retornar el total, unique de un archivo ", () => {
    mdLinks("./test/prueba.prueba.md", { validate: false, stats: true }).then(
      (res) => expect(res).toEqual({ total: 1, unique: 1 })
    );
  });
});
