const express = require ('express')
const asyncHandler = require('express-async-handler')

const Post = require('../model/postModel')
const Comment = require('../model/commentModel')

// Getting post 
const getPost = asyncHandler(async (req,res) => {
    const posts = await Post.find(req.body)
    // we get post id from the body and give it to the comment 
    // ans comment find relevent post's comment
    const comment = await Comment.find({postId:(posts._id)})
    res.status(200).json({posts,comment})
} )

// Setting post 

const setPost = asyncHandler(async (req , res) => {

    const posts = await Post.create(req.body)
    
    res.status(200).json({posts})

} )

const deletePost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id)
    await post.remove()
    res.status(200).json({Message:"post is deleted"})
})
const updatePost = asyncHandler(async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id ,req.body ,{
        new : true
    })
    res.status(200).json({Message:"post is Updated successfully" , data : post})
})


module.exports = {
    getPost,
    setPost,
    deletePost,
    updatePost
}
