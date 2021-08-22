const resJson = require("../models/response.js");
const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

class studentService {
    constructor() { }

    async createStudent(student, res) {
        return await Student.create(student)
            .then(student => {
                res.status(200).json({
                    message: "Student Created Successfully!",
                    student_id: student.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async updateStudent(id, student, res) {
        return await Student.update(student, { where: { id: id } })
            .then(student => {
                res.status(200).json({
                    message: "Student Updated Successfully!",
                    student_id: student.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async getStudent(id, res) {
        return await Student.findByPk(id)
            .then(student => {
                res.status(200).json({
                    message: "Success",
                    student: student
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    getAllStudents(condition, res) {
        Student.findAndCountAll(condition)
            .then(students => {
                res.status(200).json({
                    message: "Success",
                    students: students
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async removeStudent(id, res) {
        return await Student.destroy({ where: { id: id } })
            .then(student => {
                res.status(200).json({
                    message: "Student Deleted Successfully!",
                    student_id: student.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }
}

module.exports = studentService;