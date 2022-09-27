const express = require ('express')
const router = express.Router()
const { getPost, setPost,deletePost,updatePost } = require('../controller/postController')

router.get('/', getPost)
router.delete('/:id', deletePost)
router.put('/:id', updatePost)



router.post('/', setPost)


module.exports = router