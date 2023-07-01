const path = require('node:path'); //path is now an object with several useful methods eg the parse() method

let pathObject = path.parse(__filename);
let dirName = path.parse(__dirname);

console.log(pathObject);
console.log('okay');
console.log(dirName);