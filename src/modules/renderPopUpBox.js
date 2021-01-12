import { lightBackground, dimBackground } from './displayEffects'

import { toDoArray } from './toDoController'

export function displayAddBox() {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');

    const h1 = document.createElement('h1');
    h1.textContent = 'New To-Do';
    boxCtn.appendChild(h1);

    const currentActiveList = document.createElement('p');
    toDoArray.forEach( list => {
        if(list.active === true) {
            currentActiveList.textContent = `${list.list} list`;
            boxCtn.appendChild(currentActiveList);
        };
    })

    const title = document.createElement('input');
    title.setAttribute('id', 'box-title-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('value', '');
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const dateCtn = document.createElement('div');
    dateCtn.classList.add('box-date-ctn');
    
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'box-date');
    dateLabel.textContent = 'Due Date';
    dateCtn.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'box-date');
    dateInput.setAttribute('name', 'Due date');
    dateCtn.appendChild(dateInput);

    const priorityCtn = document.createElement('form');
    priorityCtn.classList.add('prio-select-ctn');

    const legend = document.createElement('legend');
    legend.textContent = 'Priority';
    priorityCtn.appendChild(legend);

    const prioForm = document.createElement('form');
    priorityCtn.appendChild(prioForm);
    
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'priority');
    input.setAttribute('id', 'box-prio-checkbox');
    input.setAttribute('value', 'important');

    prioForm.appendChild(input);

    const label = document.createElement('label');
    label.setAttribute('for', 'priority');
    label.classList.add('prio-label');
    label.textContent = 'Important!';

    prioForm.appendChild(label);
    
    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.classList.add('add-todo-btn');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3'
    newBtn.setAttribute('type', 'button');
    newBtn.textContent = 'Add To-Do';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
        if(title.value !== '') {
            newBtn.style.pointerEvents = 'auto';
            newBtn.style.opacity = '1';
        } else {
            newBtn.style.pointerEvents = 'none';
            newBtn.style.opacity = '0.3'
        };
    });
    
    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);

    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(dateCtn);
    boxCtn.appendChild(priorityCtn);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
};

export function displayNewListBox() {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.style.height = '20em';

    const h1 = document.createElement('h1');
    h1.style.marginBottom = '0.5em'
    h1.style.textAlign = 'center';
    h1.textContent = 'New List';

    const title = document.createElement('input');
    title.setAttribute('id', 'list-name-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'List name');
    title.setAttribute('value', '');
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const notes = document.createElement('input');
    notes.setAttribute('id', 'box-notes-input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('placeholder', 'Notes (Optional)');
    notes.setAttribute('value', '');
    notes.setAttribute('autocomplete', 'off');
    notes.style.marginBottom = '2em';
    
    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3'
    newBtn.classList.add('add-list-btn');
    newBtn.setAttribute('type', 'button');
    newBtn.textContent = 'Add List';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
        if(title.value !== '') {
            newBtn.style.pointerEvents = 'auto';
            newBtn.style.opacity = '1';
        } else {
            newBtn.style.pointerEvents = 'none';
            newBtn.style.opacity = '0.3'
        };
    });
    
    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);
    boxCtn.appendChild(h1);
    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(notes);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
};

export function displayEditListBox(listInfo) {
    dimBackground();
    
    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.style.height = '20em';

    const h1 = document.createElement('h1');
    h1.style.marginBottom = '0.5em'
    h1.style.textAlign = 'center';
    h1.textContent = 'Edit list';

    const title = document.createElement('input');
    title.setAttribute('id', 'list-name-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'List name');
    title.setAttribute('value', 
        listInfo.firstChild.children[0].textContent);
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const notes = document.createElement('input');
    notes.setAttribute('id', 'box-notes-input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('placeholder', 'Notes (Optional)');
    if(listInfo.firstChild.children[1] === undefined) {
        notes.setAttribute('value', '');
    } else {
        notes.setAttribute('value', 
            listInfo.firstChild.children[1].textContent);
    };
    notes.setAttribute('autocomplete', 'off');
    notes.addEventListener('input', () => {
        if(title.value !== '') {
            newBtn.style.pointerEvents = 'auto';
            newBtn.style.opacity = '1';
        } else {
            newBtn.style.pointerEvents = 'none';
            newBtn.style.opacity = '0.3'
        };
    });
    notes.style.marginBottom = '2em';
    
    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3'
    newBtn.classList.add('edit-list-btn');
    newBtn.setAttribute('type', 'button');
    newBtn.setAttribute('value', listInfo.value)
    newBtn.textContent = 'Edit list';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
        if(title.value !== '') {
            newBtn.style.pointerEvents = 'auto';
            newBtn.style.opacity = '1';
        } else {
            newBtn.style.pointerEvents = 'none';
            newBtn.style.opacity = '0.3'
        };
    });
    
    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);
    boxCtn.appendChild(h1);
    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(notes);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
};

export function confirmBoxLists(val) {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.setAttribute('id', 'confirm-box');
    const h1 = document.createElement('h1');
  
    h1.style.textAlign = 'center';
    h1.textContent = 'Are you sure you want to remove the list?';
    
    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');

    const rmvBtn = document.createElement('button');
    rmvBtn.classList.add('remove-list-btn');
    rmvBtn.setAttribute('type', 'button');
    rmvBtn.setAttribute('id', 'remove-btn');
    rmvBtn.setAttribute('value', val.value);
    rmvBtn.textContent = 'Yes';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'I want to keep it!';
    cancelBtn.style.backgroundColor = 'grey';
    
    actionCtn.appendChild(rmvBtn);
    actionCtn.appendChild(cancelBtn);

    boxCtn.appendChild(h1);;
    boxCtn.appendChild(actionCtn);

    return boxCtn;
};

export function removeBox() {
    const box = document.querySelector('.new-box-ctn');
    box.remove();
    
    lightBackground();
};
