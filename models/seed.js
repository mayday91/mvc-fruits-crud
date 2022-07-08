///// This file runs on npm run seed


//////////////Import Dependencies////////
const mongoose = require('./connection')
const Fruit = require('./fruit')

//////////////Seed Code/////////////////
// save my db connection to variable for easy reference
const db = mongoose.connection

// this runs callback function when db connection is opened from this file
db.on('open', () => {
    // array of starter fruits
    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: true },
        { name: "Grape", color: "purple", readyToEat: true },
        { name: "Banana", color: "green", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: true },
        { name: "Coconut", color: "brown", readyToEat: false },
      ]
      // when we seed data we usually clear out the db first
    Fruit.remove({})
    // then create that data
    .then(deletedFruits => {
        console.log('this is what remove returns', deletedFruits)
        // now that our delete was successful we can create our fruits
            Fruit.create(startFruits)
            .then(data => {
                console.log('the new fruits', data)
                db.close()
            })
            .catch(error => {
                console.log('error:', error)
                db.close()
            })
        })
        .catch(error => {
            console.log('error:', error)
            db.close
        })
      // whether its successful or not we want to close our db connection
})