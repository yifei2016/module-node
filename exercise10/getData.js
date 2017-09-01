const https = require('https');
var http = require('http');
let data = "";
https.get('https://yhjust16.herokuapp.com/nobel', (res) => {
  res.on('data', (d) => {
    data += (d);
  });
  res.on('end', () => {
    let parsed = JSON.parse(data);
    http.createServer((req,result)=>{


          result.write(`<h1>${parsed}</h1>`);

          // console.log(parsed[n].prizes[0].year + "... " + parsed[n].firstname + " " + parsed[n].surname);

result.end();
      })

    }).listen(5600)


}).on('error', (e) => {
  console.error(e);
});
// var https = require('https');
// var http = require('http');
//
// let data = "";
//
// https.get('https://yhjust16.herokuapp.com/lorem', (res) => {
//     res.on('data',(d) => {
//         data += d;
//     });
//     res.on('end', () => {
//         console.log("Klart med datatankning.");
//         http.createServer((req, result) => {        // Lägg inte ut på sidan förrän du har fått in allt material, därför bra att ha den här i en callback.
//             result.write("<h1>Lorem</h1>");
//             result.write("<p>" + data + "</p>");
//             result.end();
//         }).listen(5600);
//
//     });
//
// }).on('error', (e) => {
//     console.error(e);
// });
