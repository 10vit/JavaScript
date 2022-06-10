// metodo getElementById

//Esse método retorna a referência do elemento através do atributo ID ou null se a ID não for encontrada. Esse é um dos motivos do atributo id em uma página web ser único. 
 
 
let titulo = document.getElementById('titulo');
//alterando o conteudo do elemento
titulo.innerHTML = 'Olá meus caros alunos!';
//configurando o estilo css do elemento
titulo.style.textAlign = 'center';
titulo.style.backgtoundcolor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

//Observe que a instrução criou uma referência do elemento <h2> da página e, então foi possível manipular o conteúdo e as configurações de estilo desse elemento

//seguindo com ex da pag 155

//Método getElementsByClassName 
//O método getElementsByClassName retorna a coleção de todos os elementos do documento com a classe específica. Isso significa que esse método pode retornar mais de um elemento

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.bakgroundcolor = 'yellow';

//Buscamos todos os itens da lista, pois todos eles têm a classe item associada a eles


//As próximas instruções alteram o conteúdo do segundo item da lista, a espessura da fonte e a cor de fundo

//Podemos utilizar um laço de repetição para alterar a cor de fundo de todos os itens da lista, 

for (let i = 0; i <items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

//Método getElementsByTagName 
 
//O método getElementsByTagName retorna a coleção de todos os elementos do documento com a tag, ou seja, com a mesma marcação HTML. Isso significa que esse método pode retornar mais de um elemento.

let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgrounColor = '#fff';
}

//o método getElementsByClassName e getElementsByTagName permitiram manipular os mesmos elementos.mostra que existem diversas maneiras de acessar um elemento no DOM. 

//Depois, alteramos as cores de fundo dos elementos <li>, os elementos com índices pares são configurados com fundo branco (#fff) e os elementos com índices ímpares são configurados com fundo gelo (#f4f4f4). Lembre-se, o primeiro elemento do array possui índice zero, portanto com quarto elemento na lista temos: índice 0, índice 1, índice 2 e índice 3

//Método getElementsByName 

//O método getElementsByName retorna a coleção de todos os elementos do documento com o nome específico, ou seja, esse método verifica o atributo HTML name. Isso significa que esse método pode retornar mais de um elemento

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';

//O método getElementsByName retornou os dois últimos itens da lista, pois eles têm o nome igual a fitem


//. A instrução nome[0].textContent = 'Olá pessoas' altera o conteúdo do terceiro item da lista e nome[0].style.backgroundColor = 'yellow' altera a cor de fundo para amarelo. A instrução nome[1].textContent = 'Tudo bem?' altera o conteúdo do quarto item da lista e nome[1].style.backgroundColor = '#BAC1FB' altera a cor de fundo para azul claro. 

// remover um elemento dom

let item2 = document.getElementById('item2');
item2.remove();

//retomando o elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

//alterando o estio da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';

//marcadores numericos
ul.style.listStyle = 'decimal inside';




