window.onload = () => {
    createH1()
    createInputField()
    createButton()
    createList()
    addTaskFunctionality()
}

function createH1() {
    let body = document.querySelector("body")
    let h1 = document.createElement("h1")
    h1.textContent = "To-Do List"
    body.appendChild(h1)
}

function createInputField() {
    let body = document.querySelector("body")
    let input = document.createElement("input")
    input.type = "text"
    input.id = "todoInput"
    input.placeholder = "Add a new task..."
    body.appendChild(input)
}

function createButton() {
    let body = document.querySelector("body")
    let button = document.createElement("button")
    button.id = "addButton"
    button.textContent = "Add Task"
    body.appendChild(button)
}

function createList() {
    let body = document.querySelector("body")
    let ul = document.createElement("ul")
    ul.id = "todoList"
    ul.style.listStyleType = "none"
    ul.style.padding = "0"
    body.appendChild(ul)
}

function addTaskFunctionality() {
    let input = document.querySelector("#todoInput")
    let ul = document.querySelector("#todoList")
    let button = document.querySelector("#addButton")

    button.addEventListener("click", () => {
        let task = input.value.trim()
        let li = document.createElement("li")
        li.textContent = task

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Remove Task"
        deleteButton.addEventListener("click", () => {
            ul.removeChild(li)
            ul.removeChild(deleteButton)
        })

        ul.appendChild(li)
        ul.appendChild(deleteButton)
 
        input.value = ""

    })
}

