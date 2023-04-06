const router = require("express").Router();
const School = require("../models/school.js");

// rout to create a new school
router.put("/:id", async (req, res) => {
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
  

// rout to update school info





module.exports = router;