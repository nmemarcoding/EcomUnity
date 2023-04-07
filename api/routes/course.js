const router = require("express").Router();
const Course = require("../models/course.js");
const School = require("../models/school.js");
const User = require("../models/user.js");
const {teacher,student,auth} = require("../middlewear/auth.js");
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

// rout to get all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to get all courses by school
router.get("/school", async (req, res) => {
    try {
        const schoolId = req.school;
        const courses = await Course.find({ school: schoolId });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to get all courses by teacher
router.get("/teacher", teacher, async (req, res) => {
    try {
        const teacherId = req.userId;
        const courses = await Course.find({ teacher: teacherId });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to get all courses by student
router.get("/student", student, async (req, res) => {
    try {
        const studentId = req.userId;
        const courses = await Course.find({ students: studentId });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to get course by id and user sould be in the same school as the course and user sould login auth
router.get("/:id", auth, async (req, res) => {
    try {
        const courseId = req.params.id;
        const userId = req.userId;
        const schoolId = req.school;
        
        // find the course
        const corse = await Course.find({ _id: courseId });
        // check if the course is in the same school as the user
        if (corse[0].school != schoolId) {
            return res.status(400).json({ error: "User is not in the same school as the course" });
        }
        // check if the user is in the course
        if (!corse[0].students.includes(userId)) {
            return res.status(400).json({ error: "User is not in the course" });
        }
        res.status(200).json(corse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to delete course by id and user sould be in the same school as the course and user sould be teacher
router.delete("/:id", teacher, async (req, res) => {
    try {
        const courseId = req.params.id;
        const userId = req.userId;
        const schoolId = req.school;

        // find the course and check if the course is in the same school as the user and check if the user is the teacher of the course
        const course = await Course.findOne({ _id: courseId, teacher: userId, school: schoolId });
        if (!course) {
            return res.status(400).json({ error: "Course does not exist" });
        }
        // delete the course
        await course.delete();
        res.status(200).json({ message: "Course deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to update course by id and user sould be in the same school as the course and user sould be teacher
router.put("/:id", teacher, async (req, res) => {
    try {
        const courseId = req.params.id;
        const userId = req.userId;
        const schoolId = req.school;
        const { name, description, startDate, endDate, students } = req.body;

        // find the course and check if the course is in the same school as the user and check if the user is the teacher of the course
        const course = await Course.findOne({ _id: courseId, teacher: userId, school: schoolId });
        if (!course) {
            return res.status(400).json({ error: "Course does not exist" });
        }
        // update the course
        course.name = name;
        course.description = description;
        course.startDate = startDate;
        course.endDate = endDate;
        course.students = students;
        await course.save();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});







    







module.exports = router;