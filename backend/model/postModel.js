const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: {
   type: String,
   required : true,
 },
 comments: [
  {type :Schema.Types.ObjectId,
   ref:'Comment',
   required : true
  }],
},
{
  timestraps: true,
}
)


module.exports = mongoose.model('Post', postSchema); 
