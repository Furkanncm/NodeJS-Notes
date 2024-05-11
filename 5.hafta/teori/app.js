// console.log("Başla");
// setTimeout(()=>{
//     console.log("2 saniye bekle");
// },2000)
// setTimeout(()=>{
//     console.log("0 saniye bekle");
// },0)
// console.log("Bitir");

 const request= require(postman-request)
const geocode = require("./utils/geocode")



const url="http://api.weatherstack.com/current?access_key=&7c783c1fc64f7861095914891a6a294aquery=37.8267,-122.4233"

request({url:url},(error,response)=>{
    if(error){
        console.log("object not found");
    }else if(response.body.fea)
})

geocode("Bursa ", (error,data)=>{
    console.log("Error",error)
    console.log("Data",data)
})
// request( { url: geocodeURL, json: true}, (error, response) => {

//     if(error) {
//         console.log("bağlanamadı.");
//     }
//     else if(response.body.features.length){
//         console.log("Konum Yanlış");
//     }else{
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log("Enlem: "+latitude, "Boylam: "+longitude)
//     }
//     }
// )

