// UI VARS

const form = document.querySelector('#lista-form');
const list = document.querySelector('#lista-items');
const clearBtn = document.querySelector('.clear-lista');
const itemList = document.querySelector('#item');

// Event Listeners
loadEventListeners();

//Load all event Listeners
function loadEventListeners() {
    
    //add item event
    form.addEventListener('submit', addItemToList); 

    //clear all items
    clearBtn.addEventListener('click', clearList);

}

function addItemToList(e) {
    e.preventDefault();

    if(itemList.value === '') {
        alert('Adicione um item');
    }

    //create label (wrapper)
    const item = document.createElement('label');

    //create input checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //append checkbox
    item.appendChild(checkbox);

    //create span
    const span = document.createElement('span');
    
    //add content to span
    span.textContent = itemList.value;

    //append span
    item.appendChild(span);   

    //append item tolist
   list.appendChild(item); 

    // clear input
    itemList.value = '';
}

function clearList() {
    if(confirm('Tem certeza?')) {
        list.textContent = '';
    }
}