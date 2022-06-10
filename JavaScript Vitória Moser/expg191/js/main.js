let form= document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// form submit event 
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', buscarItems);

//adiciona item
function addItem(e) {
    e.preventDefault();

    //pega o valor do <input>
    let newItem = document.getElementById('item').value;
    //cria novo item elemento <Li>
    let li = document.createElement('li');
    //adiciona classe
    li.className = 'list-group-item';
    //adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));
    //cria o elemento botão para deletar um item
    let deleteBtn = document.createElement('button');
    //adiciona classes para o botão de deletar
    deleteBtn.className = 'btn btn-danger btn- float-end delete';
    //acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('x'));
    //acrescenta o botao no elemento li
    li.appendChild(deleteBtn);

    itemList.appendChild(li); //adiciona o novo item na lista

    form.reset(); //limpa o formulario
}
// funçao remove item
function removeItem(e){
    if (e.target.classList.contains('delete')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
}
// funçao buscar itens
function buscarItems(e) {
    //converte o texto digitando para minusculo
    let text = e.target.value.toLowerCase();
    //busca todos os itens para array
    let items = itemList.getElementsByTagName('li');
    // converte os itens para array
    Array.from(items).forEach(function (item) {
        //busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        // busca o item na lista que começa com o mesmo texto digitado
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; //exibe o item
        } else {
            item.style.display = 'none'; // oculta o item
        }
        });
}
