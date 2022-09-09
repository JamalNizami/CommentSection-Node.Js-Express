const express = require ('express')
const asyncHandler = require('express-async-handler')

const Post = require('../model/postModel')

const getPost = asyncHandler(async (req,res) => {
    const posts = await Post.find()
    res.status(200).json({posts})
} )

const setPost = asyncHandler(async (req , res) => {

    const posts = await Post.create(req.body)

    res.status(200).json({posts})

} )


module.exports = {
    getPost,
    setPost
}
