const Router=require('express');
const adminRouter=Router();
const jwt=require("jsonwebtoken");

const bcrypt=require('bcrypt');
const { adminModel } = require('../../db');

adminRouter.post("/signup",async (req,res)=>{
    const {email,password,firstName,lastName }=req.body;
    const hasedPassword= await bcrypt.hash(password,10);

    await adminModel.create({
        email,
        password:hasedPassword,
        firstName,
        lastName
    })

    res.status(200).json({
        message:"signup .."
    })
});


adminRouter.post("/signin",(req,res)=>{


    
})

adminRouter.post("/:courseId",(req,res)=>{


    
})
adminRouter.get("/courses",(req,res)=>{


    
})