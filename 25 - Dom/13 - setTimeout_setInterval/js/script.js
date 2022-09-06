//setTimeout -> executar uma função depois de algum tempo
console.log('Antes do setTimeout');

setTimeout(function(){
  console.log('Testando o setTimeout');
},2000);
// 1000 --> igual 1 segundo
console.log('Após o setTimeout');


//setInterval --> exetuta uma função em um intervalo determinado
setInterval(function(){
  console.log('Testando setInterval');
}, 30000);
//executa um ação após 30 segundo