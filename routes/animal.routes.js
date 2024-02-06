const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { animalPost, animalesGet } = require('../controllers/animal.controller');

const { esRolValido } = require('../helpers/db-validator');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre del animal es obligatorio").not().isEmpty(),
        check("tipo", "El tipo del animal es obligatorio").not().isEmpty(),
        check("raza", "La raza del animal es obligatorio").not().isEmpty(),
        check("estadoDelAnimal", "El estado que se encuentra el animal es obligatorio"),
        check("role").custom(esRolValido),
        validarCampos
    ], animalPost);

router.get("/", animalesGet);
module.exports = router;