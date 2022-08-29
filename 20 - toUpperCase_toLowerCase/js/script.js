let texto = 'Ola, tudo bem?';

console.log(texto.length);

let obj = 'bola';

console.log(obj.length)


//indexOf

let nome = 'edmar';
console.log(nome[2]);

let frase = 'O rato roeu a roupa do rei de roma';
console.log(frase.indexOf('roeu'));

//slice
let roeu = frase.slice(7, 11);
console.log(roeu);

//replace
let novaFrase = frase.replace('roeu', 'teste');

console.log(novaFrase);