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
const regex = /(https?:\/\/[^\s)]+)[^,). ]/g;
let dirPath = pathLib.resolve(path);
console.log(dirPath);
let data = '';





mdlinks.fileOrDir(dirPath)
    .then(file => {
        data = file.match(regex)
        console.log(data.length);
        return console.log(data);
    })
    .catch(err => console.log('error', err));
