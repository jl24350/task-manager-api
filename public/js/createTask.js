const description = document.querySelector('#description')
const form = document.querySelector('#form2')
const message = document.querySelector('#message')
const form1 = document.querySelector('#form1')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const message1 = document.querySelector('#message1')
const list = document.querySelector('ul')

let token;

form.style.visibility = "hidden"


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
        form.style.visibility = "visible"
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
    }).then(res => res.json())
    .then(json => {
       populateList()
    });
})

const populateList = () => {
    fetch('/tasks', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json()).then(json => {
        var li = document.createElement('li')
        li.textContent = JSON.stringify(json)
        list.appendChild(li)
    })
}