const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    name: {
     type: String,
     required : true,
    },

    comment: {
     type: String,
     required : true
    },

    post:{
     type: Schema.Types.ObjectId,
     ref : 'Post',
     required : true
    }

  },
  {
    timestraps: true,
  }
  )
  
  
  module.exports = mongoose.model('Comment', commentSchema);