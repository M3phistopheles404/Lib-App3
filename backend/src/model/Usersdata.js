const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.ndhrm.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var Usersdata = mongoose.model('usersdata',UsersSchema);

module.exports = Usersdata;