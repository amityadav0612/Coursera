const Router = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

const bcrypt = require("bcrypt");
const { adminModel, userModel, courseModel } = require("../../db");
const { adminMiddleware } = require("../../middlewares/admin");

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const hasedPassword = await bcrypt.hash(password, 10);
    await adminModel.create({
      email,
      password: hasedPassword,
      firstName,
      lastName,
    });
    res.status(200).json({
      message: "signup ..",
    });
  } catch (e) {
    res.status(500).json({
      message: "Error while signup ..",
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await adminModel.findOne({
      email: email,
    });
    const passwordMatch = bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const token = jwt.sign(
        {
          id: admin_id,
        },
        JWT_ADMIN_PASSWORD
      );
    }
    res.status(200).json({
      token: token,
      message: "Your are signin",
    });
  } catch (e) {
    res.status(500).json({
      message: "Invalid credentials",
    });
  }
});

adminRouter.post("/courses", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, descrption, imageurl, price } = req.body;

  try {
    const course = await courseModel.create({
      title,
      descrption,
      imageurl,
      price,
      createrId: adminId,
    });
    res.status(200).json({
      message: "Course is created ..",
      courseId: course._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating course..",
    });
  }
});
adminRouter.put("/courses/:courseId", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, descrption, imageurl, price, courseId } = req.body;

  try {
    const course = await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title,
        descrption,
        imageurl,
        price,
      }
    );
    res.status(200).json({
      message: "Course is updated..",
      courseId: course._id,
    });
  } catch (error) {
    res.json({
      message: "Error while updating course",
    });
  }
});

adminRouter.get("/courses", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  try {
    const course = await courseModel.find({
      creatorId: adminId,
    });
    res.status(200).json({
      message: "Your course",
    });
  } catch (error) {
    res.status(500).json({
      message: "No course found ",
    });
  }
});
module.exports={
    adminRouter
}