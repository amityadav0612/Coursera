const express = require("express");
const { Router } = require("express");
// require('dotenv').config();
const { userModel, courseModel } = require("../../db");
// const { JWT_USER_PASSWORD } = require("../../config");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_USER_PASSWORD="amityadafv" ;

const {userMiddleware}= require("../../middlewares/user");

userRouter.post("/signup", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
       if (existingUser) {
      return res.status(409)
      .json({ message: "User already exists" });
}
    
    const hasedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email,
      password: hasedPassword,
      firstName,
      lastName,
    });
    res.status(200).json({
      message: "You are signup",
    });
  } catch (e) {
    res.status(500).json({
      message: "Invalid credentials",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);

    return res.status(200).json({
      message: "You are signed in",
      token,
    });
  } catch (error) {
    console.error("Signin error:", error);  // 👈 See actual error
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


userRouter.get("/course", userMiddleware, async (req, res) => {
  const userId = req.userId;

  try {
    const course = await courseModel.findOne({
      userId: userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i < course.length; i++) {
      purchasedCourseIds.push(course[i].courseId);
    }

    const courseData = await courseModel.find({
      _id: { $in: purchasedCourseIds },
    });

    res.json({
      course,
      courseData,
    });
  } catch (error) {
    res.json({
      message: "Not purchase any course",
    });
  }
});

module.exports = {
  userRouter
}
