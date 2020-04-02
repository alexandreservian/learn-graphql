const {ApolloServer, gql} = require('apollo-server');
const {importSchema} = require('graphql-import');

const perfis = [
    {id: 1, nome: 'comum'},
    {id: 2, nome: 'administrador'},
]

const usuarios = [
    {
        id: 1,
        nome: 'Bill Gates',
        email: 'billgates@gmail.com',
        idade: 70,
        perfil_id: 1
    },
    {
        id: 2,
        nome: 'Steve Jobs',
        email: 'stevejobs@gmail.com',
        idade: 50,
        perfil_id: 1
    },
    {
        id: 3,
        nome: 'Joe Armstrong',
        email: 'joearmstrong@gmail.com',
        idade: 65,
        perfil_id: 2
    }
]


const resolvers = {
    Produto: {
        precoComDesconto({desconto, preco}= {}){
            return desconto ? preco - (preco * desconto)/100 : preco
        }
    },
    Usuario: {
        salario({salario_real}){
            return salario_real
        },
        perfil({perfil_id}) {
            const perfil = perfis.find(({id: idPerfil}) => idPerfil===perfil_id);
            return perfil ? perfil : null;
        }
    },
    Query: {
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
        },
    }
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})