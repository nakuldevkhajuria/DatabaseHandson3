require("dotenv").config();
const express = require("express")
const connect = require("./database/mongoose")
const StudentRouter = require("./routes/student")

const app = express();

app.use(express.json())
app.use(StudentRouter)

app.listen(process.env.PORT,async()=>{
    console.log('Server is connected on Port 4000')
    await connect();
})

