// javascript e dom
//objeto document
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
//alterar o titulo
document.title = 123;

//criar um elemento <h1>
// Por exemplo, vamos alterar o título da página e criar um elemento <h1> no body da página

let heading = document.createElement('h1');
heading.innerHTML = 'Olá alunos';
document.body.appendChild(heading);
cabecalho.style.borderBottom = 'solid 3px #000';

//O método createElement() cria um novo nó/elemento com um nome específico. Esse nome de pode ser com letras maiúsculas ou minúsculas
//° Criar um elemento botão document.createElement('BUTTON');
//° Criar um elemento parágrafo document.createElement('p
//° Criar um elemento imagem document.createElement('img')