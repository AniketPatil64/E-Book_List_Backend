const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const User = mongoose.model("User",Userschema);
module.exports = User;