function exibir(num){
  console.log('Resultado: ', +num);
}

function soma(a, b, callback){
  var op = a + b;
  callback(op);
}

function multplicao(a, b, cb){
  var op = a * b;
  cb(op);
}


soma(2, 2, exibir);
multplicao(3, 4, exibir);
