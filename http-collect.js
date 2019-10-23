'use strict';

const http = require('http');
const bl = require('bl');

http
  .get(process.argv[2], res => {
    res.pipe(
      bl((err, data) => {
        if (err) {
          return console.error(err);
        }

        data = data.toString();
        console.log(data.length);
        console.log(data);
      })
    );

    res.on('error', console.error);
  })
  .on('error', console.error);
