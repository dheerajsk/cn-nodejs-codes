const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const content = fs.readFileSync('index.html')
    res.setHeader('Content-Type', 'text/html');
    res.end(content.toString());
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});