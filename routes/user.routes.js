module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const db = require("../models");
    const User = db.users;
    var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
    var config = require('../config/config'); // get our config file
    var bcrypt = require('bcryptjs');
    var router = require("express").Router();

    var VerifyToken = require('../middleware/VerifyToken');
  
    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", VerifyToken, users.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", VerifyToken, users.findOne);
  
    // Update a User with id
    router.put("/:id", VerifyToken, users.update);
  
    // Delete a User with id
    router.delete("/:id", VerifyToken, users.delete);

    router.post('/login', function(req, res) {

      return User.findOne({ where: { username: req.body.username } })
            .then(user => {
              // check if the password is valid
              var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
              if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
              // if user is found and password is valid
              // create a token
              var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });
                // return the information including token as JSON
              res.status(200).send({ auth: true, token: token });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.toString() || 'internal server error',
                });
            });

    
    });
  
    app.use('/api/users', router);
  };