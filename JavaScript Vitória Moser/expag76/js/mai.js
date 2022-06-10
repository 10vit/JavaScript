// objetos
let pessoa = {
    firstName: `irmão do`,
    lastName: `Jorel`,
    idade: 10,
    corDosOlhos: `preto`,
    hobbies: [`música`, `filme`, `esportes`],
    endereco: {
        rua: `rua dos bobos`,
        numero: 0,
        cidade: `sao paulo`,
        estado: `SP`,
    },
};

console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

// atribuiçao via desestruturaçao
console.clear();

const {
    firstName,
    lastName,
    endereco: { cidade },
} = pessoa;
console.log(`${firstName} ${lastName} é de ${cidade}`);

// atribuiçao via desestrturaçao com arrays
console.clear();
const array = [1, 2, 3, 4, 5];
let [valor01, valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);

//array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: `levar o lixo para fora`,
        isCompleted: true,
    },
    {
        id: 2,
        texto: `enconrtrar o chef`,
        isCompleted: true,
    },
    {
        id: 3,
        texto: `consulta no dentista`,
        isCompleted: false,
    },
];

console.log(tarefas);
console.log(tarefas[1].texto);

console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

//trsnformar um array em JSON
console.log(JSON.stringify(tarefas));

//JSON
const tarefa_JSON = 
   ` [{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]`;
   const objeto = JSON.parse(tarefa_JSON);
   console.clear();
   console.log(objeto);