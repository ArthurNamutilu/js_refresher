const http = require('http');

const server = http.createServer((req, res) => { //server => instance
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
});

server.listen(3000);

console.log('Listening to port 3000..');