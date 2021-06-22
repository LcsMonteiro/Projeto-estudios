const express = require("express")
const router = express.Router()
const controller = require("../controllers/estudioController")


router.post("/",controller.criaEstudio)

router.get("/", controller.mostraEstudios)

router.patch("/:id", controller.atualizaEstudio)

router.delete("/:id", controller.deletaEstudio)

module.exports = router
