const Video = require("../models/Video");
const {validationResult}=require("express-validator");

exports.index = async (req, res) => {
    let videos = await Video.find({});
    try {
        res.json(videos);
    } catch (error) {
        res.status(500).send(error);
    }
};