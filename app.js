// UI VARS

const form = document.querySelector('#lista-form');
const list = document.querySelector('#lista-items');
const clearBtn = document.querySelector('.clear-lista');
const itemList = document.querySelector('#item');

// Event Listeners
loadEventListeners();

//Load all event Listeners
function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', getList);
    
    //add item event
    form.addEventListener('submit', addItemToList); 

    //clear all items
    clearBtn.addEventListener('click', clearList);

    //remove item
    list.addEventListener('click', removeItem);  

}

function removeItem(e) {

    let item = e.target; 
    
    if(item.classList.contains('done')) {
        item.classList.remove('done');
    } else {
        item.classList.add('done');
    }

}

function getList() {

    let items;
    if(localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    } 

    items.forEach(function(item) {  
        //build list
        buildList(item);
    });

}

function addItemToList(e) {
    e.preventDefault();

    if(itemList.value === '') {
        alert('Adicione um item');
    } else {

        //build list
        buildList(itemList.value);

        itemToLocalStorage(itemList.value, false);

        // clear input
        itemList.value = '';
    }

}

function buildList(itemValue) {
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
        span.textContent = itemValue;
    
        //append span
        item.appendChild(span);   
    
        //append item tolist
       list.appendChild(item); 
}

function clearList() {
    if(confirm('Tem certeza?')) {
        list.textContent = '';
    }
    
    localStorage.clear();
}

function itemToLocalStorage(item, deleteItem = false) { 

    let items;
    if(localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }


    if(!deleteItem) { 
        items.push(item); 
    } else {
        items.forEach(function(item, index) { 
            if(item.textContent === item) { 
                items.splice(index, 1); 
            }
        });
    }

    localStorage.setItem('items', JSON.stringify(items));

} 