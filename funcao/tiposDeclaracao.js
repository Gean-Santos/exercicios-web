console.log(soma(3, 4))

// function declaration (a função carrega antes)
function soma(x, y) {
    return x + y
}

//function expression (chamar só depois de declarada)
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))
//named function expression (pouco usada obrigatorio chamar depois de declarada) ajuda no debug
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))