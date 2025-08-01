const express=require("express");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

const mongoose = require("mongoose");

const PORT=process.env.PORT;



app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(PORT || 3000,()=>{
        console.log(`Server is running on ${PORT}`);
    })
}

main();