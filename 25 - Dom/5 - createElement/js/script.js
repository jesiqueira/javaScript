//CRIAR elemento
var nonoParagrafo = document.createElement('p');


// criar o texto para inserir no elemento
var texto = document.createTextNode('Este é o conteúdo do paragráfo');

//inserio o texto no paragrafo
nonoParagrafo.appendChild(texto);
console.log(nonoParagrafo);

// selecionar o body para inseriri o novo paragrafo.
var body = document.querySelector('body');
body.appendChild(nonoParagrafo);

//inserir em uma DIV.
var container = document.getElementById('container');

//criar o elemento para colocar a DIV
var elemento = document.createElement('span');
elemento.appendChild(document.createTextNode('texto do span'));
console.log(elemento);
container.append(elemento);
