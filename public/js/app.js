
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();



form.addEventListener('submit', (e) =>{

    const x = {
        name: n.value,
        email: email.value,
        password: password.value
    }

    e.preventDefault()
    fetch('/users', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(json => {
        console.log(JSON.stringify(json))
        if(!json){
            throw Error()
        }
         document.location.href = "/createTask/createTask.html"
    }).catch((e) =>{
        console.log(e)
    })
})