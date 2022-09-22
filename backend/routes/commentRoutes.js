const express = require ('express')
const router = express.Router()
const { setComment, getComments,deleteComment,updateComment} = require('../controller/commentController')

router.post('/', setComment)
router.get('/', getComments)
router.delete('/:id', deleteComment)
router.put('/:id', updateComment)




module.exports = router