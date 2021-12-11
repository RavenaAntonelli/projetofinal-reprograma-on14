const ProfessionalSchema = require('../models/professionalSchema');
const mongoose = require('mongoose');

//todos os profissionais
const getAll = async ( req, res) => {
    
    console.log("Estou no ALL!")
    try {
        const professional= await ProfessionalSchema.find()
        res.status(200).json(professional)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
};

//procurar profissional por id
const getById = async (req, res) => {
    
    console.log("Estou no id!")
    try {
        const idFound = await ProfessionalSchema.findById(req.params.id);
        res.status(200).json(idFound);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })

    }

};

//procurar por profissional
const getByName = async (req, res) => {
    console.log("Estou nos nomes!")
   try{  const professionalFound =  await ProfessionalSchema.findOne({professional: req.query.professional})
   return res.status(200).json(professionalFound)
}catch(error){
   res.status(500).json({
       message: error.message,
   })
}
};

//procurar por especialidade
const getBySpecialty = async (req, res) => {
     console.log("Estou nas especialidades!")
    try{  const specialtyFound =  await ProfessionalSchema.findOne({specialty: req.query.specialty})
    return res.status(200).json(specialtyFound)
}catch(error){
    res.status(500).json({
        message: error.message,
    })
}

};

//procurar por bairro
const getByDistrict = async (req, res) => {
    console.log("Estou nos bairros!")
   try{  const districtFound =  await ProfessionalSchema.findOne({district: req.query.district})
   return res.status(200).json(districtFound)
}catch(error){
   res.status(500).json({
       message: error.message,
   })
}

};

//Dar like
const like = async (req, res) => {
    try{
        const {id} = req.params
        professional = await ProfessionalSchema.findById(id)

        professional.likes += 1
        await ProfessionalSchema.updateOne(professional)
        return res.status(200).send(professional)
    }catch(error){
        return res.status(404).send({ message: "Profissional não foi encontrado!"})
    }

};

//cadastrar profissional
const createProfessional = async(req, res) => {
    try {
        const professionalNew = await ProfessionalSchema.create(req.body)
        return res.status(201).json({
           message: "Profissional cadastrado!",
           professionalNew
        }) 
          
    } catch (error){
        return res.status(400).send({message:error.message})
        
    }
};

//atualizar profissional
const updateProfessional = async (req, res) => {
    console.log("Estou atualizando")
    try {
        const findProfessional = await ProfessionalSchema.findByIdAndUpdate(req.params.id)
    
        if (findProfessional){
        findProfessional.professional = req.body.professional|| findProfessional.professional
        findProfessional.specialty = req.body.specialty || findProfessional.specialty
        findProfessional.address = req.body.address || findProfessional.address
        findProfessional.district = req.body.district || findProfessional.district
        findProfessional.city = req.body.city || findProfessional.city
        }
        const savedProfessional = await findProfessional.save()

        console.log('Profissional adicionado', findProfessional )
        res.status(200).json({
            message:"Profissional atualizado",
            savedProfessional
        })
        
    } catch (error) {
            return res.status(400).send({message:error.message})  
    }
};


//deletar profissional
const deleteProfessional = async (req, res) =>{
    try{ 
        const delProfessional = await ProfessionalSchema.findById(req.params.id)
        if (delProfessional == null) {
            return res.status(404).json({message: "Profissional não encontrado."})
        }
        await delProfessional.remove()
        return res.status(200).json({message: "Profissional deletado"})        
    }catch (error){
        return res.status(500).json({message: error.message})
    }
};



module.exports = {
    getAll,//ok
    getById,//ok
    getByName,//ok
    getBySpecialty,//ok
    getByDistrict,//ok
    createProfessional,//ok
    updateProfessional,//ok
    deleteProfessional,//ok
    like,
  
};
