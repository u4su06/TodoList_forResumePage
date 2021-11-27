// init
let list = document.querySelector('.list-section')
let todoList = document.querySelector('#my-todo')
let doneList = document.querySelector('#my-done')
const todos = ['Read a book', 'Organize office', 'Pay bills']
const dones = ['Hit the gym', 'Buy eggs']  // done item

// for (let todo of todos) {
//   addItem(todo, todoList)
// }

todos.forEach((todo) => {
  addItem(todo, todoList)
})

dones.forEach((done) => {
  addItem(done, doneList)
})

function addItem(text, whichList) {  //兩張 list 都能新增 item
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  if (whichList === doneList) {
    newItem.children[0].classList.add('checked')
  }
  whichList.appendChild(newItem)
}

// Create
const addBtn = document.querySelector('#addBtn')
const newTodo = document.querySelector('#newTodo')

addBtn.addEventListener('click', function (event) {
  let inputValue = newTodo.value
  checkInputValue(inputValue)  //用函式檢查 input
})

//監聽 Enter 鍵
newTodo.addEventListener('keypress', function (event) {
  let inputValue = newTodo.value
  if (event.target.matches('#newTodo') && event.key === "Enter") {
    checkInputValue(inputValue)  //用函式檢查 input
  }
})

// Delete and check
list.addEventListener('click', function (event) {

  let li = event.target.parentElement

  if (event.target.classList.contains('delete')) {  //刪除圖示
    li.remove()
    // console.log(listEmptyAlert.nextElementSibling)
  } else if (event.target.tagName === 'LABEL' && li.parentElement.matches('#my-todo')) {  //點選 todo 項目
    event.target.classList.add('checked')
    li.remove()
    doneList.appendChild(li)
  } else if (event.target.tagName === 'LABEL' && li.parentElement.matches('#my-done')) {  //點選 done 項目
    event.target.classList.remove('checked')
    li.remove()
    todoList.appendChild(li)
  }
})

function checkInputValue(inputValue) {  //檢查Input內容
  if (inputValue.trim() !== "") {
    addItem(inputValue, todoList)
    newTodo.value = "";  //重置 input
  } else {  //觸發 alert
    alert("請填寫欄位(add item)")
  }
}

