const http = require('http');
const os = require('os');
const path = require('path');
const port = 5000;
const ip = 'localhost';

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>System information</h1>
                    <p>Current user name: ${os.userInfo().username}</p>
                    <p>OS type: ${os.type()}</p>
                    <p>System work time: ${os.uptime()} minutes</p>
                    <p>Current work directory: ${path.dirname(__filename)}</p>
                    <p>Server file name: ${path.basename(__filename)}</p>`);
            break;
        default:
            break;
    }
});

server.listen(port, ip, () => {
    console.log('Server is runing...');
});