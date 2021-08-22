
const stService = require("../services/student.service.js");
const StudentService = new stService();

// Create and Save a new Student
exports.create = async (req, res) => {
    return await StudentService.createStudent(req.body, res);

};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    return StudentService.getAllStudents({}, res);
};

// Find a single Student with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    return await StudentService.getStudent(id, res);
};

// Update a Student by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;
    return await StudentService.updateStudent(id, req.body, res);
};

// Delete a Student with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;
    return await StudentService.removeStudent(id, res);
};


