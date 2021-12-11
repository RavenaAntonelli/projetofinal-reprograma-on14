const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    comment:{
        type:String,
        required: true
    },
    createdAt:{
        type: String,
        default: new Date(), 
    },
    

    
})
module.exports = mongoose.model("comment", userSchema)