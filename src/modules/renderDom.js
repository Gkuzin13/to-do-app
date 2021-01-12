import { toDoArray } from './toDoController'

export function renderLists() {

    const listsCtn = document.getElementById('todo-lists');
    listsCtn.style.opacity = '1';

    while(listsCtn.firstChild) {
        listsCtn.removeChild(listsCtn.firstChild);
    };

    if(toDoArray.length == 0) {
        const emptyGuide = document.createElement('p');
        emptyGuide.style.textAlign = 'center';
        emptyGuide.textContent = 'No lists were found';

        listsCtn.style.opacity = '0.3';

        listsCtn.appendChild(emptyGuide);
    };

    toDoArray.forEach( elem => {
        const listCtn = document.createElement('button');
        listCtn.classList.add('lists-tab-link');
        listCtn.setAttribute('value', elem.id);
        listCtn.setAttribute('type', 'button');
        listsCtn.appendChild(listCtn);

        const listInfoCtn = document.createElement('div');
        listInfoCtn.classList.add('list-info-ctn');
        listCtn.appendChild(listInfoCtn);

        const list = document.createElement('h1');
        list.classList.add('list-item');
        list.textContent = elem.list;
        listInfoCtn.appendChild(list);
        
        const notes = document.createElement('p');
        notes.style.textAlign = 'left';
        notes.classList.add('notes-item');
        notes.textContent = elem.notes;
        if (elem.notes != "") {
            listInfoCtn.appendChild(notes);
        };
        
        const editCtn = document.createElement('div');
        editCtn.style.display = 'none';
        editCtn.classList.add('edit-ctn');
        listCtn.appendChild(editCtn);

        const trashSvg = document.createElement('div');
        trashSvg.classList.add('trash-svg-lists');

        const editSvg = document.createElement('div')
        editSvg.classList.add('edit-svg-lists');
        
        editCtn.appendChild(editSvg);
        editCtn.appendChild(trashSvg);
    });

    const listbtn = document.querySelectorAll('.lists-tab-link');
    listbtn.forEach( btn => {
        for(let i = 0; i < toDoArray.length; i++) {
            if(btn.getAttribute('value') == toDoArray[i].id) {
                if(toDoArray[i].active === true) {
                    btn.style.backgroundColor = 'rgb(220, 220, 220)';
                    btn.childNodes[1].style.display = 'flex';
                };
            };
        };
    });
};

renderLists();

export function renderListContent(event) {

    const mainToDoCtn = document.getElementById('main-todo-ctn');
    mainToDoCtn.style.opacity = '1';

    while(mainToDoCtn.firstChild) {
        mainToDoCtn.removeChild(mainToDoCtn.firstChild);
    };

    const addToDoBtn = document.querySelector('.add-btn');
    addToDoBtn.style.pointerEvents = 'auto';
    addToDoBtn.style.backgroundColor = '';

    if(toDoArray.length == 0) {
        const emptyMsg = document.createElement('h3');
        emptyMsg.style.textAlign = 'center';
        emptyMsg.textContent = 'Empty here... :(';

        const emptyGuide = document.createElement('p');
        emptyGuide.style.textAlign = 'center';
        emptyGuide.textContent = 'Make a list to add a To-Do.';

        addToDoBtn.style.pointerEvents = 'none';
        addToDoBtn.style.backgroundColor = 'rgb(196, 196, 196)';

        mainToDoCtn.style.opacity = '0.3';
   
        mainToDoCtn.appendChild(emptyMsg);
        mainToDoCtn.appendChild(emptyGuide);
    };

    toDoArray.forEach( list => {
        list.toDos.forEach( td => {
            const toDoCtn = document.createElement('div');
            toDoCtn.classList.add('todo-ctn');
            mainToDoCtn.appendChild(toDoCtn);

            const todo = document.createElement('label');
            todo.classList.add('todo-item');
            todo.setAttribute('value', list.id);
            todo.textContent = td.title;

            if(td.done === true) {
                todo.style.textDecoration = 'line-through';
                toDoCtn.style.opacity = '0.3';
            };
            toDoCtn.appendChild(todo);

            if(list.id == todo.getAttribute('value')
               && list.active === true) {
                toDoCtn.style.display = 'flex';
            } else {
                return;
            };
            
            const todoInfoCtn = document.createElement('div');
            todoInfoCtn.classList.add('todo-info-ctn');
            toDoCtn.appendChild(todoInfoCtn);

            const date = document.createElement('label');
            date.textContent = td.dueDate;
            todoInfoCtn.appendChild(date);

            const priority = document.createElement('label');
            priority.classList.add('prio-indicator');
            if(td.priority === true) {
                priority.textContent = '!';
            };
            todoInfoCtn.appendChild(priority);

            const trashSvg = document.createElement('div');
            trashSvg.classList.add('trash-svg-todos');
            trashSvg.style.margin = '0em'

            todoInfoCtn.appendChild(trashSvg);
            
        });
    });
};

renderListContent();

export function renderActiveList(val, targetList, allLists) {
    const td = document.querySelectorAll('.todo-item');

    allLists.childNodes.forEach( list => {
        list.style.backgroundColor = '';
        list.childNodes[1].style.display = 'none';
    });

    targetList.style.backgroundColor = 'rgb(220, 220, 220)';
    targetList.childNodes[1].style.display = 'flex';
    
    td.forEach( i => {
        if(val === i.getAttribute('value')) {
            i.style.display = 'flex';
        } else {
            i.style.display = 'none';
        };
    });
};


