const express = require("express")

const app = express()

app.use(express.json())

const titulo = require("./routes/titulos.routes")
const estudio = require("./routes/estudios.routes")

app.use("/titulos", titulo)
app.use("/estudios", estudio)

module.exports = app