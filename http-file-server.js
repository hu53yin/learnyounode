'use strict';

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  const stream = fs.createReadStream(process.argv[3]);

  stream.pipe(res);
});

server.listen(Number(process.argv[2]));
