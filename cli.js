const mdLinks = require('./index.js');
const pathLib = require('path')
// para empezar desde la segunda posición del array
const path2 = process.argv[2];
const path3 =process.argv[3];
const path4 =process.argv[4];
const router = pathLib.resolve(path2);

const options = {
    validate: false,
    stats: false
};


if (
    (path3 === "--validate" && path4 === "--stats") ||
    (path3 === "--stats" && path4 === "--validate")
) {
    options.validate = true;
    options.stats = true;
} else if (path3 === "--validate") {
    options.validate = true;
    options.stats = false;
} else if (path3 === "--stats") {
    options.validate = false;
    options.stats = true;
} else {
    options.validate = false;
    options.stats = false;
}


mdLinks.mdLinks(router, options)
    .then((file) => {
            console.log(file);
       })
    .catch(err => console.log('error', err));
