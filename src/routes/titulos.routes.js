const express = require("express")
const router = express.Router()
const controller = require("../controllers/tituloController")

router.post("/", controller.criaTitulo)
router.get("/", controller.mostraTitulos)

router.get("/madhouse", controller.mostraTitulosMadhouse)
router.get("/ghibli", controller.mostraTitulosghibli)
router.get("/copa-studio", controller.mostraTitulosCopa)

router.patch("/:id", controller.atualizaTitulo)

router.delete("/:id", controller.deletaTitulo)

module.exports = router