const { v4 } = require('uuid');

const perfis = [
    {id: 1, nome: 'comum'},
    {id: 2, nome: 'administrador'},
]

const usuarios = [
    {
        id: v4(),
        nome: 'Bill Gates',
        email: 'billgates@gmail.com',
        idade: 70,
        perfil_id: 1,
        status: "ATIVO"
    },
    {
        id: v4(),
        nome: 'Steve Jobs',
        email: 'stevejobs@gmail.com',
        idade: 50,
        perfil_id: 1,
        status: "BLOQUEADO"
    },
    {
        id: v4(),
        nome: 'Joe Armstrong',
        email: 'joearmstrong@gmail.com',
        idade: 65,
        perfil_id: 2,
        status: "INATIVO"
    }
]

module.exports = {perfis, usuarios};