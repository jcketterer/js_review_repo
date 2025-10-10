const form = document.querySelector('#form')
const list = document.querySelector('#list')

//get todos from local storage and display on page
let saveTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < saveTodos.length; i++) {
    console.log(saveTodos[i])
    let newTodo = document.createElement('li')

    let newTodoBtn = document.createElement('button')
    newTodoBtn.innerText = 'Remove'

    let newTodoCheckbox = document.createElement('input')
    newTodoCheckbox.setAttribute('type','checkbox')

    newTodo.innerText = saveTodos[i].task
    newTodo.isCompleted = saveTodos[i].isCompleted ? true : false 

    if(newTodo.isCompleted) {
        newTodo.style.textDecoration = 'line-through'
    }
    list.append(newTodo)
    newTodo.append(newTodoCheckbox)
    newTodo.append(newTodoBtn)
}


form.addEventListener('submit', function(e) {
    e.preventDefault()
    let newTodo = document.createElement('li')
    let todoValue = document.getElementById('task').value
    newTodo.innerText = todoValue
    newTodo.isCompleted = false

    form.reset();

    list.append(newTodo);

    //get todos from page and store in local storage
    saveTodos.push({task: newTodo.innerText, isCompleted: false})
    localStorage.setItem('todos', JSON.stringify(saveTodos))

})

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
    }


    let isCheckedTodo = e.target.checked
    console.log(isCheckedTodo)

    if(isCheckedTodo) {
        e.target.parentElement.style.textDecoration = 'line-through'
        isCheckedTodo.isCompleted = true
    } else {
        e.target.parentElement.style.textDecoration = 'none'
        isCheckedTodo.isCompleted = false
    }

})




