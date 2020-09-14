var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
   username :{
       type: String,
       required: true
   },
   password :{
       type: String,
       required: true
   },
   passwordcheck :{
       type: String,
       required: true
   },
   date:{
       type: Date,
       default: Date.now
   }
},{collection: 'user'});

var User = mongoose.model("User",UserSchema);
module.exports = User;