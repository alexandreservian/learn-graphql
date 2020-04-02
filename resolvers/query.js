const {perfis, usuarios} = require('../data/db');

module.exports = {
    ola(){
        return "hello World!!"
    },
    horaAtual(){
        return new Date
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: "Alexandre Servian",
            email: "alexandreservian@gmail.com",
            idade: 28,
            salario_real: 1500.58,
            vip: true
        }
    },
    produtoDestaque(){
        return {
            nome: 'The last of us 2',
            preco: 220.89,
            desconto: 15
        }
    },
    numerosMegaSena(){
        return [25, 7, 9, 2, 56, 27]
    },
    usuarios(){
        return usuarios
    },
    usuario(_, {id}){
        const user = usuarios.find(({id: idUser}) => idUser===id);
        return user ? user : null;
    },
    perfis(){
        return perfis
    },
    perfil(_, {id}){
        const perfil = perfis.find(({id: idPerfil}) => idPerfil===id);
        return perfil ? perfil : null;
    }
}