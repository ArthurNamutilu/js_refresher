const fs = require('node:fs');

//let myFiles = fs.readdirSync('./');


fs.readdir('./', function (err, files) {
    if (err) console.log('The errror :', err);
    else {
        files.forEach(file => {
            console.log(file);
        });
    }
})

//console.log(myFiles);
//console.log(asyncFiles);
