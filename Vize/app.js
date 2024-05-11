
const notes =require("./notes.js")
const yargs = require("yargs")
yargs.version="1.1.0"

yargs.command({
    command:"add",
    describe:"Add a note",
    isim:{
        describe:"Note title",
        demandOption:true,
        type:"string",
    },
    soyisim:{
        describe:'Note body',
        demandOption:true,
        type:"string"
    },
    handler:function(argv) {
         notes.addNote(argv.title,argv.body)
    }
});
yargs.command({
    command:"remove",
    describe:"Removing note",
    isim:{
        describe:"Note title",
        demandOption:true,
        type:"string",
    },
    soyisim:{
        describe:"Note body",
        demandOption:true,
        type:"string",
    },
    handler:()=>{
        console.log("Removed note");
    }
});
yargs.command({
    command:"list",
    describe:"Listing note",
    isim:{
        describe:"Note title",
        demandOption:true,
        type:"string",
    },
    soyisim:{
        describe:"Note body",
        demandOption:true,
        type:"string",
    },
    handler:()=>{
        notes.listNote();
    }

});
yargs.command({
    command:"read",
    describe:"Reading note",
    isim:{
        describe:"Note title",
        demandOption:true,
        type:"string",
    },
    soyisim:{
        describe:"Note body",
        demandOption:true,
        type:"string",
    },
    handler:(argv)=>{
       notes.readNote(argv.title);
    }
});
yargs.parse();


