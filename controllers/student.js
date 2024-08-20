const Student = require("../models/student");

async function createStudent(req, res) {
  const student = new Student(req.body);

  try {
    const info = await student.save();

    res.status(201).json({
      id: info.id,
      fullName: info.fullName,
      location: info.location,

      exam: info.exam,
      location: info.location,
      email: info.email,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function fetchStudent(req, res) {
  const { studentId } = req.params;
  try {
    const studentInfo = await Student.findById(studentId);

    res.status(200).json({
      id: studentId,
      fullName: studentInfo.fullName,
      location: studentInfo.location,
      email: studentInfo.email,
      exam: studentInfo.exam,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}
module.exports = {
  createStudent,
  fetchStudent,
};
