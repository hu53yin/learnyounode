'use strict';

const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, dataList) => {
  if (err) {
    return console.log(err);
  }

  dataList.forEach(data => {
    console.log(data);
  });
});
