function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos*1000)
    })
}
const frase = 'Olá, tudo bem?'
const tempo = 5

falarDepoisDe(tempo, frase)
    .then(f => f.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))