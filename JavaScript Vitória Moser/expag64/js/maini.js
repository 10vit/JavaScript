
// concatenear strings
let valor01 = 100;
const valor02 = 5;
console.log(`a multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}` );
console.log(`a multiplicaçao de ${valor01} por ${valor02} é ${valor01 * valor02}`);

// metodos de strings
console.clear();
const string01 = `instituto de oportunidade social`;

//acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
//acessando o decimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);

//tamanho de strings

console.clear();
let texto = `abcdefghijklmnopqrstuvwxyz`;

console.log(texto.length);

//exemplo
console.clear();
const texto2 = `tambem 123 [] é uma string 231 -1\n `;
console.log (texto2.length);

// maiuscula e minuscula
console.clear();
const s = `hello word`;
console.log(s.toUpperCase());
console.log(s.toLowerCase())

// substring e spit
console.clear();
const str = `mozilla`;

console.log(str.substring(1, 3));
console.log(str.substring(2));

const str1 = `a raposa é um animal esperto`;

const palavras = str1.split(` `);
console.log(palavras[3]);
// saida esperada: "um"

const chars = str1.split(``);
console.log(chars[7]);
//saida esperada: "a"

const strCopy = str1.split();
console.log(strCopy);
//saida esperada : array ["a raposa é um animal esperto"]

// substituir string
console.clear();
let mensagem = `venha para a microsoft`;
console.log(mensagem);

let novaMensagem = mensagem.replace(`microsoft`, `ios`);
console.log(novaMensagem);

//remover espaços
console.clear();
let text = ` ola alunos do ios!`
console.log(text.trim());

//metodos de buscaem strings
console.clear();
let frase = `sou um aluno do ios e o ios é muito bom!`;
console.log(frase.indexOf(`ios`)); //returns 16
console.log(frase.lastIndexOf(`ios`)); //returns 24

console.log(frase.search(`ios`)); //returns16

console.log(frase.startsWith(`S`)); //verdadeiro - retorna true
console.log(frase.startsWith(`Sou`)); //verdadeiro retorna true
console.log(frase.startsWith(`a`)); //falso - retorna false

console.log(frase.endsWith(`!`)); //verdadeiro - retorna true
console.log(frase.endsWith(`bom!`)); //verdadeiro - retorna true
console.log(frase.endsWith(`x`)); //falso - retorna false
