const Video = require("../models/Video");
const Category = require("../models/Category");
const {validationResult}=require("express-validator");

exports.index = async (req, res) => {
    let videos = await Video.find({});
    try {
        res.json(videos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.show = async (req, res) => {
    const {_id} = req.params;
    let video = await Video.findOne({_id});
    try {
        res.json(video);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createVideo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { url, owner } = req.body;
    try {
        //Busco si existe un video con esa url
        let video = await Video.findOne({ url });
        if (video) {
            return res.status(400).json({ msg: 'El video ya existe!!' });
        }
        video = new Video(req.body);
        //guardar en la db
        await video.save();
        const category = await Category.findById(owner);
        category.videos.push(video);
        await category.save();
        res.json({ msg: 'Video creado correctamente!!', video })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'hubo un error', error: error })
    }
}

exports.deleteVideo = async (req, res) => {
    const { _id } = req.params
    try {
        let video = await Video.findOne({ _id });
        if (!video) {
            return res.status(400).json({ msg: "El video no existe!" });
        }
        await video.deleteOne()
        res.json({ msg: "El video fue eliminado" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error", error: error });
    }
};
