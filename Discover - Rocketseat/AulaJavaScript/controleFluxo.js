//Control flow

//if..else

let temperatura = 37

if (temperatura >= 37.5) {
    console.log("Febre alta")
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log("Febre Moderada")
} else {
    console.log("Saudavel")
}

//Switch

function calculadora(number1, operacao, number2) {
    let result
    switch (operacao) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default:
            console.log("Operação não encontrada")
            break;
    }
    return result
}

console.log(calculadora(10, "+", 5))

//throw

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório!"
    }
    console.log(name)
}

//try...catch
try {
    sayMyName("Geovanna");
} catch (e) {
    console.log(e)
}

console.log("Apos a função de erro")