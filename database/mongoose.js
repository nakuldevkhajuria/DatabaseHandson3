const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/student"

const connect = async()=>{

    try {
        console.log('try to connect to the database =>')
       const dbConnection =  await mongoose.connect(url);
       console.log('Connected to database')

    } 
    catch (error) {
        console.log("Something went wrong while connecting =>",error)
    }
   

  
}

module.exports = connect;

// const studentInfo = req.body
    // const informationSchema = new mongoose({
    //     firstName:studentInfo.firstName,
    //     lastName: studentInfo.lastName,
    //     email:studentInfo.email,
    //     mobile:studentInfo.mobile,
    //     created:
    // })
