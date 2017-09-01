const http = require('http');
var fs = require('fs');

// let fsReader = fs.createReadStream('text.txt');

const server = http.createServer((req,res) => {

  fs.readFile('text.txt', function(err, data){

    res.write(data);//readable response on webpage. write a response to the client
//document.write("Hello World!");
    res.end();//end the response
  })
});

server.listen(3000);
