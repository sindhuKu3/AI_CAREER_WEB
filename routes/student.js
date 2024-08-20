const { Router } = require("express");

const { createStudent, fetchStudent } = require("../controllers/student");
const router = Router();

router.post("/", createStudent);
router.get("/:studentId", fetchStudent);
module.exports = router;
