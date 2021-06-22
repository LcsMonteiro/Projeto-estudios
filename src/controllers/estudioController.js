const mongoose = require("mongoose")
const Estudio = require("../models/estudio")

const criaEstudio = async (req, res) => {
    const estudio = new Estudio({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })

    const estudioJaExiste = await Estudio.findOne({ nome: req.body.nome })
    if (estudioJaExiste) {
        return res.status(409).json({ error: "Estudio já cadastrado!" })
    }

    try {
        const novoEstudio = await estudio.save()
        res.status(201).json(novoEstudio)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const mostraEstudios = async (req, res) => {
    try {
        const estudios = await Estudio.find()
        return res.status(200).json(estudios)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

const atualizaEstudio =  async (req, res)=> {
    try {
        const estudio = await Estudio.findById(req.params.id)
        if (estudio == null) {
            return res.status(400).json({ message: "Estúdio não encontrado!"})
        }

        if (req.body.nome != null) {
            estudio.nome = req.body.nome
        }

        const estudioAtualizado = await estudio.save()
        res.json(estudioAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}


const deletaEstudio = async (req, res) => {
    try {
        const estudio = await Estudio.findById(req.params.id)
        if (estudio == null) {
            return res.status(400).json({message: "Uaii, estúdio não encontrado!"})
        }
        await estudio.remove()
        res.json({message: "Estúdio deletado com sucesso!!"})
        
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}












    module.exports = {
        criaEstudio,
        mostraEstudios,
        atualizaEstudio,
        deletaEstudio
    }