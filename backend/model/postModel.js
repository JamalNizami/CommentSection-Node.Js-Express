const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
   type: String,
   required : true,
 },
},
{
  timestraps: true,
}
)


module.exports = mongoose.model('Post', postSchema); 
