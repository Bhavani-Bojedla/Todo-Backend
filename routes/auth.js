const router=require("express").Router();

const user = require("../models/user");


router.post("/register",async (req,res)=>{
   try{
     const {email,username,password}=req.body;
     const user=new user({email,username,password});
     await user.save().then(()=>res.status(200).json({user:user})
    );
   }
   catch(e){
        res.status(400).json({message:"user Already exists"});
   }
})
 



module.exports=router;