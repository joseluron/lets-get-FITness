const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length < 3 || username.length > 18) {
            return false;
        } else {
            return true;
        }
    }
};
  
let validUsername = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};
  
 const usernameValidators = [
    {
        validator: usernameLengthChecker,
        message: 'El nombre de usuario debe tener un mínimo de 3 caracteres pero un máximo de 18'
    },
    {
        validator: validUsername,
        message: 'El nombre de usuario no puede contener caracteres especiales'
    }
];

let emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }
    }
};
  
let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};
  
 const emailValidators = [
    {
        validator: emailLengthChecker,
        message: 'El email debe tener un mínimo de 5 caracteres pero un máximo de 30'
    },
    {
        validator: validEmailChecker,
        message: 'El email debe tener un formato apropiado'
    }
];
  
 let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length <4 || password.length > 20) {
            return false;
        } else {
            return true;
        }
    }
};
  
 const passwordValidators = [
    {
        validator: passwordLengthChecker,
        message: 'El password debe tener un mínimo de 4 caracteres pero un máximo de 15'
    }
];

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
    password: { type: String, required: true, validate: passwordValidators }
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) {
            return next(err);
        } else {
            this.password = hash;
            next();
        }
    });
});
  
userSchema.methods.comparePasswords = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);