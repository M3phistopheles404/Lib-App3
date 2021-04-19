const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.ndhrm.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;