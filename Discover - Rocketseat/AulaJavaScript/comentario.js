// comentário em linha
/*
    Comentário em multi linha
    outro comentário
*/

console.log("Bem vindo"); //Comentário no comando
/* 
    String

    *Cadeia de caracteres

    ""//aspas duplas
    ''//aspas simples
    ``//template literals ou template strings -> serve para multi linhas e expressoes
 */

console.log(`Geovanna ${1 + 1}`);

/* 
    Number

    *Números
    33/-33//inteiros
    12.5//reais - float
    NaN//not a number
    Infinity//infinito
 */

console.log(33); //inteiro
console.log(33.5); //real
console.log(12.5 + 9); //expressão
console.log(12 / 6); //expressão
console.log(12 / "abc"); //NaN
console.log(12 === Infinity); //expressão para ver se é infinito true or false
console.log(Infinity); //infinito

/*
    Boolean

    *somente 2 valores

    true //verdadeiro = 1
    false //falso = 0
 */

console.log(false);
console.log(true);
console.log(12 == 13); //condição falsa
console.log(12 == 12); //condição verdadeira

/*
    Undefined

    *indefinido

    Null

    *nulo
    *objeto que não possui nada dentro
    *diferente de indefinido
*/

console.log(undefined);
console.log(null);

/* 
    Object

    *objeto
    *Propriedades / Atributos
    *Funcionalidades / Métodos

    {propriedade: "valor"}
*/
console.log({
    name: "Geovanna",
    idade: "17 anos",
    andar: function () {
        console.log("andar");
    }
})

var carro = {
    portas: 4,
    motor: 1
}

/*
    Array (vetores)

    *Uma lista
    *Agrupamento de dados

    ["Geovanna", 17]
 */

console.log([
    "Ovos",
    "Leite",
    "Maça"
])

/*
    Variáveis

    * Nomes simbólicos para receber algum valor
    * Atalho de código
    *  Identificadores
    * 3 palavras reservadas para criar uma variável
        -var
        -let
        -const
*/

//var
var clima = "Frio";
console.log(typeof clima); //ver o tipo da variavel

//let 
var site = "Youtube";
console.log(site);

//const -> não muda valor durante o programa
const nome = "Geovanna";
console.log(nome);

/*
    Scope

    *Determina a visibilidade de alguma variável no JS
 */

{
    //var é global e poderá funcionar fora de um escopo de bloco -> hoisting
    var x = 0;
    console.log(x);
}

{
    //let e const são locais e só funcionam no escopo onde foi criada
    let y = 0;
    console.log(y);
}

/* Praticando */
//bariáveis e tipos de dados
//declaração or declaration
var name;

//assigment or atribuição de valores
name = "Geovanna";

//que tipo de dado foi colocado na variável
console.log(typeof name);

/* let age = 20; //Number
let isHuman = true; //Boolean */

//agrupamento de declarações
let age, isHuman;

age = 20;
isHuman = true;

console.log(name, age, isHuman)

//escrita de texto + variáveis com concatenação 
console.log("A " + name + " tem " + age + " anos.")

//interpolando valores com template literals or template strings
console.log(`A ${name} tem ${age} anos.`)

//Objects

const person = {
    name: "João",
    age: 28,
    weight: 88.6,
    isAdmin: true
}
//acessar valores dentro do objetos do objeto
console.log(`O ${person.name} tem ${person.age} anos e pesa ${person.weight}.`)

//Array
const animals = [
    "leão",
    "macaco",
    {
        name: "gato",
        age: 3
    }
]
//acessar valores dentro do array
console.log(animals[1]) // acessa a posição
console.log(animals.length) //exibe o tamanho do array
console.log(animals[2].name) //acessando determinado objeto do array
//misturar dados não é utilizado
