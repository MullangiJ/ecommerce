const express = require('express');
var base64 = require('base-64');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
let validator =  require("../helpers/validator");
router.post('/createUser', validator, (req, res, next) => {
    console.log(req.body);
    req.body.password = base64.encode(req.body)
    let user =  new User(req.body);
    user.save(function(err, userCreated){
         console.log("User Created", userCreated);
         res.send({"message": "User created successfully"});
     });
});
/*router.post('/login', (req, res, next) => {
    User.findOne(req.body, function(err, userDetails){
        if(err){
            console.log(err);
            res.status(403).send({"message": "Unable to find user"});
        }else{
            res.status(200).send(userDetails);
        }
    })

});*/

module.exports = router;