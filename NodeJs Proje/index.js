import express from 'express';

import client from './config/db.js';

const app  = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT ,()=>{

    console.log("Listening on port "+PORT);
    client.connect(err=>{
        if(err){
            console.log("connect failed");
        }else{
            console.log("connected to database");
        }

    })

})