  /*//while
let contador = 1;

while (contador <= 10) {
    console.log(`valor = ${contador}`);
    contador++;
}
//while com decretamento
console.clear();

let cont = 10;

while (cont >= 0) {
    console.log(`valor = ${cont}`);
    cont--;
}
// do-while
console.clear();
let i = 0,  text = '';
do {
    text += `o numero é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);
*/
// do-while
console.clear();
let i = 10;
text = 'we';
do {
    text += `o numero é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

//for
console.clear();
for (let i = 0; i < 10; i++) console.log(`laço for numero: ${i}`);

//for - decremento
console.clear();
for (let i = 10; i > 0; i--) console.log('laço for numero: ${i}');

//laços de arrays

const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let j = 0; j < frutas.length; j++) console.log(`nome: ${frutas[j]} \n`);

// array de objetos e laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false,
    },
];

//fro overloop

for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.td);
}