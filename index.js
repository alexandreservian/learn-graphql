const {ApolloServer, gql} = require('apollo-server');

const usuarios = [
    {
        id: 1,
        nome: 'Bill Gates',
        email: 'billgates@gmail.com',
        idade: 70
    },
    {
        id: 2,
        nome: 'Steve Jobs',
        email: 'stevejobs@gmail.com',
        idade: 50
    },
    {
        id: 3,
        nome: 'Joe Armstrong',
        email: 'joearmstrong@gmail.com',
        idade: 65
    }
]

const typeDefs = gql`
    scalar Date

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario!]!
        usuario(id: Int): Usuario
    }
`;

const resolvers = {
    Produto: {
        precoComDesconto({desconto, preco}= {}){
            return desconto ? preco - (preco * desconto)/100 : preco
        }
    },
    Usuario: {
        salario({salario_real}){
            return salario_real
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})