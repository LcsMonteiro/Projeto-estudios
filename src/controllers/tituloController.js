const mongoose = require("mongoose")
const Titulo = require("../models/titulo")


const criaTitulo = async (req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm
    })

    const tituloJaExiste = await Titulo.findOne({ nome: req.body.nome })
    if (tituloJaExiste) {
        return res.status(409).json({ error: "Título já cadastrado!" })
    }

    try {
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const mostraTitulos = async (req, res) => {
    const titulos = await Titulo.find().populate("estudio")
    return res.status(200).json(titulos)
}

const mostraTitulosMadhouse = async (req, res) => {
    const titulos = await Titulo.find().populate("estudio")
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Madhouse")
    
    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosghibli = async(req,res) => {
    const titulos = await Titulo.find().populate("estudio")
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    
    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosCopa = async(req,res) => {
    const titulos = await Titulo.find().populate("estudio")
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Copa Studio")
    
    return res.status(200).json(titulosFiltrado)
}

const atualizaTitulo =  async (req, res)=> {
    try {
        const titulo = await Titulo.findById(req.params.id)
        if (titulo == null) {
            return res.status(400).json({ message: "Título não encontrado!"})
        }

        if (req.body.nome != null) {
            titulo.nome = req.body.nome
        }

        if (req.body.genero != null) {
            titulo.genero = req.body.genero
        }

        if (req.body.descricao != null) {
            titulo.descricao = req.body.descricao
        }

        if (req.body.estudio != null) {
            titulo.estudio = req.body.estudio
        }

        if (req.body.criadoEm != null) {
            titulo.criadoEm = req.body.criadoEm
        }

        const tituloAtualizado = await titulo.save()
        res.json(tituloAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}



const deletaTitulo = async (req, res) => {
    try {
        const titulo = await Titulo.findById(req.params.id)
        if (titulo == null) {
            return res.status(400).json({message: "Uaii, título não encontrado!"})
        }
        await titulo.remove()
        res.json({message: "Título deletado com sucesso!!"})
        
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = {
    criaTitulo,
    mostraTitulos,
    mostraTitulosMadhouse,
    mostraTitulosghibli,
    mostraTitulosCopa,
    atualizaTitulo,
    deletaTitulo
    

}