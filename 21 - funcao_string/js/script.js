//tpLowerCase e toUpperCase

let frase = 'Está é a frase que vamos manipular';

let fraseCaixaAlta = frase.toUpperCase();

console.log(frase);
console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

//trim

let nome = '       Jose Edmar de Siqueira     ';
console.log(nome.trim());

//split

console.log(frase.split(' '));

var tags = 'PHP, javaScript, HTML, CSS';
console.log(tags.split(','));