const router = require("express").Router();
const Module = require("../models/module.js");
const Course = require("../models/course.js");
const School = require("../models/school.js");
const User = require("../models/user.js");
const Assignment = require("../models/assignment.js");
const {teacher,student,auth} = require("../middlewear/auth.js");

// rout to create new module check if user is teacher and is the teacher of the course andd module id to course
router.post("/", teacher, async (req, res) => {
    const { name, description, startDate, endDate, courseId, contents } = req.body;
  
    try {
      // Get the teacher id from the token
      const teacherId = req.userId;
      const schoolId = req.school;
  
      // finding the course
      const course = await Course.findOne({ _id: courseId });
      if (!course) {
        return res.status(400).json({ error: "Course does not exist" });
      }
  
      // Check if the teacher is the teacher of the course
      if (course.teacher.toString() !== teacherId.toString()) {
        return res.status(400).json({ error: "Teacher is not the teacher of the course" });
      }
  
      // Check if a module with the same name already exists for the course
      const existingModule = await Module.findOne({ name: name, courseId: courseId });
      if (existingModule) {
        return res.status(400).json({ error: "A module with the same name already exists for the course" });
      }
  
      // Create a new module
      const newModule = new Module({ name, description, startDate, endDate, teacher: teacherId, school: schoolId, courseId, contents });
      const savedModule = await newModule.save();
  
      // adding module id to course
      course.modules.push(savedModule._id);
      await course.save();
  
      res.status(200).json(savedModule);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
  
// rout to creat new assignment check if user is teacher and is the teacher of the course andd assignment id to module
router.post("/assignment", teacher, async (req, res) => {
    const { name, description, startDate, endDate, moduleId, contents,title,dueDate } = req.body;

    try {
        // Get the teacher id from the token
        const teacherId = req.userId;
        const schoolId = req.school;

        // finding the module
        const model = await Module.findOne({ _id: moduleId });
        if (!model) {
            return res.status(400).json({ error: "Module is exist" });
        }

        // Check if the teacher is the teacher of the module
        if (model?.teacher?.toString() !== teacherId.toString()) {
        
         
            return res.status(400).json({ error: "You are not the teacher of the module" });
        }

        // Check if a assignment with the same name already exists for the module
        const existingAssignment = await Assignment.findOne({ title: title, moduleId: moduleId });
        if (existingAssignment) {
          
          return res.status(400).json({ error: "A assignment with the same title already exists for the module" });
        }

        // Create a new assignment
        const newAssignment = new Assignment({ name, description, startDate, endDate, teacher: teacherId, school: schoolId, moduleId, contents,title,dueDate });
        const savedAssignment = await newAssignment.save();

        // adding assignment id to module
        model.assignments.push(savedAssignment._id);
        await model.save();

        res.status(200).json(savedAssignment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});










module.exports = router;