const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Faaala' //contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'João',
    idade: 27,
    peso: 80,
    endereco: {
        logradouro: 'Rua da Rochas',
        numero: 256
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)