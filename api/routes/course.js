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

//  rout to add student to course and cheack if student is in the same school
router.put("/addStudent", student, async (req, res) => {
    const { courseId } = req.body;
    try {
        // Get the student id from the token
        const studentId = req.userId;
        // getting student school
        const studentSchool = req.school;
        // Check if the course exists
        const existingCourse = await Course.findOne({ _id: courseId });
        if (!existingCourse) {
            return res.status(400).json({ error: "Course does not exist" });
        }
        // Check if the student is in the same school as the course
        if (existingCourse.school != studentSchool) {
            return res.status(400).json({ error: "Student is not in the same school as the course" });
        }
        // Check if the student is already in the course
        if (existingCourse.students.includes(studentId)) {
            return res.status(400).json({ error: "Student already in course" });
        }
        // Add the student to the course
        existingCourse.students.push(studentId);
        await existingCourse.save();
        res.status(200).json(existingCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});





    







module.exports = router;