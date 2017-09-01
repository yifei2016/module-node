var fs = require('fs');

let fsReader = fs.createReadStream('text.txt');


let dataArray = [];
fsReader.on('data',(chunk)=>{

  dataArray.push(chunk);
  console.log(fsReader.bytesRead);
});

fsReader.on('end', () => {
  console.log('Antal tecken:' + fsReader.bytesRead);

  console.log(dataArray.length);
});

// var fs = require('fs');
// let fsReader = fs.createReadStream('text.txt');
//
// let data = [];
//
// fsReader.on('data', (chunk) => {
//    data.push(chunk);
//     console.log(fsReader.bytesRead);
// });
//
// fsReader.on('end', () => {
//     console.log("Antal tecken:" + fsReader.bytesRead);
//     console.log(data.length);
// });
