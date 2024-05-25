const mongoose = require('mongoose');
const validator = require('validator')

const database = "mongodb+srv://Furkann:1708@furkan.lcbjktx.mongodb.net/?retryWrites=true&w=majority&appName=Furkan";

mongoose.connect(database, {
  useUnifiedTopology: true, // Güncel bağlantı seçeneği
})
.then(() => {
  console.log('MongoDB bağlantısı başarılı!');

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
        description: ' Lear the mongoose library'
        })

            task.save().then(() => {
    console.log(task)
    }).catch((error) => {
    console.log(error)
    })

 // const User = mongoose.model('User', { name: { type: String }, age: { type: Number } })

//   const me = new User({
//     name: 'Ali',
//     age: 24
//     })

//     me.save().then(() => {
//         console.log(me)
//         }).catch((error) => {
//         console.log('Error!', error)
//         })
// const Task = mongoose.model('Task', {
//     description: {
//     type: String
//     },
//     completed: {
//     type: Boolean
//     }
//     })

// const task = new Task({
//     description: 'Lear the mongoose library',
//     completed: false
//     })
//     task.save().then(() => {
//     console.log(task)
//     }).catch((error) => {
//     console.log(error)
//     })

// const User = mongoose.model('User', {
//     name: {
//     type: String,
//     required: true
//     },
//     age: {
//     type: Number,
//     validate(value) {
//     if (value < 0) {
//     throw new Error('Age must be positive')
//     }
//     }
//     }
//     })
//     const me = new User({
//         name: 'Ali',
//         age:-1
//     })


// const User = mongoose.model('User', {
//     name: {
//     type: String,
//     required: true,
//     trim: true
//     },
//     email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//     if (!validator.isEmail(value)) {
//     throw new Error('Email is invalid')
//     }
//     }
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
//     age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//     if (value < 0) {
//     throw new Error('Age must be positive')
//     }
//     }
//     }
//     })
//     const me = new User({
//         name: ' Ali. ',
//         email: 'ali@aVVVVVc.com. ',
//         password: ' rr123. '
//         })
//     me.save().then(() => {
//         console.log(me)
//                  }).catch((error) => {
//                 console.log('Error!', error)
//                 })
             })

.catch((error) => {
  console.error('MongoDB bağlantısı başarısız:', error);
});


