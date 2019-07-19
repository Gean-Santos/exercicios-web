function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamar função diretamente
console.log(produto.getPreco()) // chamar função a partir de objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // A partir do call, passando apenas o objeto
console.log(getPreco.apply(carro)) // A partir do apply, passando apenas o objeto

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) // Parametros dentro de um array