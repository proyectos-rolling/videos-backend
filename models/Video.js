const mongoose = require ("mongoose");

const VideoSchema = mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    url:{
        type: String,
        required:true,
        trim:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

module.exports = mongoose.model("Video",VideoSchema);