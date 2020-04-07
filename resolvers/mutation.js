const { v4 } = require('uuid');
const { usuarios} = require('../data/db');

module.exports = {
    novoUsuario(_,{nome, email, idade}){
        const emailExiste = usuarios.some(({email:emailUser}) => emailUser===email)
        if(emailExiste){
            throw new Error("Email já foi cadastro")
        }

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
    },
    excluirUsuario(_, {id}){
        const indexDeleted = usuarios.findIndex(({id: idUser}) => id===idUser);
        if(indexDeleted < 0) return null;
        const excluidos = usuarios.splice(indexDeleted, 1);
        return excluidos ? excluidos[0] : null
    }
}