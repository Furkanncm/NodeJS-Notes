const bodyParser = require("body-parser");//gelen isteklerin gövdelerini ayrıştırir. 
const express = require("express");//yonlendirme isteklerini icerecek
const ogrenciRouter = require("./ogrenci");
const bolumRouter = require("./bolum");
require('dotenv').config();


const app = express();
const port = process.env.PORT;//bu porta dinlenecek

app.use(bodyParser.json());//aciklama

app.use("/ogrenci",ogrenciRouter);//  /ogrenci altındaki isteklerin ogrenciRouter a yönlendirilece.
app.use("/bolum",bolumRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);//dinleniyor
});