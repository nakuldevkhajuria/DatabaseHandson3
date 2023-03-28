const Information = require("../models/studentModel")

const StudentEnrollment = async(req,res)=>{
// {
//     "firstName": "Nakul",
//     "lastName": "malik",
//     "age": 24,
//     "email": "nakul@gmail.com",
//     "mobile": "9089789878"
// }
    try {
        const StudentInfo = req.body;

        const information = new Information({
            firstName:StudentInfo.firstName,

            lastName: StudentInfo.lastName,
            age: StudentInfo.age,
            email: StudentInfo.email,
            mobile: StudentInfo.mobile,
            created:Date.now()
        })
        const dbResponse = await information.save();
        console.log("The data is =>",dbResponse)
        return res.status(200).send({message:"Student data is saved"})
    } 
    catch (error) {
        console.log('Something wrong while operating on db =>', error)
        res.status(500).send({message:"Error while operating on db"})
    }
}


const StudentFind = async(req,res)=>{
   
    const queryParam = req.query;
    console.log(queryParam)
    // const query = {"firstName":queryParam.firstName}
    const query = {queryParam};
    try {
       const result =  await Information.find(query);
        console.log("The data we want is this =>",result)
       res.status(200).send({message:"this is the data we were finding =>",result})

    } 
    catch (error) {
        console.log('Something went wrong',error)
        return res.status(500).send({message:"Error while operating on db"})
    }
}
const StudentUpdate = async(req,res)=>{
    // {
    //     "filter":{"firstName":"Nakul"},
    //     "value" :{"lastName":"Gupta",
    //     "age":29
    //     }
    // }

    const result = req.body;
const filter = result.filter;
// const value = {$set : result.value}
const value = result.value


    try {
       const result =  await Information.updateOne(filter,value);
        console.log("The data we want to update is this =>",result)
       res.status(200).send({message:"this is the data we were updating =>",result})

    } 
    catch (error) {
        console.log('Something went wrong',error)
        return res.status(500).send({message:"Error while operating on db"})
    }
}
const StudentDelete = async(req,res)=>{
   
    const deleteItem = req.query;
// const filter = result.filter;
// const value = {$set : result.value}



    try {
       
        result =  await Information.deleteOne(deleteItem);
       console.log("The data we want to delete is deleted =>",result)
        
       res.status(200).send({message:"Item is deleted =>",result})

    } 
    catch (error) {
        console.log('Something went wrong',error)
        return res.status(500).send({message:"Error while operating on db"})
    }
}

module.exports= {
    StudentEnrollment,StudentFind,StudentUpdate,StudentDelete

}