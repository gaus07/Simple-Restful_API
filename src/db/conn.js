const mongoose = require('mongoose');
// const DB = process.env.DATABASE

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => console.log(err))