'use strict';

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', callback);

function callback(err, data) {
  if (err) {
    return console.log(err);
  }

  const str = data.toString();
  const count = str.split('\n');

  console.log(count.length - 1);
}
