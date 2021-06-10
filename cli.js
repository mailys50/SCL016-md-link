// const mdLinks = require('./index.js');
// console.log(process.argv);
// const path = process.argv[2];
// mdLinks(path)
// .then(file => console.log(file))
// .catch(error => console.log( 'error', error));
// ______________________________________________

const mdlinks = require('./index.js');
const pathLib = require('path')
const path = process.argv[2];
console.log(path);

let dirPath = pathLib.resolve(path);
console.log(dirPath);

mdlinks.leerRuta(dirPath)
    .then(file => {
            console.log(file);
       })
    .catch(err => console.log('error', err));
