module.exports = app => {
  const students = require("../controllers/student.controller.js");

  var router = require("express").Router();

  var VerifyToken = require('../middleware/VerifyToken');

  // Create a new Student
  router.post("/", VerifyToken, students.create);

  // Retrieve all Students
  router.get("/", VerifyToken, students.findAll);

  // Retrieve a single Student with id
  router.get("/:id", VerifyToken, students.findOne);

  // Update a Student with id
  router.put("/:id", VerifyToken, students.update);

  // Delete a Student with id
  router.delete("/:id", VerifyToken, students.delete);

  app.use('/api/students', router);
};