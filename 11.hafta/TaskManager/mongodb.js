const mongodb = require('mongodb');
const { MongoClient, ServerApiVersion,ObjectId } = mongodb;

const connectionURL = "mongodb+srv://Furkann:1708@furkan.lcbjktx.mongodb.net/?retryWrites=true&w=majority&appName=Furkan";
const database = "task-manager";

const uri = connectionURL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: mongodb.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect(); //Opsiyonel, Kullanılmadan da işlem yapılabilir.

        const db = client.db(database);



        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // await db.collection("users").insertOne({
         
        //     name: "Furkan",
        //     age: 21

        // }); // Tekli Gönderim

        // await db.collection('users').insertOne({
        //   _id: 1,
        //   name: 'Tansel',
        //   age: 26
        //   }, (error, result) => {
        //   if (error) {
        //   return console.log('Unable to insert user')
        //   }
        //   console.log(result.ops)
        //   })
        // await db.collection("users").insertMany([
        //     { name: "İbrahim", age: 21 },
        //     { name: "Burak", age: 23 }
        // ]); // Çoklu Gönderim

       

      //  await db.collection("tasks").insertMany([
      //       { description: "Odanı Temizle", completed: true },
      //       { description: "Ödev Yap", completed: false },
      //       { description: "Ailenle vakit geçir", completed: true }
      //   ]); // Çoklu Gönderim

      //   console.log("Data inserted successfully");

          

      // await db.collection("users").findOne({     //Birden fazla aynı isimde kullanıcı varsa ilk karşılaştığını getirir.
      //   name:"Furkan"
      // },(error,user)=>{
      //   if(error){
      //      console.log("Unable to fetch")
      //   }
      //   console.log(user)
      // })
      
       
    } finally {
        await client.close();  
    }
}

run().catch(console.dir);
