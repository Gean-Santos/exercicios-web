const alunos = [
    { nome: 'João',  nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true  },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana',   nota: 8.7, bolsista: true  }
]

// Desafio 1: Todos os alunos são bolsistas?

const bolsistas = (resultado, bolsista) => resultado && bolsista

const aluno = alunos.map(a => a.bolsista).reduce(bolsistas)
console.log(aluno)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista

const alguem = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(alguem)
