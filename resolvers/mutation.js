const { v4 } = require('uuid');
const { usuarios} = require('../data/db');

module.exports = {
    novoUsuario(_,{nome, email, idade}){
        const novo ={
            id: v4(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: "ATIVO"
        }
        usuarios.push(novo)
        return novo;
    }
}