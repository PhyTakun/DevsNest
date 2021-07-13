let setTodo = document.getElementById("todo-container");

function getTodos(){
    let getTodo = localStorage.getItem("todos");
    setTodo.innerHTML = getTodo;
}

function addTodo(event){
    if(event.code === 'Enter'){
       let todo = document.getElementById("todo-input").value;
       if (todo){
       let listItem = `<li><span><i class= "bi bi-trash"></i></span>${todo}</li>`;
       let container = document.getElementById("todo-container");
       container.innerHTML+= listItem;
       document.getElementById("todo-input").value="";
    }

    else {
        alert("Enter something");
    }
    localStorage.setItem('todos',setTodo.innerHTML);
}
}



document.querySelector('ul').addEventListener('click',function(event){
    
    event.target.classList.toggle('mark');
    localStorage.setItem('todos',setTodo.innerHTML);
});

document.querySelector('ul').addEventListener('click',function(event){

    if(event.target.tagName === "I"){
        event.target.parentElement.parentElement.remove();
    }

    if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }

    localStorage.setItem('todos',setTodo.innerHTML);

});


