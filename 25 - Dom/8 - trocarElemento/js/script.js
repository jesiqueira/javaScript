//criar Elemento
var el = document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode('Este é o texto do H3');

el.appendChild(texto);

console.log(el);

//selecionar elemento que eu quero troca
var title = document.querySelector('#title');

console.log(title);

//selectionar o pai do eleemto el
var pai = title.parentNode;
console.log(pai);

//troca os elementos
pai.replaceChild(el, title);
