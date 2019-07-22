// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca escolar'
delete produto.tag
console.log(produto)

//Object.seal (selar) nao é possível adicionar ou excluir novos elementos mas pode modificar
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Objeto selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes