//selectionar Elemento
var title = document.querySelector('#title');

//setar atributo no title
title.setAttribute('class', 'testanto-atributo');
console.log(title);

var btn = document.querySelector('#buton');
btn.setAttribute('disabled', 'disabled')

var subtitle = document.querySelector('.subtitle');
console.log(subtitle);

subtitle.setAttribute('id', 'titulo-2');

//remover atributo
var lista = document.querySelector('#lista');

// lista.removeAttribute('id');