const express = require ('express')
const asyncHandler = require('express-async-handler')

const Post = require('../model/postModel')

// Getting post 
const getPost = asyncHandler(async (req,res) => {
    const posts = await Post.find()
    res.status(200).json({posts})
    //  res.status(200).json({Message:"hello"})
} )

// Setting post 

const setPost = asyncHandler(async (req , res) => {

    const posts = await Post.create(req.body)

    res.status(200).json({posts})

} )


module.exports = {
    getPost,
    setPost
}
