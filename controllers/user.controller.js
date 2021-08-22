var bcrypt = require('bcryptjs');
const uService = require("../services/user.service.js");
const UserService = new uService();

// Create and Save a new User
exports.create = async (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let userdata = {
        name : req.body.name,
        username : req.body.username,
        password : hashedPassword
    }
    return await UserService.createUser(userdata, res);

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    return UserService.getAllUsers({}, res);
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    return await UserService.getUser(id, res);
};

// Update a User by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;
    return await UserService.updateUser(id, req.body, res);
};

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;
    return await UserService.removeUser(id, res);
};


