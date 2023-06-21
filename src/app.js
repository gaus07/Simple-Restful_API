require("dotenv").config();
require("./db/conn");
const { parse } = require("dotenv");
const express = require("express");
const app = express();
const studentRouter = require('./routers/student')

const PORT = process.env.PORT;
// const port = process.env.PORT || 3000

app.use(express.json());
app.use(studentRouter)

app.listen(PORT, () => {
  console.log(`Connection established at ${PORT}`);
});
