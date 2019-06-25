//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana,',
    idade: 5,
    endereco: {
        logradouro: 'Rua da Escola',
        numero: 222
    }
}
const { nome, idade } = pessoa // extrai do objeto pessoa os campos nome e idade (ES6)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)