const express = require ('express')
const asyncHandler = require('express-async-handler')

const Comment = require('../model/commentModel')

// Gdding a comment 
// const getComment = asyncHandler(async (req, res) => {
//     const comments = await Comment.find(req.body.id);
//     res.status(200).json(comments);
//   });

// gettinh All comments

const getComments = asyncHandler (async (req,res)=> {  
    const comments = await Comment.find(req.body);
    res.status(200).json({comments})

})



// Adding a comment 
const setComment = asyncHandler (async (req, res)=> {
    const comment = await Comment.create(req.body)

    res.status(200).json({Message : "Comment Added" , data : comment})
})


module.exports = {setComment  , getComments}