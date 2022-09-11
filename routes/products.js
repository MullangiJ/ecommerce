/*const express = require('express');
var base64 = require('base-64');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
let sessionValidation =  require("../helpers/sessionvalidator");
router.post('/create', sessionValidation, (req, res, next) => {
    console.log(req.body);
    req.body.password = base64_encode(req.body.password);
    let user =  new User(req.body);
    user.save(function(err, userCreated){
         console.log("User Created", userCreated);
         res.send({"message": "User created successfully"});
     });
});


module.exports = router;*/