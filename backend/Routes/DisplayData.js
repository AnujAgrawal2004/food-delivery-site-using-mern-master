const express = require("express");
const router = express.Router();
router.post('/foodData',(req,res)=>
{
    try{
        console.log(global.food,global.foodCategory)
         res.send([global.food,global.foodCategory])
    }catch(error){
        console.error(error.message);
        res.send("server Error")

    }
})
module.exports=router;