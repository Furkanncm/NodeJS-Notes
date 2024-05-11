const fs=require('fs')
const book ={
    title:'my title',
    author:'can bonomo'
}


const bookJSON=JSON.stringify(book) // {"title":"Kitap başlığım","author":"Kitap yazar"}
fs.writeFileSync('notes-app.json',bookJSON)
const parsedObject=JSON.parse(bookJSON) // { title: 'Kitap başlığım', author: 'Kitap yazar' }
console.log(parsedObject.title, parsedObject.author);
const databuffer=fs.readFileSync('notes-app.json')
const dataJSON=console.log(databuffer.toString())
const data=JSON.stringify(dataJSON)
console.log(data);