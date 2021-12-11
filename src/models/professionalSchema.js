const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    professional:{ 
        type: String,
        required: true
     },
    specialty:{ 
        type: String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    district:{ 
        type: String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    likes:{ 
        type: Number,
        required:false,
    },
    LIBRAS:{ 
        type: Boolean,
        required:true,
    },
    createdAt:{
        type: String,
        default: new Date(), 
    },
});



module.exports = mongoose.model("professional", professionalSchema);
