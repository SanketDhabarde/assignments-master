const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(422).json({ error: "Admin already exists" });
    }
    const newAdmin = {
      username,
      password,
    };
    const admin = await Admin.create(newAdmin);
    return res.status(201).json({ message: "Admin created Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ error: "User does not exists" });
    }

    if (admin.password !== password) {
      return res.status(401).json({ error: "password is incorrect" });
    }

    const encodedToken = jwt.sign({ username }, JWT_SECRET);

    return res.json({ token: encodedToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;
  try {
    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
      published,
    });
    return res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    return res.status(200).json({ courses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

module.exports = router;
