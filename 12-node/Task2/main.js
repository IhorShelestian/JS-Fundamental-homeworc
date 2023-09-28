const personalmodule = require('./personalmodule');
const getMessage = personalmodule.getMessage;
const date = personalmodule.date;
const http = require('http');
const os = require('os');
const port = 8000;
const ip = 'localhost';

let username = os.userInfo().username;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'html');
    res.end(`<p>Date of request: ${personalmodule.date}</p>
            <p>${personalmodule.getMessage(username)}</p>`);

}).listen(port, ip);

server.listen(port, ip, () => {
    console.log('Server is runing...');
});