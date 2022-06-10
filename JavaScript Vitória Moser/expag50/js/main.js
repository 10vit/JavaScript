

/continuar da pag 53/

//arrays unidimensionais
//podemos criar array assim
const num1 = new Array(30,-1, 5, 3, 121);
//ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);
//acessando elementos diversos do array
console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);

console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemnto de num2: ${num2[5]}`);
//arrays bidimensionais
console.clear();
const matrix = [
    [`banana`, `maça`, `pera`],
    [`laranja`, true, 1],
    [null, `uva`, -350],
];
//acessando eklementos diversos dos arrays
console.log(`acessa a primeira linha: ${matrix[0]}`);
console.log(`acessa o segundo elemnto: ${matrix[0][1]}`);

//alterando um valor do array
console.clear();
let moedas = [`real`, `dolar`, `coroa`, `peso`];

console.log(`antes: ${moedas}`);
moedas[2] = `yen`;
console.log(`depois: ${moedas}`);

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(`antes:`);

console.log(matrix1);

//alterando um valor do array

console.clear();
matrix1[0][2] = -10;
console.log(`depois:`);
console.log(matrix1);

//metodos em arrays

console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

//join

console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(` *** `);
console.log(teste2);
console.log(typeof teste2);

//tamanho dos arrays

console.clear();
let array = [0, 1, 2, 3, 4];
console.log(array.length);

//remover e inserir elementos
// pop ()
console.clear();
const frutas1 = [`banana`, `laranja`, `maça`, `manga`];
let x = frutas1.pop(); // x = "manga"

console.log(frutas1);
console.log(x);

//push()
console.clear();
const frutas2 = [`banana`, `laranja`, `maça`, `manga`];
let y = frutas2.push(`kiwi`); // y = S

console.log(frutas2);
console.log(y);

// shift()
console.clear();
const frutas3 = [`banana`, `laranja`];
let z = frutas3.shift(); // z = 'banana'
console.log(frutas3);
console.log(z);

//unshift()
console.clear();
const frutas4 = [`banana`, `laranja`];
let w = frutas4.unshift(`kiwi`); //w = 3

console.log(frutas4);
console.log(w);

//delete
console.clear();
const frutas5 = [`banana`, `laranja`, `maça`, `manga`];
delete frutas5 [2];

console.log(frutas5);