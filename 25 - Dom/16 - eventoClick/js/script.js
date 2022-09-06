var btn = document.querySelector('#button');

// console.log(btn);

btn.addEventListener('click', function(){
  console.log('clicou');
  console.log(this);

  this.style.color = 'red';
});


// clique afetando outro elemento
var title = document.querySelector('#title');

console.log(title);

title.addEventListener('click', function(){
  var subtitle = document.querySelector('.subtitle');

  subtitle.style.display = "none";
});


// double click
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);
subtitle.addEventListener('dblclick', function(){
  console.log('click duplo');
});
