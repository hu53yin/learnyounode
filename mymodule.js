'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (folder, ext, callback) => {
  ext = '.' + ext;

  fs.readdir(folder, (err, files) => {
    if (err) {
      return callback(err);
    }

    files = files.filter(file => path.extname(file) === ext);

    callback(null, files);
  });
};
