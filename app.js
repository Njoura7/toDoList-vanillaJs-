//* Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")

//* Event listener
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)

//*Function
function addTodo(event) {
    //Prevent from submitting
    event.preventDefault()
    //Todo DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //Create LI
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"> </i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //CHECK Trash BUTTON
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
    //CLEAR INPUT
    todoInput.value = ""
}
function deleteCheck(e) {
    const item = e.target
    //DELETE TODO item
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement
        // ANIMATION
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function () {
            todo.remove()
        })
    }
    //CHECK TODO item
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}
