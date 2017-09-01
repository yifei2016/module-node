//Skriv ett program som hämtar från https://yhjust16.herokuapp.com/nobel och
//skriv ut namnen på all nobelpristagare i console.log.
//OBS: använd const https = require('https'); Observera s:et.


// Nobel laureates
const https = require('https');
var data = "";
https.get('https://yhjust16.herokuapp.com/nobel', (res) => {
  res.on('data', (d) => {
    data += (d);
  });
  res.on('end', () => {
    let parsed = JSON.parse(data);
    for (let n=0;n<parsed.length;n++)//let person of parsed
    {
      if (parsed[n].prizes[0].category == 'literature') {
        console.log(parsed[n].prizes[0].year + "... " + parsed[n].firstname + " " + parsed[n].surname);
      }

    }
  });
}).on('error', (e) => {
  console.error(e);
});
