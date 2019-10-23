'use strict';

const fs = require('fs');

const filePath = process.argv[2];

const buf = fs.readFileSync(filePath);

const str = buf.toString();
const count = str.split('\n');

console.log(count.length - 1);
