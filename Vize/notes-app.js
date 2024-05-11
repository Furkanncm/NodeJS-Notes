const fs = require('fs');
const book={
    title:"Betül",
    author:"Furkan Çam",
}

const bookJSON=JSON.stringify(book);
fs.writeFileSync("1-json.json",bookJSON);
const dataBuffer=fs.readFileSync("1-json.json");
console.log(dataBuffer.toString());
const dataJSON=dataBuffer.toString();
const data=JSON.parse(dataJSON);
console.log(data.title);
console.log(data.author);