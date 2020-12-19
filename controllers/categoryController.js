const Category = require("../models/Category");
const {validationResult}=require("express-validator");

exports.index = async (req, res) => {
    let categories = await Category.find({}).populate("videos");
    try {
        res.json(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};