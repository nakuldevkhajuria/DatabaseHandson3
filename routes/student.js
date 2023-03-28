const express = require("express")
const StudentController = require("../controllers/student")
const router = express.Router();

router.get("/",(req,res)=>{
    res.send('this is the home')
})
router.post("/student", StudentController.StudentEnrollment)
router.get("/student", StudentController.StudentFind)
router.put("/student",StudentController.StudentUpdate)
router.delete("/student",StudentController.StudentDelete)


module.exports = router