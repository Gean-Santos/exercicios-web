console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Mouse'
//obj1['nome'] = 'Mouse2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Executando...')
    }
}
const obj2 = new Obj('Teclado')
const obj3 = new Obj('Headset')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()