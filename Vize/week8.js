const express=require("express")
const app=express()


app.listen(3000,()=>{
    console.log("Listening on 3000 port"); 
})
app.get("",(req,res)=>{
  res.sendFile("./public/index.html",{root:__dirname})
})


app.get("/help",(req,res)=>{
    res.send({
        
            name1:"betül",
            age:20,
            gender:"female",
            address:{
                city:"Bursa",
                country:"turkey"
            },
            bf:"Furkan"
        
        
    })
})
app.get("/about",(req,res)=>{
    res.sendFile("./public/about.hbs",{
        root:__dirname,
     
    })
   
    
})
