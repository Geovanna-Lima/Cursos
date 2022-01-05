/*
Expressoes e Operadores

-Expressions
-Operators
    Binary
    Unary
    Ternary
 */

let number = 1; //expressões

console.log(number + 1) //Operador binário
console.log(++number) //Operador Unario
console.log(typeof number) //Operador Unario
console.log(true ? 'alo' : 'nada')//Operador Ternario

/*
    new 

    *left-hand-side expression
    *criar um novo objeto
*/

let name = new String('Gege')
name.surName = "Lima"
let age = new Number(17)
console.log(name.surName, age)

/* 
    Operadores unários
    typeof
    delete
 */
const person = {
    name: "gege",
    age: 17
}
delete person.age;
console.log(person)

console.log(typeof "gege")

//Operadores Aritimeticos 

//multiplicação
console.log(3 * 2)
//divisão
console.log(6 / 2)
//soma
console.log(12 + 5)
//subtração
console.log(12 - 5)

//resto de divisão
let remainder
remainder = 11 % 10
console.log(remainder)
//incremento
let increment = 0
increment++
console.log(increment)
//decremento
let decrement = 0
decrement--
console.log(decrement)
//exponencial
console.log(3 ** 3)

//Grouping operator ( )

let total = (2 + 3) * 5
console.log(total)

//Operadores de comparação

//Irá comparar valores e retornar um Boolen como resposta à comparação

let one = 1
let two = 2

// == igual
console.log(one == 1) //true
console.log(one == 2) //false
console.log(one == "1") //true

//!= diferente
console.log(one != 1) //false
console.log(one != 2) //true
console.log(one != "1") //false

// === estritamente igual
console.log(one === 1) //true
console.log(one === 2) //false
console.log(one === "1") //false

//!== estritamente diferente
console.log(one !== 2) //false
console.log(one !== 1) //true
console.log(one !== "1") //true

//> maior
console.log(one > two)//false

//>= maior igual
console.log(one >= 1)//true
console.log(two >= 1)//true

//< menor
console.log(one < 2)//true
console.log(two < 1)//false

//<= menor igual
console.log(one <= two)//true
console.log(one <= 1)//true
console.log(one <= 0)//false

//Operadores de atribuição (Assignment)
let x


//assigment
x = 1;

//addition assigment
//x = x + 2
x += 2
console.log(x)

//subtraction assignment
//x = x - 2
x -= 1
console.log(x)

//multiplication assignment
//x = x * 2
x *= 2
console.log(x)

//division assignment
//x = x / 2
x /= 2
console.log(x)

//remainder, exponentiation
/* x %= 2 */
console.log(x)
x **= 2
console.log(x)

//Operadores lógicos(logical operatoes)

// -2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = false

//AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

//NOT !
console.log(!pao) //muda o valor

//Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição entao valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos
//Café da manha top
let paoDeQueijo = true;
let presunto = false;

/* const niceBreakfast = paoDeQueijo && presunto ? "Café top" : "Café ruim"; */
const niceBreakfast = paoDeQueijo || presunto ? "Café top" : "Café ruim";

console.log(niceBreakfast)

//Maior de 18
let idade = 18
const canDrive = idade >= 18 ? "Can drive" : "Can't drive"

console.log(canDrive)

//Operador de String (String operator)

//comparison (comparação)
console.log("a" == "b")

//concatenation (concatenação)
//Retorna a união de duas Strings
console.log("a" + "b")

/*
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)

/*
    Falsy
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(NaN ? "verdadeiro" : "falso")

/*
    Truthy
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log({} ? "verdadeiro" : "falso")

/*
    Operator precedence
        Precedencia de operadores

    * grouping                          ( )
    * negação e incremento              ! ++ --
    * multiplicação e divisão           * /
    * adição e subtração                + -
    * relacional                        < <= > >=c
    * igualdade                         == != === !==
    * AND                               &&
    * OR                                ||
    * condicional                       ?:
    * assigment (atribuição)            = += -= *=
*/

console.log((2 + 5) * 10)





