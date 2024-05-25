const mongoose = require("mongoose")

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!value.includes("@")){
                throw new Error("Email geçerli değil!")
            }
        }
    },
    şifre:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Şifre içerisinde 'password' kelimesi olamaz!")
            }
        }
    },
    age: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error("Yaş 0'dan küçük olamaz!")
            }
        }
    }
})

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

async function run() {
    const conn = await mongoose.connect("mongodb+srv://ibrahimozer161616:ibrahim1616@taskmanagerapp.okwo9qi.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerApp&dbName=task-manager")

    // const testUser = new User({
    //     name: "İbrahim",
    //     email: "ibrahim@gmail.com",
    //     şifre: "123456789",
    //     age: 22
    // })

    // await testUser.save().then(() => {
    //     console.log(testUser)
    // }).catch((error) => {
    //     console.log("Kaıyt eklemede hata! ", error)
    // })

    const testTask = new Task({
        description: "Node.js öğren",
        completed: false
    })

    await testTask.save().then(() => {
        console.log(testTask)
    }).catch((error) => {
        console.log("Kayıt eklemede hata! ", error)
    })
}

run().catch(console.dir)