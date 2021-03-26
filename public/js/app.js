
const n = document.querySelector('#Name')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const form = document.querySelector('form')
const message = document.querySelector('#message')
const formData = new FormData();

formData.append('name', n.value)
formData.append('email', email.value)
formData.append('password', password.value)

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetch('https://jledesma-task-manager.herokuapp.com/users', {
        method: 'POST',
        body: formData
    }).then((response) =>{
        response.json().then((data) =>{
            message.textContent = data
        })
    })
})