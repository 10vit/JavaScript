// elas são simplificações da linguagem para utilizarmos herança baseadas nos protótipos. 
//CLASSES

class Carro {
     constructor(nome, ano) {
         this.nome = nome;
         this.ano = ano;
     }
}
// intanciando objetos á classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

//imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);
//Os métodos de uma classe são criados com a mesma sintaxe de um método de objetos. Além do constructor, você pode criar diversos protótipos de métodos na classe
// declarar nova classe com metodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}
// buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();

//console.log(dataHoje);

// intanciando o objeto á classe
let meuNovoCarro = new NovoCarro('ford', 2014);

console.log(meuNovoCarro.idadeCarro(ano));
//O método idadeCarro, que foi declarado, calcula a quantidade de anos do carro de acordo com o ano atual. Para executar esse método, basta colocar o nome do objeto, ponto final e o nome do método com o parâmetro (quando houver) passado entre os parênteses. ]

//mais um exemplo de classe
console.clear();
class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
}
// instantiate object
const pessoa1 = new ClassePessoa(`John`, `Doe`, `1980-04-03`);
const pessoa2 = new ClassePessoa(`Marry`, `Smith`, `1970-06-13`);

console.log(pessoa1);

console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());

console.log(pessoa1.getFullName());

//lexical this em uma função
console.clear();
//constructor de funçao  - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName = firstName;
    this.lastName = lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear(); 
    };
    this.getFullName = function (){
        return `${this.firstName} ${this.lastName}`;
    };
}
//instanciando os objetos
const pessoa3 = new PessoaFunc('john', 'doe', '1980-04-03');
const pessoa4 = new PessoaFunc('marry', 'smith', '1970-06-13');

console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

//adicionando prototipos
PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};

console.clear();
console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());