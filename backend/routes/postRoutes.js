const express = require ('express')
const router = express.Router()
const { getPost, setPost } = require('../controller/postController')

router.get('/', getPost)


router.post('/', setPost)


module.exports = router