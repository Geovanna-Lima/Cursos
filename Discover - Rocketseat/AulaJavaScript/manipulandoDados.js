/*
    Prototype

    *prototype-based language
    *prototype chain
    *__proto__ -> cadeia de dados/propriedades já criada ex.: .length
*/

/*
    Type conversion (typecasting) vs Type coersion
    Explicito (Nós)                  Inplicito (Java)

    *Alteração de um tipo de dado para outro tipo
 */

console.log('9' + 5) // resultado foi "95", Java transformou o 5 em String coersion
console.log(Number('9') + 5) //resultado foi "14", nós fazemos alteração do tipo de dado

//Manipulando String e Número

//Transformar String em Número e Número em String
let string = "123";
console.log(Number(string))
let number = 321
console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "paralelepipedo"
console.log(word.length);
let numb = 1234;
console.log(String(numb).length)

//Transformar um núemro quebrado com 2 casas decimais e trocar ponto por vírgula

let numberOne = 5649.096426
console.log(numberOne.toFixed(2).replace(".", ","))

//Transforme letras minusculas em maiusculas. Faça o contrário disso também
let palavra = "Programar é legal!"
console.log(palavra.toLowerCase())
console.log(palavra.toUpperCase())

//Verificar se o texto contém a palavra Amor

let frase = "Eu quero viver o Amor!";
console.log(frase.includes("Amor")) //Case sensitive

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso transforme o array em um texto e onde eram espaços, coloque _

let texto = "Eu quero viver o Amor!";
let myArray = texto.split(" ")
console.log(myArray)
let textoWithUnderscore = myArray.join("_")
console.log(textoWithUnderscore.toLowerCase())

//Criar Array com construtor
let array = new Array('a', 'b', 'c')
console.log(array)

//Contar elementos de um Array
console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos de um array

let wordTwo = "manipulação";
console.log(Array.from(wordTwo))

//Manipulando Array

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//asicionar item no começo
techs.unshift("sql")
//remover do fim
/* techs.pop() */
//remover do começo
/* techs.shift() */
//pegar somente alguns elementos do array
/* console.log(techs.slice(1, 3)) */
// remover 1 ou mais items em qualquer posição do array
/* techs.splice(1, 1) */
//encontrar a posição de um elemento no array
let index = techs.indexOf("css")
techs.splice(index, 1)

console.log(techs)