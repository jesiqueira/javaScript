// função que adiciona tarefa
function addTask(){
  // pegar o titulo da tarefa
  const taskTitle = document.querySelector('#task-title').value;
  // console.log(taskTitle);
  if(taskTitle){
    // clonar template
    const template = document.querySelector('.template');

    const newTask = template.cloneNode(true);
    // console.log(newTask);

    // adicionmar titulo
    newTask.querySelector('.task-title').textContent = taskTitle;

    // remover as classes desnecessárias
    newTask.classList.remove('template');
    newTask.classList.remove('hide');

    // adiciona tarefa na lista
    const list = document.querySelector('#task-list');
    list.appendChild(newTask);

    //Adicionar o evento de remover
    const removeBtn = newTask.querySelector('.close-btn').addEventListener('click', function(){
      removeTask(this);
    });

    // adiciona evento completar tarefa
    const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
      completeTack(this);
    });

    // limpar texto
    document.querySelector('#task-title').value = '';
  }
}


// função de remover tarefa
function removeTask(task){
  task.parentNode.remove(true);
}

// função de completar tarefa
function completeTack(task){
  
  // console.log(task);
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle('done');
  // console.log(taskToComplete);
}

// Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');
// console.log(addBtn);

addBtn.addEventListener('click', function(e){

  e.preventDefault();
  
  addTask();

});