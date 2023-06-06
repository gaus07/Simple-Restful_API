require('dotenv').config();
require('./db/conn')
const Student = require('./models/students')
const express = require("express")
const app = express()

const PORT = process.env.PORT
// const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hey from this side')
})

// Create new Student data
app.post('/students', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(PORT, () => {
    console.log(`Connection established at ${PORT}`);
})