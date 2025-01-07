const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const UserModel =mongoose.model('regUser',userSchema)

module.exports=UserModel