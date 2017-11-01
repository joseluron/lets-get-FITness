const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
    password: { type: String, required: true, validate: passwordValidators }
});

module.exports = mongoose.model('User', userSchema);