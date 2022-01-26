const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
                //document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement; //find <li> we want to delete
    li.remove();
   
    /*
    NOTES:
        event.target :: HTML element that event happened 
                        -> in this case, <button>
        
        event.target.parentElement :: finds the parentElement of an "event.target"
                                    -> we need to know the parentElement of event.target 
                                        because li > span, li > button
                                        need to find the <li> to delete the whole to-do elements
    */
}

function paintToDo(newTodo){ //create to-do list
    const li = document.createElement("li");
    
    const span = document.createElement("span"); 
    span.innerText = newTodo; //add newTodo to span
    
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span); // append element inside li tag
    li.appendChild(btn);

    toDoList.appendChild(li); //add li to toDoList (ul tag)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; //press enter -> empty the value

    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit)