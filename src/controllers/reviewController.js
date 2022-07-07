const express = require('express')
const jwt = require('jsonwebtoken')
const reviewModel = require('../models/reviewModel')
const {isValid , regexRating} = require('../validator/validation')


const createReview = async function(req,res){

let data =req.body
let {bookId, reviewedBy, reviewedAt, rating } = data

if (!mongoose.isValidObjectId(bookId) ||!isValid(bookId) ) { return res.status(400).send({ status: false, msg:"bookId is not valid"})}
if(!isValid(reviewedBy)){return res.status(400).send({ status: false, msg:"please enter reviewer name" })}

if(!isValid(rating)){return res.status(400).send({ status: false, msg:"please enter rating" })}

if(!regexRating(rating)){return res.status(400).send({ status: false, msg:"rating in between 0 to 10" })}

let saveData = await reviewModel.create(data)

return res.status(201).send({  status: true, message: 'Success', data:saveData})





}

module.exports.createReview= createReview