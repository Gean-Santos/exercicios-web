Array.prototype.map2 = function(callback){
    let array2 = []
    for(let i = 0; i < this.length; i++){
        array2.push(callback(this[i], i, this))
    }
    return array2
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
// retornar apenas os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


let resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)