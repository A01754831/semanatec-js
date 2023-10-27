const express = require('express');
const router = express.Router();
const personaController=require("../controllers/persona");

//router.post('/agregarPersona',personaController.postAgregarPersona);
//Rutas de mi controller
router.post('/agregarPersona',personaController.postAgregarPersona);
router.get('/consultarPersonas',personaController.getconsultarPersonas);


module.exports = router