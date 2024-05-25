const mongoose = require('mongoose');
const validator= require("validator")

const database = "mongodb+srv://Furkann:1708@furkan.lcbjktx.mongodb.net/?retryWrites=true&w=majority&appName=Furkan";

async function connectToDatabase() {
  try {
    await mongoose.connect(database, {
      useUnifiedTopology: true, // Güncel bağlantı seçeneği
    });
    console.log('MongoDB bağlantısı başarılı!');
    // const User = mongoose.model('User', {
    //     name: {
    //     type: String,
    //     required:true
    //     },
    //     password: {
    //         type: String,
    //         required: true,
    //         minlength: 7,
    //         trim: true,
    //         validate(value) {
    //         if (value.toLowerCase().includes('password')) {
    //         throw new Error('Password cannot contain “password”')
    //         }
    //         }
    //         },
    //     email: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         lowercase: true,
    //         validate(value) {
    //         if (!validator.isEmail(value)) {
    //         throw new Error('Email is invalid')
    //         }
    //         }
    //         },
    //     age: {
    //         type: Number,
    //         validate(value) {
    //         if (value < 0) {
    //         throw new Error('Age must be positive')
    //         }
    //         }
    //         }
    //     })
    //     const me = new User({
    //    name: "furkan",
    //    email: 'furkan@gmail.com',
    //    password: "furkankazımcam"

    //     })
    //     me.save().then(() => {
    //     console.log(me)
    //     }).catch((error) => {
    //     console.log('Error!', error)
    //     })
    const Task = mongoose.model('Task', {
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
        const task = new Task({
        description: 'Lear the mongoose library',
        completed: true
        })
        task.save().then(() => {
            console.log(task)
            }).catch((error) => {
            console.log(error)
            })


  } catch (error) {
    if (error instanceof mongoose.Error.MongooseServerSelectionError) {
      console.error('MongoDB bağlantısı başarısız: Beyaz listeye alınmamış bir IP adresinden bağlanmaya çalışıyor olabilirsiniz. Lütfen IP adresinizi kontrol edin ve MongoDB Atlas\'ta beyaz listeye ekleyin.');
    } else if (error instanceof mongoose.Error.MongoNetworkError) {
      console.error('MongoDB bağlantısı başarısız: Ağ bağlantısı hatası. İnternet bağlantınızı ve MongoDB Atlas ayarlarınızı kontrol edin.');
    } else {
      console.error('MongoDB bağlantısı başarısız:', error.message);
    }
  }
}

connectToDatabase();