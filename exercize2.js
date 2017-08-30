const http = require('http');
const server = http.createServer((req,res) => {
  res.write('hello' + req.method );
  res.write('dsfdsf');
  res.end();
});

 console.log('hello')
server.listen(3000);

//sen kör localhost:3000 på webläsare
