var fs = require('fs');

fs.open('First Write.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});