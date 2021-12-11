const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://apimusica:031188rm@cluster0.f9rmy.mongodb.net/projetoFinal?retryWrites=true&w=majority" //colocar o banco

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch(error){
     console.log("ERRO:",error.message)       
    }
}

module.exports = {
    connect
}