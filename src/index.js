import { renderLists, 
         renderListContent,
         renderActiveList } from './modules/renderDom'

import { displayAddBox,
         removeBox,
         displayNewListBox,
         confirmBoxLists, 
         displayEditListBox } from './modules/renderPopUpBox'       

import { addNewToDo, 
         addNewList, 
         setActiveList, 
         toggleToDoStatus,
         removeList, 
         removeToDo, 
         editList} from './modules/toDoController'

document.body.addEventListener('click', e => {
    let target = e.target.className;
    
    switch (target) {
        case 'add-btn':
            document.body.append(displayAddBox());
            break;
        case 'trash-svg-todos':
            removeToDo(e.target.parentElement.parentElement);
            break;
        case 'remove-todo-btn':
            removeToDo(e.target);
            break;        
        case 'box-cancel-btn':
            removeBox();
            break;
        case 'add-todo-btn':
            addNewToDo();
            renderListContent();
            break;
        case 'lists-add-btn':
            document.body.appendChild(displayNewListBox());
            break;
        case 'trash-svg-lists':
            document.body.appendChild(confirmBoxLists
                (e.target.parentElement.parentElement));
                console.log(e.target.parentElement.parentElement)
            break;
        case 'remove-list-btn':
            removeList(e.target);
            renderListContent();
            break;    
        case 'add-list-btn':
            addNewList();
            renderLists();
            renderListContent();
            break;        
        case 'bg-focus':
            removeBox();
            break;
        case 'todo-item':
            toggleToDoStatus(e.target.getAttribute('value'),
                             e.target.textContent);
            renderListContent();
            break;
        case 'lists-tab-link':
            setActiveList(e.target.value);
            renderActiveList(e.target.value, 
                             e.target,
                             e.target.parentElement);
            renderListContent();                         
            break;
        case 'edit-svg-lists':
            document.body.appendChild(displayEditListBox
                (e.target.parentElement.parentElement));
            break;
        case 'edit-list-btn':
            editList(e.target,
                     e.target.parentElement.parentElement)
            break;
    };
});