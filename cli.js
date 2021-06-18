const mdLinks = require("./index.js");
const pathLib = require("path");
// para empezar desde la segunda posición del array
const path2 = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const router = pathLib.resolve(path2);

const options = {
  validate: false,
  stats: false,
};

if (
  (option1 === "--validate" && option2 === "--stats") ||
  (option1 === "--stats" && option2 === "--validate")
) {
  options.validate = true;
  options.stats = true;
} else if (option1 === "--validate") {
  options.validate = true;
  options.stats = false;
} else if (option1 === "--stats") {
  options.validate = false;
  options.stats = true;
} else {
  options.validate = false;
  options.stats = false;
}

mdLinks
  .mdLinks(router, options)
  .then((file) => {
    console.log(file);
  })
  .catch((err) => console.log("error", err));
