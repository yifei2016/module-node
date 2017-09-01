//Skriv en server med http-modulen som läser in en textfil,
//gör om resultatet till en array, slumpar fram ett element och sedan skriver ut det valda
// elementet till webbläsaren. Hur du väljer att dela upp innehållet till arrayen är upp till dig.

const http = require('http');
const fs = require('fs');
let fsReader = fs.createReadStream('text.txt');
let data = '';
fsReader.on('data',(chunk)=>{
  data += chunk;
  console.log('0'+data)
});
fsReader.on('end',()=>{
  console.log('1'+data)
});

let a = data.split('s');//can not log out result???????
console.log('2' + a);

http.createServer((req,res) => {
  a.forEach(function(word){
    res.write(word);
    console.log('3'+word);
    res.end();
  });
}).listen(3000);
console.log("Server is definitely active at 3000");
