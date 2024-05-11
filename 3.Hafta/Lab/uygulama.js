const yargs=require("yargs")
const topla=require("./add")
const cikar=require("./sub")
const carp=require("./mul")
const bol=require("./div")

yargs.version("1.1.0")
yargs.command({
    command:"calculate",
    describe:"Calculate",
    builder:{
        operand1:{
            describe:"operand1",
            demandOption: true,
            type:'int'
        },
        operand2:{
            describe:"operand2",
            demandOption:true,
            type:"int"
        },
        operator:{
            describe:"operator",
            demandOption:true,
            type:"String"
        }
    },
    handler:function(argv){
        if(argv.operator=="+"){
            console.log(topla(argv.operand1, argv.operand2));
        }
        else if(argv.operator=="-"){
            console.log(cikar(argv.operand1, argv.operand2));
        }
        else if(argv.operator=="*"){
            console.log(carp(argv.operand1, argv.operand2));
        }
        else if(argv.operator=="/"){
            console.log(bol(argv.operand1, argv.operand2));
        }
        //console.log(topla(argv.title, argv.body));
    }
})
yargs.parse()


// yargs.command({
//     command:"sub",
//     describe:"Calculate",
//     builder:{
//         title:{
//             describe:"operand 1:",
//             demandOption: true,
//         type:'int'

//         },
//     },
//     body:{
//         describe:"operand 2:",
//         demandOption:true,
//         type:"int"
//     },
  
//     handler:function(argv){
//         console.log(cikar(argv.title, argv.body));
//     }
// })
// yargs.command({
//     command:"div",
//     describe:"Calculate",
//     builder:{
//         title:{
//             describe:"operand 1:",
//             demandOption: true,
//         type:'int'

//         },
//     },
//     body:{
//         describe:"operand 2:",
//         demandOption:true,
//         type:"int"
//     },
  
//     handler:function(argv){
//         console.log(bol(argv.title, argv.body));
//     }
// })
// yargs.command({
//     command:"mul",
//     describe:"Calculate",
//     builder:{
//         title:{
//             describe:"operand 1:",
//             demandOption: true,
//         type:'int'

//         },
//     },
//     body:{
//         describe:"operand 2:",
//         demandOption:true,
//         type:"int"
//     },
  
//     handler:function(argv){
//         console.log(carp(argv.title, argv.body));
//     }
// })
