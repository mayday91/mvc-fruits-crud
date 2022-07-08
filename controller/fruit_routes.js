const express = require('express')
const router = express.Router()

// importing fruit model to access database
const Fruit = require('../models/fruit.js')

// DELETE route
router.delete('/:id', (req, res) => {
    const fruitId = req.params.id
    Fruit.findByIdAndRemove(fruitId)
    .then(fruit => {
        res.redirect('/fruits')
    })
    .catch(err => {
        res.json(err)
    })
})




// GET route for displaying an update form
router.get('/:id/edit', (req, res) => {
    const fruitId = req.params.id
    Fruit.findById(fruitId)
        .then(fruit => {
            res.render('fruits/edit', { fruit })
        })
        .catch(err => {
            res.json(err)
        })
})

// PUT - Update
router.put('/:id', (req, res) => {
    const fruitId = req.params.id

    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    Fruit.findByIdAndUpdate(fruitId, req.body, { new: true })
        .then(fruit => {
            res.redirect(`/fruits/${fruit._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// GET route for displaying my form for create
router.get('/new', (req, res) => {
    res.render('fruits/new')
})

//POST - Create
router.post('/', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    Fruit.create(req.body)
    .then(fruit => {
        res.redirect('/fruits')
    })
    .catch(err => {
        res.json(err)
    })
})

// GET - Index
// localhost:3000/fruits
router.get('/', (req, res) => {
    // mongoose to find all fruits
    Fruit.find({})
    // return fruits as json
    .then(fruits => {
        // res.json(fruit)
        res.render('fruits/index', { fruits })
    })
    .catch(err => {
        res.json(err)
    })
})

// GET- Show
// localhost:3000/fruits/:id (:id will change with the id of the fruit being passed in)
router.get('/:id', (req, res) => {
    const fruitId = req.params.id

    Fruit.findById(fruitId)
    // send back json
    .then(fruit => {
        res.render('fruits/show', { fruit })
    })
    .catch(err => {
        res.json(err)
    })
})

// seed route has been moved to models/seed.js
// insert many items into our database with just going to this route
// localhost:3000/fruits/seed
// router.get('/seed', (req, res,) => {
//     const startFruits = [
//         { name: "Orange", color: "orange", readyToEat: true },
//         { name: "Grape", color: "purple", readyToEat: true },
//         { name: "Banana", color: "green", readyToEat: false },
//         { name: "Strawberry", color: "red", readyToEat: true },
//         { name: "Coconut", color: "brown", readyToEat: false },
//       ]

//     // delete if we have fruits  
//     Fruit.deleteMany({})
//         // insert data
//         .then(() => {
//             Fruit.create(startFruits)
//             // return this data as json to view
//             .then(data => {
//                 res.json(data)
//             })
//             .catch(console.error)
//         })
    
// })

router.get('/fruits', (req, res) => {
    res.send('Fruits Page')
})

module.exports = router