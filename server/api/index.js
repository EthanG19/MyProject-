'use strict'
const Students = require('../db/models/students')
const Campuses = require('../db/models/campuses')

const router = require('express').Router()

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
// router.use('/students', require('../db/models/students'))
// router.use('/campuses', require('../db/models/campuses'))

// router.use('/students/#id', require('../db/models/students'))
// router.use('/campuses/#id', require('../db/models/campuses'))

router.get('/students', async (req, res, next) => {
    const allstudents = await Students.findAll() 
    res.json(allstudents)  
}) 
router.get('/campuses', async (req, res, next) => {
  const allCampuses = await Campuses.findAll()
  res.json(allCampuses)   
}) 

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
