//criar Elemento
var el = document.createElement('div');


el.classList = 'div-criada';

console.log(el);

//selecionar o container
var container = document.querySelector('#container');
console.log(container);

//inserindo elementto filho
container.appendChild(el);

//inserBefore - inserir antes
var el2 = document.createElement('div');
el2.classList = 'div-before';

// selecionar o elemento que queremos inserir logo após.
var el3 = document.querySelector('#container .div-criada');
console.log(el3);

//inserir no container, primeiro paramentro é o que vai ser inserido e o segundo parametro é o que vem depois

container.insertBefore(el2, el3);