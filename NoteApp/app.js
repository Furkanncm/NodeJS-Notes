const yargs= require('yargs')
yargs.version('1.1.0')



yargs.command({

    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){

        console.log('Başlık',argv.title);
        console.log('İçerik',argv.body);    }

})
yargs.command({

    command:'remove',
    describe:'remove a new note',
    handler:function(){

        console.log('remove a new note')
    }

})
yargs.command({

    command:'list',
    describe:'list notes',
    handler:function(){

    console.log('listing notes')
    }

})
yargs.command({

    command:'read',
    describe:'read note',
    handler:function(){

    console.log('reading notes')
    }

})

yargs.parse()
