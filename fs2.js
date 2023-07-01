const fs = require('node:fs');
const dirPath = './';

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('There was an error reading directory:', err);
        return;
    }
    files.forEach((file) => {
        console.log(file);
    });
});