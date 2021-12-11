
const express = require("express");
const router = express.Router();
const controller = require("../controller/professionalController")

router.get("/all", controller.getAll);
router.get("/name", controller.getByName);
router.get("/specialty", controller.getBySpecialty);
router.get("/district", controller.getByDistrict);
router.get("/:id", controller.getById); 

router.post("/create", controller.createProfessional);
router.post("/:id/like", controller.like);

router.put("/:id", controller.updateProfessional);

router.delete("/:id", controller.deleteProfessional);



module.exports = router

