var x  = 0;

var myTimer = setTimeout(function(){
  console.log('0 x é 0');
}, 1000);
//5 segundo

x = 5;

if(x > 0){
  clearTimeout(myTimer);
  console.log('O x passou de 0');
}


//ClearInterval na prática
var myInterval = setInterval(function(){
  console.log('Imprimindo interval');
}, 1000);
//1 segundo

setTimeout(function(){
  console.log('Não precisamos mais repetir.');
  clearInterval(myInterval);
}, 3000);
// 3 segundo