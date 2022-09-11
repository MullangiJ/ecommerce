var validator = require("email-validator");
var passwordValidator = require('password-validator');
const validatePhoneNumberRegex = /^\+?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/;

const payloadvalidation = (req, res, next) => {

    var schema = new passwordValidator();
    schema
        .is().min(4)                                    // Minimum length 8
        .is().max(15)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(2)                                // Must have at least 2 digits
        .has().not().spaces()                           // Should not have spaces
    //.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    //console.log("paswd validation", req.body.password, schema.validate(req.body.password));

    //Validation logic comes here!
    let emailflag = validator.validate(req.body.email);
    console.log(req.body, emailflag);
    if (emailflag) {
        //write password validation with spl characters, character length shud be 8.
        if (schema.validate(req.body.password)) {
            console.log("phone", validatePhoneNumberRegex.test(req.body.phone));
            if (validatePhoneNumberRegex.test(req.body.phone)) {
                next();
            } else {
                return res.status(400).send({ "message": "Phone number is invalid" });
            }
        } else {
            return res.status(400).send({ "message": "Password Validation rules failed" });
        }
    } else {
        return res.status(400).send({ "message": "email should be valid" });
    }
};

//const validatePhoneNumber = require('validate-phone-number-node-js');
//const result = validatePhoneNumber.validate('+8801744253089');

module.exports = payloadvalidation;