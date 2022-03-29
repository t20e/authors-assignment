const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'authors name is required'],
        minlength:[3, 'name needs to be more then 3 characters']
    }
},
    {timestamps:true}
)
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;