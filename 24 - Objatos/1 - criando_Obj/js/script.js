let pessoa = {
  nome : 'Edmar',
  idade : 37,

  falar : function(){
    console.log('Olá, tudo bem??');
  },

  soma : function(a, b){
    return a + b;
  }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar();

let soma = pessoa.soma(3, 5);
console.log(soma);