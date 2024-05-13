require("dotenv").config();

const express= require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
const cors = require('cors')

app.use(express.json())
// app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use("/api", require('./routes'))
console.log("fddsg")

app.listen({port: process.env.PORT}, async () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
    
})
