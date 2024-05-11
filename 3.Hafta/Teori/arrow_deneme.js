//const square =function(x){return x*x;}

const square =(x)=> x*x

const myEvent ={
    name: 'Birthday Party',
    printGuestList:()=>console.log(this.name+"katılımcı  listesi")
}
myEvent.printGuestList();
console.log("------------------------------")
console.log(square(4));


const myEvent2 ={
    name: 'Birthday Party',
    guestList:["furkan","kazım","betul"],
    printGuestList(){
        console.log(this.name+" katılımcı  listesi")
        this.guestList.forEach((guest)=>{
            console.log(guest+" is attending "+this.name)
        })
    }
}
myEvent2.printGuestList();
