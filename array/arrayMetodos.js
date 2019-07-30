const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //elimina o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento a última posição
console.log(pilotos)

pilotos.shift() // elimina o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array a partir do índice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // pega do primeiro até o terceiro elemento do array
console.log(algunsPilotos2)