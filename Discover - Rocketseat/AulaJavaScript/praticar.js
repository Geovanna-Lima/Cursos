/*
    Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível
 */

/* Tranformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F

 */

function verNota(nota) {

    let notaFinal;

    if (nota >= 90 && nota <= 100) {
        notaFinal = "Você tirou A!"
    } else if (nota >= 80 && nota <= 89) {
        notaFinal = "Você tirou B!"
    } else if (nota >= 70 && nota <= 79) {
        notaFinal = "Você tirou C!"
    } else if (nota >= 60 && nota <= 69) {
        notaFinal = "Você tirou D!"
    } else if (nota >= 0 && nota <= 59) {
        notaFinal = "Você tirou F!"
    } else {
        notaFinal = "Numeração inválida!"
    }

    return notaFinal;
}

console.log(verNota(100))
console.log(verNota(80))
console.log(verNota(70))
console.log(verNota(60))
console.log(verNota(0))
console.log(verNota(101))
console.log(verNota(-1))

/* Sistemas de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

        * receitas: []
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguindo o valor do saldo.

 */

let familia = {
    receita: [5000, 200, 50, 1000],
    despesas: [1000, 700, 150.50, 900]
}

function somarElementos(array) {
    let soma = 0;

    for (let value of array) {
        soma += value
    }
    return soma;
}

function totalConta() {

    const calcReceita = somarElementos(familia.receita)
    const calcDespesas = somarElementos(familia.despesas)

    let result = calcReceita - calcDespesas;

    if (result >= 0) {
        console.log(`Saldo positivo, o seu saldo é de R$${result.toFixed(2)}`)
    } else {
        console.log(`Saldo Negativo, o seu saldo é de R$${result.toFixed(2)}`)
    }

}
totalConta()



