const router = require("express").Router();
const School = require("../models/school.js");
const {godAdmin} = require("../middlewear/auth.js");

// rout to create a new school
router.post("/", godAdmin, async (req, res) => {
    const { name } = req.body;
    try {
      const existingSchool = await School.findOne({ name });
      if (existingSchool) {
        return res.status(400).json({ message: "School already exists" });
      }
      const newSchool = new School(req.body);
      const savedSchool = await newSchool.save();
      res.status(200).json(savedSchool);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// rout to update school info
router.put("/:id", godAdmin, async (req, res) => {
    const schoolId = req.params.id;
    try {
      const updatedSchool = await School.findByIdAndUpdate(
        schoolId,
        req.body,
        { new: true }
      );
      if (!updatedSchool) {
        return res.status(404).json({ message: "School not found" });
      }
      res.status(200).json(updatedSchool);
    } catch (err) {
      res.status(500).json(err);
    }
});

// rout to delete a school
router.delete("/:id", godAdmin, async (req, res) => {
    const schoolId = req.params.id;
    try {
        const deletedSchool = await School.findByIdAndDelete(schoolId);
        if (!deletedSchool) {
            return res.status(404).json({ message: "School not found" });
        }
        res.status(200).json(deletedSchool);
    } catch (err) {
        res.status(500).json(err);
    }
});

// rout to get a school
router.get("/:id", async (req, res) => {
    const schoolId = req.params.id;
    try {
      const school = await School.findById(schoolId);
      if (!school) {
        return res.status(404).json({ message: "School not found" });
      }
      res.status(200).json(school);
    } catch (err) {
      res.status(500).json(err);
    }
});

// rout to get all schools
router.get("/", async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (err) {
        res.status(500).json(err);
    }
});


  




module.exports = router;