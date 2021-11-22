var fs = require('fs')

// G:/gitProject/notes/nodejs/http/file_server_work.js
fs.stat('G:/gitProject/notes/nodejs/http/test.js',function (err,stat) {
  if(err){
    console.log('this is not a file!');
    console.log(err);
  }else {
    if(stat.isFile()){
      console.log('this is a file!');
    }
  }
})

