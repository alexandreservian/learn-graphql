module.exports = {
    precoComDesconto({desconto, preco}= {}){
        return desconto ? preco - (preco * desconto)/100 : preco
    }
}