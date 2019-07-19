function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Agua', 4.55))
console.log(criarProduto('Notebook', 3009.99))
console.log(criarProduto('Teclado', 399.99))