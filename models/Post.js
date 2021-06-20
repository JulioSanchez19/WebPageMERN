var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PostSchema = new Schema({
    users: String,
    email: String,
    image: String,
    message: String,
    publicationdate: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Posts', PostSchema);