const express = require("express"); 
const router = express.Router();
const { check } = require("express-validator");
const categoryController = require("./controllers/categoryController");
const videoController = require("./controllers/videoController");

//Rutas de Categoria
router.get("/categories", [], categoryController.index);
router.post(
  "/categories/new",
  [check("name", "El nombre es obligatorio!").notEmpty()],
  categoryController.createCategory
);
router.delete("/categories/:_id", categoryController.deleteCategory);

//Rutas de Video
router.get("/videos", [], videoController.index);
router.get("/videos/:_id", [], videoController.show);
router.post(
  "/videos/new",
  [
    check("owner", "No existe la categoria").notEmpty(),
    check("title", "El titulo es obligatorio!").notEmpty(),
    check("url", "falta el URL").notEmpty(),
  ],
  videoController.createVideo
);
router.delete("/videos/:_id", videoController.deleteVideo);

//Rutas de comentarios
router.post(
  "/videos/:_id/comments/new",
  [check("comment", "El comentario no debe estar vacío").notEmpty()],
  videoController.newComment
);

module.exports = router;
