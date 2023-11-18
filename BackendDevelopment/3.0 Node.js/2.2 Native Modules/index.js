const { isUtf8 } = require("buffer");
const fs = require("fs");

//fs.writeFile("message.txt", "Hello From NodeJS", (err) => {
  //if (err) throw err;
  //console.log('The file has been saved!');
//});

fs.readFile('./message.txt', {encoding: 'utf8', flag: 'r'}, (err, data) => {
  if (err) throw err;
  console.log(data);
});