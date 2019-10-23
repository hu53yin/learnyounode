'use strict';

const http = require('http');

const parseTime = time => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
};

const unixtime = time => {
  return {
    unixtime: time.getTime()
  };
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404);
    return res.end('You can send only GET method');
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  const urlInfo = new URL(req.url, 'http://127.0.0.1:' + process.argv[2]);
  const time = new Date(urlInfo.searchParams.get('iso'));

  if (urlInfo.pathname === '/api/parsetime') {
    return res.end(JSON.stringify(parseTime(time)));
  } else if (urlInfo.pathname === '/api/unixtime') {
    return res.end(JSON.stringify(unixtime(time)));
  }

  res.end('invalid request');
});

server.on('error', err => {
  console.error(err);
});

server.listen(Number(process.argv[2]));
