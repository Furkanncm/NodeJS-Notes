const fs=require('fs')

const book={

    title:"Kitap başlığım",
    author:"Kitap yazar",

}

const bookJSON=JSON.stringify(book) // {"title":"Kitap başlığım","author":"Kitap yazar"}
fs.writeFileSync('denemeJson',bookJSON)
const parsedObject=JSON.parse(bookJSON) // { title: 'Kitap başlığım', author: 'Kitap yazar' }
console.log(parsedObject.title, parsedObject.author);
const databuffer=fs.readFileSync('denemeJson')
const dataJSON=console.log(databuffer.toString())
const data=JSON.stringify(dataJSON)
console.log(data);

