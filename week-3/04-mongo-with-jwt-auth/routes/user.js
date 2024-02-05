const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(411).json({ error: "user already exists" });
    }
    const newUser = { username, password };
    const user = await User.create(newUser);
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User does not exists" });
    }

    if (user.password !== password) {
      return res.status(403).json({ error: "Incorrect user credentials" });
    }

    const encodedToken = jwt.sign({ username }, JWT_SECRET);

    return res.json({ token: encodedToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    return res.json({ courses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const { courseId } = req.params;
  try {
    const user = await User.findOne({ username });
    console.log(user);
    const userCourses = user.purchasedCourse;
    const course = await Course.findById(courseId);
    userCourses.push(course);
    await User.findOneAndUpdate({ username }, { purchasedCourse: userCourses });
    return res.status(201).json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  try {
    const user = await User.findOne({ username });
    const purchasedCourse = user.purchasedCourse;
    return res.json({ purchasedCourse });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "something went wrong" });
  }
});

module.exports = router;
