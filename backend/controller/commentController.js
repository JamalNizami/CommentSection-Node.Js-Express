const express = require ('express')
const asyncHandler = require('express-async-handler')

const Comment = require('../model/commentModel')

// gettinh All comments

const getComments = asyncHandler (async (req,res)=> {  
    const comments = await Comment.find(req.body);
    res.status(200).json({comments})

})

const deleteComment = asyncHandler(async (req,res)=>{
    const comment = await Comment.findById(req.params.id)
    await comment.remove()
    res.status(200).json({Message:"comment is deleted"})

} )

const updateComment = asyncHandler(async (req,res)=> {
    const comment = await Comment.findByIdAndUpdate(req.params.id ,req.body ,{
        new : true
    })
    res.status(200).json({Message:"comment is Updated"})

} )



// Adding a comment 
const setComment = asyncHandler (async (req, res)=> {
    const comment = await Comment.create(req.body)

    res.status(200).json({Message : "Comment Added" , data : comment})
})


module.exports = {setComment  , getComments , deleteComment , updateComment }