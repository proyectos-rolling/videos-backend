const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const categoryController = require("./controllers/categoryController");
const videoController = require("./controllers/videoController");

//Rutas de Categoria
router.get("/categories",[],categoryController.index);

//Rutas de Video
router.get("/videos",[],videoController.index);

//Games routes
// router.get("/games/", [], gameController.index);
// router.get("/games/active", [], gameController.active);
// router.get("/games/featured", [], gameController.featured);
// router.get("/games/specialoffers", [], gameController.specialoffers);
// router.post(
//     "/games/new/",
//     [
//         check("name", "El nombre es obligatorio!").notEmpty(),
//         check("description", "La descripción es obligatoria!").notEmpty(),
//         check("price", "El precio es obligatorio!").notEmpty(),
//     ],
//     gameController.createGame
// );
// router.put(
//     "/games/edit/",
//     [
//         check("name", "El nombre es obligatorio!").notEmpty(),
//         check("description", "La descripción es obligatoria!").notEmpty(),
//         check("price", "El precio es obligatorio!").notEmpty(),
//     ],
//     gameController.updateGame
// );
// router.delete("/games/:_id", [], gameController.destroy);

// //Users routes
// router.get("/users/", [], userController.index);
// router.post(
//     "/users/new/",
//     [
//         check("name", "El nombre es obligatorio!").not().isEmpty(),
//         check("email", "El email es obligatorio!").not().isEmpty(),
//         check("email", "Debe ser formato email!").isEmail(),
//         check("password", "Debe agregar la contraseña").notEmpty(),
//         check(
//             "password",
//             "El password debe ser de un minimo de 6 caracteres"
//         ).isLength({ min: 6 }),
//     ],
//     userController.createUser
// );

// router.post("/login/", userController.login)
// //contact
// router.post("/contact/", contactController.sendMail)

// //checkout MercadoPago
// router.post("/checkout/mp/", MPController.checkout)

module.exports = router;