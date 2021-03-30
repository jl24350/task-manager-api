const description = document.querySelector('#description')
const form = document.querySelector('#form2')
const message = document.querySelector('#message')
const form1 = document.querySelector('#form1')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const message1 = document.querySelector('#message1')
const list = document.querySelector('#taskList')
const logout = document.querySelector('#logoutButton')
const createAccount = document.querySelector('#createAccountButton')
const deleteAccount = document.querySelector('#deleteButton')

let token;
let id;

form.style.visibility = "hidden"
logout.style.visibility = "hidden"
deleteAccount.style.visibility = "hidden"


logout.addEventListener('click', (e) => {
    e.preventDefault()
    location.reload()
})

createAccount.addEventListener('click',(e) => {
    e.preventDefault()
    document.location.href = "../index.html"
})

deleteAccount.addEventListener('click',(e) => {
    e.preventDefault()
    fetch('/users/me', {
        method: 'DELETE',
        body: 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json()).then(json => {
    }).catch((e) =>{
        console.log(e)
    })

})


form1.addEventListener('submit', (e) =>{

    e.preventDefault()

    const x = {
        email : email.value,
        password :  password.value
    }
    fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify(x),
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json()).then(json =>{
        form1.remove()
        token = json.token
        id = json.id
        form.style.visibility = "visible"
        logout.style.visibility = "visible"
        deleteAccount.style.visibility = "visible"
        populateList()
    })

})


form.addEventListener('submit', (e) =>{
    const x = {
        description : description.value
    }
    e.preventDefault()
    fetch('/tasks', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json()).then(json => {
        description.textContent = ''
        list.innerHTML = ''
       populateList()
    }).catch((e) =>{
        console.log(e)
    })
})

const populateList = () => {
    fetch('/tasks', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json()).then(json => {
        for(let i = 0; i < json.length; i++){
            var checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            checkBox.addEventListener('change', function() {
                if(this.checked){
                    deleteTask(this.parentElement)
                }
            })
            var task = document.createElement('p')
            task.textContent = json[i].description
            task.appendChild(checkBox)
            list.appendChild(task)
        }
    })
}

const deleteTask = (task) =>{
    setTimeout(function (){
        task.remove()
        fetch('/tasks',{
            method: 'DELETE',
            body: JSON.stringify({ description: task.textContent }),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json()).then(json => {
           
        })
    },1000)
}
