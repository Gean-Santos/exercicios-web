const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    console.log(valor) // a constante valor é diferente localmente e globalmente
    minhaFuncao()
}

exec()