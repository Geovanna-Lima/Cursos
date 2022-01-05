//Exerccício prático
//1. Declare uma variável de nome weight

var weight;

//2. Que tipo de dado é a variável acima?

//Ela não tem valor ainda então é "undefined"
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: Number(integer)
        *stars: Number(float)
        *isSubscribed: Boolean
 */

let name = "Marcio";
let age = "38";
let stars = 4.8;
let isSubscribed = true;

/*
    4. A variavel student abaixo é de que tipo de dado?

    //Ela é um objeto.

    4.1 Atribus a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a segunte mensagem:
    <name> tem <age> de idade e pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
 */

let student = {
    name: "Marcio",
    age: "38",
    weight: 85.5,
};

console.log(`${student.name} tem ${student.age} de idade e pesa ${student.weight}kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio.
 */

let students = [];

/* 
    6.Reatribua o valor para a variável acima, colocando dentro dela o objeto strudent da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
*/
students = [student];
console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
 */

console.log(students[0])

/* 
    8.Crie um novo student e coloque na posição 1 do Array students
 */

let studentTwo = {
    name: "Geovanna",
    age: "17",
    weight: 62.0,
}

students = [student, studentTwo];
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

    console.log(a)
    var a = 1
*/
//Ele vai retornar "undefined", pois é uma var é global, então ele joga para cima, é um hoisting, porém o valor só será atribuido depois, sendo então "undefined".

console.log(a)
var a = 1
