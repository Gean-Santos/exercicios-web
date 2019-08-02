// não aceita repetição e não é indexado
const times = new Set()
times.add('Santos')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('santos'))
console.log(times.has('Santos'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = [
    'Raquel', 'Lucas', 'Pedro', 'Maria', 'Joana', 'Lucas'
]
const nomeSet = new Set(nomes)
console.log(nomeSet)