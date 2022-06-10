// metodo forEach()

const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`indice: ${index}`);
    console.log(`Elemento: ${item}`);
} 
// metodo forEach() com arrow function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`indice: ${index}`);
    console.log(`elemento: ${item}`);
});

// foreach() com array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto));

// metodo map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('numeros:');
console.log(numeros);
console.log('novo array:');
console.log(newArray);

//outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
    return  valor.texto;
});
//imprime o novo array
console.log(mapText);

// metodo filter
console.clear();
const idades = [32, 33, 16, 40];

let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);

//outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

// metodo final()
console.clear();
const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];

console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);