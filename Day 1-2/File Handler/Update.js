var fs=require('fs');

fs.appendFile('First Write.txt','This is the text for Update',function(err){
    if(err) throw err;
    console.log('Updated!');
})