const express = require("express");
const { Router } = require("express");
const { userModel, courseModel } = require("../../db");
const { JWT_USER_PASSWORD } = require("../../config");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {userMiddleware}= require("../../middlewares/user");

userRouter.post("/signup", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
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
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModel.findOne({
      email: email,
    });

    const matchPassword = await bcrypt.compare(password, user.password);

    if (user && matchPassword) {
      const token = jwt.sign(
        {
          id: user._id
        },
        JWT_USER_PASSWORD
      );
    }
    res.status(200).json({
      message: "You are signin",
      token: token,
    });
  } catch (error) {
    res.json({
      message: "Invalid username or password",
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
