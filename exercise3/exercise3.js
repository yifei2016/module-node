
const fs = require('fs');
// fs.writeFile('./file.txt', "Text som ska ändras in i filen",function(err){
//   if(err) throw err;
//   console.log('Successed!');
// });

fs.open("./file.txt", "a", function(err, fd){
    console.log(fd);
    fs.writeFile(fd, "I am here.");//a stands for replace the old text with same text numbers and add the rest of new texts
    //after replaced old text, if is w instead of a, then all the text will be placed or added.

    fs.close(fd);
});
