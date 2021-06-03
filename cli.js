const mdLinks = require('./index.js');
console.log(process.argv);
const path = process.argv[2];
mdLinks(path)
.then(file => console.log(file))
.catch(error => console.log( 'error', error));
