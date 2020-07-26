var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo");

    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute("class" , "dbtn")
    delBtn.setAttribute("onclick" , "deleteItem(this)")
    delBtn.appendChild(delText)


    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class" , "ebtn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick" , "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)


    todo.value = ""
    console.log(li)
}

function deleteItem(e){
    e.parentNode.remove()
    // console.log(e.parentNode)

}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val)

    e.parentNode.firstChild.nodeValue = editValue
    // console.log(e.parentNode.firstChild)
}

function delAll(){
    list.innerHTML = ""
}