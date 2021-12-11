const UserSchema = require ('../models/userSchema');
const mongoose = require('mongoose');

const getAll = async ( req, res) => {
    try {
        const users = await UserSchema.find()
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
};

const getById = async (req, res) => {
    try {
        const idComment= await UserSchema.findById(req.params.id);
        res.status(200).json(idComment);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })

    }

};

const createComment = async(req, res) => {
    try {
        const newComment = await UserSchema.create(req.body)
        return res.status(201).json({
           message: "Comentário registrado!",
           newComment
        })
    } catch (error){
        return res.status(400).send({message:error.message})
        
    }
};

const deleteComment = async (req, res) =>{
    try{ 
        const deleteComment = await UserSchema.findById(req.params.id)
        if (deleteComment == null) {
            return res.status(404).json({message: "Comentário identificado."})
        }
        await deleteComment.remove()
        return res.status(200).json({message: "Comentário deletado com sucesso"})        
    }catch (error){
        return res.status(500).json({message: error.message})
    }
};

const updateComment = async(req, res) => {
    console.log("Estou alterando comentario")
try {
    const findUser = await UserSchema.findByIdAndUpdate(req.params.id)

    if (findUser){
    findUser.comment = req.body.comment|| findUser.comment
    }
    const savedComment = await findUser.save()

    console.log('Comentário atualizado', findUser )
    res.status(200).json({
        message:"Atualizado",
        savedComment
    })
    
} catch (error) {
        return res.status(400).send({message:error.message})  
}
};
module.exports = {
    getAll,//ok
    getById,//ok
    createComment,//ok
    deleteComment,//ok
    updateComment//ok
};