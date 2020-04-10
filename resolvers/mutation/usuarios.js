const { v4 } = require('uuid');
const { usuarios} = require('../../data/db');

const indiceUsuario = (filtro) => {
    if(!filtro) return -1
    const {id,email} = filtro;
    if(id){
        return usuarios.findIndex(u => u.id === id)
    }else if(email) {
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    novoUsuario(_,{dados}){
        const {nome, email, idade} = dados;
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
    excluirUsuario(_, {filtro}){
        const indexDeleted = indiceUsuario(filtro);
        if(indexDeleted < 0) return null;
        const excluidos = usuarios.splice(indexDeleted, 1);
        return excluidos ? excluidos[0] : null
    },
    alterarUsuario(_, {filtro, dados}){
        const indexDeleted = indiceUsuario(filtro);
        if(indexDeleted < 0) return null;
        const usuario = {
            ...usuarios[indexDeleted],
            ...dados
        }
        usuarios.splice(indexDeleted, 1, usuario);
        return usuario;
    }
}