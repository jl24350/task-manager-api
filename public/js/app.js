
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const signInForm = document.querySelector('#signInForm')
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
        if(JSON.stringify(json).includes('errors')){
            throw Error()
        }
         document.location.href = "/createTask/createTask.html"
    }).catch(() =>{
       let error = document.createElement('p')
       error.textContent = "Improper credentials, try again"
       signInForm.appendChild(error)
       setTimeout(function (){
           error.remove()
       },2000)
    })
})

signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    document.location.href = "/createTask/createTask.html"
})
