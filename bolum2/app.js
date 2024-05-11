// const yargs=require("yargs")
// yargs.version("1.1.0")

// yargs.command({
//     command:"add",
//     describe:"Yeni not eklenecek",
//     builder:{
//         title:{
//             describe:"Not ekleme başlığı",
//             demandOption: true,
//             type:'string'

//         },
//     },
//     body:{
//         describe:"Add body",
//         demandOption:true,
//         type:"string"
//     },
  
//     handler:function(argv){
//         console.log("Yeni not ekleniyor...",argv.title)
//         console.log("body",argv.body)
//     }
// })
// yargs.command({
//     command:"remove",
//     describe:"Not silinecek",
//     builder:{
//         title:{
//             describe:"Not silme başlığı",
//             demandOption: true,
//             type:'string'

//         },
//     },
//     body:{
//         describe:"Remove body",
//         demandOption:true,
//         type:"string"
//     },
//     handler:function(argv){
//         console.log("Not siliniyor...",argv.title)
//         console.log("body",argv.body)
//     }
// })
// yargs.command({
//     command:"list",
//     describe:"Notlar listelenecek",
//     builder:{
//         title:{
//             describe:"Not listeleme başlığı",
//             demandOption: true,
//             type:'string'

//         },
//     },
//     body:{
//         describe:"list body",
//         demandOption:true,
//         type:"string"
//     },
//     handler:function(argv){
//         console.log("Notlar listeleniyor...",argv.title)
//         console.log("body",argv.body)
//     }
// })
// yargs.command({
//     command:"read",
//     describe:"Not okunacak",
//     builder:{
//         title:{
//             describe:"Not okuma başlığı",
//             demandOption: true,
//             type:'string'

//         },
//     },
//     body:{
//         describe:"Read body",
//         demandOption:true,
//         type:"string"
//     },
//     handler:function(argv){
//         console.log("Not okunuyor...",argv.title)
//         console.log("body",argv.body)
//     }
// })
// yargs.parse();


