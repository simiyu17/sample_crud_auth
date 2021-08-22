const resJson = require("../models/response.js");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

class userService {
    constructor() { }

    async createUser(user, res) {
        return await User.create(user)
            .then(user => {
                res.status(200).json({
                    message: "User Created Successfully!",
                    user_id: user.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async updateUser(id, user, res) {
        return await User.update(user, { where: { id: id } })
            .then(user => {
                res.status(200).json({
                    message: "User Updated Successfully!",
                    user_id: user.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async getUser(id, res) {
        return await User.findByPk(id)
            .then(user => {
                res.status(200).json({
                    message: "Success",
                    user: user
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async getUserByUsername(username, res) {
        return await User.findOne({ where: { username: username } })
            .then(user => {
                res.status(200).json({
                    message: "success",
                    user: user
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    getAllUsers(condition, res) {
        User.findAndCountAll(condition)
            .then(users => {
                res.status(200).json({
                    message: "Success",
                    users: users
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }

    async removeUser(id, res) {
        return await User.destroy({ where: { id: id } })
            .then(user => {
                res.status(200).json({
                    message: "User Deleted Successfully!",
                    user_id: user.id
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    }
}

module.exports = userService;