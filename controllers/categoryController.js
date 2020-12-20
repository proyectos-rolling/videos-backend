const Category = require("../models/Category");
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {
        let categories = await Category.find({}).populate("videos");
        try {
            res.json(categories);
        } catch (error) {
            res.status(500).send(error);
        }
    };

//Version Marcos
// {
//     await Category.find({}, function (err, categories) {
//         if (!err) {
//             if (categories.length != 0) {
//                 res.status(200).send(categories);
//             }
//             else {
//                 res.status(400).json({ msg: "No existen categories" });
//             }
//         }
//         else {
//             console.log(err);
//         }
//     }).populate("video");
// };

//Version anterior
// {
//     let categories = await Category.find({}).populate("video");
//     try {
//         res.json(categories);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

exports.createCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name } = req.body;
    try {
        //Busco si existe una categoria con ese nombre
        let category = await Category.findOne({ name });
        if (category) {
            return res.status(400).json({ msg: 'La categoria ya existe!!' });
        }
        category = new Category(req.body);
        //guardar en la db
        await category.save();
        res.json({ msg: 'Categoria creada correctamente!!', category })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'hubo un error', error: error })
    }
}

exports.deleteCategory = async (req, res) => {
    const { _id } = req.params
    try {
        let category = await Category.findOne({ _id });
        if (!category) {
            return res.status(400).json({ msg: "La categoria no existe!" });
        }
        if (category.videos.length > 0) {
            return res.status(400).json({ msg: "la categoria debe estar vacia para borrarse" })
        }
        await category.deleteOne()
        res.json({ msg: "la categoria fue eliminada" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error", error: error });
    }
};
