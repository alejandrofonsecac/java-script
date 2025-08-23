function addList() {
    let itemList = document.getElementById('addList'); 
    let Tarefa = itemList.value;
    let containerTarefa = document.querySelector('.Tarefas');
    if(Tarefa === ''){ return};
    
    containerTarefa.innerHTML += `<div class = "item_da_Lista">
     <p class = 'textoTarefa'>${Tarefa} <a href="#" style="cursor: pointer;" class = "excluirTarefa" onclick= 'excluirTarefa(this)'>Excluir</a></p>
    </div>`;
    itemList.value = '';
}