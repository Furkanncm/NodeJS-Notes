const fs=require('fs')
const chalk=require("chalk")
const addNote=(title,body)=>{
    const notes=loadNote()
    const duplicateNote=notes.filter=((note)=>{
        return note.title===title
    
    })

    if(duplicateNote.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)
        console.log("Note added")
    }else{
        console.log("Note title taken")
      //  saveNote(notes)
        console.log(notes);
    }
    
}

const loadNote = function () {
    try {
    const dataBuffer = fs.readFileSync('notes.json') //read the file
    const dataJSON = dataBuffer.toString() //convert to string
    return JSON.parse(dataJSON) //parse it and return
    } catch (e) {
    return [] //an empty array
    }
    }
const saveNote = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
    }

const listNote=()=>{
    const notes=loadNote()
    notes.forEach((note) => {
        console.log(note.title);
    });
}



const readNote=()=>{
    const notes=loadNote()
    const note=notes.find((note)=>{
        return note.title===title
    })
    if(note){
        console.log(note.title);
    }else{
        console.log(chalk.red.inverse("not bulunamadı"));
    }
    
}
module.exports = {
    addNote: addNote,
    listNote: listNote,
    readNote:readNote,
}