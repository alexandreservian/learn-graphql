const {perfis} = require('../data/db');

module.exports = {
    salario({salario_real}){
        return salario_real
    },
    perfil({perfil_id}) {
        const perfil = perfis.find(({id: idPerfil}) => idPerfil===perfil_id);
        return perfil ? perfil : null;
    }
}