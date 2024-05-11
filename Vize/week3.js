// const event1={
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     printGuestList(){
//       console.log("object",this.name);
//       this.guestList.forEach((guest)=>{
//         console.log(guest + ' is attending ' + this.name)
//       })
//       }

//     }


// console.log(event1.printGuestList());
const fs =require("fs")
const chalk=require("chalk")
const tasks={
    tasks:[{
        text:'Grocery shopping',
        completed:true
    },{
        text:'Clean yard',
        completed:false
    },{
        text:'Film course',
        completed:false
    }],
    
    getTasks(){
        const tasktodo=this.tasks.filter((task)=>task.completed===false)
        return tasktodo
    },

    writeFile(){
        const bookJs=JSON.stringify(this.getTasks())
        fs.writeFileSync("tasks.json", bookJs)
    },
    readFile(){
        const dataBuffer=fs.readFileSync("tasks.json")
        console.log(dataBuffer.toString());
    }
}

console.log(tasks.getTasks())
tasks.writeFile()
tasks.readFile()

