const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const databaseName = "task-manager";
const uri = "mongodb+srv://Furkann:1708@furkan.lcbjktx.mongodb.net/?retryWrites=true&w=majority&appName=Furkan";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db(databaseName);
    const usersCollection = db.collection("users");
    const tasksCollection = db.collection("tasks");

    // Example: Insert a user
    // try {
    //   const result = await usersCollection.insertOne({ name: "Sadık", age: 25 });
    //   console.log('A document was inserted with the _id:', result.insertedId);
    // } catch (err) {
    //   console.error('Something went wrong trying to insert the new document:', err);
    // }finally {
    //     await client.close();
    //     console.log('Connection closed');
    // }
  
    // Example: Find a user
    // try {
    //   const user = await usersCollection.findOne({ name: "İbrahim" });
    //   console.log('Found user:', user);
    // } catch (err) {
    //   console.error('Something went wrong trying to find the document:', err);
    // }

    // Example: Insert many user
//         kullanıcılar=[
//             {name: 'Umut', age: 49},
//             {name: 'Ayşe', age: 47}
//             ]

//         try {
//     const result = await usersCollection.insertMany(kullanıcılar);
//     console.log(result.insertedCount, ' documents inserted successfully');
//     } catch (err) {
//     console.error('Something went wrong trying to insert the new documents: ',
//     err);
//     } finally {
//     await client.close();
//     console.error('Connection closing');

// }



    //     try {
    //     //const result = await usersCollection.findOne({name: 'Cana'});
    //     const result = await usersCollection.findOne({name: 'Umut', age:49});
    //     if (!result)
    //     console.log('Could not find user')
    //     else
    //     console.log('Found user: ', JSON.stringify(result))
    //     } catch (err) {
    //     console.error('Something went wrong in find: ', err);
    //     }
    //     finally {
    //     await client.close();
    //     console.error('Connection closing');
    //     }
     // Example: Update a user
    // try {
    //   const result = await usersCollection.updateOne({ name: "Furkan" }, { $set: { age: 100 } });
    //   console.log('Updated', result.modifiedCount, 'documents');
    // } catch (err) {
    //   console.error('Something went wrong trying to update the document:', err);
    // }



    // Example: Insert multiple tasks
    // try {
    //   const tasks = [
    //     { description: "Clean the house", completed: true },
    //     { description: "Water plants", completed: false },
    //     { description: "See the doctor", completed: false },
    //   ];
    //   const result = await tasksCollection.insertMany(tasks);
    //   console.log(result.insertedCount, "documents inserted successfully");
    // } catch (err) {
    //   console.error('Something went wrong trying to insert the new documents:', err);
   // }

   try {
    const cursor = tasksCollection.find({completed:false});
    while (await cursor.hasNext()) {
    console.log(await cursor.next());
 }
} catch (err) {
console.error('Something went wrong in find: ', err);
}
finally {
await client.close();
console.error('Connection closing');
}


   }finally {
    await client.close();
    console.log('Connection closed');
  }
}

run().catch(console.dir);
