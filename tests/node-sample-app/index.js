const http = require('http');
const fs = require('fs');

const PORT = 8888;
const HOST = 'host.docker.internal';
const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
});

server.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Server ready at http://localhost:${PORT}/`);
