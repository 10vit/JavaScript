// metodo querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#87CEFA';

// busca o tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui');

// busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

//função chamada pelo evento onclick

const clique = () => {
    document.querySelector ('#my-span').style.backgroundColor = '#d75a5f';
};

// metodo querySelectorall

let listaLI = document.querySelectorAll('li');
for (i = 0; i < listaLI.length; i++) {

    listaLI[i].style.border = '12px solid #FF21B0';
    listaLI[i].style.padding = '3px';
}
console.log(listaLI);

//busca por id

let myLI = document.querySelectorAll('#my-li');
myLI.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

// busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#ffc0cb'))

// busca por elementos e classe 
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));

