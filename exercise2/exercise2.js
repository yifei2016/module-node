const http = require('http');//To include a module, use the require()
//function with the name of the module:
//Node.js has a built-in module called HTTP,
//which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

const server = http.createServer((req,res) => {
  res.write('hello' + req.method );//readable response on webpage. write a response to the client
  res.write('dsfdsf');
  res.end();//end the response
});
//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
 console.log('hello')
server.listen(3000);

//sen kör localhost:3000 på webläsare
