const express = require ('express')
const router = express.Router()
const { setComment, getComments } = require('../controller/commentController')

router.post('/', setComment)
router.post('/', getComments)


module.exports = router