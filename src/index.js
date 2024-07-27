const http = require('http')

const users = require('./mocks/users')

const server = http.createServer((request, response) => {
    console.log(`request method ${request.method} | endpoint ${request.url}`);
    
    if (request.url == '/users' && request.method == 'GET') {
    
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }
});

server.listen(3000, () => console.log('server started on http://localhost:3000'));