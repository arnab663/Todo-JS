

const inputBox = document.getElementById('task-input')
const taskList = document.getElementById('tasks')

const addTask = () => {
    if(inputBox.value == ""){
        alert('You have to write something...')
    }
    else{
        let li = document.createElement('li')
        li.classList.add('unchecked')
        li.innerHTML = inputBox.value 
        taskList.appendChild(li)
        let delOption = document.createElement('span')
        delOption.innerHTML = '\u00d7'
        li.appendChild(delOption)
    }
    inputBox.value = ""
    saveData()
}

const addBtn = document.getElementById('add')
addBtn.addEventListener('click',()=>addTask())

taskList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('data',taskList.innerHTML)
}

function showData(){
    taskList.innerHTML = localStorage.getItem('data')
}

showData()