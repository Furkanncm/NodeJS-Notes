const fs = require('fs')
const chalk = require('chalk')
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes=notes.filter((note)=>{return note.title===title})
    const duplicateNotes = notes.find((note) => note.title === title)
    console.log(duplicateNotes);
    debugger

    if (!duplicateNotes) {       //if(duplicateNotes===undefined)
        notes.push({
            title: title,
            body: body

        })
        console.log(notes);
        saveNote(notes)

    } else {
        console.log("Başlık alınmıştır")
    }


}
const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)

}


const removeNote = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title

    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed"))
        saveNote(notesToKeep)
    } else {
        console.log(chalk.red.inverse("Note not found"))

    }
}

    const loadNotes = () => {
        try {
            const databuffer = fs.readFileSync("notes.json")//okur
            const dataJSOn = databuffer.toString()//JSONa çevirir
            return JSON.parse(dataJSOn)//JSONdan stringe çevirir
        }

        catch (e) {
            return []
        }
    }
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }

}

module.exports = {
    notOku: readNotes,
    notListe: listNotes,
    notEkle: addNote,
    notSil: removeNote

}