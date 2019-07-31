const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'João')
saudacoes.forEach(s => {
    return console.log(s)
})
console.log(saudacoes)