const router = require("express").Router();
const Course = require("../models/course.js");
const School = require("../models/school.js");
const User = require("../models/user.js");
const {teacher,student} = require("../middlewear/auth.js");
const user = require("../models/user.js");

// rout to create new course
router.post("/", teacher, async (req, res) => {
    const { name, description, startDate, endDate, students } = req.body;
    try {
        // Get the teacher id from the token
        const teacherId = req.userId;

        const schoolId = req.school;

        // Check if the school exists
        const existingSchool = await School.findOne({ _id: schoolId });
        if (!existingSchool) {
            return res.status(400).json({ error: "School does not exist" });
        }

        // Check if a course with the same name and teacher already exists
        const existingCourse = await Course.findOne({ name, teacher: teacherId });
        if (existingCourse) {
            return res.status(400).json({ error: "Course already exists" });
        }

        // Create a new course
        const newCourse = new Course({ name, description, startDate, endDate, teacher: teacherId, school: schoolId, students });
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});







module.exports = router;