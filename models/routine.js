const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

let titleLengthChecker = (title) => {
    if (!title) {
        return false;
    } else {
        if (title.length < 5 || title.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};
  
let validTitle = (title) => {
    if (!title) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title);
    }
};
  
 const titleValidators = [
    {
        validator: titleLengthChecker,
        message: 'El título debe tener un mínimo de 5 caracteres pero un máximo de 50'
    },
    {
        validator: validTitle,
        message: 'El título no puede contener caracteres especiales'
    }
];

let descriptionLengthChecker = (description) => {
    if (!description) {
        return false;
    } else {
        if (description.length < 5 || description.length > 120) {
            return false;
        } else {
            return true;
        }
    }
};
  
const descriptionValidators = [
    {
        validator: descriptionLengthChecker,
        message: 'La descripción debe tener un mínimo de 5 caracteres pero un máximo de 120'
    }
];
  
let bodyLengthChecker = (body) => {
    if (!body) {
        return false;
    } else {
        if (body.length < 5 || body.length > 1000) {
            return false;
        } else {
            return true;
        }
    }
};
  
const bodyValidators = [
    {
        validator: bodyLengthChecker,
        message: 'La explicación debe tener un mínimo de 5 caracteres pero un máximo de 1000'
    }
];

let commentLengthChecker = (comment) => {
    if (!comment) {
        return false;
    } else {
        if (comment.length < 5 || comment.length > 120) {
            return false;
        } else {
            return true;
        }
    }
};

const commentValidators = [
    {
        validator: commentLengthChecker,
        message: 'El comentario debe tener un mínimo de 5 caracteres pero un máximo de 120'
    }
];

const commentSchema = new Schema({
    comment: { type: String, validate: commentValidators },
    commentator: { type: String }
});

const routineSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    description: { type: String, required: true, validate: descriptionValidators },
    body: { type: String, required: true, validate: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    comments: { type: [commentSchema] }
});

module.exports = mongoose.model('Routine', routineSchema);