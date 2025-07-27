const Router=require('express');
const adminRouter=Router();
const jwt=require("jsonwebtoken");
const  { JWT_ADMIN_PASSWORD } = require("../config");

const bcrypt=require('bcrypt');
const { adminModel, userModel } = require('../../db');
const { adminMiddleware } = require('../../middlewares/admin');

adminRouter.post("/signup",async (req,res)=>{
    const {email,password,firstName,lastName }=req.body;

    try{
        const hasedPassword= await bcrypt.hash(password,10);
        await adminModel.create({
            email,
            password:hasedPassword,
            firstName,
            lastName
        });
        res.status(200).json({
            message:"signup .."
        })
    }
    catch(e){
        res.status(500).json({
            message:"Error while signup .."
        })
    }
});


adminRouter.post("/signin",async (req,res)=>{
const {email,password}=req.body;

try{
    
    const user=await adminModel.findOne({
        email:email
    });
    const passwordMatch=bcrypt.compare(password,user.password);
    if(user && passwordMatch){
        const token=jwt.sign({
            id:admin_id
        },JWT_ADMIN_PASSWORD);
    }
    res.status(200).json({
        token:token,
        message:"Your are signin"
    })
}
catch(e){
res.status(500).json({
    message:"Invalid credentials"
})
}
})

adminRouter.post("/courses",adminMiddleware,async (req,res)=>{
const adminId=req.body.userId;

const{ title,descrption,imageurl,price}=req.body;




    
})
adminRouter.get("/courses",(req,res)=>{


    
})