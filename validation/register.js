const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is empty";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is empty";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Invalid email address"
    }

    if(Validator.isEmpty(data.password)){
        errors.name = "Password field is empty";
    }

    if(Validator.isEmpty(data.password2)){
        errors.name = "Repeat password field is empty";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords don't match";
    }

    if(!Validator.isLength(data.password, {min:6,max:30})){
        errors.name = "Password must be at least 6 characters";
    }

    return {errors, isValid:isEmpty(errors)};


}