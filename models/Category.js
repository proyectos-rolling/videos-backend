const mongoose = require ("mongoose");

const CategorySchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]  
});

module.exports = mongoose.model("Category",CategorySchema);