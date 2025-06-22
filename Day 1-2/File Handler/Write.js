var fs = require('fs');

fs.writeFile('First Write.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});