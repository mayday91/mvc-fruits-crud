//////////////Import Dependencies////////
const mongoose = require('./connection')

/////////////Define User Model///////////
/// pull schema and model constructors from mongoose using destructuring syntax
const { Schema, model } = mongoose

console.log('this is schema', Schema)
console.log('this is model', model)

/// make a user schema
const userSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true    
    }
})

/// make a user model with userSchema
const User = model('User', userSchema)

/// export to user model
module.exports = User