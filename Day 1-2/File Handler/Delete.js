var fs = require('fs');

fs.unlink('First Write.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});