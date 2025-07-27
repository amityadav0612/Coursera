const mongoose=require("mongoose");

const Schema=mongoose.Schema();
const ObjectId=mongoose.ObjectId;

const userSchema= new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastname:String
});

const adminSchema= new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastname:String
});

const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:string,
    creatorId:string
});
const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
});


const userModel=mongoose.Model("user",userSchema);
const adminModel=mongoose.Model("admin",adminSchema);
const courseModel=mongoose.Model("course",courseSchema);
const purchasModel=mongoose.Model("purchase",purchaseSchema);

module.exports={
    userModel,adminModel,courseModel,purchasModel
}
