// using already connected mongoose not a new one from node_modules
const mongoose = require('./connection')

// inside mongoose I want the keys named Schema and model
const { Schema, model } = mongoose 

const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
}, {
    timestamps: true
}) 

// need to make a model
// this collection will be called fruits
const Fruit = model('Fruit', fruitSchema)

module.exports = Fruit