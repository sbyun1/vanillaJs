const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "toDo";
let toDo = []; //array to save to-do as empty array

function saveTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}

    /*
    NOTES:
        localStorage cannot save arrays. it can only save text/String.
        -> convert toDo into String to save it first
           using JSON.stringify()

        -> Then later use JSON.parse() to convert back into object  
           
        JSON.stringify() :: change any JS object into a form of String 
        JSON.parse() :: change String into JS object
    */

function deleteToDo(event){
    const li = event.target.parentElement; //find <li> we want to delete
    li.remove(); //delete from HTML
    toDo = toDo.filter(toDo => toDo.id != li.id);
    //or use !=== parseInt(li.id) -> li.id is String
    saveTodo();
}
    /*
    NOTES:
        event.target :: HTML element that event happened 
            -> in this case, <button>
        
        event.target.parentElement :: finds the parentElement of an "event.target"
            -> we need to know the parentElement of event.target 
                because li > span, li > button
                need to find the <li> to delete the whole to-do elements
    */

function paintToDo(newTodo){ //create to-do list on window
   
        const li = document.createElement("li");
        li.id = newTodo.id; //set new to-do list id with the newTodo id

        const span = document.createElement("span"); 
        span.innerText = newTodo.text; //add newTodo to span
        
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

    const newTodoObj = { //save as obj so every value can have an unique ID
        text:newTodo,
        id:Date.now(),
    };
    toDo.push(newTodoObj); //add "newTodo" to the array "toDo"
    paintToDo(newTodoObj);
    saveTodo();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedTodo = localStorage.getItem(TODO_KEY);

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    parsedTodo.forEach(paintToDo); 
   //parsedTodo.forEach((items) => paintToDo(items)); :: arrow function
    toDo = parsedTodo;
}

/*
OVERALL FLOW:

    if new input value entered:
        1. create new elements <li> and <span> 
        2. add innerText newTodo to <span>
        3. create new element <button> for do to delete and bind click event
            -> addEventListener("click")
        4. appendChild <span> and <button> to <li>
            -> this is one To-Do with delete button
        5. append 4 into <ul> 
            -> the HTML space for to-do lists to show

    if localStorage is not null 
        showing the existing lists ::
        1. change stored String back to object using JSON.parse()
        2. execute paintTodo(object) for each items inside the array (Object)
            -> forEach()
        3. replace empty "toDo" array with the "parseTodo" array 
            -> value doesn't get replaced by new values

    Delete:
        we will not actually "delete" item from toDo array.
        will make a new array without the "deleted item" 
            -> using filter()
            if toDo.id is equal to s

NOTES:
    1. Date.now() :: gives millisecond 
        -> use this to give id to each to-do <li>

    2. filter() :: Returns the elements of an array that meet the condition specified in a callback function.
*/