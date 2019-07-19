let dobro = function (a) {
    return a * 2
}

dobro = (a) => { return 2 * a }

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
ola = () => 'Olá' //padrao
ola = _ => 'Olá' // possui um parametro
console.log(ola())