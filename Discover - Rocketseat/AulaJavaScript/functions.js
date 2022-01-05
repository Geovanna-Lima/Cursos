//declaration - declaração da função
//function statement
function createPhrases() {
    console.log("oieeee");
    console.log("Amanha td vai dar certo")
    console.log("Fé")
}

//executar a função, chamar, rodar, invocar - execute, run, call, invoke
createPhrases();

//function expression ou function anonymous
//parametros da função (parameters)
const sum = function (number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34
let number2 = 25
//sum(2, 3) //argumentos - arguments
console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//function scope
let subject = "create video";

function crateThink(subject) {
    subject = "study"
    return subject
}

console.log(subject)
console.log(crateThink(subject))

//function hoisting

sayMyName();

function sayMyName() {
    console.log("Geovanna")
}

// arrow function

const sayMyNameTwo = () => {
    console.log("Maria")
}

sayMyNameTwo();

//callback function

function sayMyNameThree(name) {
    //console.log(name)
    name()
}

sayMyNameThree(
    () => {
        console.log("estou em uma callback")
    }
)

/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
 */

function Person(name) {
    this.name = name;
    this.walk = function () {
        return this.name + " está andando!"
    }
}
const gege = new Person("Gege");
const joao = new Person("João");
console.log(gege.walk())
console.log(joao.walk())