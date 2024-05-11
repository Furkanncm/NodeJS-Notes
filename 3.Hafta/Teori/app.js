const yargs=require("yargs")
const notes=require("./notes.js")
yargs.version("1.1.0")


yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },

    handler:(argv)=>{
        notes.notEkle(argv.title,argv.body)     
      
    }

})

yargs.command({
    command:"remove",
    describe:"remove a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
    },

    handler:(argv)=>{
        notes.notSil(argv.title)     

    }

})

yargs.command({

    command:"list",
    describe:"List your notes",
    handler:(argv)=>{
        notes.notListe(argv.title)
    }
})
yargs.command({

    command:"read",
    describe:"Read your notes",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=>{
        notes.notOku(argv.title,argv.body)
    }
})
yargs.parse()