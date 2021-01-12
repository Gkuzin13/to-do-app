import { lightBackground } from './displayEffects'

import { format } from 'date-fns'

import { renderLists, renderListContent, renderActiveList } from './renderDom'

import { removeBox } from './renderPopUpBox'

const toDoFactory = 
    (toDos, 
    list, 
    notes,  
    id, 
    active = false) => {
    
    return { toDos, list, notes, id, active };
};

export let toDoArray = [];

toDoArray.push(toDoFactory
    ([{title: 'Email earnings report to steve',
       dueDate: '30/01/2021',
       done: false,
       priority: true }, 
      {title: 'Call ISP to fix the internet in the office',
       dueDate: '21/01/2021',
       done: false,
       priority: true }], 'Work', 'End of the month!', '1609618397810', true));
toDoArray.push(toDoFactory
    ([{title: '1kg of tomatoes',
       dueDate: '',
       done: false,
       priority: false }, 
      {title: 'Buy soy milk',
       dueDate: '',
       done: false,
       priority: false }, 
       {title: 'Garlic',
        dueDate: '',
        done: false,
        priority: false }], 'Groceries', '', '1609618316211', false));
                            
                            

export function addNewToDo(id) {
    
    let date = '';

    if(getInput('box-date') !== '') {
        date = format(new Date(getInput('box-date')), 'dd/MM/yyyy');
    };
    
    for (let i = 0; i < toDoArray.length; i++) {
        if(toDoArray[i].active === true) {
            toDoArray[i].toDos.
            push({title: getInput('box-title-input'),
                  dueDate: date,
                  done: false,
                  priority: document.querySelector('#box-prio-checkbox').checked
                 });
            renderListContent();    
            lightBackground();
            removeBox();
            console.log(toDoArray[i].toDos)     
        };
    };

    date = '';
};

export function addNewList() {

    setActiveList();

    toDoArray.push(toDoFactory
        ([''].splice(0, length),
        getInput('list-name-input'),
        getInput('box-notes-input'),
        Date.now().toString(), 
        true));   
    removeBox();
};

export function setActiveList(targetListId) {
    toDoArray.forEach( list => {
        list.active = false;

        if(list.id === targetListId) {
            list.active = true;
        };
    });
};

export function removeList(val) {
    toDoArray.forEach( (list, index) => {
        if(list.id === val.value) {
            toDoArray.splice(index, 1);
            if(toDoArray.length !== 0) {
                toDoArray[0].active = true;
            };
      
            renderLists();
            renderListContent();
            removeBox();
        };
    });
};

export function editList(val, listInfo) {
    toDoArray.forEach( (list) => {
        if(list.id === val.value) {
            list.list = listInfo.children[1].value;

            list.notes = listInfo.children[3].value;

            renderLists();
            removeBox();
        };
    });
};

export function toggleToDoStatus(val, name) {
    toDoArray.forEach( td => {
        for(let i = 0; i < td.toDos.length; i++) {
            if(td.toDos[i].title == name && td.id === val) {
                if(td.toDos[i].done === false) {
                td.toDos[i].done = true;
                } else {
                    td.toDos[i].done = false;
                };
            };
        };
    });
};

export function removeToDo(val) {
    toDoArray.forEach( list => {
        if(list.id === val.firstChild.getAttribute('value')) {
            list.toDos.forEach( (todo, index) => {
                if(todo.title === val.firstChild.textContent) {
                    list.toDos.splice(index, 1);
                    renderListContent();
                };
            });
        };
    });
};

export function getInput(id) {
    return document.getElementById(id).value;
};




