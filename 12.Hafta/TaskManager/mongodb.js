const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const databaseName = "task-manager";
const uri =
  "mongodb+srv://Furkann:1708@furkan.lcbjktx.mongodb.net/?retryWrites=true&w=majority&appName=Furkan";
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
    // Connect the client to the server  (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // const id = new ObjectId()
    // console.log(id)
    // console.log(id.id)
    // console.log(id.id.length)
    // console.log(id.toHexString().length)
    // console.log(id.getTimestamp())

    const db = client.db(databaseName);
    const usersCollection = db.collection("users");
    const tasksCollection = db.collection("tasks");

    // await db.collection("users").findOne({name: "İbrahim"})
    // .then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // await db.collection("users").insertOne({

    //     name: "Furkan Kazım",
    //     age: 22
    // })

    //     try {
    // const result = await usersCollection.insertOne({
    // name: 'Deneme2',
    // age: 28
    // });
    // console.log('A document was inserted with the _id: ', result.insertedId);
    // } catch (err) {
    // console.error('Sometthing went wrong trying to insert the new documents: ',
    // err);
    // }

    // finally {
    // await client.close();
    // console.error('Connection closing');
    // }

    // users = [
    // {name: 'Can', age: 22},
    // {name: 'Canan', age: 23}
    // ]
    // try {
    // const result = await usersCollection.insertMany(users);
    // console.log(result.insertedCount, ' documents inserted successfully');
    // } catch (err) {
    // console.error('Something went wrong trying to insert the new documents: ',
    // err);
    // } finally {
    // await client.close();
    // console.error('Connection closing');
    // }

    // try {
    //  const result = await usersCollection.updateOne(
    //  { name: 'Can' },
    //  { $set: { age: 100 } },
    //  );
    //  console.log('Updated ', result.modifiedCount, ' documents'); // result.modifiedCount kaç bilgi değiştiğini tutar.
    //  } catch (err) {
    //  console.error('Something went wrong trying to update documents: ', err);
    //  }

    //  try {
    //  const cursor = await usersCollection.find(); //find() bütün verileri bulur.
    //  while (await cursor.hasNext()) {
    //  console.log(await cursor.next());
    //  }
    //  } catch (err) {
    //  console.error('Something went wrong in find: ', err);
    //  }

    // try {
    //  //const result = await usersCollection.findOne({name: 'Cana'});
    //  const result = await usersCollection.findOne({name: 'Can', age:100});
    //  if (!result)
    //  console.log('Could not find user')
    //  else
    //  console.log('Found user: ', JSON.stringify(result))
    //  } catch (err) {
    //  console.error('Something went wrong in find: ', err);
    //  }

    // tasks = [
    //   { description: "Clean the house", completed: true },
    //   { description: "Water plants", completed: false },
    //   { description: "See the doctor", completed: false },
    // ];
    // try {
    //   const result = await tasksCollection.insertMany(tasks);
    //   console.log(result.insertedCount, " documents inserted successfully");
    // } catch (err) {
    //   console.error(
    //     "Something went wrong trying to insert the new documents: ",
    //     err
    //   );
    // }

  }finally {
    await client.close();
    console.error('Connection closing');
  }}