var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
   username : String,
   password : String
},{collection: 'akun'});

var Post = mongoose.model("Post",PostSchema);
module.exports = Post;