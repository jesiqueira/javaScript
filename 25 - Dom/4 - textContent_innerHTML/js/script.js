//selecionar o elemento
var title = document.querySelector('#title');

//innetHTML
title.innerHTML = 'Testando texto alterado com innerHTML';



//textConten -> mais utilizado, recomendado devido a performace
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);
subtitle.textContent = 'Testando o textContent';
