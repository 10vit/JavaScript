// esrutura condicional simples
// igual duplo
const a = 10;
if (a == 10) {
    console.log('a é 10');
}

const b = '10';
if (b == 10) {
    console.log('b é 10');
}

// triplo igual - verifica o tipo
console.clear();
const c = 10;
if (c === 10) console.log('c é 10');

const d = '10';
if (d === 10) {
    console.log('d é 10');
}
console.log('estou fora do if que compara string');

//estrutura condicionais composta
console.clear();
const e = '10';
if (e === 10) console.log('e é o numero 10');
else {
    console.log('resultado da condiçao: $(e === 10})');
    console.log('e não é o numeral 10');
}
// multiplas condiçoes
console.clear();
const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log(`condiçao é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do que 10');
} else console.log('f não maior do que 5 e g não é maior do que 10');

if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do que 10');
else {
    console.log(`condiçao é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior que 10');
}

// desvios encadeados

console.clear();
const num = 10;

if (num % 2 == 0 && !isNaN(num)) console.log('numero par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('numero impar');
else console.log('nao é um numero');

// operador ternario - exemplo 1
console.clear();
let resultado = 3 > 4 ? "sim" : "nao";
console.log(resultado)

//operador ternario - exemplo 2

console.clear();
let result = Math.PI < 4 ? console.log('sim') : console.log('nao');

// switch
const h = 11;
const cor = h > 10 ? `vermelha` : `azul`;
console.clear();
switch (cor) {
    case `vermelha`:
        console.log(`a cor é vermelha`);
        break;
    case `azul`:
        console.log(`a cor é azul`)
        break;
    defalt:
        console.log(`a cor não vermelha ou azul`);
        break;
}