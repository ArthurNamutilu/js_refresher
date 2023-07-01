const operatingSys = require('node:os');

let totalMemory = operatingSys.totalmem();
let freeMemory = operatingSys.freemem();
let osHomeDir = operatingSys.homedir();
let osHostName = operatingSys.hostname();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log(osHostName);
console.log(osHomeDir);