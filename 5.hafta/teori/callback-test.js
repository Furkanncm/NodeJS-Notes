// setTimeout(()=>{
//     console.log("2 saniye bekle");
// },2000)

// const names=["a", "b", "c", "d", "e",]

// const shortNames=names.filter((name)=>{
//     return name.length<=4
// })

// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//         const data ={
//             latitude:0,
//             longitude:0,
//         }
//         callback(data)
//     },2000)
    
// }

// const data =geocode("Bursa")
// geocode("Bursa",(data)=>{
//     console.log(data);
// }
// )
// console.log(data);

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum);
})